import Link from 'next/link'

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white border border-gray-100 p-8 rounded-lg hover:border-gray-200 transition-colors">
      <div className="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-medium text-black mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>
      <Link
        href="/contact"
        className="text-[#00A5FF] font-medium hover:text-[#0095E6] transition-colors inline-flex items-center"
      >
        Contact Us
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

