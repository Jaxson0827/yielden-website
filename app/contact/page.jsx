'use client'

import SectionHeader from '@/components/SectionHeader'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder handler
    console.log('Form submitted')
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Get in Touch"
              subtitle="Have a question? Want to start a project? We'd love to hear from you."
            />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A5FF] transition-colors"
                  placeholder="Your name"
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A5FF] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A5FF] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#00A5FF] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#0095E6] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

