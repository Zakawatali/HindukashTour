import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
})
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

export const viewport: Viewport = {
  themeColor: '#1a472a',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Hindukash Trek and Tour | Adventure Tours in Northern Pakistan',
  description: 'Explore breathtaking trekking expeditions and adventure tours in the Hindu Kush mountains. Expert guides, customized itineraries, and unforgettable experiences in Pakistan.',
  keywords: ['trekking', 'tours', 'Hindu Kush', 'Pakistan', 'adventure', 'hiking', 'mountaineering'],
  authors: [{ name: 'Hindukash Trek and Tour' }],
  creator: 'Hindukash Trek and Tour',
  publisher: 'Hindukash Trek and Tour',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hindustrekandtour.com',
    siteName: 'Hindukash Trek and Tour',
    title: 'Hindukash Trek and Tour | Adventure Tours in Northern Pakistan',
    description: 'Explore breathtaking trekking expeditions and adventure tours in the Hindu Kush mountains.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hindukash Trek and Tour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hindukash Trek and Tour',
    description: 'Adventure tours in the Hindu Kush mountains',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
