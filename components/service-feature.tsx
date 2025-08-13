import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceFeatureProps {
  title: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
}

export function ServiceFeature({ title, description, href, imageSrc, imageAlt }: ServiceFeatureProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-700 hover:border-green-500/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-3">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      {/* Image container with better styling */}
      <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-gray-900 to-gray-800">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />
        {/* Enhanced overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/30 transition-all duration-500" />
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-green-500/30 transition-all duration-500" />
      </div>
      
      {/* Content with enhanced styling */}
      <div className="p-8 relative z-20">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-3 font-nunito group-hover:text-green-400 transition-all duration-300">
            {title}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
        </div>
        
        <p className="text-gray-300 mb-6 font-pt-sans leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        <Link
          href={href}
          className="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-300 font-pt-sans font-semibold group/link text-lg"
        >
          Learn More 
          <ArrowRight className="ml-3 h-5 w-5 transition-all duration-300 group-hover/link:translate-x-2 group-hover/link:scale-110" />
        </Link>
      </div>
      
      {/* Enhanced glow effects */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
    </div>
  )
}
