"use client"

import { useState, useEffect } from 'react'

interface Testimonial {
  text: string
  name: string
  title: string
}

const testimonialSets: Testimonial[][] = [
  // Set 1 - Original testimonials
  [
    {
      text: "PointsUp helped me improve my credit score by 150 points in just 6 months. Their expertise and dedication are unmatched.",
      name: "Sarah Johnson",
      title: "Small Business Owner"
    },
    {
      text: "The coaching program was exactly what I needed. I learned so much about credit optimization and saw immediate results.",
      name: "Michael Chen",
      title: "Entrepreneur"
    },
    {
      text: "Thanks to PointsUp, I was able to secure the funding I needed to expand my company. Highly recommended!",
      name: "Lisa Rodriguez",
      title: "Restaurant Owner"
    }
  ],
  // Set 2 - New testimonials
  [
    {
      text: "Incredible results! My credit score jumped 200 points in 8 months. The team at PointsUp is truly professional and caring.",
      name: "David Thompson",
      title: "Real Estate Investor"
    },
    {
      text: "The funding process was seamless. PointsUp helped me get approved for a business loan when others said no.",
      name: "Maria Garcia",
      title: "Tech Startup Founder"
    },
    {
      text: "Best investment I've ever made. The credit repair service transformed my financial future completely.",
      name: "James Wilson",
      title: "Consultant"
    }
  ],
  // Set 3 - More testimonials
  [
    {
      text: "From struggling with bad credit to buying my dream home. PointsUp made it all possible with their expert guidance.",
      name: "Amanda Foster",
      title: "Healthcare Professional"
    },
    {
      text: "The coaching program taught me everything about credit management. Now I'm helping others improve their scores too.",
      name: "Robert Kim",
      title: "Financial Advisor"
    },
    {
      text: "Fast, reliable, and results-driven. PointsUp delivered on every promise and exceeded my expectations.",
      name: "Jennifer Lee",
      title: "Marketing Director"
    }
  ],
  // Set 4 - Additional testimonials
  [
    {
      text: "After years of credit problems, PointsUp helped me rebuild my financial foundation. Life-changing experience!",
      name: "Christopher Brown",
      title: "Construction Manager"
    },
    {
      text: "The business funding service is outstanding. They found the perfect solution for my company's growth needs.",
      name: "Rachel Green",
      title: "Retail Store Owner"
    },
    {
      text: "Professional, knowledgeable, and results-oriented. PointsUp is the gold standard in credit services.",
      name: "Thomas Anderson",
      title: "Software Engineer"
    }
  ]
]

export function TestimonialCarousel() {
  const [currentSet, setCurrentSet] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % testimonialSets.length)
        setIsTransitioning(false)
      }, 300) // Transition duration
    }, 60000) // 1 minute interval

    return () => clearInterval(interval)
  }, [])

  const currentTestimonials = testimonialSets[currentSet]

  return (
    <div className="relative">
      <div className={`grid md:grid-cols-3 gap-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentTestimonials.map((testimonial, index) => (
          <div key={`${currentSet}-${index}`} className="bg-gray-700/50 p-6 rounded-lg">
            <p className="text-gray-300 mb-4 font-pt-sans">
              "{testimonial.text}"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-600 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonialSets.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentSet(index)
                setIsTransitioning(false)
              }, 300)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSet 
                ? 'bg-green-500 scale-125' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to testimonial set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
