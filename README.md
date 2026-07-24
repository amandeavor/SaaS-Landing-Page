# MemberFlow — AI Membership Platform Landing Page

> A modern, ultra-sleek, Apple-inspired SaaS landing page built for **MemberFlow** — an AI-powered membership platform for creators, founders, and digital communities.

🔗 **[Live Demo on Netlify](https://saas-landingpage-amandeavor.netlify.app/)**

![MemberFlow Preview](preview.png)

---

## ✨ Features

- 🍎 **Apple-Style Scroll Snap**: Full-screen section navigation (`snap-y snap-proximity`) with smooth scrolling dynamics.
- 💬 **Word-by-Word Text Reveal**: Framer Motion powered heading animations with staggered opacity reveal triggers.
- 🎨 **Warm Light-Mode Design System**: Tailored HSL palette (`#F8F4F0` warm neutral canvas, `#FF4F00` electric orange accent, `#E2DDD8` borders, Archivo typography).
- 🚀 **Fixed Pill Navigation Bar**: Floating backdrop-blur navbar with dynamic dropdown menus (`Features`, `Use Cases`), smooth tab toggles, and mobile drawer overlay.
- 🎬 **Interactive Hero & Video Modal**: Crisp 16:9 dashboard preview with custom play overlay and full-screen Framer Motion video modal backdrop.
- ⚡ **Social Proof & Dual Marquee**: Google rating card (4.9/5 stars) combined with dual-direction infinite sliding company logos (`Unbounce`, `HubSpot`, `Autodesk`, `Typeform`, `Vermeer`, `Outsystems`).
- 📱 **100% Fully Responsive**: Pixel-perfect layout adaptation across mobile, tablet, and ultra-wide desktops.

---

## 🌐 Live Demo

Visit the deployed website: **[https://saas-landingpage-amandeavor.netlify.app/](https://saas-landingpage-amandeavor.netlify.app/)**

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI Library |
| **[Vite 5](https://vitejs.dev/)** | High-performance Frontend Build Tool |
| **[TypeScript](https://www.typescriptlang.org/)** | Type-safe Development |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Modern Utility-First Styling & Design System |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth Physics-Based Micro-Animations & Page Transitions |
| **[Lucide React](https://lucide.dev/)** | Modern Minimalist Icon Set |

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your machine.

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/amandeavor/saas-landing-page.git
cd saas-landing-page
npm install
```

### 3. Development Server

Start the local dev server with hot module replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### 4. Production Build

Build the optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploy to Netlify

This project includes a pre-configured `netlify.toml` file for instant continuous deployment.

### Option A: Via Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --build
```

### Option B: Via Netlify Web Dashboard
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **GitHub** and authorize access to `amandeavor/saas-landing-page`.
4. Netlify will automatically detect settings from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **"Deploy Site"**! 🎉

---

## 📂 Project Structure

```
Saas/
├── netlify.toml          # Netlify build configuration & SPA redirect rules
├── preview.png           # GitHub Readme preview screenshot
├── index.html            # Entry HTML with Google Fonts (Archivo)
├── vite.config.js        # Vite configuration
├── postcss.config.js     # PostCSS 8 configuration for Tailwind CSS v4
├── package.json          # Dependencies & scripts
└── src/
    ├── App.tsx           # Main App component
    ├── MemberFlowHeader.tsx # Full SaaS Landing Experience component
    ├── index.css         # Global CSS with Tailwind v4 imports
    └── main.tsx          # React DOM entry point
```

---

## 📄 License

This project is open-source and available under the **MIT License**.

Built with ❤️ by [Aman Deavor](https://github.com/amandeavor).
