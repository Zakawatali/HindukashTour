import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Hindukash Trek and Tour',
  description: 'Learn about our mission, values, and commitment to providing exceptional mountain trekking experiences in the Hindu Kush with sustainable and responsible tourism practices.',
  openGraph: {
    title: 'About Us | Hindukash Trek and Tour',
    description: 'Learn about our mission and commitment to mountain adventure tourism.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
