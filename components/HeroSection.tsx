'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-up">
        <div className="flex justify-center mb-6">
          <Image
            src="/books/logosb.jpg"
            alt="S. B. Lennox"
            width={300}
            height={120}
            className="w-auto h-24 md:h-32"
            priority
          />
        </div>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light tracking-wide">
          Love isn't gentle in my stories. It's dangerous, consuming, and unforgettable.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a
            href="#books"
            className="px-8 py-3 bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300 hover-glow rounded-sm"
          >
            Explore Books
          </a>
          <a
            href="#about"
            className="px-8 py-3 border-2 border-redAccent text-redAccent hover:bg-redAccent hover:text-white font-display uppercase tracking-wider transition-all duration-300 rounded-sm"
          >
            About the Author
          </a>
        </div>
      </div>
    </section>
  )
}


