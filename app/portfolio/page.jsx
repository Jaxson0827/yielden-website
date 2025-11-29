import SectionHeader from '@/components/SectionHeader'
import PortfolioCard from '@/components/PortfolioCard'
import Button from '@/components/Button'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Complete redesign that increased conversions by 45% in the first quarter.'
    },
    {
      title: 'SaaS Landing Page',
      description: 'Conversion-optimized landing page that reduced bounce rate by 60%.'
    },
    {
      title: 'Healthcare Website',
      description: 'Modern, accessible design that improved patient engagement by 35%.'
    },
    {
      title: 'B2B Service Site',
      description: 'Streamlined user experience that increased lead generation by 50%.'
    },
    {
      title: 'Tech Startup',
      description: 'Fast-loading, mobile-first design that boosted sign-ups by 40%.'
    },
    {
      title: 'Financial Services',
      description: 'Trust-focused design that improved form completions by 55%.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Our Portfolio"
            subtitle="Real results from real clients. See how we've helped businesses grow."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
          <div className="text-center">
            <Button href="/contact" variant="primary">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

