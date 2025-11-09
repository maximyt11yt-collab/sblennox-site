import Image from "next/image";
import Link from "next/link";
import { upcoming } from "@/data/upcoming";

export const metadata = {
  title: "Upcoming Releases | S. B. Lennox",
  description: "Teasers, dates, and preorder links for upcoming releases.",
};

export default function UpcomingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 bg-white">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-black mb-8">Upcoming Releases</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {upcoming.map((u) => (
          <article key={u.slug} className="rounded-lg p-6 bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
                <h2 className="font-display text-2xl font-bold text-black mb-3">{u.title}</h2>

                {(u.status || u.plannedDate) && (
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    {u.status && (
                      <span className="px-3 py-1 rounded-full bg-gray-100 ring-1 ring-black/10 text-gray-800">
                        Status: {u.status}
                      </span>
                    )}
                    {u.plannedDate && (
                      <span className="px-3 py-1 rounded-full bg-gray-100 ring-1 ring-black/10 text-gray-800">
                        Target: {u.plannedDate}
                      </span>
                    )}
                  </div>
                )}

                {u.tagline && (
                  <p className="mt-4 leading-7 text-gray-700">{u.tagline}</p>
                )}

                {u.preorder?.link && (
                  <div className="mt-6">
                    <Link 
                      href={u.preorder.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex px-5 py-3 rounded-sm bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300"
                    >
                      Preorder
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
