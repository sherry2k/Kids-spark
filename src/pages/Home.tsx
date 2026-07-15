export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50" style={{ fontFamily: 'Nunito, sans-serif' }}>
      {/* Floating Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>🌟</div>
        <div className="absolute top-40 right-20 text-5xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>🎨</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1s' }}>🎮</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }}>📚</div>
        <div className="absolute top-1/3 left-1/4 text-4xl animate-pulse">✨</div>
        <div className="absolute top-1/2 right-1/4 text-4xl animate-pulse" style={{ animationDelay: '1s' }}>💫</div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform">
              <img src="public/icon.png" alt="KidSpark" className="w-8 h-8 rounded" />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              KidSpark
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <a
              href="https://kidspark-bay.vercel.app/privacy-policy"
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors hidden sm:block"
            >
              Privacy Policy
            </a>
            <a
              href="#download"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Get App 📱
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
            <span className="text-xl">🎓</span>
            <span className="text-sm font-semibold text-gray-700">Educational App for Kids</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">FREE</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Learning Made
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              Fun & Exciting!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            KidSpark helps children learn through play with colorful games, 
            interactive activities, and engaging challenges designed by educators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="download">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
            <a
              href="/"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <span className="text-3xl">🌐</span>
              <div className="text-left">
                <div className="text-xs text-purple-100">PLAY NOW</div>
                <div className="text-lg font-bold">Web Version</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Kids Love KidSpark
          </span>
          <span className="text-3xl ml-2">💖</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-3xl">🎮</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fun Learning Games</h3>
            <p className="text-gray-600">Interactive games that make learning feel like playtime!</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Brain Boosters</h3>
            <p className="text-gray-600">Puzzles and challenges that develop critical thinking skills.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Creative Activities</h3>
            <p className="text-gray-600">Art and creativity exercises to spark imagination.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">ABC & 123</h3>
            <p className="text-gray-600">Learn letters, numbers, and basic math in a fun way!</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">100% Safe</h3>
            <p className="text-gray-600">No ads, no data collection, safe for children.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Works Offline</h3>
            <p className="text-gray-600">Play anytime, anywhere - no internet needed!</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Trusted by Parents Everywhere 👨‍👩‍👧‍👦
          </h2>
          <p className="text-lg text-white/90 mb-6">
            KidSpark is designed with your child's safety and education in mind. 
            No personal data is ever collected.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="font-bold">✅ COPPA Compliant</span>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="font-bold">🔒 No Data Collection</span>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="font-bold">🚫 No Ads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">✨</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                KidSpark
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-600">
              <a href="/privacy-policy" className="hover:text-purple-600 transition-colors">
                Privacy Policy
              </a>
              <a href="mailto:sher4z2k@gmail.com" className="hover:text-purple-600 transition-colors">
                Contact Us
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tectonic. Made with ❤️ in Abu Dhabi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
