# Deployment & Domain Guide

## Deployment (Vercel Recommended)
1. **Push Code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   # Add remote and push
   ```
2. **Connect to Vercel**:
   - Go to vercel.com -> "Add New..." -> "Project".
   - Import your git repo.
   - Framework Preset: Next.js (Auto-detected).
   - Environment Variables: Add any secrets (API keys, DB URL).
   - Click **Deploy**.

## Domain Purchase
1. **Registrar**: Go to Namecheap, GoDaddy, or Google Domains.
2. **Search**: Look for `youtube-igo.com` or similar variants.
3. **Purchase**: Complete the transaction.
4. **DNS Configuration**:
   - In Vercel Project Settings -> Domains.
   - Add your custom domain.
   - Vercel will provide `A` record and `CNAME` values.
   - Go to your Registrar's DNS settings and add these records.
   - Wait 1-24 hours for propagation.

## SSL
- SSL is automatically handled by Vercel for free.
