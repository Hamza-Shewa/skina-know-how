import { useState } from 'react'

function App() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Login & Authentication",
      description: "Secure login with option to stay logged in for convenience",
      image: "/assets/image-1.png",
      icon: "smartphone",
      details: [
        "To log in, use the provided credentials upon registration.",
        "You can choose whether to stay logged in or log in every time you launch the app."
      ]
    },
    {
      title: "Manage Bookings",
      description: "View and manage all bookings on a first-come, first-served basis",
      image: "/assets/image-2.png",
      icon: "calendar",
      details: [
        "View all incoming booking requests in chronological order.",
        "See customer details, service type, and preferred time slots.",
        "Manage bookings based on first-come, first-served policy.",
        "Filter bookings by status: pending, confirmed, or completed."
      ]
    },
    {
      title: "Booking Details",
      description: "Accept or decline bookings, check status, and contact support",
      image: "/assets/image-3.png",
      icon: "circle-check-big",
      details: [
        "Accept or decline booking requests with one tap.",
        "View detailed customer information and service requirements.",
        "Check booking status and appointment history.",
        "Contact customer support directly from the booking details."
      ]
    },
    {
      title: "Manage Locations",
      description: "Filter and manage your business locations with easy navigation",
      image: "/assets/image-4.png",
      icon: "map-pin",
      details: [
        "Switch between multiple business locations seamlessly.",
        "Filter bookings and services by specific location.",
        "Manage location-specific settings and availability.",
        "View location performance and booking statistics."
      ]
    },
    {
      title: "Calendar View",
      description: "See employee schedules and assigned bookings by day",
      image: "/assets/image-5.png",
      icon: "calendar",
      details: [
        "View daily, weekly, and monthly calendar layouts.",
        "See employee schedules and availability.",
        "Track assigned bookings for each employee.",
        "Identify scheduling conflicts and optimize appointments."
      ]
    },
    {
      title: "Profile Management",
      description: "Manage profile, change language, view bookings, and access support",
      image: "/assets/image-6.png",
      icon: "settings",
      details: [
        "Update business profile information and contact details.",
        "Change app language and regional settings.",
        "View personal booking history and statistics.",
        "Access customer support and help documentation."
      ]
    },
    {
      title: "Notifications",
      description: "View recent notifications and manage them efficiently",
      image: "/assets/image-7.png",
      icon: "bell",
      details: [
        "Receive real-time notifications for new bookings.",
        "Get reminders for upcoming appointments.",
        "Manage notification preferences and frequency.",
        "Mark notifications as read or delete them."
      ]
    },
    {
      title: "Home App-bar",
      description: "Easy access to notifications and side drawer from the app bar",
      image: "/assets/image-2.png",
      icon: "smartphone",
      details: [
        "Quick access to notification center from the top bar.",
        "Open side drawer menu with one tap.",
        "View unread notification count badge.",
        "Navigate to main sections of the app easily."
      ]
    },
    {
      title: "Side Drawer View",
      description: "Quick access to services, employees, reviews, and settings",
      image: "/assets/image-8.png",
      icon: "settings",
      details: [
        "Access all app features from the side navigation.",
        "Manage services and service categories.",
        "View and manage employee information.",
        "Read customer reviews and ratings.",
        "Access app settings and preferences."
      ]
    },
    {
      title: "Manage Services",
      description: "Filter, edit, and add services with detailed management options",
      image: "/assets/image-9.png",
      icon: "star",
      details: [
        "Add new services with pricing and duration.",
        "Edit existing service details and descriptions.",
        "Filter services by category and availability.",
        "Set service-specific booking rules and requirements.",
        "Manage service images and promotional content."
      ]
    },
    {
      title: "Manage Employees",
      description: "Edit, delete, and add employees to specific locations",
      image: "/assets/image-10.png",
      icon: "users",
      details: [
        "Add new employees with contact information.",
        "Assign employees to specific business locations.",
        "Edit employee profiles and service specializations.",
        "Remove employees from the system when needed.",
        "Track employee performance and booking history."
      ]
    }
  ]

  const getIcon = (iconName) => {
    const iconProps = {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "lucide w-6 h-6",
      "aria-hidden": "true"
    }

    switch (iconName) {
      case "smartphone":
        return (
          <svg {...iconProps}>
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
            <path d="M12 18h.01"></path>
          </svg>
        )
      case "calendar":
        return (
          <svg {...iconProps}>
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
        )
      case "circle-check-big":
        return (
          <svg {...iconProps}>
            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
        )
      case "map-pin":
        return (
          <svg {...iconProps}>
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        )
      case "settings":
        return (
          <svg {...iconProps}>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        )
      case "bell":
        return (
          <svg {...iconProps}>
            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
          </svg>
        )
      case "star":
        return (
          <svg {...iconProps}>
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
        )
      case "users":
        return (
          <svg {...iconProps}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
        )
      default:
        return null
    }
  }

  const handleStepClick = (index) => {
    setActiveStep(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-6 h-6 text-white" aria-hidden="true">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Skina Business</h1>
                <p className="text-sm text-gray-600">Manage Beauty & Sports Bookings</p>
              </div>
            </div>
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 border-transparent bg-blue-100 text-blue-800">
              Mobile App
            </span>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with<span className="text-blue-600 block">Skina Business</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive mobile application designed for managing beauty and sports service reservations. Digitally transform your service industry with simple, accessible, and convenient booking management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-10 rounded-md px-6 bg-blue-600 hover:bg-blue-700">
              Get Started Today
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6">
              Contact: info@skina.net
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Skina Business?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <p className="text-gray-700">No subscription fees for using Skina Business App</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <p className="text-gray-700">Accept online bookings 24/7</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <p className="text-gray-700">SMS/Email notifications and reminders</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <p className="text-gray-700">Mobile-optimized booking experience</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <p className="text-gray-700">Integration with Facebook, Instagram, Google</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <p className="text-gray-700">Accept online payments and deposits</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <p className="text-gray-700">Custom features and API integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How to Use Skina Business</h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? 'ring-2 ring-blue-500 shadow-lg' 
                      : 'shadow-sm hover:shadow-md'
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${activeStep === index ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        {getIcon(step.icon)}
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{step.title}</div>
                        <div className="text-muted-foreground text-sm">{step.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <div className="w-80 h-auto bg-gray-900 rounded-3xl p-2 shadow-2xl mb-6">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img 
                    alt={steps[activeStep].title} 
                    className="w-full h-full object-contain" 
                    src={steps[activeStep].image} 
                  />
                </div>
              </div>
              <div className="text-center max-w-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{steps[activeStep].title}</h4>
                {steps[activeStep].details ? (
                  <ul className="list-disc list-inside text-gray-600 text-left mx-auto max-w-md">
                    {steps[activeStep].details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">{steps[activeStep].description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using Skina Business to manage their bookings efficiently.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md px-6 bg-white text-blue-600 hover:bg-gray-100">
              Sign Up for Free Consultation
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 border-white text-white hover:bg-white hover:text-blue-600">
              Download App
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-5 h-5 text-white" aria-hidden="true">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Skina Business</h4>
              </div>
              <p className="text-gray-400">Digitally transforming the service industry with simple, accessible booking management.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-gray-400">Email: info@skina.net</p>
              <p className="text-gray-400">Website: skina.net</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Features</h5>
              <ul className="text-gray-400 space-y-2">
                <li>Booking Management</li>
                <li>Calendar Integration</li>
                <li>Payment Processing</li>
                <li>Multi-location Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Skina Business. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App