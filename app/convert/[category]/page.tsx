import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"
import ConversionForm from "@/components/conversion-form"
import AdBanner from "@/components/ad-banner"
import { getCategory, getAllCategories } from "@/lib/conversion-data"

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}): Promise<Metadata> {
  const resolvedParams = await params
  const category = getCategory(resolvedParams.category)

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested conversion category could not be found.",
    }
  }

  return {
    title: `${category.name} Converter | Units Converter`,
    description: `Convert between different ${category.name.toLowerCase()} units including ${category.units
      .slice(0, 3)
      .map((u) => u.name)
      .join(", ")} and more.`,
    openGraph: {
      title: `${category.name} Converter | Units Converter`,
      description: `Convert between different ${category.name.toLowerCase()} units including ${category.units
        .slice(0, 3)
        .map((u) => u.name)
        .join(", ")} and more.`,
    },
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const resolvedParams = await params
  const category = getCategory(resolvedParams.category)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">{category.name} Converter</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Convert between {category.name.toLowerCase()} units quickly and easily
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-foreground">{category.name}</span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <AdBanner className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.name} Conversion</h2>
              <ConversionForm category={category} />
            </div>

            <div className="mt-8 bg-card rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">About {category.name} Conversions</h2>
              <div className="text-muted-foreground mb-6 space-y-4">
                {category.detailedDescription ? (
                  <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: category.detailedDescription.replace(/\n/g, "<br />") }}
                  />
                ) : (
                  <p>
                    {category.description ||
                      `${category.name} is a fundamental measurement used across various fields. Our converter allows you to easily convert between different ${category.name.toLowerCase()} units with high precision.`}
                  </p>
                )}
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Common {category.name} Conversions</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {category.units.slice(0, 8).map((fromUnit, i) =>
                  category.units
                    .slice(0, 8)
                    .filter((u) => u.id !== fromUnit.id)
                    .slice(0, 2)
                    .map((toUnit) => (
                      <li key={`${fromUnit.id}-${toUnit.id}`}>
                        <Link
                          href={`/convert/${category.slug}/${fromUnit.id}-to-${toUnit.id}`}
                          className="text-primary hover:underline"
                        >
                          {fromUnit.name} to {toUnit.name}
                        </Link>
                      </li>
                    )),
                )}
              </ul>
            </div>

            {/* Only render this section if we have unit information */}
            {category.units.some((unit) => unit.about) && (
              <div className="mt-8 bg-card rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">{category.name} Units Explained</h2>
                <div className="space-y-6">
                  {category.units.slice(0, 6).map((unit) => (
                    <div key={unit.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium text-lg">
                        {unit.name} {unit.symbol && <span className="text-muted-foreground">({unit.symbol})</span>}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {unit.about || `The ${unit.name.toLowerCase()} is a unit of ${category.name.toLowerCase()}.`}
                      </p>
                    </div>
                  ))}
                  {category.units.length > 6 && (
                    <div className="text-center mt-4">
                      <p className="text-sm text-muted-foreground">
                        Showing 6 of {category.units.length} units. View all units in the sidebar.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-primary">All {category.name} Units</h2>
              <ul className="space-y-2">
                {category.units.map((unit) => (
                  <li key={unit.id}>
                    <span className="text-foreground">{unit.name}</span>
                    {unit.symbol && <span className="text-muted-foreground ml-2">({unit.symbol})</span>}
                  </li>
                ))}
              </ul>
            </div>

            <AdBanner className="mt-8" />

            <div className="mt-8 bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-primary">Other Categories</h2>
              <ul className="space-y-2">
                {getAllCategories()
                  .filter((c) => c.slug !== category.slug)
                  .slice(0, 5)
                  .map((cat) => (
                    <li key={cat.slug}>
                      <Link href={`/convert/${cat.slug}`} className="text-primary hover:underline">
                        {cat.name} Converter
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <AdBanner className="mt-8" />
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Units Converter</h3>
              <p>Fast, free and easy unit conversions for any measurement.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/convert/weight" className="hover:underline">
                    Weight Conversions
                  </Link>
                </li>
                <li>
                  <Link href="/convert/length" className="hover:underline">
                    Length Conversions
                  </Link>
                </li>
                <li>
                  <Link href="/convert/temperature" className="hover:underline">
                    Temperature Conversions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p>&copy; {new Date().getFullYear()} Units Converter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

