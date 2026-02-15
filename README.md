# Aadi Shah - Portfolio Website

A modern, production-ready portfolio website showcasing UI/UX development skills and open source contributions. Built with React + Vite, featuring a brutalist-technical design aesthetic inspired by modern developer portfolios.

## 🚀 Features

- **Brutalist-Technical Design**: High-contrast sections with glowing vignette effects
- **Smooth Animations**: Framer Motion for scroll-triggered animations and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive meta tags and Open Graph support
- **Fast Performance**: Built with Vite for lightning-fast builds and hot module replacement
- **Easy to Customize**: Centralized content configuration in `src/data/content.js`

## 📦 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Styling**: Vanilla CSS with CSS Custom Properties
- **Deployment**: Vercel (recommended)

## 🛠️ Local Development

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Your Information

Edit `src/data/content.js` to update:
- Personal information (name, title, bio, email)
- Social media links (GitHub, LinkedIn, Twitter)
- Open source projects and contributions
- Personal projects
- Skills and tech stack
- Career timeline

### Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf`.

### Add Project Screenshots

Add project screenshots to `public` or `src/assets` and update the image paths in `content.js`.

### Customize Colors

Edit CSS custom properties in `src/index.css` to change:
- Color palette
- Typography
- Spacing
- Animations

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project and deploy

### Alternative: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 🌐 Custom Domain Setup

### Vercel

1. Go to your project settings in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Netlify

1. Go to "Domain settings" in your site dashboard
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## 📝 Project Structure

```
portfolio/
├── public/              # Static assets
│   └── resume.pdf       # Your resume (add this)
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── OpenSource.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── content.js   # Centralized content configuration
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & design system
├── index.html           # HTML template with SEO tags
├── package.json
├── vite.config.js
└── vercel.json          # Vercel deployment config
```

## 🎯 Performance

The site is optimized for performance:
- Lighthouse Performance Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images and lazy loading
- Minimal JavaScript bundle size

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or feedback, reach out via the contact form on the website or email directly.

---

Built with ❤️ using React + Vite
