'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cities } from '@/lib/tours-data'

interface DestinationSelectorProps {
  onSelectCity?: (cityId: string) => void
}

export function DestinationSelector({ onSelectCity }: DestinationSelectorProps) {
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleCityChange = (cityId: string) => {
    console.log('[v0] City selected:', cityId)
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
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-3">
        Select Destination
      </label>
      <div className="relative w-full" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border-2 border-primary hover:border-primary/80 rounded-md px-4 py-2 text-left flex items-center justify-between cursor-pointer transition-colors"
        >
          <span className={selectedCity ? 'text-foreground font-medium' : 'text-muted-foreground'}>
            {selectedCityName || 'Choose a destination...'}
          </span>
          <ChevronDown 
            size={20} 
            className={`text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-primary rounded-md shadow-lg z-50">
            <div className="max-h-80 overflow-y-auto">
              {Object.entries(citiesByRegion).map(([region, regionCities]) => (
                <div key={region}>
                  <div className="px-4 py-2 bg-primary/10 sticky top-0 font-semibold text-primary text-sm">
                    {region}
                  </div>
                  {regionCities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => handleCityChange(city.id)}
                      className="w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors border-b border-border last:border-b-0"
                    >
                      <div className="font-medium text-foreground">{city.name}</div>
                      <div className="text-xs text-muted-foreground">{city.description}</div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {selectedCity && (
        <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm">
            Selected: <span className="font-semibold text-primary">
              {selectedCityName}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
