export default function TestimonialCard({ quote, author, role, company }) {
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="mb-6">
        <svg className="w-8 h-8 text-[#00A5FF]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {quote}
      </p>
      <div>
        <p className="font-medium text-black">{author}</p>
        <p className="text-gray-500 text-sm">{role}, {company}</p>
      </div>
    </div>
  )
}

