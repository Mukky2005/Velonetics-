'use client'

import { useEffect, useRef } from 'react'

export function LogoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  const logos = [
    { name: "NASA", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Australian Government", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Tamil Nadu Government", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Inflectra", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Aadhaar", logo: "/placeholder.svg?height=80&width=160" },
    { name: "ACT", logo: "/placeholder.svg?height=80&width=160" },
    { name: "IRCTC", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Income Tax Department", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Lenovo", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Chennai Metro Rail", logo: "/placeholder.svg?height=80&width=160" }
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scroll = () => {
      if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }

    const timer = setInterval(scroll, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-primary mb-4">Our Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">We Helped Secure</h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

        <div 
          ref={containerRef}
          className="flex overflow-x-hidden gap-16 py-8"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                className="relative w-32 h-32 object-contain transform transition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

