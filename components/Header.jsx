'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (e, sectionId) => {
    if (isHomePage) {
      e.preventDefault()
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-semibold text-black">
            Yeelden
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-gray-700 hover:text-black transition-colors">
                  Home
                </a>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-700 hover:text-black transition-colors">
                  Services
                </a>
                <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-gray-700 hover:text-black transition-colors">
                  Portfolio
                </a>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-700 hover:text-black transition-colors">
                  About
                </a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-700 hover:text-black transition-colors">
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link href="/" className="text-gray-700 hover:text-black transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-black transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-black transition-colors">
                  Portfolio
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:text-black transition-colors">
                  Pricing
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
                  Contact
                </Link>
              </>
            )}
          </nav>
          <div className="flex items-center gap-3">
            {isHomePage ? (
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="hidden sm:inline-block bg-[#00A5FF] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base hover:bg-[#0095E6] transition-colors"
              >
                Get a Free Audit
              </a>
            ) : (
              <Link
                href="/audit"
                className="hidden sm:inline-block bg-[#00A5FF] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base hover:bg-[#0095E6] transition-colors"
              >
                Get a Free Audit
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {isHomePage ? (
                <>
                  <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-gray-700 hover:text-black transition-colors py-2">
                    Home
                  </a>
                  <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-700 hover:text-black transition-colors py-2">
                    Services
                  </a>
                  <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-gray-700 hover:text-black transition-colors py-2">
                    Portfolio
                  </a>
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-700 hover:text-black transition-colors py-2">
                    About
                  </a>
                  <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-700 hover:text-black transition-colors py-2">
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link href="/" onClick={handleNavClick} className="text-gray-700 hover:text-black transition-colors py-2">
                    Home
                  </Link>
                  <Link href="/services" onClick={handleNavClick} className="text-gray-700 hover:text-black transition-colors py-2">
                    Services
                  </Link>
                  <Link href="/portfolio" onClick={handleNavClick} className="text-gray-700 hover:text-black transition-colors py-2">
                    Portfolio
                  </Link>
                  <Link href="/pricing" onClick={handleNavClick} className="text-gray-700 hover:text-black transition-colors py-2">
                    Pricing
                  </Link>
                  <Link href="/about" onClick={handleNavClick} className="text-gray-700 hover:text-black transition-colors py-2">
                    About
                  </Link>
                  <Link href="/contact" onClick={handleNavClick} className="text-gray-700 hover:text-black transition-colors py-2">
                    Contact
                  </Link>
                </>
              )}
              {isHomePage ? (
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="bg-[#00A5FF] text-white px-6 py-2.5 rounded-lg font-medium text-center hover:bg-[#0095E6] transition-colors mt-2"
                >
                  Get a Free Audit
                </a>
              ) : (
                <Link
                  href="/audit"
                  onClick={handleNavClick}
                  className="bg-[#00A5FF] text-white px-6 py-2.5 rounded-lg font-medium text-center hover:bg-[#0095E6] transition-colors mt-2"
                >
                  Get a Free Audit
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

