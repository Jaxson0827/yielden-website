'use client'

import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import { useEffect, useRef, useState } from 'react'

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const heroRef = useRef(null)

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

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
    }
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const websitePlans = [
    {
      name: 'Starter Site',
      price: '$999',
      description: 'Perfect for small businesses getting started online.',
      features: [
        'Up to 3 pages',
        'Modern, mobile-responsive design',
        'Professional copy layout',
        'Basic on-page SEO',
        'Contact form + lead routing',
        '1-week delivery',
        'Hosting included for first month'
      ],
      popular: false
    },
    {
      name: 'Growth Site',
      price: '$1,199',
      description: 'Ideal for growing businesses that need more features.',
      features: [
        'Up to 5 pages',
        'Enhanced design system (sections, components, branding)',
        'Full on-page SEO optimization',
        'Lead capture + CRM setup',
        'Blog templates or content hub setup',
        'Speed optimization',
        '1-week delivery',
        'Priority support during build'
      ],
      popular: true
    },
    {
      name: 'Business Site',
      price: '$1,999',
      description: 'Complete solution for established businesses.',
      features: [
        'Up to 10 pages',
        'Custom design sections',
        'API integrations and automations',
        'Full analytics + tracking setup',
        'Heatmaps + user behavior insights',
        'Conversion optimization framework',
        'Custom funnels or landing pages',
        '1-week delivery guarantee'
      ],
      popular: false
    }
  ]

  const subscriptionPlans = [
    {
      name: 'Growth Plan',
      price: '$79',
      period: '/mo',
      description: 'Affordable monthly support.',
      features: [
        'Up to 2 site updates per month',
        'Monthly light SEO maintenance',
        'Performance monitoring',
        'Hosting included',
        'Access to the AI Website Assistant (smart on-site chatbot for lead capture + customer Q&A)'
      ],
      popular: false
    },
    {
      name: 'Marketing Accelerator',
      price: '$299',
      period: '/mo',
      description: 'Full "done-for-you" growth plan.',
      features: [
        'Everything in Growth Plan',
        'Full SEO management',
        'Google + Meta Ads management',
        'Monthly performance reports',
        'Conversion tracking setup',
        'Funnel consulting',
        'Ongoing optimization for site + ads'
      ],
      popular: true
    }
  ]

  const comparisonFeatures = [
    { feature: 'Pages included', starter: 'Up to 3', growth: 'Up to 5', business: 'Up to 10' },
    { feature: 'Delivery time', starter: '1 week', growth: '1 week', business: '1 week' },
    { feature: 'SEO level', starter: 'Basic', growth: 'Full', business: 'Full + Advanced' },
    { feature: 'Updates included', starter: false, growth: false, business: false },
    { feature: 'CRM setup', starter: true, growth: true, business: true },
    { feature: 'Analytics', starter: 'Basic', growth: 'Full', business: 'Full + Heatmaps' },
    { feature: 'Integrations', starter: false, growth: false, business: true },
    { feature: 'PPC management', starter: false, growth: false, business: false },
    { feature: 'Access to AI Assistant', starter: false, growth: false, business: false }
  ]

  const renderComparisonValue = (value) => {
    if (value === true) {
      return (
        <svg className="w-5 h-5 text-[#00A5FF] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    } else if (value === false) {
      return <span className="text-gray-400">—</span>
    }
    return <span className="text-gray-700">{value}</span>
  }

  const faqs = [
    {
      question: 'Why is pricing so affordable?',
      answer: 'We use AI-powered tools and streamlined processes to deliver high-quality websites faster and more efficiently. This allows us to pass the savings on to you while maintaining premium quality and results.'
    },
    {
      question: 'What does the 1-week turnaround include?',
      answer: 'The 1-week turnaround includes complete design, development, content optimization, SEO setup, and testing. Your website will be fully functional and ready to launch at the end of the week.'
    },
    {
      question: 'Can I upgrade later?',
      answer: 'Absolutely! You can upgrade to a higher tier at any time. We\'ll apply your previous payment as credit toward the new plan, making the transition seamless.'
    },
    {
      question: 'Does hosting come included?',
      answer: 'Yes, all website build plans include hosting for the first month. After that, you can continue with our hosting service or use your own provider. Monthly subscription plans include hosting as part of the package.'
    },
    {
      question: 'What does the AI Website Assistant do?',
      answer: 'The AI Website Assistant is a smart chatbot that helps capture leads, answer customer questions, and guide visitors through your site. It\'s included with Growth Plan and Marketing Accelerator subscriptions.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and PayPal. Website builds require a 50% deposit to start, with the remainder due upon completion. Monthly plans are billed automatically.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-blue-50/40 via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={heroRef}>
            {/* Left Column - Text */}
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black leading-[1.05] mb-6 md:mb-8 break-words tracking-tight">
                Simple, Transparent Pricing.
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight max-w-2xl">
                Affordable, startup-friendly pricing designed to help small businesses grow online without breaking the bank.
              </p>
            </div>

            {/* Right Column - Hero Image */}
            <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[#00A5FF]/15 via-blue-100/20 to-slate-100/40 shadow-2xl overflow-hidden">
                <Image
                  src="/images/pricing/pricing-header.webp"
                  alt="Pricing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE BUILD PRICING */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Website Build Pricing
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              One-time payment. One-week delivery. Everything you need to launch online.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {websitePlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-[#00A5FF] shadow-lg shadow-[#00A5FF]/10 relative'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#00A5FF] text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00A5FF]/10 to-blue-100/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3 tracking-tight">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-semibold text-black">{plan.price}</span>
                  <span className="text-base md:text-lg text-gray-600 ml-2">one-time</span>
                </div>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed tracking-slight">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#00A5FF] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHLY SUBSCRIPTION PLANS */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Monthly Subscription Plans
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              Ongoing support and growth services to keep your website performing at its best.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-[#00A5FF] shadow-lg shadow-[#00A5FF]/10'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-4 py-1.5 bg-[#00A5FF]/10 text-[#00A5FF] text-sm font-medium rounded-full mb-6">
                    Recommended
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00A5FF]/10 to-blue-100/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3 tracking-tight">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-semibold text-black">{plan.price}</span>
                  <span className="text-base md:text-lg text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed tracking-slight">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#00A5FF] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Compare Plans
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              See exactly what's included in each plan.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-black">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-black">Starter Site</th>
                    <th className="text-center py-4 px-6 font-semibold text-black">Growth Site</th>
                    <th className="text-center py-4 px-6 font-semibold text-black">Business Site</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center">{renderComparisonValue(row.starter)}</td>
                      <td className="py-4 px-6 text-center">{renderComparisonValue(row.growth)}</td>
                      <td className="py-4 px-6 text-center">{renderComparisonValue(row.business)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-black pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-[#00A5FF] flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-slight">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-lg p-12 md:p-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight">
              Get a free audit to see how we can help, or start your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit" variant="primary" className="px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]">
                Get a Free Audit
              </Button>
              <Button href="/contact" variant="secondary" className="px-8 py-4 rounded-xl text-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
