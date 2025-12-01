import SectionHeader from '@/components/SectionHeader'
import Button from '@/components/Button'

export default function About() {
  const values = [
    {
      title: 'Excellence',
      description: 'We deliver high-quality work that meets the highest standards, every time.'
    },
    {
      title: 'Transparency',
      description: 'Clear communication, honest reporting, and no hidden surprises.'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Every strategy and optimization is backed by real data and measurable results.'
    },
    {
      title: 'Customer-First Design',
      description: 'Your success is our success—we build with your goals and your customers in mind.'
    }
  ]

  const differentiators = [
    {
      title: 'Fast Turnaround',
      description: 'Get your website live in 48 hours without compromising on quality or conversion optimization.'
    },
    {
      title: 'AI-Enhanced Workflows',
      description: 'Leverage cutting-edge AI to streamline development and optimize every element for maximum performance.'
    },
    {
      title: 'Transparent Reporting',
      description: 'Clear, actionable insights delivered through your Yeelden Portal so you always know what\'s working.'
    },
    {
      title: 'Modern, Clean Design',
      description: 'Professional aesthetics that build trust and guide visitors toward conversion without distraction.'
    }
  ]

  const processSteps = [
    {
      title: 'Audit',
      description: 'We analyze your current website and identify opportunities for improvement.'
    },
    {
      title: 'Build',
      description: 'Your new website is designed and developed with AI-powered optimization in 48 hours.'
    },
    {
      title: 'Launch',
      description: 'We handle hosting, deployment, and ensure everything is running smoothly.'
    },
    {
      title: 'Optimize',
      description: 'Continuous monitoring and improvements based on real performance data.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader 
            title="Who We Are"
            subtitle="Yeelden builds modern, AI-powered websites and marketing systems designed to help small businesses grow."
          />
        </div>
      </section>

      {/* MISSION + VALUES SECTION */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Column */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-4 md:mb-6">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Yeelden's mission is to make high-performance, conversion-focused websites accessible, affordable, and fast for small businesses.
              </p>
            </div>

            {/* Values Column */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-4 md:mb-6">
                Our Values
              </h2>
              <ul className="space-y-4 md:space-y-5">
                {values.map((value, index) => (
                  <li key={index}>
                    <h3 className="text-lg md:text-xl font-medium text-black mb-2">{value.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader 
            title="What Makes Us Different"
            subtitle="The principles and practices that set Yeelden apart."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg border border-gray-100">
                <h3 className="text-lg md:text-xl font-medium text-black mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader 
            title="Our Process"
            subtitle="A simple, proven approach to building and optimizing your website."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg border border-gray-100">
                <h3 className="text-lg md:text-xl font-medium text-black mb-3 md:mb-4">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-4 md:mb-6">
              Ready to grow with Yeelden?
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
