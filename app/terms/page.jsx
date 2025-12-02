export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-8 tracking-tight leading-[1.1]">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mb-6">
              Please read these Terms of Service ("Terms") carefully before using Yeelden's website and services.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Agreement to Terms</h2>
            <p className="mb-6">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Services</h2>
            <p className="mb-6">
              Yeelden provides website development, SEO, PPC, and related digital marketing services. We deliver websites within one week of project kickoff, subject to client cooperation and timely content delivery.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Payment Terms</h2>
            <p className="mb-6">
              Website build projects require a 50% deposit to begin work, with the remaining balance due upon completion. Monthly subscription plans are billed automatically on a recurring basis.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Intellectual Property</h2>
            <p className="mb-6">
              Upon full payment, you own the website and its content. Yeelden retains the right to use your project in our portfolio and marketing materials unless otherwise agreed.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              Yeelden shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:hello@yeelden.com" className="text-[#00A5FF] hover:underline">
                hello@yeelden.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

