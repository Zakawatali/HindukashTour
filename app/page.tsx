'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, Mountain, Users, Award } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSlider } from '@/components/hero-slider'
import { TourCard } from '@/components/tour-card'
import { DestinationCard } from '@/components/destination-card'

import { Button } from '@/components/ui/button'
import { tours, destinations, testimonials, heroSlides, cities } from '@/lib/tours-data'

export default function Home() {
  const searchParams = useSearchParams()
  const selectedCityId = searchParams.get('city')
  
  let displayTours = tours.slice(0, 3)
  let pageTitle = 'Featured Expeditions'
  let pageDescription = 'Handpicked adventures for unforgettable mountain experiences'
  
  if (selectedCityId) {
    const selectedCity = cities.find(c => c.id === selectedCityId)
    displayTours = tours.filter(tour => tour.city === selectedCityId)
    pageTitle = `Tours in ${selectedCity?.name}`
    pageDescription = `All available tours and trekking expeditions in ${selectedCity?.name}`
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Slider Section */}
      <HeroSlider slides={heroSlides} />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Hindukash Trek
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mountain className="text-primary-foreground" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Expert Guides</h3>
              <p className="text-muted-foreground">
                Experienced mountain guides with deep knowledge of local terrain and culture
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Small Groups</h3>
              <p className="text-muted-foreground">
                Intimate group sizes for personalized attention and authentic experiences
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-foreground" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Safety First</h3>
              <p className="text-muted-foreground">
                Comprehensive safety protocols and emergency medical support on all expeditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-2">
                {pageTitle}
              </h2>
              <p className="text-muted-foreground">
                {pageDescription}
              </p>
            </div>
            {!selectedCityId && (
              <Button asChild variant="outline" className="hidden md:flex">
                <Link href="/tours">
                  View All Tours
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          
          {displayTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                No tours available in this destination yet.
              </p>
              <Button asChild variant="outline">
                <Link href="/">View All Tours</Link>
              </Button>
            </div>
          )}
          
          <div className="mt-8 flex md:hidden">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/tours">View All Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Explore Iconic Destinations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From the legendary Hunza Valley to remote high-altitude passes, discover the hidden gems of northern Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-foreground">
            Traveler Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with us today to plan your custom expedition to the Hindu Kush
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
