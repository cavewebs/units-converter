import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ChevronRight, Info } from "lucide-react"
import ConversionForm from "@/components/conversion-form"
import AdBanner from "@/components/ad-banner"
import { getCategory, getUnit, getAllCategories, getConversionInfo, convert } from "@/lib/conversion-data"
import { formatNumber } from "@/lib/number-utils"

export async function generateMetadata({
  params,
}: {
  params: { category: string; conversion: string }
}): Promise<Metadata> {
  const resolvedParams = await params
  const category = getCategory(resolvedParams.category)
  if (!category) return { title: "Not Found" }

  const [fromUnitId, toUnitId] = resolvedParams.conversion.split("-to-")
  const fromUnit = getUnit(category, fromUnitId)
  const toUnit = getUnit(category, toUnitId)

  if (!fromUnit || !toUnit) return { title: "Not Found" }

  return {
    title: `Convert ${fromUnit.name} to ${toUnit.name} (${fromUnit.symbol || fromUnitId} to ${toUnit.symbol || toUnitId}) - Instant Calculator`,
    description: `Free online ${fromUnit.name} to ${toUnit.name} converter. Quickly convert ${category.name.toLowerCase()} units with our accurate calculator. Formula, examples, and conversion table included.`,
    alternates: {
      canonical: `https://unitsconverter.xyz/convert/${category.slug}/${fromUnit.id}-to-${toUnit.id}`,
    },
    openGraph: {
      title: `Convert ${fromUnit.name} to ${toUnit.name} | ${category.name} Converter`,
      description: `Instantly convert ${fromUnit.name} to ${toUnit.name}. Free, accurate, and easy to use.`,
      url: `https://unitsconverter.xyz/convert/${category.slug}/${fromUnit.id}-to-${toUnit.id}`,
      type: "website",
    },
  }
}

// Add this function to pre-render the most common conversions
export async function generateStaticParams() {
  const categories = getAllCategories()
  const params = []

  for (const category of categories) {
    // For each category, generate params for the most common conversions
    if (category.units.length >= 2) {
      // Generate the most common unit combinations (limit to avoid too many pages)
      for (let i = 0; i < Math.min(5, category.units.length); i++) {
        for (let j = 0; j < Math.min(5, category.units.length); j++) {
          if (i !== j) {
            params.push({
              category: category.slug,
              conversion: `${category.units[i].id}-to-${category.units[j].id}`,
            })
          }
        }
      }
    }
  }

  return params
}

