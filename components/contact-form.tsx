"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Google Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Contact Form',
        event_label: 'Contact Form Submission',
        value: 1
      })
    }
    
    // Handle form submission here
    console.log("Form submitted:", formData)
    
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2 font-nunito">Get In Touch</h2>
        <p className="text-gray-300 font-pt-sans">Ready to transform your financial future? Let's talk.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300 font-pt-sans">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
            className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-white"
            suppressHydrationWarning
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300 font-pt-sans">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@website.com"
            required
            className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-white"
            suppressHydrationWarning
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-300 font-pt-sans">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="555-555-5555"
            className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-white"
            suppressHydrationWarning
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-300 font-pt-sans">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your financial goals..."
            rows={4}
            className="flex min-h-[80px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-base ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-white"
            suppressHydrationWarning
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleConsentChange}
            className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
            suppressHydrationWarning
          />
          <label htmlFor="consent" className="text-sm text-gray-300 font-pt-sans">
            I agree to be contacted about my inquiry
          </label>
        </div>
        
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 font-pt-sans"
          suppressHydrationWarning
        >
          Submit
        </button>
      </form>
    </div>
  )
}
