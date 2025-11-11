'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [imageError, setImageError] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home', anchor: null },
    { href: '/books', label: 'Books', anchor: null },
    { href: '/upcoming', label: 'Upcoming Releases', anchor: '#upcoming-releases' },
    { href: '/about', label: 'About', anchor: '#about' },
    { href: '/contact', label: 'Contact', anchor: '#contact' },
  ]

  const getLinkHref = (href: string, anchor: string | null) => {
    if (pathname === '/' && anchor) {
      return anchor
    }
    return href
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="hover:opacity-80 transition-opacity duration-300"
            aria-label="S. B. Lennox Home"
          >
            {!imageError ? (
              <Image
                src="/books/logosb.jpg"
                alt="S. B. Lennox"
                width={200}
                height={60}
                className="w-[140px] md:w-[180px] h-auto object-contain"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="font-display text-2xl md:text-3xl font-bold text-redAccent">
                S. B. Lennox
              </span>
            )}
          </Link>
          
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const linkHref = getLinkHref(link.href, link.anchor)
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={linkHref}
                    className={`relative font-display text-sm uppercase tracking-wider transition-colors duration-300 hover:text-redAccent ${
                      isActive ? 'text-redAccent' : 'text-gray-600'
                    }`}                    
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-redAccent animate-fade-in" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}


