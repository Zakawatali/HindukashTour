'use client'

import { useState } from 'react'
import { cities } from '@/lib/tours-data'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DestinationSelectorProps {
  onSelectCity?: (cityId: string) => void
}

export function DestinationSelector({ onSelectCity }: DestinationSelectorProps) {
  const [selectedCity, setSelectedCity] = useState<string>('')

  const handleCityChange = (cityId: string) => {
    setSelectedCity(cityId)
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

  return (
    <div className="w-full relative z-50">
      <label className="block text-sm font-medium text-foreground mb-3">
        Select Destination
      </label>
      <div className="relative">
        <Select value={selectedCity} onValueChange={handleCityChange}>
          <SelectTrigger className="w-full bg-white border-2 border-primary hover:border-primary/80 cursor-pointer">
            <SelectValue placeholder="Choose a destination..." />
          </SelectTrigger>
          <SelectContent className="w-full z-50">
            {Object.entries(citiesByRegion).map(([region, regionCities]) => (
              <SelectGroup key={region}>
                <SelectLabel className="font-semibold text-primary">{region}</SelectLabel>
                {regionCities.map((city) => (
                  <SelectItem key={city.id} value={city.id} className="cursor-pointer">
                    <span className="font-medium">{city.name}</span>
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {selectedCity && (
        <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm">
            Selected: <span className="font-semibold text-primary">
              {cities.find(c => c.id === selectedCity)?.name}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
