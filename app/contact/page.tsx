'use client'

export default function Contact() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Have a question or want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 animate-fade-up shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-redAccent font-display mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-redAccent transition-colors duration-300 text-black"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-redAccent font-display mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-redAccent transition-colors duration-300 text-black"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-redAccent font-display mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-redAccent transition-colors duration-300 text-black"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-redAccent font-display mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-redAccent transition-colors duration-300 text-black resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-redAccent hover:bg-redAccentHover text-white font-display uppercase tracking-wider transition-all duration-300 hover-glow rounded-sm"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-display text-2xl font-bold text-redAccent mb-4">
              Other Ways to Connect
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="text-redAccent font-semibold">Email:</span> s.b.lennoxauthor@gmail.com
              </p>
              <p>
                <span className="text-redAccent font-semibold">Social Media:</span> Follow me on your favorite platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


