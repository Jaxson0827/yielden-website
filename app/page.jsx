'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (statsRef.current) observer.observe(statsRef.current)
    if (pathRef.current) observer.observe(pathRef.current)

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
      if (statsRef.current) observer.unobserve(statsRef.current)
      if (pathRef.current) observer.unobserve(pathRef.current)
    }
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={heroRef}>
            {/* Left Column - Text */}
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black leading-[1.05] mb-6 md:mb-8 break-words tracking-tight">
                Websites Built to Make Money.
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight max-w-2xl">
                AI-powered, conversion-optimized websites built in 48 hours. Fast, modern, and designed to grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center bg-[#00A5FF] text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#0095E6] transition-all duration-300 shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get a Free Audit
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center bg-white border-2 border-gray-200 text-black px-8 py-4 rounded-xl font-medium text-lg hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  See Pricing
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Grid */}
            <div className={`grid grid-cols-2 gap-4 lg:gap-6 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00A5FF]/20 to-[#00A5FF]/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"></div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"></div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"></div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00A5FF]/20 to-[#00A5FF]/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"></div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200/60">
            <p className="text-sm font-medium text-gray-500 text-center mb-8 tracking-wide uppercase">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-2xl font-bold text-gray-400">Vercel</div>
              <div className="text-2xl font-bold text-gray-400">Next.js</div>
              <div className="text-2xl font-bold text-gray-400">GitHub</div>
              <div className="text-2xl font-bold text-gray-400">OpenAI</div>
              <div className="text-2xl font-bold text-gray-400">Tailwind</div>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PATH SECTION */}
      <section className="py-24 md:py-32 bg-white" ref={pathRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Choose Your Path
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              Start your journey with the service that fits your needs. Each path leads to growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className={`bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-14 h-14 bg-[#00A5FF]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">Website Build</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-slight mb-6">
                Get a conversion-optimized website built in 48 hours with AI-powered design and best practices.
              </p>
              <Link href="/services" className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className={`bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-14 h-14 bg-[#00A5FF]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">SEO</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-slight mb-6">
                Drive organic traffic and increase visibility with comprehensive search engine optimization.
              </p>
              <Link href="/services" className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className={`bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-14 h-14 bg-[#00A5FF]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">PPC</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-slight mb-6">
                Maximize ROI with data-driven pay-per-click campaigns that scale your business growth.
              </p>
              <Link href="/services" className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Website Development Pays Off
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              Real results from real clients. See how Yeelden delivers measurable growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#00A5FF] mb-3 tracking-tight">48hr</div>
              <p className="text-lg md:text-xl text-gray-600 font-medium">Turnaround Time</p>
            </div>
            <div className={`text-center transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#00A5FF] mb-3 tracking-tight">+85%</div>
              <p className="text-lg md:text-xl text-gray-600 font-medium">SEO Growth</p>
            </div>
            <div className={`text-center transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#00A5FF] mb-3 tracking-tight">98%</div>
              <p className="text-lg md:text-xl text-gray-600 font-medium">Client Retention</p>
            </div>
            <div className={`text-center transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#00A5FF] mb-3 tracking-tight">+40%</div>
              <p className="text-lg md:text-xl text-gray-600 font-medium">Avg. Conversion</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Client Success Stories
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              Real businesses, real results. See how Yeelden transforms online presence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#00A5FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 tracking-slight">
                "Yeelden transformed our online presence. Our conversion rate increased by 40% in the first month, and the 48-hour turnaround was incredible."
              </p>
              <div>
                <p className="font-semibold text-black text-lg">Sarah Johnson</p>
                <p className="text-gray-500">CEO, TechStart Inc.</p>
              </div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#00A5FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 tracking-slight">
                "The website looks amazing and performs even better. Best investment we've made for our business growth."
              </p>
              <div>
                <p className="font-semibold text-black text-lg">Michael Chen</p>
                <p className="text-gray-500">Founder, Growth Labs</p>
              </div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#00A5FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 tracking-slight">
                "The AI optimization features are game-changing. We've seen consistent growth month over month since launch."
              </p>
              <div>
                <p className="font-semibold text-black text-lg">Emily Rodriguez</p>
                <p className="text-gray-500">Marketing Director, ScaleUp Co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black text-center mb-6 tracking-tight leading-[1.1]">
              Get Started
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 text-center mb-12 md:mb-16 leading-relaxed tracking-slight">
              Ready to build a website that makes money? Let's talk.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/10 transition-all text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/10 transition-all text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-black mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/10 transition-all text-base"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-black mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/10 transition-all text-base"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="question" className="block text-sm font-medium text-black mb-2">
                  How can we help?
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/10 transition-all resize-none text-base"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#00A5FF] text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#0095E6] transition-all duration-300 shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get a Free Audit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
