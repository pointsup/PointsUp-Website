"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, TrendingUp } from "lucide-react"

export default function BoostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
             {/* Header */}
       <div className="bg-gray-950/90 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2 font-nunito">Credit Boost Services</h1>
          <p className="text-gray-300 font-pt-sans">Strategic coaching to accelerate your credit score improvement</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-96 h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl shadow-green-500/20">
                <img
                  src="/images/boost-service.png"
                  alt="Credit boost concept with trending charts and growth indicators"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-80 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse delay-1000" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-nunito">Strategic Credit Coaching</h2>
            <p className="text-gray-300 mb-6 font-pt-sans text-lg">
              Our personalized coaching program helps you understand credit optimization strategies and implement 
              proven techniques to boost your credit score faster and more effectively.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Personalized Strategy</h3>
                  <p className="text-gray-400 text-sm">Custom credit improvement plan tailored to your specific situation</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Credit Education</h3>
                  <p className="text-gray-400 text-sm">Learn the ins and outs of credit scoring and optimization</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Ongoing Support</h3>
                  <p className="text-gray-400 text-sm">Regular check-ins and adjustments to your strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 font-nunito">Our Coaching Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Assessment</h3>
              <p className="text-gray-400 text-sm">We analyze your current credit situation and identify opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Strategy Development</h3>
              <p className="text-gray-400 text-sm">Create a personalized plan to optimize your credit score</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Implementation & Support</h3>
              <p className="text-gray-400 text-sm">Guide you through implementation with ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Ready to Boost Your Credit?</h2>
          <p className="text-gray-300 mb-6 font-pt-sans">
            Start your credit optimization journey today. Our coaching will help you achieve faster results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/pointsupenterprise/credit-consultation-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-pt-sans"
            >
              Start Coaching Today
            </a>
            <Link href="/funding">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3 text-lg font-pt-sans">
                                 Learn About Funding
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
