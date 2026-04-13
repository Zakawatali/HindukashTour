# Deployment Guide - Hindukash Trek and Tour

Your website is production-ready! Follow this guide to deploy to the world.

## 🚀 Deploy to Vercel (Recommended)

### Why Vercel?
- Next.js built by Vercel (optimized)
- Auto-deploys on GitHub push
- Global CDN for fast speeds
- Free SSL certificate
- Free tier available
- Custom domains
- Automatic image optimization

### Step-by-Step

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/hindukash-trek
   git branch -M main
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with GitHub
   - Click "Add New Project"
   - Select your repository
   - Click "Import"

3. **Configure**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Build Command: `pnpm build` (default)
   - Output Directory: .next (default)
   - Environment Variables: (none needed for now)
   - Click "Deploy"

4. **Custom Domain** (Optional)
   - In Vercel dashboard: Settings → Domains
   - Add your domain
   - Follow DNS instructions
   - Wait 24 hours for DNS to propagate

5. **Done!** 🎉
   - Your site is live!
   - Auto-deploys on every GitHub push
   - SSL certificate auto-renewed

## 📦 Deploy to Other Platforms

### Netlify

1. **Connect GitHub**
   - Go to netlify.com
   - Click "New site from Git"
   - Select GitHub provider
   - Authorize and select repository

2. **Configure Build**
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Click "Deploy site"

3. **Add Custom Domain**
   - Site settings → Custom domain
   - Add your domain
   - Follow nameserver instructions

### Railway

1. **Connect Repository**
   - Go to railway.app
   - Click "New Project"
   - Select "GitHub Repo"
   - Authorize and select your repo

2. **Configure**
   - Framework: Next.js
   - Railway auto-detects and configures
   - Click "Deploy"

3. **Add Domain**
   - Settings → Custom Domain
   - Add your domain

### Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   heroku create hindukash-trek
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

4. **View Live**
   ```bash
   heroku open
   ```

### AWS Amplify

1. **Connect GitHub**
   - Go to console.aws.amazon.com
   - AWS Amplify → New App
   - Connect GitHub
   - Select repository

2. **Configure Build**
   - Build settings (auto-detected)
   - Environment variables (optional)
   - Click "Save and deploy"

3. **Add Custom Domain**
   - Hosting → Domain management
   - Add custom domain

### Google Cloud Run

1. **Create Dockerfile** (if needed)
   - Google Cloud auto-detects Next.js

2. **Deploy**
   ```bash
   gcloud run deploy hindukash-trek \
     --source . \
     --platform managed \
     --region us-central1
   ```

## 🔧 Pre-Deployment Checklist

### Content Updates
- [ ] Company name updated
- [ ] Phone number verified
- [ ] Email address correct
- [ ] Office address updated
- [ ] Tour prices finalized
- [ ] Tour images uploaded
- [ ] Destination descriptions complete
- [ ] Testimonials verified

### Technical Checks
- [ ] No console errors
- [ ] Links all working
- [ ] Forms functional
- [ ] Mobile responsive
- [ ] Images loading
- [ ] Navigation working
- [ ] Contact info correct

### SEO Setup
- [ ] Google Search Console ready
- [ ] Google Analytics ID ready
- [ ] Business name & address finalized
- [ ] Social media profiles linked
- [ ] Google Business profile updated

### Performance
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] Load time < 3 seconds
- [ ] Mobile speed good

## 🎯 Post-Deployment Setup

### 1. Google Search Console
```
1. Go to search.google.com/search-console
2. Add your domain
3. Verify ownership (add DNS record or HTML file)
4. Submit sitemap at: sitemap.xml
5. Monitor crawl errors
```

### 2. Google Analytics
```
1. Go to analytics.google.com
2. Create new property for your domain
3. Get tracking ID
4. Add to your site (optional - can add later)
```

### 3. Google Business Profile
```
1. Go to business.google.com
2. Create business listing
3. Add: name, phone, address, hours
4. Add photos and tours
5. Verify business
```

### 4. Bing Webmaster Tools
```
1. Go to bing.com/webmasters
2. Add your domain
3. Verify (can auto-verify with Google Search Console)
4. Submit sitemap
```

### 5. Social Media
```
- Add website link to bio
- Create business accounts
- Share initial posts
- Link to Google Business profile
```

## 📈 Monitoring & Maintenance

