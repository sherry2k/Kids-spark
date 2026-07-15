import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50" style={{ fontFamily: 'Nunito, sans-serif' }}>
      
      {/* Floating Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-6xl"
        >🌟</motion.div>
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-20 text-5xl"
        >🎨</motion.div>
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-20 text-5xl"
        >🎮</motion.div>
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-20 right-10 text-6xl"
        >📚</motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 text-4xl"
        >✨</motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 right-1/4 text-4xl"
        >💫</motion.div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-20"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              whileHover={{ rotate: 20 }}
              className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
            >
              <img src="/icon.png" alt="KidSpark" className="w-10 h-10 rounded-lg" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </motion.div>
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              KidSpark
            </span>
          </motion.div>
          <nav className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors hidden sm:block"
            >
              Privacy Policy
            </a>
            <motion.a
              href="https://kidspark-bay.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Open App 🚀
            </motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6"
          >
            <span className="text-xl">🎓</span>
            <span className="text-sm font-semibold text-gray-700">Educational App for Kids</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">FREE</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Learning Made
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              Fun & Exciting!
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            KidSpark helps children learn through play with colorful games, 
            interactive activities, and engaging challenges designed by educators.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=app.vercel.kidspark_bay.twa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </motion.a>
            
            <motion.a
              href="https://kidspark-bay.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <span className="text-3xl">🌐</span>
              <div className="text-left">
                <div className="text-xs text-purple-100">PLAY NOW</div>
                <div className="text-lg font-bold">Web Version</div>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Kids Love KidSpark
          </span>
          <span className="text-3xl ml-2">💖</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🎮', color: 'from-yellow-400 to-orange-500', title: 'Fun Learning Games', desc: 'Interactive games that make learning feel like playtime!' },
            { icon: '🧠', color: 'from-green-400 to-emerald-500', title: 'Brain Boosters', desc: 'Puzzles and challenges that develop critical thinking skills.' },
            { icon: '🎨', color: 'from-blue-400 to-cyan-500', title: 'Creative Activities', desc: 'Art and creativity exercises to spark imagination.' },
            { icon: '📚', color: 'from-purple-400 to-violet-500', title: 'ABC & 123', desc: 'Learn letters, numbers, and basic math in a fun way!' },
            { icon: '🔒', color: 'from-pink-400 to-rose-500', title: '100% Safe', desc: 'No ads, no data collection, safe for children.' },
            { icon: '📱', color: 'from-cyan-400 to-blue-500', title: 'Works Offline', desc: 'Play anytime, anywhere - no internet needed!' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <span className="text-3xl">{feature.icon}</span>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl overflow-hidden relative"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🎉
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Join thousands of happy kids who are learning while having fun with KidSpark!
          </p>
          <motion.a
            href="https://kidspark-bay.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Play Now</span>
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-800">
            Trusted by Parents Everywhere 👨‍👩‍👧‍👦
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            KidSpark is designed with your child's safety and education in mind. 
            We take privacy seriously.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '✅', text: 'COPPA Compliant' },
              { icon: '🔒', text: 'No Data Collection' },
              { icon: '🚫', text: 'No Ads' },
              { icon: '👶', text: 'Kid-Friendly' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 px-4 py-2 rounded-full"
              >
                <span className="font-bold text-gray-700">{badge.icon} {badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/icon.png" alt="KidSpark" className="w-8 h-8 rounded-lg" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                KidSpark
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-600">
              <a href="/privacy-policy" className="hover:text-purple-600 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="mailto:sher4z2k@gmail.com" className="hover:text-purple-600 transition-colors font-medium">
                Contact Us
              </a>
              <a 
                href="https://kidspark-bay.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition-colors font-medium"
              >
                Open App
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tectonic. Made with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
