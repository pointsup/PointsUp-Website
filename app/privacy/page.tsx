"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-white mb-2 font-nunito">Privacy Policy</h1>
          <p className="text-gray-300 font-pt-sans">How we collect, use, and protect your information</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              PointsUp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Information You Provide</h3>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Name and contact information when you fill out our contact form</li>
                  <li>• Email address and phone number for communication</li>
                  <li>• Messages and inquiries you send to us</li>
                  <li>• Information about your financial goals and needs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Automatically Collected Information</h3>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Pages visited and time spent on our website</li>
                  <li>• Referring website or source</li>
                  <li>• Click patterns and user interactions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Google Analytics */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Google Analytics</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6 mb-4">
              <li>• Pages visited and time spent on each page</li>
              <li>• Geographic location (city/country level)</li>
              <li>• Device type and browser information</li>
              <li>• Traffic sources (Google, social media, direct visits)</li>
              <li>• User interactions (button clicks, form submissions)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Google Analytics uses cookies and similar technologies. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.
            </p>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">How We Use Your Information</h2>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>• To respond to your inquiries and provide customer service</li>
              <li>• To improve our website and services</li>
              <li>• To analyze website usage and optimize user experience</li>
              <li>• To send you relevant information about our services</li>
              <li>• To comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>• With your explicit consent</li>
              <li>• To comply with legal requirements</li>
              <li>• To protect our rights and safety</li>
              <li>• With service providers who assist in our operations (under strict confidentiality agreements)</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website uses cookies and similar technologies to enhance your experience and collect analytics data. You can control cookie settings through your browser preferences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Essential cookies are necessary for website functionality, while analytics cookies help us understand user behavior and improve our services.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
              <li>• Request deletion of your information</li>
              <li>• Opt out of marketing communications</li>
              <li>• Object to processing of your information</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-gray-300">
                <strong>PointsUp</strong><br />
                Email: privacy@pointsup.com<br />
                Website: https://pointsup.com
              </p>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
