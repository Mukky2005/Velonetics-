'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  scrolled?: boolean
}

export function SearchBar({ scrolled = false }: SearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative flex items-center">
      {isExpanded ? (
        <div className="flex items-center gap-2 bg-white rounded-full shadow-sm">
          <Input
            type="search"
            placeholder="Search..."
            className="w-[150px] md:w-[200px] focus:outline-none border-none rounded-l-full text-sm"
            autoFocus
            onBlur={() => setIsExpanded(false)}
          />
          <div className="bg-white p-2 rounded-full">
            <Search className="h-4 w-4 text-gray-700" />
          </div>
        </div>
      ) : (
        <div className={`relative w-8 h-8 ${scrolled ? 'bg-white' : 'bg-transparent'} rounded-full transition-all duration-300`}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16"
              cy="16"
              r="15"
              stroke="#4169E1"
              strokeWidth="2"
              className={`transition-opacity duration-300 ${
                scrolled ? 'opacity-100 search-circle-animation' : 'opacity-0'
              }`}
            />
          </svg>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsExpanded(true)}
            className={`absolute inset-0 flex items-center justify-center ${scrolled ? 'text-gray-700' : 'text-white'} p-0`}
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

