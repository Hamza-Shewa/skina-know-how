# Skina Business Website

A comprehensive landing page for Skina Business - a mobile application designed for managing beauty and sports service reservations. This website demonstrates the app's features and provides an interactive guide on how to use the application.

## 🚀 Features

- **Interactive Navigation**: Clickable step-by-step guide with dynamic image display
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Asset Integration**: Uses actual app screenshots from the assets folder
- **Interactive Elements**: Hover effects, active states, and smooth transitions

## 🛠 Technologies Used

- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Lightning-fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Beautiful, accessible component library
- **Lucide React**: Simple, beautiful icon library
- **PostCSS**: CSS processing with Tailwind integration

## 📱 Skina Business App Features

### Core Features
- ✅ **No subscription fees** for using the app
- ✅ **24/7 online booking** acceptance
- ✅ **SMS/Email notifications** and reminders
- ✅ **Mobile-optimized** booking experience
- ✅ **Social media integration** (Facebook, Instagram, Google)
- ✅ **Online payment** processing and deposits
- ✅ **Custom features** and API integration

### App Functionality
1. **Login & Authentication** - Secure login with stay-logged-in option
2. **Manage Bookings** - First-come, first-served booking management
3. **Booking Details** - Accept/decline bookings with status tracking
4. **Manage Locations** - Multi-location business management
5. **Calendar View** - Employee schedules and assigned bookings
6. **Profile Management** - User settings and language options
7. **Notifications** - Real-time notification management
8. **Home App-bar** - Quick access to notifications and drawer
9. **Side Drawer View** - Access to services, employees, reviews
10. **Manage Services** - Service catalog management
11. **Manage Employees** - Employee management by location

## 🏗 Project Structure

```
.
├── public/
│   └── assets/          # App screenshot images (image-1.png to image-10.png)
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components (button, card, badge)
│   ├── lib/
│   │   └── utils.js     # Utility functions
│   ├── App.css          # Global styles with Tailwind directives
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── components.json      # shadcn/ui configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite bundler configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skina-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
# or
pnpm build
```

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🎨 Customization

### Adding New Steps
To add new steps to the "How to Use Skina Business" section:

1. Add a new object to the `steps` array in `App.jsx`
2. Include the required properties:
   - `title`: Step title
   - `description`: Brief description
   - `image`: Path to the screenshot image
   - `icon`: Icon name for the step
   - `details`: Array of bullet points (optional)

### Styling
The project uses Tailwind CSS for styling. Key customization points:

- Colors: Defined in `tailwind.config.js`
- Components: Located in `src/components/ui/`
- Global styles: `src/App.css`

## 📞 Contact

- **Email**: info@skina.net
- **Website**: skina.net

## 📄 License

© 2024 Skina Business. All rights reserved.

---

Built with ❤️ using React, Vite, and Tailwind CSS
