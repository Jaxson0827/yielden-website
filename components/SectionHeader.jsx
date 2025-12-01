export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-4 md:mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
          {subtitle}
        </p>
      )}
    </div>
  )
}


