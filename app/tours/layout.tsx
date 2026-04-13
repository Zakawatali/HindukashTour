import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mountain Trekking Tours | Hindukash Trek and Tour',
  description: 'Browse our comprehensive collection of trekking expeditions in the Hindu Kush mountains. From easy to challenging adventures suitable for all experience levels.',
  openGraph: {
    title: 'Mountain Trekking Tours | Hindukash Trek and Tour',
    description: 'Browse our comprehensive collection of trekking expeditions.',
  },
}

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
