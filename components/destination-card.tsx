import Image from 'next/image'
import Link from 'next/link'
import { Destination } from '@/lib/tours-data'
import { Button } from '@/components/ui/button'

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-72 overflow-hidden bg-muted">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-5">
        <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wide">
          {destination.region}
        </div>
        
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {destination.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {destination.description}
        </p>
        
        <div className="mb-5">
          <p className="text-xs font-semibold text-muted-foreground mb-2">Highlights:</p>
          <ul className="flex flex-wrap gap-1">
            {destination.highlights.slice(0, 3).map((highlight, idx) => (
              <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                {highlight}
              </span>
            ))}
          </ul>
        </div>
        
        <Button asChild variant="outline" className="w-full group/btn">
          <Link href={`/destinations/${destination.id}`}>
            Explore More
            <span className="ml-2 group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
