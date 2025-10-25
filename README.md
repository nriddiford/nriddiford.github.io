# forthdot Portfolio

A modern, dark-mode portfolio site showcasing forthdot's projects: researching.io and jamdar.

Built with React, Vite, Tailwind CSS, and Radix UI with Protocol-inspired design aesthetics.

## 🚀 Features

- **Modern Design**: Dark-mode focused with sophisticated gradients and glass morphism effects
- **Responsive**: Mobile-first design that looks great on all devices
- **Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Accessibility**: Using Radix UI primitives for accessible components
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **UI Components**: Radix UI Themes
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. GitHub Actions will automatically deploy to GitHub Pages

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The workflow is already configured in `.github/workflows/deploy.yml`

## 📝 Customization

### Logo

The forthdot logo is located in `/public/forthdot-logo-dark.svg` and can be replaced with your own design.

### Colors

Color variables are defined in `src/index.css`. The dark theme uses:

- Primary accent: Blue (#60a5fa)
- Secondary accent: Purple
- Background: #221e1f
- Surface: #2a2b29

### Projects

Edit `src/App.jsx` to update project information, including:

- Project titles and descriptions
- Feature lists
- Links to websites and GitHub repositories
- Accent colors and icons

## 📄 License

© 2025 forthdot. All rights reserved.

## 🔗 Links

- **researching.io**: [https://researching.io](https://researching.io)
- **jamdar**: [https://jamdar.app](https://jamdar.app)
- **GitHub**: [https://github.com/nriddiford](https://github.com/nriddiford)
