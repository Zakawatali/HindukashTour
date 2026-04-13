import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Hindukash Trek and Tour',
  description: 'Get in touch with us to plan your mountain adventure. Phone, email, or contact form. We respond within 24 hours.',
  openGraph: {
    title: 'Contact Us | Hindukash Trek and Tour',
    description: 'Get in touch with us to plan your mountain adventure.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
