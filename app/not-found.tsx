import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="text-center px-4">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-black mb-4">
          404
        </h1>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-redAccent mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300 hover-glow rounded-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}


