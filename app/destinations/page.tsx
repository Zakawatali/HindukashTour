import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DestinationCard } from '@/components/destination-card'
import { destinations } from '@/lib/tours-data'

export const metadata: Metadata = {
  title: 'Destinations | Hindukash Trek and Tour',
  description: 'Explore iconic mountain destinations in northern Pakistan including Hunza Valley, Hindu Kush peaks, and remote regions.',
  openGraph: {
    title: 'Destinations | Hindukash Trek and Tour',
    description: 'Explore iconic mountain destinations in northern Pakistan.',
  },
}

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-secondary border-b border-border py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
              Iconic Destinations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover the most breathtaking regions of northern Pakistan, each with its own unique character and adventures
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        </section>

        {/* Destination Features */}
        <section className="bg-secondary py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground text-center">
              Why These Destinations?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Untouched Wilderness</h3>
                <p>
                  Each destination offers pristine natural beauty with minimal tourism infrastructure, ensuring authentic experiences away from crowds.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cultural Heritage</h3>
                <p>
                  Meet local communities, learn their traditions, and experience the warm hospitality that defines mountain life in Pakistan.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Adventure Variety</h3>
                <p>
                  From beginner-friendly valley walks to challenging high-altitude expeditions, each destination caters to different skill levels and interests.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Photography Paradise</h3>
                <p>
                  Spectacular landscapes, dramatic peaks, and golden hour light make these destinations perfect for photography enthusiasts of all levels.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
