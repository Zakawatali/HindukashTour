import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destinations | Hindukash Trek and Tour',
  description: 'Explore iconic mountain destinations in northern Pakistan including Hunza Valley, Hindu Kush peaks, Chitral region, and remote wilderness areas.',
  openGraph: {
    title: 'Destinations | Hindukash Trek and Tour',
    description: 'Explore iconic mountain destinations in northern Pakistan.',
  },
}

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
