"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { getAllCategories } from "@/lib/conversion-data"

export default function CategoryList() {
  const allCategories = getAllCategories()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = allCategories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categoryIcons: Record<string, string> = {
    weight: "⚖️",
    length: "📏",
    temperature: "🌡️",
    volume: "🥛",
    area: "🔲",
    speed: "🚗",
    time: "⏱️",
    digital: "💾",
    pressure: "🔄",
    energy: "⚡",
    power: "💪",
    angle: "📐",
    frequency: "🔊",
    fuel: "⛽",
    currency: "💰",
    data: "📊",
    scientific: "🔬",
    math: "🧮",
  }

  return (
    <div>
      <div className="relative max-w-md mb-6">
        <Input
          type="text"
          placeholder="Search categories..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCategories.map((category) => (
          <Link key={category.slug} href={`/convert/${category.slug}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-primary">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <span className="text-3xl mb-2">{categoryIcons[category.slug] || "🔄"}</span>
                <h3 className="font-medium text-primary">{category.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{category.units.length} units</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No categories found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}

// Helper function to get a subset of categories for the footer
export function getFooterCategories() {
  return getAllCategories().slice(0, 8)
}

