"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-50px 0px", // Start animation 50px before the section comes into view
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 md:py-24" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-center">
          {/* Text Content - 40% */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <p
                className={`text-green-400 font-medium text-lg font-pt-sans transform transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Empowering Your Credit Journey
              </p>
              <h2
                className={`text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl leading-tight font-nunito transform transition-all duration-700 ease-out delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Expert credit solutions tailored for you
              </h2>
              <div className="space-y-4">
                <p
                  className={`text-gray-300 text-lg leading-relaxed font-pt-sans transform transition-all duration-700 ease-out delay-400 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  PointsUp transforms your credit potential into powerful opportunities. Our expert team specializes in
                  credit repair, consulting, coaching, digital products, and funding, all designed to elevate
                  your financial standing. We deliver bold, innovative solutions with clarity and precision, empowering
                  you to achieve your goals with confidence and ease.
                </p>
              </div>
              <div
                className={`pt-4 transform transition-all duration-700 ease-out delay-600 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <Link
                  href="#contact"
                  className="text-green-400 hover:text-green-300 font-medium font-pt-sans transition-colors duration-200 underline underline-offset-4 hover:underline-offset-8"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>

          {/* Image - 60% */}
          <div className="lg:col-span-3">
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-lg transform transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-8 opacity-0 scale-95"
              }`}
            >
              <Image
                src="/images/about-professional.png"
                alt="Professional woman with glasses in green blazer working on financial documents at desk with city view"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent transition-opacity duration-1000 delay-800 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
