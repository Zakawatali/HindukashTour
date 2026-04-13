# Hindukash Trek and Tour

A premium tourism website for mountain trekking expeditions in the Hindu Kush mountains of northern Pakistan.

## Features

### 🏔️ Core Pages
- **Home**: Hero section with featured tours, destinations, testimonials, and CTA
- **Tours**: Browse all trekking expeditions with filtering by difficulty
- **Tour Details**: Detailed itinerary, pricing, ratings, and booking information
- **Destinations**: Showcase of iconic mountain regions
- **About**: Company mission, values, and team information
- **Contact**: Contact form, FAQ, and direct contact information

### 🎨 Design System
- **Color Palette**: Forest green (primary), warm cream (secondary), mountain gray (accent)
- **Typography**: Playfair Display (headings), Inter (body text)
- **Responsive**: Mobile-first design with full mobile support
- **Accessibility**: Semantic HTML, ARIA labels, proper heading hierarchy

### 📊 SEO Optimization
- **Metadata**: Comprehensive title, description, and Open Graph tags
- **Structured Data**: Schema.org JSON-LD for Organization and TravelAgency
- **Sitemap**: Dynamic sitemap generation for all tours and pages
- **Robots.txt**: Proper crawling directives
- **Mobile Friendly**: Responsive design ensures mobile SEO
- **Performance**: Optimized images and code splitting

### 🎯 Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Multi-column footer with links and contact info
- **TourCard**: Reusable card component for displaying tours
- **DestinationCard**: Card component for destination showcase
- **StructuredData**: JSON-LD schema implementation

### 💾 Data Management
- Mock tour data with full itineraries and pricing
- Destination information with regional highlights
- Testimonials with ratings
- All data centralized in `/lib/tours-data.ts`

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Design tokens and styles
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── not-found.tsx           # 404 page
│   ├── tours/
│   │   ├── page.tsx            # Tours listing
│   │   └── [id]/
│   │       └── page.tsx        # Tour detail page
│   ├── destinations/
│   │   └── page.tsx            # Destinations listing
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       ├── layout.tsx          # Contact page layout with metadata
│       └── page.tsx            # Contact page with form
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer
│   ├── tour-card.tsx           # Tour card component
│   ├── destination-card.tsx    # Destination card component
│   └── structured-data.tsx     # Schema.org JSON-LD
├── lib/
│   └── tours-data.ts           # Mock data for tours and destinations
└── public/
    ├── robots.txt              # SEO robots directives
    ├── hero-mountain.jpg       # Hero section image
    ├── tours/                  # Tour images
    │   ├── rakaposhi.jpg
    │   ├── hunza.jpg
    │   ├── siri-paye.jpg
    │   └── brogil.jpg
    └── destinations/           # Destination images
        ├── hunza.jpg
        ├── chitral.jpg
        ├── gilgit.jpg
        └── hindukush.jpg
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone or extract the project
2. Install dependencies:
```bash
pnpm install
```

3. Run development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Company Information
Edit `lib/tours-data.ts` to update:
- Tour details and pricing
- Destination information
- Testimonials

Edit `app/layout.tsx` to update:
- Company metadata
- Contact information
- Social media links

### Modify Colors
Edit `app/globals.css` to update:
- Primary color (forest green)
- Secondary color (warm cream)
- Accent color (mountain gray)
- All tokens in `:root` and `.dark`

### Add New Tours
Add to the `tours` array in `lib/tours-data.ts`:
```typescript
{
  id: 'unique-id',
  title: 'Tour Name',
  description: '...',
  // ... other fields
}
```

## SEO Features

✅ **Meta Tags**: Title, description, keywords, author, publisher  
✅ **Open Graph**: Social media sharing optimization  
✅ **Twitter Card**: Twitter-specific sharing  
✅ **Structured Data**: Schema.org JSON-LD markup  
✅ **Sitemap**: Automatic sitemap generation  
✅ **Robots.txt**: Crawling optimization  
✅ **Responsive Design**: Mobile-first approach  
✅ **Performance**: Optimized images and code  
✅ **Canonical URLs**: Proper URL structure  
✅ **Internal Linking**: Navigation and contextual links  

## Performance Optimization

- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Page-based code splitting with Next.js
- **CSS**: Tailwind CSS with purging of unused styles
- **Fonts**: Google Fonts with subsetting
- **Static Generation**: Pre-rendered pages with ISR

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Next.js
4. Environment variables automatically configured
5. Deploy!

### Deploy to Other Platforms

Works with any platform supporting Node.js 18+:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud

## Support & Customization

To customize this website further:

1. **Add Authentication**: Integrate with Auth.js for user accounts
2. **Add Database**: Connect Supabase, Neon, or other databases
3. **Add Payments**: Integrate Stripe for online booking
4. **Add CMS**: Connect Sanity, Contentful, or other CMS
5. **Add Analytics**: Add Google Analytics or Plausible
6. **Add Email**: Set up email notifications via SendGrid or Mailgun

## License

Created with v0 by Vercel
