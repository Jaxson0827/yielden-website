export default function PortfolioCard({ title, description, image }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition-colors">
      <div className="bg-gray-100 aspect-video flex items-center justify-center">
        {image || (
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 text-sm">Project Image</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-black mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

