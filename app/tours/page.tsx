import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { tours } from '@/lib/tours-data'

export const metadata: Metadata = {
  title: 'Mountain Trekking Tours | Hindukash Trek and Tour',
  description: 'Browse our comprehensive collection of trekking expeditions in the Hindu Kush mountains. From easy to challenging adventures.',
  openGraph: {
    title: 'Mountain Trekking Tours | Hindukash Trek and Tour',
    description: 'Browse our comprehensive collection of trekking expeditions in the Hindu Kush mountains.',
  },
}

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-secondary border-b border-border py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our Expeditions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Carefully curated mountain adventures ranging from accessible hiking to challenging high-altitude expeditions
            </p>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-secondary py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold mb-4 text-foreground">Tour Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Each expedition is led by experienced mountain guides with years of experience in the Hindu Kush and surrounding regions. We provide comprehensive support including accommodation, meals, and all necessary equipment for your safety and comfort.
              </p>
              <p>
                Tours can be customized to match your fitness level and preferences. Whether you're a seasoned mountaineer or a first-time trekker, we have options for everyone.
              </p>
              <p>
                All tours include pre-expedition briefings, medical support, and emergency evacuation procedures. Your safety is our highest priority.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
