export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hindukash Trek and Tour',
    description: 'Professional mountain trekking and adventure tourism company in northern Pakistan',
    url: 'https://hindustrekandtour.com',
    telephone: '+92-1234-567890',
    email: 'info@hindustrek.pk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gilgit',
      addressLocality: 'Gilgit',
      addressRegion: 'Gilgit-Baltistan',
      postalCode: '',
      addressCountry: 'PK'
    },
    areaServed: [
      'Gilgit-Baltistan',
      'Khyber Pakhtunkhwa',
      'Northern Pakistan'
    ],
    priceRange: '$$',
    image: 'https://hindustrekandtour.com/logo.png',
    sameAs: [
      'https://www.facebook.com/hindustrek',
      'https://www.instagram.com/hindustrek'
    ],
    ratingValue: 4.8,
    reviewCount: 156
  }

  const tourOperatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Hindukash Trek and Tour',
    url: 'https://hindustrekandtour.com',
    description: 'Expert-led mountain trekking expeditions and adventure tours in Hindu Kush mountains',
    telephone: '+92-1234-567890',
    priceRange: '$$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mountain Trekking Tours',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Rakaposhi Base Camp Trek',
          url: 'https://hindustrekandtour.com/tours/rakaposhi-base-camp',
          price: '1299',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          name: 'Hunza Valley & Fairy Meadows',
          url: 'https://hindustrekandtour.com/tours/hunza-fairy-meadows',
          price: '1099',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          name: 'Siri Paye Alpine Trek',
          url: 'https://hindustrekandtour.com/tours/siri-paye-trek',
          price: '599',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          name: 'Brogil Pass Adventure',
          url: 'https://hindustrekandtour.com/tours/brogil-pass-trek',
          price: '1599',
          priceCurrency: 'USD'
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourOperatorSchema) }}
      />
    </>
  )
}
