import { MetadataRoute } from 'next'
import { tours } from '@/lib/tours-data'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hindustrekandtour.com'
  // Use a fixed date string so the build doesn't consider it dynamic
  const lastModified = new Date().toISOString().split('T')[0]; 

  const tourRoutes = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.id}`,
    lastModified: lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...tourRoutes,
  ]
}