import type { MetadataRoute } from "next"
import { getAllCategories } from "@/lib/conversion-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unitsconverter.xyz"
  const categories = getAllCategories()

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Add category pages
  for (const category of categories) {
    routes.push({
      url: `${baseUrl}/convert/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })

    // Add ALL possible conversion combinations for better crawling
    if (category.units.length >= 2) {
      // Generate all possible unit combinations for this category
      for (let i = 0; i < category.units.length; i++) {
        for (let j = 0; j < category.units.length; j++) {
          if (i !== j) {
            routes.push({
              url: `${baseUrl}/convert/${category.slug}/${category.units[i].id}-to-${category.units[j].id}`,
              lastModified: new Date(),
              changeFrequency: "monthly" as const,
              priority: 0.7,
            })
          }
        }
      }
    }
  }

  return routes
}

