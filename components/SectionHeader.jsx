export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-medium text-black mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

