import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./animations.css"
import { ScrollingHeader } from "@/components/scrolling-header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Velonetics",
  description: "Comprehensive cybersecurity solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ScrollToTop />
        <ScrollingHeader />
        <main className="pt-16">{children}</main>
        <ScrollToTopButton />
      </body>
    </html>
  )
}

