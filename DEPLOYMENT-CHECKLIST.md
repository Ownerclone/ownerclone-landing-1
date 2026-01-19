# OwnerClone Landing Site - Deployment Checklist

Use this checklist to deploy your OwnerClone landing site to production. Follow each step in order.

## Pre-Deployment Checklist

### Local Testing
- [ ] Site runs locally without errors (`npm run dev`)
- [ ] All pages load correctly
  - [ ] Homepage (/)
  - [ ] Features (/features)
  - [ ] Pricing (/pricing)
- [ ] Navigation works between all pages
- [ ] Mobile responsive design looks good
  - [ ] Test on iPhone/Android simulator
  - [ ] Test actual mobile device if available
- [ ] All links work (no 404 errors)
- [ ] Contact information is correct
  - [ ] Phone numbers
  - [ ] Email addresses
  - [ ] Social media links

### Content Review
- [ ] Reviewed all text for typos
- [ ] Pricing is accurate ($0.20 per customer)
- [ ] Features descriptions are complete
- [ ] Call-to-action buttons are clear
- [ ] Images have proper alt text (accessibility)
- [ ] Meta descriptions are compelling

### Technical Checks
- [ ] Build succeeds without errors (`npm run build`)
- [ ] No console errors in browser
- [ ] SEO meta tags are present on all pages
- [ ] Favicon is in place (optional for MVP)
- [ ] robots.txt is configured (if needed)

## GitHub Setup

### Create Repository
- [ ] Go to github.com and sign in
- [ ] Click "New repository" button
- [ ] Name it "ownerclone-landing"
- [ ] Keep it Private (or Public if you prefer)
- [ ] DO NOT initialize with README (we already have one)
- [ ] Click "Create repository"

### Push Code to GitHub
- [ ] Open terminal in your project folder
- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit - OwnerClone landing site"`
- [ ] Run: `git branch -M main`
- [ ] Run: `git remote add origin https://github.com/YOUR_USERNAME/ownerclone-landing.git`
  - (Replace YOUR_USERNAME with your actual GitHub username)
- [ ] Run: `git push -u origin main`
- [ ] Verify code appears on GitHub website

## Vercel Deployment

### Connect Vercel to GitHub
- [ ] Go to vercel.com
- [ ] Sign up or log in
- [ ] Click "Add New Project"
- [ ] Click "Import Git Repository"
- [ ] Find and select your "ownerclone-landing" repository
- [ ] Click "Import"

### Configure Project
- [ ] Framework Preset: Next.js (should auto-detect)
- [ ] Root Directory: ./ (leave default)
- [ ] Build Command: next build (leave default)
- [ ] Output Directory: .next (leave default)
- [ ] Install Command: npm install (leave default)
- [ ] Environment Variables: None needed for now
- [ ] Click "Deploy"

### Wait for Build
- [ ] Watch the build logs
- [ ] Wait 2-5 minutes for deployment to complete
- [ ] Look for "Congratulations!" message
- [ ] Click "Visit" button to see your site live

### Test Deployed Site
- [ ] Homepage loads
- [ ] All internal navigation works
- [ ] Mobile responsive still works
- [ ] All pages are accessible
- [ ] No broken links or images
- [ ] Page load speed is good (under 3 seconds)

## Custom Domain Setup

### Prepare Domain
- [ ] Log in to your domain registrar (where you bought ownerclone.com)
- [ ] Find DNS settings/management
- [ ] Have your login credentials ready

### Add Domain to Vercel
- [ ] In Vercel, go to your project
- [ ] Click "Settings" tab
- [ ] Click "Domains" in sidebar
- [ ] Type "ownerclone.com" in the domain field
- [ ] Click "Add"
- [ ] Vercel will show you DNS records to add

### Configure DNS Records
- [ ] Go to your domain registrar's DNS settings
- [ ] Add A Record:
  - Type: A
  - Name: @ (or leave blank)
  - Value: 76.76.21.21 (Vercel's IP)
  - TTL: 3600 (or default)
- [ ] Add CNAME Record for www:
  - Type: CNAME
  - Name: www
  - Value: cname.vercel-dns.com
  - TTL: 3600 (or default)
- [ ] Save DNS changes

### Wait for DNS Propagation
- [ ] DNS changes can take 24-48 hours (usually faster)
- [ ] Check status in Vercel dashboard
- [ ] When ready, Vercel will automatically provision SSL certificate
- [ ] Test: https://ownerclone.com
- [ ] Test: https://www.ownerclone.com

## Post-Deployment Checklist

### Verify Everything Works
- [ ] https://ownerclone.com loads with SSL (lock icon)
- [ ] https://www.ownerclone.com redirects to main domain
- [ ] All pages load correctly
- [ ] Forms work (if applicable)
- [ ] Mobile version works
- [ ] Tested on different browsers
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile Safari/Chrome

### SEO Setup
- [ ] Google Search Console
  - [ ] Verify ownership of ownerclone.com
  - [ ] Submit sitemap (once we add it in future session)
- [ ] Google Analytics (optional for now)
  - [ ] Create property
  - [ ] Add tracking code (can do later)

### Share & Test
- [ ] Send URL to someone else to test
- [ ] Test on actual mobile device
- [ ] Share on social media to test Open Graph tags
- [ ] Check page speed with Google PageSpeed Insights

## Future Enhancements (Next Sessions)

- [ ] Add About page
- [ ] Add Contact form with email integration
- [ ] Add Privacy Policy page
- [ ] Create blog section
- [ ] Add calculators (food cost, ROI)
- [ ] Set up Google Analytics
- [ ] Add more testimonials/social proof
- [ ] Create downloadable resources

## Troubleshooting

### DNS Not Working
- Wait 24-48 hours for full propagation
- Clear your browser cache
- Try incognito/private browsing mode
- Use different WiFi network to test

### Build Fails on Vercel
- Check build logs for specific errors
- Ensure all dependencies are in package.json
- Try building locally first: `npm run build`
- Check for syntax errors in code

### Site Loads Slowly
- Check image sizes (compress if needed)
- Verify Vercel deployment region (should auto-detect)
- Use Google PageSpeed Insights for specific recommendations

### SSL Certificate Not Working
- Wait a few hours after DNS propagation
- Vercel auto-provisions SSL, be patient
- Ensure DNS records are correct
- Contact Vercel support if issue persists after 24 hours

## Success Criteria

Your deployment is successful when:
✓ https://ownerclone.com loads with green lock (SSL)
✓ All pages are accessible and load quickly
✓ Mobile version works perfectly
✓ No console errors in browser
✓ Someone else can view and navigate the site
✓ You can make a change locally, push to GitHub, and see it deploy automatically

## Need Help?

If you get stuck:
1. Check the README.md file for detailed instructions
2. Review Vercel documentation: vercel.com/docs
3. Check Next.js documentation: nextjs.org/docs
4. Review build logs in Vercel dashboard for errors

---

**Estimated Total Time: 30-60 minutes**
(Not including DNS propagation wait time)
