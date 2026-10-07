# Deployment Guide (Vercel & Namecheap)

This application is built with TanStack Start, React 19, and Nitro. Follow the guides below to deploy to **Vercel** or **Namecheap Hosting**.

---

## 1. Deploy on Vercel (Recommended — Automatic 1-Click)

Vercel deployment is pre-configured with `vercel.json` and the Nitro Vercel preset.

### Steps:
1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Configure Vercel and Namecheap deployment"
   git push
   ```
2. Open [Vercel Dashboard](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository (`pixel-perfect`).
4. **Build & Output Settings**:
   - Vercel automatically detects `vercel.json` (`npm run build:vercel`).
   - No custom environment variables are required.
5. Click **Deploy**.
6. Done! Vercel will host your site on global CDN with instant SSL.

---

## 2. Deploy on Namecheap Hosting (cPanel)

Namecheap cPanel supports hosting Node.js applications using Phusion Passenger (**Setup Node.js App**).

### Method A: Namecheap cPanel Node.js App (Standard)
1. **Build the application**:
   In your local project folder (or cPanel terminal), run:
   ```bash
   npm run build:namecheap
   ```
   This generates the `.output/` folder containing the compiled server (`.output/server/`) and static assets (`.output/public/`).

2. **Upload files to Namecheap**:
   Via cPanel File Manager or FTP, upload:
   - `.output/` folder
   - `app.js` (startup file)
   - `package.json`

3. **Configure in cPanel**:
   - In cPanel, search for **"Setup Node.js App"**.
   - Click **"Create Application"**.
   - **Node.js version**: Choose `20.x` or `22.x`.
   - **Application mode**: `Production`.
   - **Application root**: Path where files were uploaded (e.g., `pixel-perfect` or `/`).
   - **Application URL**: Your domain (e.g. `yourdomain.com`).
   - **Application startup file**: `app.js`.
   - Click **Create**.

4. **Install & Start**:
   - Click **"Run NPM Install"** (or in cPanel terminal run `npm install --omit=dev`).
   - Click **"Restart Application"** (or **"Start App"**).
   - Your site is now live on your Namecheap domain!

---

## Available Scripts

- `npm run dev`: Local development server (port 3000, host 0.0.0.0).
- `npm run build`: Standard build.
- `npm run build:vercel`: Builds output optimized for Vercel (`.vercel/output`).
- `npm run build:namecheap`: Builds output for Namecheap cPanel (`.output/server`).
- `npm start`: Runs the compiled production server locally or on a VPS.
