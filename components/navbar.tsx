"use client"

import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
    setServicesOpen(false)
  }

  return (
    <div className="fixed left-4 top-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 group border-gray-600 bg-black/40 text-gray-200 backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20"
          aria-label="Open menu"
          suppressHydrationWarning
        >
          <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </button>

        {isOpen && (
          <div className="absolute left-0 top-12 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl">
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-2 font-nunito">PointsUp</h2>
                <p className="text-gray-400 text-sm font-pt-sans">Financial Solutions & Credit Services</p>
              </div>

              <nav className="space-y-4">
                <Link 
                  href="/" 
                  onClick={handleLinkClick}
                  className="block text-gray-300 hover:text-white transition-colors font-pt-sans"
                >
                  Home
                </Link>
                
                <div className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors font-pt-sans"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link 
                        href="/repair" 
                        onClick={handleLinkClick}
                        className="block text-gray-400 hover:text-green-400 transition-colors text-sm font-pt-sans"
                      >
                        Credit Repair
                      </Link>
                      <Link 
                        href="/boost" 
                        onClick={handleLinkClick}
                        className="block text-gray-400 hover:text-green-400 transition-colors text-sm font-pt-sans"
                      >
                        Credit Boost
                      </Link>
                      <Link 
                        href="/funding" 
                        onClick={handleLinkClick}
                        className="block text-gray-400 hover:text-green-400 transition-colors text-sm font-pt-sans"
                      >
                        Funding
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="#about" 
                  onClick={handleLinkClick}
                  className="block text-gray-300 hover:text-white transition-colors font-pt-sans"
                >
                  About
                </Link>
                
                <Link 
                  href="#contact" 
                  onClick={handleLinkClick}
                  className="block text-gray-300 hover:text-white transition-colors font-pt-sans"
                >
                  Contact
                </Link>
              </nav>

              <div className="pt-8 border-t border-gray-700">
                <p className="text-xs text-gray-400 mb-4 font-pt-sans">Get in touch</p>
                <button
                  onClick={() => {
                    handleLinkClick()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 font-pt-sans"
                  suppressHydrationWarning
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
