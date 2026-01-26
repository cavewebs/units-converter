import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Units Converter | Fast, Free and Easy Unit Conversions",
  description:
    "Convert between different units of measurement including weight, length, temperature, volume, area, and more. Fast, free and easy to use.",
  keywords:
    "unit converter, units converter, conversion calculator, measurement converter, weight converter, length converter, temperature converter",
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

