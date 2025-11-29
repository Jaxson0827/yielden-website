'use client'

import SectionHeader from '@/components/SectionHeader'
import Button from '@/components/Button'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,997',
      description: 'Perfect for small businesses getting started online.',
      features: [
        '48-hour website build',
        'Up to 5 pages',
        'Mobile responsive design',
        'Basic SEO setup',
        'Contact form integration',
        '30 days of support'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$4,997',
      description: 'Ideal for growing businesses that need more features.',
      features: [
        '48-hour website build',
        'Up to 10 pages',
        'Advanced SEO optimization',
        'Analytics integration',
        'Email marketing setup',
        '90 days of support',
        'Yeelden Portal access'
      ],
      popular: true
    },
    {
      name: 'Scale',
      price: '$7,997',
      description: 'Complete solution for established businesses.',
      features: [
        '48-hour website build',
        'Unlimited pages',
        'Full SEO + PPC setup',
        'Custom integrations',
        'Priority support',
        '6 months of support',
        'Yeelden Portal access',
        'Monthly optimization reports'
      ],
      popular: false
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Pricing"
            subtitle="Choose the plan that's right for your business. All plans include our 48-hour build guarantee."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg p-8 ${
                  plan.popular
                    ? 'border-[#00A5FF] shadow-lg'
                    : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="bg-[#00A5FF] text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-medium text-black mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-medium text-black">{plan.price}</span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#00A5FF] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

