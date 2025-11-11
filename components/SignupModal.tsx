'use client'

import { useEffect, useState } from 'react'

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasShown = sessionStorage.getItem('signupModalShown')
    if (hasShown) return

    // Wait 75 seconds before showing
    const timer = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem('signupModalShown', 'true')
    }, 75000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-8 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="font-display text-2xl font-bold text-black mb-2">
          Get Release News & Bonuses
        </h2>
        <p className="text-gray-600 mb-6">
          Stay updated with new releases and exclusive content.
        </p>

        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault()
            // TODO: replace with Mailchimp/ConvertKit form action
            alert('Thank you! This will be connected to your email service soon.')
            setIsOpen(false)
          }}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-redAccent transition-colors text-black"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300 rounded-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}








