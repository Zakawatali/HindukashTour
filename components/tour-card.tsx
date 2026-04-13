import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, TrendingUp } from 'lucide-react'
import { Tour } from '@/lib/tours-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface TourCardProps {
  tour: Tour
}

export function TourCard({ tour }: TourCardProps) {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Moderate: 'bg-yellow-100 text-yellow-800',
    Challenging: 'bg-red-100 text-red-800'
  }

  return (
    <Link href={`/tours/${tour.id}`}>
      <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] h-full flex flex-col">
        <div className="relative w-full h-64 overflow-hidden bg-muted">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3">
            <Badge className={difficultyColors[tour.difficulty]}>
              {tour.difficulty}
            </Badge>
          </div>
        </div>
        
        <div className="flex flex-col flex-grow p-4">
          <h3 className="font-serif text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {tour.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {tour.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp size={14} />
              <span>{tour.maxAltitude}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(tour.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({tour.reviews})
            </span>
          </div>
          
          <div className="flex items-center justify-between mt-auto">
            <div>
              <span className="text-2xl font-bold text-primary">${tour.price}</span>
              <span className="text-xs text-muted-foreground ml-1">per person</span>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
