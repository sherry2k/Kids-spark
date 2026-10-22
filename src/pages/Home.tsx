import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'all' | 'reading' | 'math' | 'brain' | 'explore' | 'creative';

const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: '✨' },
  { id: 'reading', label: 'Reading & Phonics', icon: '🔤' },
  { id: 'math', label: 'Math', icon: '🔢' },
  { id: 'brain', label: 'Brain Games', icon: '🧠' },
  { id: 'explore', label: 'Learn & Explore', icon: '🌍' },
  { id: 'creative', label: 'Creative', icon: '🎨' },
];

const screens: { src: string; title: string; desc: string; category: Exclude<Category, 'all'>; alt: string }[] = [
  { src: '/screens/home.webp', title: 'All Games in One Place', desc: 'Daily challenges, streaks and stars to keep kids coming back.', category: 'explore', alt: 'KidSpark home screen with Learn, Quiz, Sounds, Math, Words and Memory games' },
  { src: '/screens/learn.webp', title: 'Learn', desc: 'Days, months, seasons, feelings, weather and more.', category: 'explore', alt: 'KidSpark Learn topics: days, months, seasons, opposites, feelings and weather' },
  { src: '/screens/sounds.webp', title: 'Sounds', desc: 'Find the missing letters: ch, sh, th and oa.', category: 'reading', alt: 'KidSpark Sounds phonics games for ch, sh, th and oa words' },
  { src: '/screens/sh-words.webp', title: 'Phonics Practice', desc: 'Look, listen and pick the right letters.', category: 'reading', alt: 'KidSpark phonics game: pick sh to complete the word shark' },
  { src: '/screens/words.webp', title: 'Build the Word', desc: 'Spell words letter by letter with picture hints.', category: 'reading', alt: 'KidSpark Words game: build the word lion from letter tiles' },
  { src: '/screens/math.webp', title: 'Math Games', desc: 'Counting, adding, number lines and skip counting.', category: 'math', alt: 'KidSpark Math games menu with Count It, Add and Take Away, Number Line and Skip Counting' },
  { src: '/screens/number-bonds.webp', title: 'Number Bonds', desc: 'Find the pairs that make 5 and 10.', category: 'math', alt: 'KidSpark Number Bonds game: what makes 5' },
  { src: '/screens/missing-numbers.webp', title: 'Missing Numbers', desc: 'Fill in number charts from 1 to 50.', category: 'math', alt: 'KidSpark Missing Numbers chart from 1 to 20' },
  { src: '/screens/memory.webp', title: 'Memory Games', desc: 'Find the pairs, follow the cup, copy the colours.', category: 'brain', alt: 'KidSpark Memory games: Memory Match, What\'s Missing, Where Did It Go, Colour Memory, Odd One Out and Quick Tap' },
  { src: '/screens/puzzle.webp', title: 'Puzzles', desc: 'Jigsaws, shadow match, patterns and size sorting.', category: 'brain', alt: 'KidSpark Puzzle games: Jigsaw, Shadow Match, Pattern Fun and Size Sort' },
  { src: '/screens/match.webp', title: 'Match & Sort', desc: 'Day or night, big or small, hot or cold and more.', category: 'brain', alt: 'KidSpark Match sorting games menu' },
  { src: '/screens/hot-or-cold.webp', title: 'Drag & Sort', desc: 'Drag each picture into the right box.', category: 'brain', alt: 'KidSpark Hot or Cold game: drag the volcano into the hot box' },
  { src: '/screens/skills.webp', title: 'Skills', desc: 'Cooking, gardening, building and art adventures.', category: 'explore', alt: 'KidSpark Skills adventures: cooking, beauty, art, garden and builder workshop' },
  { src: '/screens/coloring.webp', title: 'Coloring Book', desc: 'Dozens of pictures to colour in.', category: 'creative', alt: 'KidSpark Coloring Book with pictures to colour' },
  { src: '/screens/creative-studio.webp', title: 'Creative Studio', desc: 'Draw, fill, add stickers and shapes.', category: 'creative', alt: 'KidSpark Creative Studio drawing canvas with stickers and colours' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const visibleScreens = activeCategory === 'all'
    ? screens
    : screens.filter((s) => s.category === activeCategory);

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
          <motion.a 
            href="/"
            aria-label="KidSpark home"
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
          </motion.a>
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
              href="https://play.google.com/store/apps/details?id=com.kid_spark.app"
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

      {/* Screenshots Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-3"
        >
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            See Inside KidSpark
          </span>
          <span className="text-3xl ml-2">📱</span>
        </motion.h2>
        <p className="text-center text-gray-600 mb-8">
          Real screens from the app. Pick a category to explore.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 shadow-md hover:text-purple-600'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Phone screenshots: swipe row on mobile, grid on larger screens */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <AnimatePresence mode="popLayout">
            {visibleScreens.map((screen) => (
              <motion.figure
                key={screen.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="snap-center shrink-0 w-56 sm:w-auto text-center"
              >
                <div className="rounded-[2rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    width={450}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                </div>
                <figcaption className="mt-4">
                  <h3 className="text-lg font-bold text-gray-800">{screen.title}</h3>
                  <p className="text-sm text-gray-600">{screen.desc}</p>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
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
            <a href="/" aria-label="KidSpark home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/icon.png" alt="KidSpark" className="w-8 h-8 rounded-lg" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                KidSpark
              </span>
            </a>
            
            <div className="flex items-center gap-6 text-gray-600">
              <a href="/privacy-policy" className="hover:text-purple-600 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="mailto:support@kid-spark.app" className="hover:text-purple-600 transition-colors font-medium">
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

            {/* Social links (website only) */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/kidspark.app2026/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KidSpark on Instagram"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61595546369753"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KidSpark on Facebook"
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@kidspark.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KidSpark on TikTok"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
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
