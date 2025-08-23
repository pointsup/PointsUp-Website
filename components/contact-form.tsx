"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
    company: "" // Honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      setStatusMessage("Please agree to be contacted about your inquiry.")
      return
    }
    
    setIsSubmitting(true)
    setStatusMessage("Sending...")
    
    // Google Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Contact Form',
        event_label: 'Contact Form Submission',
        value: 1
      })
    }
    
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${responseText}`);
      }

      // Try to parse JSON response
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        console.log('Response is not JSON, treating as plain text');
        responseData = { message: responseText };
      }

      console.log('Parsed response:', responseData);

      if (responseData.error) {
        throw new Error(responseData.message || responseData.error);
      }

      setStatusMessage("Thanks! We'll reach out shortly.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
        company: ""
      })
    } catch (err) {
      console.error('Form submission error:', err)
      setStatusMessage(`Error: ${err.message}`)
    } finally {
      setIsSubmitting(false)
    }
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
        {/* Honeypot field - hidden by CSS */}
        <div className="absolute left-[-9999px] opacity-0 pointer-events-none">
          <label htmlFor="company" className="text-sm font-medium text-gray-300 font-pt-sans">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-white"
            suppressHydrationWarning
          />
        </div>
        
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
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 font-pt-sans"
          suppressHydrationWarning
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
        
        {/* Status message */}
        {statusMessage && (
          <div 
            className={`text-sm font-pt-sans mt-4 p-3 rounded-md ${
              statusMessage.includes("Thanks") 
                ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
            aria-live="polite"
          >
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  )
}
