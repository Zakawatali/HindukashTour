'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cities } from '@/lib/tours-data'

interface DestinationDropdownProps {
  onSelectCity?: (cityId: string) => void
}

export function DestinationDropdown({ onSelectCity }: DestinationDropdownProps) {
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleCityChange = (cityId: string) => {
    setSelectedCity(cityId)
    setIsOpen(false)
    onSelectCity?.(cityId)
  }

  // Group cities by region
  const citiesByRegion = cities.reduce((acc, city) => {
    if (!acc[city.region]) {
      acc[city.region] = []
    }
    acc[city.region].push(city)
    return acc
  }, {} as Record<string, typeof cities>)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedCityName = cities.find(c => c.id === selectedCity)?.name

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary/10 transition-colors whitespace-nowrap"
      >
        <span className="hidden sm:inline">
          {selectedCityName ? `📍 ${selectedCityName}` : 'Destination'}
        </span>
        <span className="sm:hidden">Destination</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border-2 border-primary rounded-md shadow-lg z-50">
          <div className="max-h-96 overflow-y-auto">
            {Object.entries(citiesByRegion).map(([region, regionCities]) => (
              <div key={region}>
                <div className="px-3 py-2 bg-primary/10 sticky top-0 font-semibold text-primary text-xs uppercase">
                  {region}
                </div>
                {regionCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCityChange(city.id)}
                    className="w-full text-left px-3 py-2 hover:bg-primary/10 transition-colors border-b border-border/50 last:border-b-0 text-sm"
                  >
                    <div className="font-medium text-foreground">{city.name}</div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
