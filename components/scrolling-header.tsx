"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { SearchBar } from "./search-bar"
import { NavLink } from "./nav-link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import "../app/animations.css"

export function ScrollingHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-black"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          <NavLink href="/" scrolled={scrolled}>
            <div className="relative flex items-center justify-center w-14 h-14">
              <svg className="absolute w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="27" fill="#F0FFFF" />
                <circle
                  cx="28"
                  cy="28"
                  r="27"
                  stroke="#4169E1"
                  strokeWidth="2"
                  className={`transition-opacity duration-300 ${
                    scrolled ? "opacity-100 circle-animation" : "opacity-0"
                  }`}
                />
              </svg>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview(1)(2)-Y8kpuKGyqrHK3JliSJg0m966zSLzKZ.png"
                alt="Velonetics Logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain relative z-10"
                priority
              />
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" scrolled={scrolled}>
              Home
            </NavLink>
            <NavLink href="/zero-cost-program" scrolled={scrolled}>
              Zero Cost Program
            </NavLink>
            <NavLink href="/solutions" scrolled={scrolled}>
              Solutions
            </NavLink>
            <NavLink href="/partners" scrolled={scrolled}>
              Partners
            </NavLink>
            <NavLink href="/contact-us" scrolled={scrolled}>
              Contact Us
            </NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <SearchBar scrolled={scrolled} />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={scrolled ? "text-gray-700" : "text-white"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 ${scrolled ? "bg-white" : "bg-black"}`}>
          <NavLink href="/" scrolled={scrolled}>
            Home
          </NavLink>
          <NavLink href="/zero-cost-program" scrolled={scrolled}>
            Zero Cost Program
          </NavLink>
          <NavLink href="/solutions" scrolled={scrolled}>
            Solutions
          </NavLink>
          <NavLink href="/partners" scrolled={scrolled}>
            Partners
          </NavLink>
          <NavLink href="/contact-us" scrolled={scrolled}>
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  )
}

