# Quick Start Guide - Hindukash Trek and Tour

## 🚀 Get Running in 3 Minutes

### Step 1: Install & Run
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Most Common Customizations

### 1. Change Company Name
**File:** `app/layout.tsx`
```typescript
title: 'Your Company | Adventure Tours',
description: 'Your company description...',
```

**File:** `components/header.tsx`
```typescript
<span className="font-serif text-xl font-bold">Your Company</span>
```

**File:** `components/footer.tsx`
```typescript
<h3 className="font-serif text-lg font-bold mb-4">Your Company</h3>
```

### 2. Change Colors
**File:** `app/globals.css`
```css
:root {
  --primary: oklch(0.35 0.08 140);        /* Change this - forest green */
  --secondary: oklch(0.92 0.02 70);       /* Change this - warm cream */
  --accent: oklch(0.58 0.03 70);          /* Change this - mountain gray */
}
```

Color Reference:
- Green: `oklch(0.35 0.08 140)`
- Blue: `oklch(0.5 0.15 240)`
- Red: `oklch(0.5 0.15 25)`
- Orange: `oklch(0.6 0.2 45)`

### 3. Add a Tour
**File:** `lib/tours-data.ts`
```typescript
{
  id: 'new-tour',
  title: 'Your Tour Title',
  shortDescription: 'Short description for cards',
  description: 'Full description for detail page',
  image: '/tours/your-image.jpg',
  duration: '5 Days',
  difficulty: 'Moderate', // Easy, Moderate, Challenging
  maxAltitude: '3,500m',
  season: ['June', 'July', 'August'],
  price: 999,
  rating: 4.8,
  reviews: 42,
  itinerary: [
    { day: 1, title: 'Day 1', description: 'First day details' },
    { day: 2, title: 'Day 2', description: 'Second day details' },
    // ... add all days
  ]
}
```

### 4. Update Contact Info
**File:** `app/layout.tsx`
```typescript
// Update phone, email
```

**File:** `components/footer.tsx`
```typescript
<span>+92-YOUR-NUMBER</span>
<span>your-email@company.com</span>
<span>Your Location, Region</span>
```

**File:** `app/contact/page.tsx`
```typescript
// Update phone, email, location
```

### 5. Add Images
1. Add image files to `/public/tours/`, `/public/destinations/`, etc.
2. Reference in code: `/tours/image.jpg`
3. Next.js automatically optimizes them

## 🎯 Page Structure

```
Home            → Featured tours, destinations, testimonials
Tours           → List all tours → Click to see details
Tour Details    → Full itinerary, pricing, book button
Destinations    → 4 regions with highlights
About           → Mission, values, team info
Contact         → Contact form, FAQ, contact info
```

## 🔍 SEO Ready

The site is already optimized for Google:
- ✅ Unique titles and descriptions
- ✅ Schema.org structured data
- ✅ Sitemap and robots.txt
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Internal links

No additional SEO setup needed!

## 🛠️ Development

### Project Structure
- `/app` - Pages and routes
- `/components` - Reusable UI components
- `/lib` - Data and utilities
- `/public` - Images and static files
- `app/globals.css` - Styles and design tokens

### Key Files
- **Add tours:** `lib/tours-data.ts`
- **Change colors:** `app/globals.css`
- **Update company:** `app/layout.tsx`
- **Edit content:** Individual page files in `/app`

### Styling
- Uses **Tailwind CSS** for styling
- Design tokens in `app/globals.css`
- Components use shadcn/ui

## 📦 Build & Deploy

### Build for Production
```bash
pnpm build
pnpm start
```

### Deploy to Vercel
1. Push code to GitHub
2. Connect repo to Vercel at vercel.com
3. Vercel auto-detects Next.js
4. Click Deploy - Done!

### Deploy to Other Services
- **Netlify:** Connect GitHub, select Next.js
- **Railway:** Create project, connect GitHub
- **Heroku:** Use buildpack for Next.js

## 🆘 Common Issues

### Problem: Images not showing
**Solution:** Check image paths start with `/` (relative to public folder)

### Problem: Styling looks broken
**Solution:** Run `rm -rf .next && pnpm install`

### Problem: Contact form not working
**Solution:** It's currently a demo form. To enable emails:
1. Get API key from SendGrid or Mailgun
2. Create API route in `/app/api/contact/route.ts`
3. Send form data to your API

### Problem: Build fails
**Solution:** 
```bash
rm -rf node_modules .next
pnpm install
pnpm build
```

## 📚 Next Steps

1. **Customize** - Change company name, colors, tours
2. **Add images** - Replace placeholder images with real ones
3. **Update contact** - Add your real phone and email
4. **Deploy** - Push to Vercel or your hosting
5. **Monitor** - Add Google Analytics
6. **Enhance** - Add booking system, blog, etc.

## 🎨 Design System

### Colors
- Primary (Green): Used for buttons, links, highlights
- Secondary (Cream): Used for backgrounds, sections
- Accent (Gray): Used for text, borders, subtle elements

### Typography
- Headings: Playfair Display (serif, elegant)
- Body: Inter (sans-serif, modern)

### Spacing
- Uses Tailwind scale: p-4, gap-8, mb-6, etc.
- 1 unit = 0.25rem (4px)

## 📖 Learn More

- [Next.js Docs](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Docs](https://react.dev)

## 💡 Tips

1. **Edit tours easily** - All data in one file (`lib/tours-data.ts`)
2. **Change colors quickly** - Edit `app/globals.css` `:root`
3. **Add pages fast** - Copy `/app/about/page.tsx` and modify
4. **Test mobile** - Use Chrome DevTools device toolbar
5. **Check SEO** - Use Google Search Console

---

**Happy building! 🏔️**

Questions? Check the full docs in `README.md` and `IMPLEMENTATION.md`
