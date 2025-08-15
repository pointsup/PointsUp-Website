"use client"

import { Navbar } from "@/components/navbar"
import { HeroContent } from "@/components/hero-content"
import { AboutSection } from "@/components/about-section"
import { ServiceFeature } from "@/components/service-feature"
import { ContactForm } from "@/components/contact-form"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Home() {
  const { scrollY, isScrollingDown } = useScrollAnimation()
  const isMobile = useIsMobile()
  
  // Calculate animation values based on scroll - optimized for mobile
  const heroTransform = Math.min(scrollY * (isMobile ? 0.3 : 0.5), isMobile ? 50 : 100) // Reduced movement on mobile
  const heroOpacity = Math.max(1 - scrollY * (isMobile ? 0.001 : 0.002), 0.3) // Slower fade on mobile
  const heroScale = Math.max(1 - scrollY * (isMobile ? 0.0003 : 0.0005), 0.8) // Reduced scale on mobile
  const heroTranslateY = Math.min(scrollY * (isMobile ? 0.2 : 0.3), isMobile ? 100 : 200) // Reduced movement on mobile

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-950">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 transform scale-110 transition-all duration-700 ease-out"
          style={{
            transform: `scale(1.1) translateY(${heroTransform}px) scale(${heroScale})`,
            opacity: heroOpacity,
          }}
        >
          <img
            src="/images/pointsup-hero.png"
            alt="Professional working on credit reports with multiple monitors"
            className="w-full h-full object-cover object-center animate-slow-float"
            style={{
              objectPosition: isMobile ? 'center 30%' : 'center center'
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        {/* Floating Elements - Hidden on mobile for better performance */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out hidden sm:block"
          style={{
            transform: `translateY(${heroTranslateY * 0.5}px)`,
            opacity: Math.max(1 - scrollY * 0.003, 0.2),
          }}
        >
          <div className="absolute top-20 left-20 w-4 h-4 bg-green-500 rounded-full opacity-60 animate-pulse animate-bounce-slow"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-blue-500 rounded-full opacity-40 animate-pulse animate-bounce-slow delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-50 animate-pulse animate-bounce-slow delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-blue-400 rounded-full opacity-30 animate-pulse animate-bounce-slow delay-1500"></div>
        </div>
        
        {/* Hero Content with Scroll Animation */}
        <div 
          className="relative z-10 transition-all duration-700 ease-out w-full"
          style={{
            transform: `translateY(${heroTranslateY}px) scale(${Math.max(1 - scrollY * 0.0003, 0.9)})`,
            opacity: Math.max(1 - scrollY * 0.001, 0.4),
          }}
        >
          <HeroContent />
        </div>
      </section>

      {/* Hero to About Divider */}
      <div className="relative h-32 bg-gradient-to-b from-gray-950 via-gray-900/90 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-600/30 to-green-500/70"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-green-500/80 to-green-400/60 rounded-full shadow-lg shadow-green-500/20"></div>
            <div className="w-20 h-px bg-gradient-to-r from-green-500/70 via-gray-600/30 to-transparent"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <AboutSection />
      </section>

      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 font-nunito bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent animate-pulse">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full mx-auto mb-6 animate-pulse"></div>
            <p className="text-xl text-gray-300 font-pt-sans max-w-2xl mx-auto leading-relaxed">
              Comprehensive financial solutions to help you succeed and achieve your goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <ServiceFeature
              title="Credit Repair"
              description="Professional credit repair services to improve your credit score and financial standing."
              href="/repair"
              imageSrc="/images/repair-service.png"
              imageAlt="Credit repair concept"
            />
            <ServiceFeature
              title="Credit Boost"
              description="Strategic coaching to accelerate your credit score improvement and optimize your financial profile."
              href="/boost"
              imageSrc="/images/boost-service.png"
              imageAlt="Credit boost concept"
            />
                    <ServiceFeature
          title="Funding"
          description="Access to personal and business funding solutions to help you achieve your financial goals."
              href="/funding"
              imageSrc="/images/business-handshake-original.png.png"
              imageAlt="Professional business handshake over desk with city skyline"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-nunito bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
              What Our Clients Say
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 rounded-full mx-auto mb-4 animate-pulse"></div>
            <p className="text-xl text-gray-300 font-pt-sans">Success stories from satisfied customers</p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="border-t border-blue-400/30">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* PointsUp */}
              <div>
                {/* Logo */}
                <div className="mb-4">
                  <div className="flex flex-col items-start space-y-2">
                    <img 
                      src="/images/pointsup-logo.png.png" 
                      alt="PointsUp Logo" 
                      className="w-24 h-18 object-contain"
                    />
                    <span className="text-white font-bold text-lg">POINTSUP</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering financial futures through expert credit solutions and education.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/repair" className="text-gray-400 text-sm hover:text-white transition-colors">Repair</a></li>
                  <li><a href="/boost" className="text-gray-400 text-sm hover:text-white transition-colors">Boost</a></li>
                  <li><a href="/funding" className="text-gray-400 text-sm hover:text-white transition-colors">Funding</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 text-sm hover:text-white transition-colors">About</a></li>
                  <li><a href="#contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Follow us on your favorite platforms.
                </p>
                <div className="flex space-x-3">
                  {/* Facebook */}
                  <a href="#" className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 hover:border-gray-500 transition-all">
                    <svg className="w-4 h-4 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 hover:border-gray-500 transition-all">
                    <svg className="w-4 h-4 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400/30">
          <div className="container mx-auto px-4 py-6">
            <p className="text-gray-400 text-sm text-center">
              © 2025 PointsUp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
