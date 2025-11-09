import HeroSection from '@/components/HeroSection'
import BookCard from '@/components/BookCard'
import { books } from '@/data/books'
import { upcoming } from '@/data/upcoming'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // Show all books in compact grid
  const featuredBooks = books

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Books Section */}
      <section id="books" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-black mb-10 animate-fade-up">
            Books
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredBooks.map((book) => (
              <BookCard
                key={book.slug}
                slug={book.slug}
                title={book.title}
                coverImage={book.coverImage}
                description={book.description}
                releaseDate={book.releaseDate}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/books"
              className="inline-block px-8 py-3 border-2 border-redAccent text-redAccent hover:bg-redAccent hover:text-white font-display uppercase tracking-wider transition-all duration-300 rounded-sm"
            >
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section id="upcoming-releases" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-black mb-10">
            Upcoming Releases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcoming.slice(0, 3).map((u) => (
              <article key={u.slug} className="rounded-lg p-5 bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg ring-1 ring-black/10 bg-gray-50">
                      {u.coverImage ? (
                        <Image 
                          src={u.coverImage} 
                          alt={u.title} 
                          fill 
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full grid place-items-center text-gray-400 text-sm text-center p-4">
                          Cover coming soon
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <h3 className="font-display text-xl font-bold text-black mb-2">{u.title}</h3>

                    {u.status && (
                      <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
                        <span className="px-2 py-1 rounded-full bg-gray-100 ring-1 ring-black/10 text-gray-800">
                          {u.status}
                        </span>
                        {u.plannedDate && (
                          <span className="px-2 py-1 rounded-full bg-gray-100 ring-1 ring-black/10 text-gray-800">
                            {u.plannedDate}
                          </span>
                        )}
                      </div>
                    )}

                    {u.tagline && (
                      <p className="text-sm text-gray-700 leading-relaxed">{u.tagline}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/upcoming"
              className="inline-block px-8 py-3 border-2 border-redAccent text-redAccent hover:bg-redAccent hover:text-white font-display uppercase tracking-wider transition-all duration-300 rounded-sm"
            >
              View All Upcoming Releases
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Black Band */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Get Release News & Bonuses
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Stay updated with new releases and exclusive content.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300 rounded-sm"
          >
            Join Newsletter
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-black mb-8">
            About
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi! I'm S. B. Lennox! I write dark romance with strong, resilient heroines and over the top possessive heroes who only have eyes for them. If you love intense, all-consuming love stories where the hero falls hard, and never let's go, you're in the right place. Thank you for reading and supporting my stories, it means the world!
            </p>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/about"
              className="inline-block px-8 py-3 border-2 border-redAccent text-redAccent hover:bg-redAccent hover:text-white font-display uppercase tracking-wider transition-all duration-300 rounded-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-black mb-8">
            Contact
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm text-center">
            <p className="text-gray-700 mb-6">
              Have a question or want to connect? I'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300 rounded-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
