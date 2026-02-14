# Trill Labs Ltd - Marketing Website

A modern, frontend-only marketing website for Trill Labs Ltd, built with React, Vite, and Tailwind CSS.

## Project Structure

```
trill-labs_web/
├── src/
│   ├── components/  # Reusable UI components (Navbar, Footer, SEO)
│   ├── pages/       # Route pages (Home, About, Products, Contact, etc.)
│   ├── styles/      # Global styles and Tailwind directives
│   ├── App.tsx      # Main application component with routing
│   └── main.tsx     # Entry point
├── public/          # Static assets
└── ...config files  # Vite, Tailwind, TypeScript configs
```

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Installation

1. Navigate to the project directory:
   ```bash
   cd trill-labs_web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Preview

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is ready for deployment on platforms like Vercel or Netlify.

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the project folder.
3. Follow the prompts.

### Netlify
1. Drag and drop the `dist` folder to Netlify Drop, or connect your Git repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Notes

- **Waitlist Integration**: The waitlist form in the Products page is currently mocked. Update the endpoint in `src/pages/Products.tsx` when the backend is ready.
- **Contact Form**: The contact form is frontend-only and simulates a successful submission. Connect it to a backend service or use a service like Formspree for real functionality.
