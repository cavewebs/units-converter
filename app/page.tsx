import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import PopularConversions from "@/components/popular-conversions"
import CategoryList from "@/components/category-list"
import AdBanner from "@/components/ad-banner"
import { getAllCategories } from "@/lib/category"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Unit Converter</h1>
            <p className="text-lg md:text-xl max-w-2xl">Fast, free and easy unit conversions for any measurement</p>
            <div className="relative w-full max-w-md mt-4">
              <Input
                type="text"
                placeholder="Search for a conversion..."
                className="pl-10 pr-4 py-2 w-full bg-primary-foreground text-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <AdBanner className="mb-8" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Popular Conversions</h2>
          <PopularConversions />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">All Conversion Categories</h2>
          <CategoryList />
        </section>

        <AdBanner className="mt-8" />
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Unit Converter</h3>
              <p>Fast, free and easy unit conversions for any measurement.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2 grid grid-cols-2 gap-x-4">
                {getAllCategories()
                  .slice(0, 8)
                  .map((category) => (
                    <li key={category.slug}>
                      <Link href={`/convert/${category.slug}`} className="hover:underline">
                        {category.name}
                      </Link>
                    </li>
                  ))}
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
            <p>&copy; {new Date().getFullYear()} Unit Converter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

