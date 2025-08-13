
"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export function HeroContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToServices = () => {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'button_click', {
        event_category: 'Hero Section',
        event_label: 'View Services Button',
        value: 1
      })
    }
    
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="relative z-10 flex h-full items-center mt-[6%]">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl space-y-6 -ml-[35%]">
          <div
            className={`transform transition-all duration-1000 ease-out -ml-[10%] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-2xl font-normal tracking-tight text-green-600 sm:text-3xl md:text-4xl lg:text-5xl font-nunito animate-fade-lr">
              Elevate your credit
            </h1>
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-xl text-gray-200 md:text-2xl font-pt-sans">
              Experience the power of expert credit solutions
            </p>
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={scrollToServices}
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 transform"
              suppressHydrationWarning
            >
              View Services 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 drop-shadow-[0_0_2px_rgba(0,0,0,1)]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
