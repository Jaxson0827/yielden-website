import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'

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

  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Our Services"
            subtitle="Everything you need to build, optimize, and grow your online presence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </main>
  )
}

