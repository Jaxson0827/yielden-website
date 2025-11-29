import SectionHeader from '@/components/SectionHeader'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black leading-tight mb-6">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We build websites that make money. Fast, optimized, and conversion-focused.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Our Mission"
            subtitle="To help businesses grow faster with AI-powered, conversion-optimized websites that deliver real results."
          />
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Yeelden, we believe every business deserves a website that works as hard as they do. 
                That's why we've built a process that delivers high-converting websites in just 48 hours, 
                powered by AI and backed by data.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine cutting-edge technology with proven conversion strategies to create websites 
                that don't just look great—they make money. Every design decision, every line of code, 
                every optimization is focused on one thing: turning visitors into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="What Makes Yeelden Different"
            subtitle="We're not just another web agency. Here's what sets us apart."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Speed Without Compromise</h3>
              <p className="text-gray-600 leading-relaxed">
                48-hour delivery doesn't mean cutting corners. We use AI and automation to work faster, 
                not sacrifice quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-600 leading-relaxed">
                Every element is tested and optimized based on real conversion data, not guesswork or trends.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">AI-Powered Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage the latest AI tools to optimize every aspect of your site for maximum conversions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

