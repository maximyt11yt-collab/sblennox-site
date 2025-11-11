'use client'

import Link from 'next/link'

interface AmazonButtonProps {
  href: string
  label?: string
}

export default function AmazonButton({ href, label = 'Purchase on Amazon' }: AmazonButtonProps) {
  if (!href) {
    return null
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-8 py-3 bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300 rounded-sm hover:shadow-[0_0_15px_rgba(122,20,36,0.4)] hover:scale-[1.02] hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-redAccent focus:ring-offset-2"
    >
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M23.27 19.285H7.296l-2.29 3.714H0l9.596-15.5L15.5 0h5.206l-7.5 12.5 7.5 12.5h-2.93zm-11.5-3.714l5.5-9.5 5.5 9.5h-11z" />
      </svg>
      <span>{label}</span>
    </Link>
  )
}


