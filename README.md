# OwnerClone Landing Site

Professional marketing website for OwnerClone restaurant management software. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- Git installed on your machine

### Installation

1. **Clone or download this project to your local machine**

2. **Navigate to the project directory**
   ```bash
   cd ownerclone-landing
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the site running locally.

## Project Structure

```
ownerclone-landing/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── page.tsx           # Homepage
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer component
├── public/                # Static assets (images, icons)
├── package.json           # Project dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Pages Included

### ✅ Currently Built (Session 1)
- **Homepage (/)** - Hero section, problem/solution, features overview, pricing teaser, CTAs
- **Features (/features)** - Detailed breakdown of all 8 modules with benefits
- **Pricing (/pricing)** - Transparent pricing model, ROI calculator, comparison table, FAQ

### 🔜 Coming in Future Sessions
- About page (/about) - Founder story and mission
- Contact page (/contact) - Lead capture form
- Privacy Policy (/privacy) - Legal compliance
- Blog section - SEO content and thought leadership
- Interactive calculators - Food cost, labor cost, ROI calculators

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like "ownerclone-landing"

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - OwnerClone landing site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ownerclone-landing.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure everything
   - Click "Deploy"

4. **Custom Domain Setup**
   - Once deployed, go to Project Settings > Domains
   - Add "ownerclone.com"
   - Follow Vercel's instructions to update your DNS settings at your domain registrar
   - Add these DNS records:
     - Type: A, Name: @, Value: 76.76.21.21
     - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Customization Guide

### Changing Text Content
All page content is in the respective page files:
- Homepage: `app/page.tsx`
- Features: `app/features/page.tsx`
- Pricing: `app/pricing/page.tsx`

Simply edit the text within the JSX components to update the content.

### Changing Colors
The color scheme is defined in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },  // Main brand color (currently blue)
  accent: { ... }    // Accent color (currently orange)
}
```

### Adding Your Logo
1. Add your logo image to the `public/` folder
2. Update `components/Navigation.tsx` to use your logo image instead of text

### Updating Contact Information
Search for placeholder phone numbers and email addresses throughout the files and replace with your actual contact information.

## SEO Features

- Server-side rendering (SSR) and static site generation (SSG)
- Optimized meta tags on every page
- Open Graph tags for social media sharing
- Semantic HTML structure
- Fast load times with Next.js optimization
- Mobile-responsive design
- Proper heading hierarchy (H1, H2, H3)

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS purging with Tailwind
- Fast page transitions
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint for code quality
```

## Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Styling not loading
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## Next Steps After Deployment

1. **Test on mobile devices** - Ensure responsive design works correctly
2. **Set up Google Analytics** - Add tracking code to measure traffic
3. **Submit sitemap to Google** - Help with SEO indexing
4. **Test contact forms** - Ensure lead capture works
5. **Set up email notifications** - Get alerts for new inquiries
6. **Add SSL certificate** - Vercel provides this automatically
7. **Test page speed** - Use Google PageSpeed Insights

## Support

For questions or issues with this codebase, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## License

Proprietary - OwnerClone © 2026
