"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function FundingPage() {
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
          <h1 className="text-4xl font-bold text-white mb-2 font-nunito">Funding Services</h1>
          <p className="text-gray-300 font-pt-sans">Personal and business funding solutions for all your financial needs</p>
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
                  src="/images/business-handshake-original.png.png"
                  alt="Business handshake representing successful funding deal"
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
            <div className="mb-6">
                          <h2 className="text-4xl font-bold text-white mb-4 font-nunito bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Funding Solutions
            </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4"></div>
            </div>
            <p className="text-gray-300 mb-8 font-pt-sans text-lg leading-relaxed">
              Whether you need personal financing for a home, auto, or personal loan, or business funding 
              to grow and expand your company, we have the solutions you need. Our extensive network of 
              lenders offers competitive rates and flexible terms to help you achieve your financial goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-500/30 transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Personal & Business Funding</h3>
                  <p className="text-gray-400 leading-relaxed">Home loans, auto financing, personal loans, business loans, lines of credit, and equipment financing</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-500/30 transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Expert Guidance</h3>
                  <p className="text-gray-400 leading-relaxed">Professional assistance in finding the best funding solution for your personal or business goals</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-500/30 transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Streamlined Process</h3>
                  <p className="text-gray-400 leading-relaxed">Simplified application and approval process to get you funded faster</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-nunito bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Funding Process
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-white font-semibold mb-3 text-xl">Needs Assessment</h3>
              <p className="text-gray-400 leading-relaxed">We evaluate your personal or business needs and funding requirements to understand your goals</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-white font-semibold mb-3 text-xl">Solution Matching</h3>
              <p className="text-gray-400 leading-relaxed">Match you with the best funding options tailored to your specific situation</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-white font-semibold mb-3 text-xl">Application Support</h3>
              <p className="text-gray-400 leading-relaxed">Guide you through the application and approval process for faster funding</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-500/10 via-blue-500/5 to-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center shadow-2xl shadow-green-500/10">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-4 font-nunito bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Get Funded?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4"></div>
          </div>
          <p className="text-gray-300 mb-8 font-pt-sans text-lg leading-relaxed max-w-2xl mx-auto">
            Whether it's for personal or business needs, get the capital you need to achieve your goals. Our team is here to help 
            you secure the funding that will drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://calendly.com/pointsupenterprise/credit-consultation-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 text-lg font-pt-sans shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105"
            >
              Get Funding Today
            </a>
            <Link href="/repair">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 px-10 py-4 text-lg font-pt-sans hover:scale-105">
                Learn About Credit Repair
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
