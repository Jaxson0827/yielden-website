import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 md:mb-4">Yeelden</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Websites built to make money. Fast, optimized, and conversion-focused.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-black mb-3 md:mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Website Builds</Link></li>
              <li><Link href="/services" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">SEO</Link></li>
              <li><Link href="/services" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">PPC</Link></li>
              <li><Link href="/services" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Yeelden Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-black mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-black mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>hello@yeelden.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 md:pt-8 text-center text-sm sm:text-base text-gray-600">
          <p>&copy; {new Date().getFullYear()} Yeelden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

