"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  scrolled?: boolean
}

export function NavLink({ href, children, scrolled = false }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors block md:inline-block ${
        scrolled ? "text-gray-700 hover:text-[#4169E1]" : "text-white hover:text-[#4169E1]"
      } ${isActive ? "text-[#4169E1] font-bold" : ""} py-2 md:py-0 transition-all duration-300 hover:scale-105`}
    >
      {children}
    </Link>
  )
}

