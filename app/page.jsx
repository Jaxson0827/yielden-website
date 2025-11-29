import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-semibold text-black">
              Yeelden
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-black transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-black transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
                Contact
              </Link>
            </nav>
            <Link
              href="/audit"
              className="bg-[#00A5FF] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0095E6] transition-colors"
            >
              Get a Free Audit
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black leading-tight mb-6">
              Websites Built to Make Money.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              AI-powered, conversion-optimized websites built in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="bg-[#00A5FF] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#0095E6] transition-colors text-center"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/pricing"
                className="bg-white border-2 border-gray-200 text-black px-8 py-4 rounded-lg font-medium text-lg hover:border-gray-300 transition-colors text-center"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-medium text-black text-center mb-16">
            Why Yeelden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Fast 48-Hour Builds</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your website live in just two days, without compromising on quality or conversion optimization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">AI Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage cutting-edge AI to optimize every element for maximum conversions and user engagement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Built to Convert</h3>
              <p className="text-gray-600 leading-relaxed">
                Every design decision is backed by conversion data to turn visitors into customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Tracking + Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive analytics and tracking built-in so you know exactly what's working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-medium text-black text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-100 p-8 rounded-lg hover:border-gray-200 transition-colors">
              <h3 className="text-2xl font-medium text-black mb-4">Website Builds</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom websites designed to convert visitors into customers, built in 48 hours.
              </p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-lg hover:border-gray-200 transition-colors">
              <h3 className="text-2xl font-medium text-black mb-4">SEO</h3>
              <p className="text-gray-600 leading-relaxed">
                Search engine optimization that drives organic traffic and increases visibility.
              </p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-lg hover:border-gray-200 transition-colors">
              <h3 className="text-2xl font-medium text-black mb-4">PPC</h3>
              <p className="text-gray-600 leading-relaxed">
                Pay-per-click campaigns that maximize ROI and scale your business growth.
              </p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-lg hover:border-gray-200 transition-colors">
              <h3 className="text-2xl font-medium text-black mb-4">Yeelden Portal</h3>
              <p className="text-gray-600 leading-relaxed">
                Your dedicated dashboard to track performance, request changes, and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-medium text-black text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A5FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-medium">1</span>
              </div>
              <h3 className="text-2xl font-medium text-black mb-4">Build</h3>
              <p className="text-gray-600 leading-relaxed">
                We create your conversion-optimized website using AI-powered design and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A5FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-medium">2</span>
              </div>
              <h3 className="text-2xl font-medium text-black mb-4">Launch</h3>
              <p className="text-gray-600 leading-relaxed">
                Your website goes live in 48 hours, fully optimized and ready to convert visitors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A5FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-medium">3</span>
              </div>
              <h3 className="text-2xl font-medium text-black mb-4">Optimize</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous optimization based on real data to improve conversions and performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A5FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-medium">4</span>
              </div>
              <h3 className="text-2xl font-medium text-black mb-4">Grow</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale your business with data-driven insights and ongoing support from our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-medium text-black text-center mb-16">
            Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Portfolio Screenshot {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-medium text-black text-center mb-16">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-6">
                <svg className="w-8 h-8 text-[#00A5FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "Yeelden transformed our online presence. Our conversion rate increased by 40% in the first month."
              </p>
              <div>
                <p className="font-medium text-black">Sarah Johnson</p>
                <p className="text-gray-500 text-sm">CEO, TechStart Inc.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-6">
                <svg className="w-8 h-8 text-[#00A5FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "The 48-hour turnaround was incredible. The website looks amazing and performs even better."
              </p>
              <div>
                <p className="font-medium text-black">Michael Chen</p>
                <p className="text-gray-500 text-sm">Founder, Growth Labs</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-6">
                <svg className="w-8 h-8 text-[#00A5FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "Best investment we've made. The AI optimization features are game-changing for our business."
              </p>
              <div>
                <p className="font-medium text-black">Emily Rodriguez</p>
                <p className="text-gray-500 text-sm">Marketing Director, ScaleUp Co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-4">Yeelden</h3>
              <p className="text-gray-600 leading-relaxed">
                Websites built to make money. Fast, optimized, and conversion-focused.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-black mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-600 hover:text-black transition-colors">Website Builds</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-black transition-colors">SEO</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-black transition-colors">PPC</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-black transition-colors">Yeelden Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-black transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>hello@yeelden.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Yeelden. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

