import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">Yeelden</h3>
            <p className="text-base text-gray-600 leading-relaxed tracking-slight mb-4">
              Websites built to make money. Fast, optimized, and conversion-focused.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#00A5FF] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00A5FF] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-base text-gray-600 hover:text-[#00A5FF] transition-colors">About</Link></li>
              <li><Link href="/services" className="text-base text-gray-600 hover:text-[#00A5FF] transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-base text-gray-600 hover:text-[#00A5FF] transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="text-base text-gray-600 hover:text-[#00A5FF] transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-base text-gray-600 hover:text-[#00A5FF] transition-colors">Website Builds</Link></li>
              <li><Link href="/services" className="text-base text-gray-600 hover:text-[#00A5FF] transition-colors">SEO</Link></li>
              <li><Link href="/services" className="text-base text-gray-600 hover:text-[#00A5FF] transition-colors">PPC</Link></li>
              <li><Link href="/services" className="text-base text-gray-600 hover:text-[#00A5FF] transition-colors">Yeelden Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-base text-gray-600">
              <li>
                <a href="mailto:hello@yeelden.com" className="hover:text-[#00A5FF] transition-colors">hello@yeelden.com</a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-[#00A5FF] transition-colors">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Yeelden. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-[#00A5FF] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#00A5FF] transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

