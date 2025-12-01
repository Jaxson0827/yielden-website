'use client'

import SectionHeader from '@/components/SectionHeader'

export default function Audit() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder handler
    console.log('Audit form submitted')
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Free Website Audit"
              subtitle="Get a comprehensive analysis of your website's performance, SEO, and conversion opportunities."
            />
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-black mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A5FF] transition-colors text-base"
                  placeholder="Your business name"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-black mb-2">
                  Current Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A5FF] transition-colors text-base"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A5FF] transition-colors text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="seo"
                  name="seo"
                  className="mt-1 mr-3 w-5 h-5 text-[#00A5FF] border-gray-300 rounded focus:ring-[#00A5FF] flex-shrink-0"
                />
                <label htmlFor="seo" className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  I want SEO analysis included in my audit
                </label>
              </div>
              <div className="pt-2 md:pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#00A5FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-[#0095E6] transition-colors"
                >
                  Get My Free Audit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

