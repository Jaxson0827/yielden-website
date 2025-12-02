'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import { useEffect, useRef, useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const testimonialRef = useRef(null)

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
    if (testimonialRef.current) observer.observe(testimonialRef.current)

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
      if (testimonialRef.current) observer.unobserve(testimonialRef.current)
    }
  }, [])

  const filters = ['All', 'Websites', 'SEO', 'E-commerce', 'Branding', 'Landing Pages']

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Complete redesign that increased conversions by 45% in the first quarter.',
      tags: ['E-commerce', 'Websites'],
      category: 'E-commerce'
    },
    {
      title: 'SaaS Landing Page',
      description: 'Conversion-optimized landing page that reduced bounce rate by 60%.',
      tags: ['Landing Pages', 'Websites'],
      category: 'Landing Pages'
    },
    {
      title: 'Healthcare Website',
      description: 'Modern, accessible design that improved patient engagement by 35%.',
      tags: ['Websites', 'SEO'],
      category: 'Websites'
    },
    {
      title: 'B2B Service Site',
      description: 'Streamlined user experience that increased lead generation by 50%.',
      tags: ['Websites', 'Branding'],
      category: 'Websites'
    },
    {
      title: 'Tech Startup',
      description: 'Fast-loading, mobile-first design that boosted sign-ups by 40%.',
      tags: ['Websites', 'Branding'],
      category: 'Websites'
    },
    {
      title: 'Financial Services',
      description: 'Trust-focused design that improved form completions by 55%.',
      tags: ['Websites', 'SEO'],
      category: 'Websites'
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter || project.tags.includes(activeFilter))

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-blue-50/40 via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={heroRef}>
            {/* Left Column - Text */}
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black leading-[1.05] mb-6 md:mb-8 break-words tracking-tight">
                Our Portfolio
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight max-w-2xl">
                Real results from real clients. See how we've helped businesses grow with conversion-optimized websites and marketing systems.
              </p>
            </div>

            {/* Right Column - Abstract Visual */}
            <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[#00A5FF]/15 via-blue-100/20 to-slate-100/40 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00A5FF]/5 to-transparent"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#00A5FF]/25 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 border-4 border-[#00A5FF]/30 rounded-xl rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#00A5FF] text-white shadow-lg shadow-[#00A5FF]/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Screenshot Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed tracking-slight mb-6">{project.description}</p>
                  <div className="flex gap-3">
                    <button className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors text-sm">
                      View Live →
                    </button>
                    <button className="text-gray-600 font-medium hover:text-black transition-colors text-sm">
                      Case Study →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="aspect-square md:aspect-auto bg-gradient-to-br from-[#00A5FF]/20 via-blue-100/30 to-slate-100/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00A5FF]/10 to-transparent"></div>
              </div>
              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 bg-[#00A5FF]/10 text-[#00A5FF] text-sm font-medium rounded-full mb-6 w-fit">
                  Featured Case Study
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
                  E-Commerce Platform Redesign
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-slight mb-8">
                  A complete website redesign that increased conversions by 45% in the first quarter. We rebuilt the entire user experience, optimized for mobile, and implemented advanced conversion tracking.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div>
                    <div className="text-3xl font-semibold text-[#00A5FF] mb-1">+45%</div>
                    <div className="text-sm text-gray-600">Conversion Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-[#00A5FF] mb-1">-60%</div>
                    <div className="text-sm text-gray-600">Bounce Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-[#00A5FF] mb-1">+120%</div>
                    <div className="text-sm text-gray-600">Mobile Sales</div>
                  </div>
                </div>
                <Button href="/contact" variant="primary" className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]">
                  Read Full Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-50/50 via-slate-50/30 to-blue-50/50" ref={testimonialRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-[#00A5FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed tracking-slight mb-6">
                  "Working with Yeelden transformed our online presence completely. The new website not only looks incredible but has increased our revenue by 45% in just three months. The one-week turnaround was impressive, and the ongoing support has been exceptional."
                </p>
                <div>
                  <p className="font-semibold text-black text-lg">Sarah Johnson</p>
                  <p className="text-gray-500">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight">
              Get a free audit to see how we can transform your online presence, or explore our pricing to find the perfect plan.
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
