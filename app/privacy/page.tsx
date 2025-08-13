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
           <div className="max-w-4xl mx-auto">
             
             <section>
               <p className="text-gray-300 leading-relaxed text-lg">
                 PointsUp is committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how personal information is collected, used, and protected when visiting this website and utilizing PointsUp services. Personal information provided through contact forms, communications, and website interactions is collected solely for the purpose of providing and improving services, responding to inquiries, and ensuring optimal user experience. PointsUp does not sell, trade, or rent personal information to third parties. All data is protected through appropriate security measures and is only shared when required by law or with explicit consent. Users have the right to access, correct, or delete their personal information at any time. This website is not intended for children under 13 years of age. PointsUp may update this Privacy Policy periodically to reflect changes in practices or applicable laws, with continued use of the website indicating acceptance of any modifications.
               </p>
               <p className="text-gray-400 text-sm mt-8">
                 Last Updated: {new Date().toLocaleDateString()}
               </p>
             </section>

           </div>
         </div>
    </div>
  )
}
