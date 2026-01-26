import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function PopularConversions() {
  // Get popular conversions from all categories
  const popularConversions = [
    {
      category: "weight",
      from: "kilogram",
      to: "pound",
      label: "Kilograms to Pounds",
      icon: "⚖️",
    },
    {
      category: "length",
      from: "meter",
      to: "foot",
      label: "Meters to Feet",
      icon: "📏",
    },
    {
      category: "temperature",
      from: "celsius",
      to: "fahrenheit",
      label: "Celsius to Fahrenheit",
      icon: "🌡️",
    },
    {
      category: "volume",
      from: "liter",
      to: "gallon",
      label: "Liters to Gallons",
      icon: "🥛",
    },
    {
      category: "area",
      from: "square-meter",
      to: "square-foot",
      label: "Square Meters to Square Feet",
      icon: "🔲",
    },
    {
      category: "speed",
      from: "kilometer-per-hour",
      to: "mile-per-hour",
      label: "KM/H to MPH",
      icon: "🚗",
    },
    {
      category: "time",
      from: "hour",
      to: "minute",
      label: "Hours to Minutes",
      icon: "⏱️",
    },
    {
      category: "digital",
      from: "megabyte",
      to: "gigabyte",
      label: "MB to GB",
      icon: "💾",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {popularConversions.map((conversion, index) => (
        <Link key={index} href={`/convert/${conversion.category}/${conversion.from}-to-${conversion.to}`}>
          <Card className="h-full transition-all hover:shadow-md hover:border-primary">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">{conversion.icon}</span>
              <h3 className="font-medium text-primary">{conversion.label}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

