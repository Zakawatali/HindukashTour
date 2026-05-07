'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { Button } from '@/components/ui/button'
import { tours } from '@/lib/tours-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TOURS_PER_PAGE = 8

export default function ToursPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = useMemo(() => Math.ceil(tours.length / TOURS_PER_PAGE), [])

  const paginatedTours = useMemo(() => {
    const startIndex = (currentPage - 1) * TOURS_PER_PAGE
    const endIndex = startIndex + TOURS_PER_PAGE
    return tours.slice(startIndex, endIndex)
  }, [currentPage])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
            <p className="text-sm text-muted-foreground mt-4">
              Showing {(currentPage - 1) * TOURS_PER_PAGE + 1} to {Math.min(currentPage * TOURS_PER_PAGE, tours.length)} of {tours.length} tours
            </p>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {paginatedTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-16 flex flex-col items-center gap-6">
              {/* Page Numbers */}
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    className={`w-10 h-10 rounded-md font-medium transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-foreground'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
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