### Weekly
- [ ] Check for 404 errors in Search Console
- [ ] Monitor page views in Analytics
- [ ] Check email submissions
- [ ] Review contact form inquiries

### Monthly
- [ ] Check Search Console for new keywords
- [ ] Review top performing pages
- [ ] Check mobile usability
- [ ] Monitor Core Web Vitals
- [ ] Review bounce rates

### Quarterly
- [ ] Audit all links
- [ ] Update tour information
- [ ] Refresh testimonials
- [ ] Check competitor sites
- [ ] Plan content updates

## 🔐 Security Best Practices

### Already Implemented
- ✅ HTTPS/SSL (auto on Vercel)
- ✅ Content Security Policy ready
- ✅ XSS protection
- ✅ Input validation
- ✅ Safe dependencies

### Recommended Actions
1. Enable HSTS headers
2. Set up security monitoring
3. Regular backups of code
4. Monitor dependencies for updates
5. Review access logs

## 🚨 Troubleshooting Deployment

### Issue: Build Fails
**Solution:**
```bash
# Clear cache
rm -rf .next node_modules pnpm-lock.yaml

# Reinstall and rebuild
pnpm install
pnpm build

# If still failing, check:
# - Node.js version (need 18+)
# - All imports are correct
# - No TypeScript errors
```

### Issue: Site Shows Old Content
**Solution:**
```bash
# Clear CDN cache
1. In Vercel: Settings → Deployments → Redeploy
2. Or push new commit to GitHub
3. In Netlify: Trigger manual deploy
```

### Issue: 404 Errors After Deploy
**Solution:**
- Check file paths don't use uppercase
- Verify images are in `/public` folder
- Check routes match file structure
- Restart deployment

### Issue: Domain Not Working
**Solution:**
```
1. Verify DNS records are correct
2. Wait 24-48 hours for propagation
3. Check domain registrar settings
4. Use DNS checker tool online
5. Contact hosting support
```

### Issue: Contact Form Not Working
**Solution:**
- Contact form is demo (logs to console)
- To enable real emails:
  1. Create API endpoint
  2. Integrate SendGrid/Mailgun
  3. Update form handler
  4. Test thoroughly

## 📊 Performance Optimization

After deployment, optimize further:

### Images
- Use WebP format
- Optimize dimensions
- Enable lazy loading
- Use CDN

### Code
- Enable code splitting
- Minimize bundle size
- Use dynamic imports
- Remove unused CSS

### Database (Future)
- Use caching
- Index database queries
- Optimize SQL queries
- Use connection pooling

### Monitoring
- Set up uptime monitoring
- Enable error tracking
- Monitor Core Web Vitals
- Track conversion rates

## 💾 Backup & Recovery

### Code Backups
```bash
# GitHub automatically backs up your code
# Always have local clone:
git clone https://github.com/YOUR-USERNAME/hindukash-trek
```

### Image Backups
```bash
# Keep originals in separate folder
# Use git to version control
# Store offsite (Google Drive, Dropbox)
```

### Database Backups (Future)
```bash
# When you add database:
# Enable auto-backups
# Test restore procedures
# Keep offsite copies
```

## 🎉 Launch Announcement

Once live, announce to:
- [ ] Email list (if any)
- [ ] Social media
- [ ] Google Business
- [ ] Tourism directories
- [ ] Travel forums
- [ ] Local media
- [ ] Tourism boards

## 📞 Support Resources

### Documentation
- README.md - Complete guide
- QUICKSTART.md - Quick start
- IMPLEMENTATION.md - Technical details

### Vercel Docs
- nextjs.org/learn
- vercel.com/docs

### Problem Solving
- Stack Overflow (tag: nextjs)
- GitHub Issues
- Vercel Support (paid)

## ✅ Success Indicators

After deployment, you'll know it's working when:
- ✅ Site loads in < 3 seconds
- ✅ Mobile looks perfect
- ✅ All images display
- ✅ Forms work
- ✅ Navigation works
- ✅ Contact info correct
- ✅ Google can crawl it
- ✅ Analytics tracking

---

## 🚀 You're Ready!

Your site is production-ready. Choose your platform and deploy!

**Recommended:** Vercel (fastest setup, best performance)

**Timeline:**
- Setup: 5 minutes
- Configuration: 5 minutes
- Deployment: 5 minutes
- DNS propagation: 24-48 hours

**Total:** ~30 minutes + DNS wait

---

**Questions?** See the other documentation files or check your platform's docs.

Happy deploying! 🎉
