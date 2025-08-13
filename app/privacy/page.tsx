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
                PointsUp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                  <p className="text-gray-300 mb-2">We may collect personal information that you voluntarily provide to us, including:</p>
                  <ul className="text-gray-300 space-y-1 ml-6">
                    <li>• Name and contact information (email, phone number)</li>
                    <li>• Financial information and goals</li>
                    <li>• Messages and communications</li>
                    <li>• Any other information you choose to provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-300 mb-2">When you visit our website, we automatically collect certain information, including:</p>
                  <ul className="text-gray-300 space-y-1 ml-6">
                    <li>• IP address and device information</li>
                    <li>• Browser type and operating system</li>
                    <li>• Pages visited and time spent</li>
                    <li>• Referring website or source</li>
                    <li>• Click patterns and user interactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">How We Use Your Information</h2>
              <p className="text-gray-300 mb-3">We use the information we collect for various purposes, including:</p>
              <ul className="text-gray-300 space-y-1 ml-6">
                <li>• Providing and maintaining our services</li>
                <li>• Responding to your inquiries and providing customer support</li>
                <li>• Improving our website and user experience</li>
                <li>• Analyzing usage patterns and trends</li>
                <li>• Sending you relevant information about our services</li>
                <li>• Complying with legal obligations</li>
                <li>• Protecting against fraud and ensuring security</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="text-gray-300 space-y-1 ml-6">
                <li>• <strong>With your consent:</strong> When you explicitly authorize us to share your information</li>
                <li>• <strong>Service providers:</strong> With trusted third-party service providers who assist us in operating our website and providing services (under strict confidentiality agreements)</li>
                <li>• <strong>Legal requirements:</strong> When required by law, court order, or government regulation</li>
                <li>• <strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li>• <strong>Safety and security:</strong> To protect our rights, property, or safety, or that of our users or the public</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-3">We use cookies and similar tracking technologies to:</p>
              <ul className="text-gray-300 space-y-1 ml-6 mb-3">
                <li>• Enhance your browsing experience</li>
                <li>• Analyze website traffic and usage patterns</li>
                <li>• Remember your preferences and settings</li>
                <li>• Provide personalized content and advertisements</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            {/* Google Analytics */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Google Analytics</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as pages visited, time spent on pages, geographic location, and user interactions. This information helps us improve our website and services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Google Analytics uses cookies and similar technologies. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on or by adjusting your browser settings.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Your Rights and Choices</h2>
              <p className="text-gray-300 mb-3">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="text-gray-300 space-y-1 ml-6">
                <li>• <strong>Access:</strong> Request access to your personal information</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                <li>• <strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li>• <strong>Opt-out:</strong> Opt out of marketing communications</li>
                <li>• <strong>Objection:</strong> Object to processing of your information</li>
              </ul>
              <p className="text-gray-300 mt-3">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Contact Us</h2>
              <p className="text-gray-300 mb-4">
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
              <h2 className="text-2xl font-bold text-white mb-4 font-nunito">Updates to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Your continued use of our website after any changes indicates your acceptance of the updated Privacy Policy.
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
