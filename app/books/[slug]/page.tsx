import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { books } from '@/data/books'
import ExpandableText from '@/components/ExpandableText'

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }))
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function BookPage({ params }: PageProps) {
  const book = books.find((b) => b.slug === params.slug)

  if (!book) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <Link 
          href="/books"
          className="inline-flex items-center text-gray-600 hover:text-redAccent transition-colors duration-300 mb-8 group"
        >
          <span className="mr-2">←</span>
          <span className="group-hover:underline">Back to Books</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="max-w-sm mx-auto lg:mx-0">
            <div className="relative aspect-[2/3] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow-sm ring-1 ring-black/10">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-black">
              {book.title}
            </h1>

            <div className="flex flex-wrap gap-3 text-sm">
              {book.releaseDate && (
                <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded text-gray-700">
                  Released: {book.releaseDate}
                </span>
              )}
              {book.pages && (
                <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded text-gray-700">
                  {book.pages} Pages
                </span>
              )}
            </div>

            <div className="pt-4">
              <ExpandableText text={book.fullDescription} maxLength={200} />
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Link
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300 hover-glow rounded-sm"
              >
                Purchase on Amazon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
