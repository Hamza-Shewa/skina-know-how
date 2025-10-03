'''
# Skina Business Website

This project is a small website that identifies the Skina project and demonstrates how the app is used. The website is built using React and utilizes assets from a provided presentation and additional information from the skina.net website.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool that provides a quicker and leaner development experience for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui:** A collection of re-usable components built using Radix UI and Tailwind CSS.
*   **Lucide React:** A collection of simply designed, beautiful icons.

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/  # Static assets like images
│   ├── components/
│   │   └── ui/  # UI components from shadcn/ui
│   ├── hooks/  # Custom React hooks
│   ├── lib/  # Utility functions and libraries
│   ├── App.css  # App-specific styles
│   ├── App.jsx  # Main App component
│   ├── index.css  # Global styles
│   └── main.jsx  # Entry point
├── components.json  # shadcn/ui configuration
├── eslint.config.js  # ESLint configuration
├── index.html  # HTML entry point
├── package.json  # Project dependencies and scripts
├── pnpm-lock.yaml  # Lock file for dependencies
└── vite.config.js  # Vite bundler configuration
```

## How to Run

1.  Install dependencies: `npm install` or `pnpm install`
2.  Start the development server: `npm run dev` or `pnpm run dev`
3.  Build for production: `npm run build` or `pnpm run build`
4.  Preview production build: `npm run preview` or `pnpm run preview`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
.
├── public/
│   └── assets/          # Static image assets
├── src/
│   ├── components/
│   │   └── ui/          # UI components from shadcn/ui
│   ├── lib/             # Utility functions
│   ├── App.css          # App-specific styles with Tailwind
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── components.json      # shadcn/ui configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite bundler configuration
```
'''
