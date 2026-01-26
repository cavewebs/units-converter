"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRightLeft } from "lucide-react"
import { convert } from "@/lib/conversion-data"
import { formatNumber, numberToWords } from "@/lib/number-utils"
import { Card, CardContent } from "@/components/ui/card"

export default function ConversionForm({
  category,
  initialFromUnit,
  initialToUnit,
}: {
  category: any
  initialFromUnit?: string
  initialToUnit?: string
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [fromUnit, setFromUnit] = useState(initialFromUnit || category.units[0].id)
  const [toUnit, setToUnit] = useState(initialToUnit || category.units[1].id)
  const [inputValue, setInputValue] = useState("1")
  const [result, setResult] = useState("")
  const [writtenResult, setWrittenResult] = useState("")

  // Update URL when units change
  useEffect(() => {
    if (pathname?.includes(`/${category.slug}/`)) {
      const newPath = `/convert/${category.slug}/${fromUnit}-to-${toUnit}`
      if (pathname !== newPath) {
        router.push(newPath)
      }
    }
  }, [fromUnit, toUnit, category.slug, pathname, router])

  // Calculate conversion when input or units change
  useEffect(() => {
    const numValue = Number.parseFloat(inputValue)
    if (!isNaN(numValue)) {
      const fromUnitObj = category.units.find((u: any) => u.id === fromUnit)
      const toUnitObj = category.units.find((u: any) => u.id === toUnit)

      if (fromUnitObj && toUnitObj) {
        const convertedValue = convert(numValue, fromUnitObj, toUnitObj)

        setResult(formatNumber(convertedValue))
        setWrittenResult(numberToWords(convertedValue))
      }
    } else {
      setResult("")
      setWrittenResult("")
    }
  }, [inputValue, fromUnit, toUnit, category])

  // Swap the from and to units
  const handleSwap = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
        <div className="space-y-2">
          <label htmlFor="from-value" className="block text-sm font-medium text-muted-foreground">
            From
          </label>
          <div className="space-y-2">
            <Input
              id="from-value"
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full"
            />
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {category.units.map((unit: any) => (
                  <SelectItem key={unit.id} value={unit.id}>
                    {unit.name} {unit.symbol ? `(${unit.symbol})` : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mt-6" onClick={handleSwap}>
          <ArrowRightLeft className="h-4 w-4" />
          <span className="sr-only">Swap units</span>
        </Button>

        <div className="space-y-2">
          <label htmlFor="to-value" className="block text-sm font-medium text-muted-foreground">
            To
          </label>
          <div className="space-y-2">
            <Input id="to-value" type="text" value={result} readOnly className="w-full bg-muted" />
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {category.units.map((unit: any) => (
                  <SelectItem key={unit.id} value={unit.id}>
                    {unit.name} {unit.symbol ? `(${unit.symbol})` : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <p className="text-lg text-muted-foreground">
              <span className="font-medium text-foreground">{inputValue}</span> {getUnitName(category, fromUnit)} =
            </p>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-primary break-words">
                {result} {getUnitName(category, toUnit)}
              </p>
              {writtenResult && (
                <p className="text-sm text-muted-foreground capitalize break-words px-4">
                  {writtenResult} {getUnitName(category, toUnit).toLowerCase()}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Helper function to get unit name
function getUnitName(category: any, unitId: string) {
  const unit = category.units.find((u: any) => u.id === unitId)
  return unit ? unit.symbol || unit.name : unitId
}



