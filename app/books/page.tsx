import BookCard from '@/components/BookCard'
import { books } from '@/data/books'

export default function Books() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4">
            Books
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the romance collection by S. B. Lennox
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {books.map((book) => (
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
      </div>
    </div>
  )
}
