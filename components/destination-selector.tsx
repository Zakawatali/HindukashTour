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
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-2">
        Select Destination
      </label>
      <Select value={selectedCity} onValueChange={handleCityChange}>
        <SelectTrigger className="w-full bg-white border-2 border-primary hover:border-primary/80">
          <SelectValue placeholder="Choose a destination..." />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(citiesByRegion).map(([region, regionCities]) => (
            <SelectGroup key={region}>
              <SelectLabel className="font-semibold text-primary">{region}</SelectLabel>
              {regionCities.map((city) => (
                <SelectItem key={city.id} value={city.id}>
                  <div className="flex flex-col">
                    <span className="font-medium">{city.name}</span>
                    <span className="text-xs text-muted-foreground">{city.description}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      
      {selectedCity && (
        <div className="mt-3 p-3 bg-secondary rounded-lg">
          <p className="text-sm text-muted-foreground">
            Selected: <span className="font-semibold text-foreground">
              {cities.find(c => c.id === selectedCity)?.name}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
