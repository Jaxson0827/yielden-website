import Link from 'next/link'

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) {
  const baseClasses = 'px-8 py-4 rounded-lg font-medium text-lg transition-colors text-center'
  const variants = {
    primary: 'bg-[#00A5FF] text-white hover:bg-[#0095E6]',
    secondary: 'bg-white border-2 border-gray-200 text-black hover:border-gray-300'
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

