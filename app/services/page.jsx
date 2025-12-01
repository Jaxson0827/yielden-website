import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/Button'

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Website Builds',
      description: 'Custom websites designed to convert visitors into customers, built in 48 hours with AI-powered optimization.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'SEO',
      description: 'Search engine optimization that drives organic traffic and increases visibility in search results.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'PPC',
      description: 'Pay-per-click campaigns that maximize ROI and scale your business growth with data-driven strategies.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Yeelden Portal',
      description: 'Your dedicated dashboard to track performance, request changes, and grow your business with real-time insights.'
    }
  ]

  const whyYeelden = [
    {
      title: 'Faster Build Cycles',
      description: 'Get your website live in 48 hours without compromising on quality or conversion optimization.'
    },
    {
      title: 'Transparent Reporting',
      description: 'Clear, actionable insights delivered through your Yeelden Portal so you always know what\'s working.'
    },
    {
      title: 'AI-Powered Optimization',
      description: 'Leverage cutting-edge AI to optimize every element for maximum conversions and user engagement.'
    },
    {
      title: 'Modern, Clean Design',
      description: 'Professional aesthetics that build trust and guide visitors toward conversion without distraction.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader 
            title="Everything You Need to Grow Online"
            subtitle="Professional websites, SEO, PPC, and analytics — all powered by AI."
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button href="/audit" variant="primary">
              Get a Free Audit
            </Button>
            <Button href="/pricing" variant="secondary">
              See Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* OVERVIEW GRID */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE BUILDS DEEP-DIVE */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Website Builds"
              subtitle="Conversion-optimized websites built fast with AI-enhanced design and proven best practices."
            />
            <ul className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <li>AI-enhanced content and design</li>
              <li>48-hour turnaround structure</li>
              <li>Conversion optimization</li>
              <li>Mobile-first development</li>
              <li>Hosting & maintenance options</li>
              <li>Analytics installation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEO DEEP-DIVE */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="SEO"
              subtitle="Drive organic traffic and improve search visibility with comprehensive optimization strategies."
            />
            <ul className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <li>Keyword research</li>
              <li>Technical optimization</li>
              <li>On-page improvements</li>
              <li>Backlink strategy</li>
              <li>Ranking insights & traffic reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PPC DEEP-DIVE */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="PPC"
              subtitle="Maximize ROI with data-driven campaigns that scale your business growth efficiently."
            />
            <ul className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <li>Campaign setup and management</li>
              <li>Google + Meta ads</li>
              <li>Targeting & conversion tracking</li>
              <li>Daily optimization</li>
              <li>Clear performance reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* YEELDEN PORTAL DEEP-DIVE */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Yeelden Portal"
              subtitle="Your dedicated dashboard for tracking performance, managing requests, and growing your business."
            />
            <ul className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <li>Dashboard with analytics</li>
              <li>Lead tracking</li>
              <li>SEO + PPC reporting</li>
              <li>Review generator (future)</li>
              <li>AI assistant (future)</li>
              <li>Clean, simple interface</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY YEELDEN SECTION */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader 
            title="Why Yeelden"
            subtitle="What sets us apart in delivering results for your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyYeelden.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg border border-gray-100">
                <h3 className="text-lg md:text-xl font-medium text-black mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-4 md:mb-6">
              Ready to grow?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
              Get a free audit and see how your website can perform.
            </p>
            <Button href="/audit" variant="primary">
              Get a Free Audit
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
