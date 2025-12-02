'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import { useEffect, useRef, useState } from 'react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const statsRef = useRef(null)

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

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
      if (statsRef.current) observer.unobserve(statsRef.current)
    }
  }, [])

  const serviceDetails = [
    {
      title: 'Strategy',
      description: 'We start with a comprehensive audit of your current online presence, competitor analysis, and goal-setting to create a data-driven strategy tailored to your business.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Design',
      description: 'Modern, conversion-focused designs that reflect your brand and guide visitors toward action. Every element is optimized for user experience and conversion.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Development',
      description: 'Fast, responsive websites built with modern technologies. Clean code, optimized performance, and seamless functionality across all devices.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'SEO',
      description: 'Comprehensive search engine optimization including keyword research, technical SEO, on-page optimization, and content strategy to improve your rankings.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Optimization',
      description: 'Continuous A/B testing, conversion rate optimization, and performance monitoring to ensure your website is always improving and delivering results.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Support',
      description: 'Ongoing maintenance, updates, and support to keep your website running smoothly. Your dedicated team is always available when you need us.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={heroRef}>
            {/* Left Column - Text */}
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black leading-[1.05] mb-6 md:mb-8 break-words tracking-tight">
                Everything You Need to Grow Online
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight max-w-2xl">
                Professional websites, SEO, PPC, and analytics — all powered by AI and designed to deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/audit" variant="primary" className="px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]">
                  Get a Free Audit
                </Button>
                <Button href="/pricing" variant="secondary" className="px-8 py-4 rounded-xl text-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                  See Pricing
                </Button>
              </div>
            </div>

            {/* Right Column - Abstract Visual */}
            <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[#00A5FF]/20 via-blue-100/30 to-slate-100/50 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00A5FF]/10 to-transparent"></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#00A5FF]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SERVICE CARDS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Website Development */}
            <div id="website-builds" className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00A5FF]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">Website Development</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-slight mb-6">
                Custom websites built in one week with AI-powered optimization, conversion-focused design, and modern development practices.
              </p>
              <Link href="#website-details" className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* SEO Growth System */}
            <div id="seo" className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00A5FF]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">SEO Growth System</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-slight mb-6">
                Comprehensive search engine optimization that drives organic traffic, improves rankings, and increases visibility in search results.
              </p>
              <Link href="#seo-details" className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* PPC Advertising */}
            <div id="ppc" className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00A5FF]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">PPC Advertising</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-slight mb-6">
                Data-driven pay-per-click campaigns on Google and Meta that maximize ROI and scale your business growth efficiently.
              </p>
              <Link href="#ppc-details" className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors inline-flex items-center">
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-SERVICE BREAKDOWN */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Full-Service Breakdown
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              From strategy to support, we handle every aspect of your online presence.
            </p>
          </div>
          <div className="space-y-12 md:space-y-16">
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                  <div className="w-16 h-16 bg-[#00A5FF]/10 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-black mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-slight">
                    {service.description}
                  </p>
                </div>
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? 'from-[#00A5FF]/10 to-blue-100/20' : 'from-slate-100 to-slate-200/50'} shadow-lg ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 md:py-32 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Results That Matter
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              Real metrics from real clients. See what's possible with Yeelden.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className={`bg-gradient-to-br from-[#00A5FF]/10 to-blue-50/50 p-6 md:p-8 rounded-2xl text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#00A5FF] mb-3 tracking-tight">1 Week</div>
              <p className="text-base md:text-lg text-gray-600 font-medium">Turnaround</p>
            </div>
            <div className={`bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 md:p-8 rounded-2xl text-center transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#00A5FF] mb-3 tracking-tight">98%</div>
              <p className="text-base md:text-lg text-gray-600 font-medium">Retention</p>
            </div>
            <div className={`bg-gradient-to-br from-[#00A5FF]/10 to-blue-50/50 p-6 md:p-8 rounded-2xl text-center transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#00A5FF] mb-3 tracking-tight">+85%</div>
              <p className="text-base md:text-lg text-gray-600 font-medium">Traffic Growth</p>
            </div>
            <div className={`bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 md:p-8 rounded-2xl text-center transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#00A5FF] mb-3 tracking-tight">+40%</div>
              <p className="text-base md:text-lg text-gray-600 font-medium">Conversions</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW STRIP */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3 tracking-tight">Recent Work</h3>
            <p className="text-lg text-gray-600">See our latest projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-video rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"></div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors inline-flex items-center">
              View full portfolio
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Ready to Grow?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight">
              Get a free audit and see how your website can perform, or explore our pricing to find the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit" variant="primary" className="px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]">
                Get a Free Audit
              </Button>
              <Button href="/pricing" variant="secondary" className="px-8 py-4 rounded-xl text-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
