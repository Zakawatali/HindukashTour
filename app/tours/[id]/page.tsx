import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, TrendingUp, Calendar, Users, AlertCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { tours } from '@/lib/tours-data'
import { notFound } from 'next/navigation'

interface TourDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const tour = tours.find(t => t.id === id)
  
  if (!tour) {
    return { title: 'Tour Not Found' }
  }

  return {
    title: `${tour.title} | Hindukash Trek and Tour`,
    description: tour.description,
    openGraph: {
      title: tour.title,
      description: tour.description,
      images: [tour.image],
    },
  }
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id,
  }))
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { id } = await params
  const tour = tours.find(t => t.id === id)
  
  if (!tour) {
    notFound()
  }

  const difficultyColors = {
    Easy: { bg: 'bg-green-100', text: 'text-green-800' },
    Moderate: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    Challenging: { bg: 'bg-red-100', text: 'text-red-800' }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Image */}
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                {tour.title}
              </h1>
              <p className="text-white/80 text-lg max-w-2xl">
                {tour.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tour Details */}
        <section className="py-12 px-4 bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Duration</p>
              <p className="font-serif text-xl font-bold text-foreground flex items-center gap-2">
                <Clock size={20} className="text-primary" />
                {tour.duration}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Difficulty</p>
              <div className={`px-3 py-1 rounded w-fit font-semibold ${difficultyColors[tour.difficulty].bg} ${difficultyColors[tour.difficulty].text}`}>
                {tour.difficulty}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Max Altitude</p>
              <p className="font-serif text-xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                {tour.maxAltitude}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Best Season</p>
              <p className="font-semibold text-foreground">{tour.season.join(', ')}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Itinerary */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Itinerary
                </h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-6 pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {day.day}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-foreground">
                          {day.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {day.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-secondary rounded-lg p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  What's Included
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Professional guide with mountain experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>All meals during the trek</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accommodation and camping equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>First aid and emergency support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>All necessary permits and permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Pre and post-trek briefings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < Math.floor(tour.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {tour.rating} ({tour.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                  <p className="font-serif text-4xl font-bold text-primary">
                    ${tour.price}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">per person</p>
                </div>

                {/* Quick Info */}
                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>Multiple dates available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} />
                    <span>Small group sizes</span>
                  </div>
                </div>

                {/* Important Note */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex gap-2">
                    <AlertCircle size={16} className="text-yellow-700 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-700">
                      Physical fitness required. Pre-expedition fitness assessment recommended.
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <Button asChild className="w-full bg-primary hover:bg-primary/90 mb-3">
                  <Link href="/contact?tour={tour.id}">Book Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Request Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
