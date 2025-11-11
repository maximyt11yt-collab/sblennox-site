import Link from 'next/link'
import Image from 'next/image'

interface BookCardProps {
  slug: string
  title: string
  coverImage?: string
  description?: string
  releaseDate?: string
}

export default function BookCard({ 
  slug, 
  title, 
  coverImage, 
  description, 
  releaseDate 
}: BookCardProps) {
  return (
    <Link 
      href={`/books/${slug}`}
      className="group block"
    >
      <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-redAccent/50 ring-1 ring-black/10 h-full">
        <div className="aspect-[2/3] relative bg-gray-50 overflow-hidden">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-4xl">📚</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-3">
          <h3 className="font-display text-lg font-bold text-black mb-1.5 group-hover:text-redAccent transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-gray-600 text-xs mb-2 line-clamp-2">
              {description}
            </p>
          )}
          {releaseDate && (
            <p className="text-gray-500 text-xs uppercase tracking-wider">
              {releaseDate}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}


