import Link from "next/link"
import Image from "next/image"
import { SearchBar } from "./search-bar"

export function SiteHeader() {
  return (
    <header className="w-full border-b bg-background px-10">
      <div className="border-t">
        <div className="container flex h-16 items-center">
          <div className="flex w-full justify-between items-center gap-6">
            <Link href="/" className="flex items-center">
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#F0FFFF]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview(1)(2)-Y8kpuKGyqrHK3JliSJg0m966zSLzKZ.png"
                  alt="Velonetics Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/solutions" className="text-sm font-medium hover:text-primary">
                Solutions
              </Link>
              <Link href="/partners" className="text-sm font-medium hover:text-primary">
                Partners
              </Link>
              <Link href="/contact-us" className="text-sm font-medium hover:text-primary">
                Contact Us
              </Link>
            </nav>

            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  )
}