export default async function ConversionPage({
  params,
}: {
  params: Promise<{ category: string; conversion: string }>
}) {
  const resolvedParams = await params
  const category = getCategory(resolvedParams.category)
  if (!category) notFound()

  const [fromUnitId, toUnitId] = resolvedParams.conversion.split("-to-")
  const fromUnit = getUnit(category, fromUnitId)
  const toUnit = getUnit(category, toUnitId)

  if (!fromUnit || !toUnit) notFound()

  // Get conversion information
  const conversionInfo = getConversionInfo(fromUnit, toUnit)
  
  // Calculate example value safely
  const exampleValue = 10;
  const exampleResult = convert(exampleValue, fromUnit, toUnit);
  const formattedExample = formatNumber(exampleResult);

  // Generate 5-10 common conversion points for the table
  const tableValues = [1, 5, 10, 25, 50, 100, 500, 1000];

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${fromUnit.name} to ${toUnit.name} Converter`,
    "description": `Convert ${fromUnit.name} to ${toUnit.name} instantly.`,
    "url": `https://unitsconverter.xyz/convert/${category.slug}/${fromUnit.id}-to-${toUnit.id}`,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": `How to convert ${fromUnit.name} to ${toUnit.name}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": conversionInfo?.explanation || `To convert ${fromUnit.name} to ${toUnit.name}, you can use our free calculator or applying the conversion ratio.`
      }
    }, {
      "@type": "Question",
      "name": `What is 1 ${fromUnit.name} in ${toUnit.name}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `1 ${fromUnit.name} is approximately equal to ${formatNumber(convert(1, fromUnit, toUnit))} ${toUnit.name}.`
      }
    }]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqLd]) }}
      />
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Convert {fromUnit.name} to {toUnit.name}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Free and accurate {category.name.toLowerCase()} calculator ({fromUnit.symbol || fromUnit.id} to {toUnit.symbol || toUnit.id})
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap overflow-x-auto">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" />
          <Link href={`/convert/${category.slug}`} className="hover:text-primary">
            {category.name}
          </Link>
          <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" />
          <span className="text-foreground font-medium">
            {fromUnit.name} to {toUnit.name}
          </span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <AdBanner className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                {fromUnit.name} to {toUnit.name} Converter
              </h2>
              <ConversionForm category={category} initialFromUnit={fromUnit.id} initialToUnit={toUnit.id} />
            </div>

            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                How to Convert {fromUnit.name} to {toUnit.name}
              </h2>

              {conversionInfo ? (
                <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg mb-6">
                  <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Formula:</p>
                    <div className="bg-background border p-4 rounded-md my-3 font-mono text-center text-sm md:text-base">
                      {conversionInfo.formula}
                    </div>
                    <p className="text-muted-foreground">{conversionInfo.explanation}</p>
                  </div>
                </div>
              ) : (
                <p className="mb-4 text-muted-foreground">
                  Use the calculator above to convert between {fromUnit.name} and {toUnit.name}.
                </p>
              )}

              <h3 className="text-xl font-bold mb-3 text-primary">Example Calculation</h3>
              <p className="text-muted-foreground mb-4">
                Let's convert {exampleValue} {fromUnit.name} to {toUnit.name}:
              </p>
              <div className="bg-muted p-4 rounded-md mb-6 font-mono text-center text-lg">
                {exampleValue} {fromUnit.symbol} ≈ {formattedExample} {toUnit.symbol}
              </div>

              {/* Conversion Table */}
              <h3 className="text-xl font-bold mb-4 text-primary mt-8">{fromUnit.name} to {toUnit.name} Conversion Table</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-medium">{fromUnit.name} ({fromUnit.symbol})</th>
                      <th className="px-4 py-3 font-medium">{toUnit.name} ({toUnit.symbol})</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {tableValues.map(val => (
                      <tr key={val} className="hover:bg-muted/50">
                        <td className="px-4 py-3">{val}</td>
                        <td className="px-4 py-3 font-mono">{formatNumber(convert(val, fromUnit, toUnit))}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {(fromUnit.about || toUnit.about) && (
                <div className="border-t border-border pt-6 mt-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Additional Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-accent/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-primary">
                        About {fromUnit.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {fromUnit.about ||
                          `The ${fromUnit.name} is a unit of ${category.name.toLowerCase()} used in various contexts.`}
                      </p>
                    </div>
                    <div className="bg-accent/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-primary">
                        About {toUnit.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {toUnit.about ||
                          `The ${toUnit.name} is a unit of ${category.name.toLowerCase()} used in various contexts.`}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-primary">Related Conversions</h2>
              <ul className="space-y-2 text-sm">
                {category.units
                  .filter((unit) => unit.id !== fromUnit.id && unit.id !== toUnit.id)
                  .slice(0, 10)
                  .map((unit) => (
                    <li key={unit.id}>
                      <Link
                        href={`/convert/${category.slug}/${fromUnit.id}-to-${unit.id}`}
                        className="text-primary hover:underline flex items-center justify-between group"
                      >
                        <span>{fromUnit.name} to {unit.name}</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <AdBanner />

            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-primary">Popular Categories</h2>
              <div className="flex flex-wrap gap-2">
                {getAllCategories()
                  .slice(0, 8)
                  .map((cat) => (
                    <Link 
                      key={cat.slug}
                      href={`/convert/${cat.slug}`} 
                      className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-full transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <AdBanner className="mt-8" />
      </main>

      <footer className="bg-primary text-primary-foreground py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Unit Converter</h3>
              <p className="text-primary-foreground/80 max-w-sm">
                Fast, free and easy unit conversions for {category.name.toLowerCase()} and much more. 
                Optimized for mobile and desktop use.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Conversions</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/convert/length" className="hover:text-white">Length</Link></li>
                <li><Link href="/convert/weight" className="hover:text-white">Weight</Link></li>
                <li><Link href="/convert/temperature" className="hover:text-white">Temperature</Link></li>
                <li><Link href="/convert/speed" className="hover:text-white">Speed</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Unit Converter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


