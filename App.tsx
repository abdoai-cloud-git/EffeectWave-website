import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Footer from './components/Footer';
import StarField from './components/StarField';
import { EffectWaveLogo } from './components/EffectWaveLogo';

// Lazy Load Pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const PhilosophyPage = React.lazy(() => import('./pages/PhilosophyPage'));
const TeamPage = React.lazy(() => import('./pages/TeamPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-obsidian text-accent">
    <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(12px)',
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const, // Cubic bezier for smooth entry
    }
  },
  out: {
    opacity: 0,
    y: -20,
    filter: 'blur(12px)',
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.55, 0.085, 0.68, 0.53] as const, // Cubic bezier for smooth exit
    }
  }
};

function AppContent() {
  const [theme, setTheme] = useState<'agency' | 'production'>('agency');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const location = useLocation();

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  // Colors configuration
  const colors = {
    agency: '#ebe125',    // Yellow
    production: '#b20600' // Red
  };

  const navItems = lang === 'ar' ? [
    { label: 'الرئيسية', path: '/' },
    { label: 'خدماتنا', path: '/services' },
    { label: 'من نحن', path: '/about' },
    { label: 'فلسفتنا', path: '/philosophy' },
    { label: 'فريق العمل', path: '/team' },
    { label: 'المعرض', path: '/gallery' },
    { label: 'تواصل معنا', path: '/contact' },
  ] : [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Philosophy', path: '/philosophy' },
    { label: 'Team', path: '/team' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  // Scroll listener for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = (newTheme: 'agency' | 'production') => {
    setTheme(newTheme);
    setHasInteracted(true);
  };

  // Navbar visibility condition: always show if scrolled, menu open, or not on home page
  const isNavbarVisible = isScrolled || isMenuOpen || location.pathname !== '/';

  return (
    <div
      className={`bg-obsidian min-h-screen text-white overflow-x-hidden font-body selection:bg-accent selection:text-black transition-colors duration-700 relative ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      style={{
        '--color-accent': colors[theme]
      } as React.CSSProperties}
    >
      <ScrollToTop />

      {/* --- GLOBAL PERSISTENT BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150 mix-blend-overlay"></div>
        {/* Starfield (Canvas) - Persists across routes */}
        <StarField />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm border-b border-white/5 ${isNavbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <Link to="/" className="flex items-center gap-4 group">
          <div className="text-2xl font-bold font-heading tracking-wider flex items-center gap-2">
            <EffectWaveLogo className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
            <span className="font-english">EFFECT WAVE</span>
          </div>
        </Link>

        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            aria-label={lang === 'ar' ? 'Switch to English' : 'التغيير للغة العربية'}
            className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold hover:bg-accent hover:text-black transition-all duration-300 tracking-widest font-english min-w-[40px] min-h-[36px] flex items-center justify-center"
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:text-accent transition-colors block z-50 relative focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 sm:left-auto mt-4 w-[calc(100vw-2rem)] sm:w-56 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-40 origin-top-left"
              >
                <div className="py-2">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0 text-right"
                  >
                    {lang === 'ar' ? 'الرئيسية' : 'Home'}
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0 text-right"
                  >
                    {lang === 'ar' ? 'خدماتنا' : 'Services'}
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0 text-right"
                  >
                    {lang === 'ar' ? 'من نحن' : 'About'}
                  </Link>
                  <Link
                    to="/philosophy"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0 text-right"
                  >
                    {lang === 'ar' ? 'فلسفتنا' : 'Philosophy'}
                  </Link>
                  <Link
                    to="/team"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0 text-right"
                  >
                    {lang === 'ar' ? 'فريق العمل' : 'Team'}
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0 text-right"
                  >
                    {lang === 'ar' ? 'المعرض' : 'Gallery'}
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0 text-right"
                  >
                    {lang === 'ar' ? 'تواصل معنا' : 'Contact'}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Bottom Navigation / Theme Switcher */}
      {/* Force LTR direction for this component to ensure Media/Production is Left and Marketing/Agency is Right */}
      <div className="fixed bottom-6 sm:bottom-10 left-0 right-0 z-50 flex flex-col items-center gap-1 pointer-events-none" dir="ltr">
        <div className="pointer-events-auto flex flex-col items-center gap-1">

          {/* Labels Row */}
          <div className="flex w-full justify-between px-2">
            {/* Left: Media (Production) */}
            <span
              className={`w-32 text-center text-[10px] font-sans uppercase tracking-widest transition-all duration-500 ${theme === 'production' ? 'text-accent opacity-100 font-bold' : 'text-white opacity-30 font-thin'
                }`}
            >
              Media
            </span>

            {/* Right: Marketing (Agency) */}
            <span
              className={`w-32 text-center text-[10px] font-sans uppercase tracking-widest transition-all duration-500 ${theme === 'agency' ? 'text-accent opacity-100 font-bold' : 'text-white opacity-30 font-thin'
                }`}
            >
              Marketing
            </span>
          </div>

          {/* Switcher Slider */}
          <div className="relative flex items-center bg-white/5 rounded-full p-[2px] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">

            {/* Left Button: Production */}
            <button
              onClick={() => handleThemeChange('production')}
              aria-label="Switch to Production theme"
              className={`relative z-20 px-4 py-1.5 rounded-full text-[9px] font-bold font-english tracking-widest transition-all duration-300 w-32 text-center focus:outline-none ${theme === 'production' ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
            >
              PRODUCTION
            </button>

            {/* Right Button: Agency */}
            <button
              onClick={() => handleThemeChange('agency')}
              aria-label="Switch to Agency theme"
              className={`relative z-20 px-4 py-1.5 rounded-full text-[9px] font-bold font-english tracking-widest transition-all duration-300 w-32 text-center focus:outline-none ${theme === 'agency' ? 'text-black' : 'text-white/40 hover:text-white'
                }`}
            >
              AGENCY
            </button>

            {/* Sliding Pill */}
            <motion.div
              animate={{
                left: theme === 'production' ? '2px' : 'calc(50% + 1px)',
                x: !hasInteracted ? (theme === 'agency' ? [0, -30, 0] : [0, 30, 0]) : 0,
                backgroundColor: theme === 'production' ? colors.production : colors.agency,
                boxShadow: theme === 'production'
                  ? `0 0 20px ${colors.production}66`
                  : `0 0 20px ${colors.agency}66`
              }}
              transition={{
                left: { type: "spring", stiffness: 350, damping: 30 },
                x: {
                  duration: 1.5,
                  repeat: !hasInteracted ? Infinity : 0,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                  delay: 2
                },
                backgroundColor: { duration: 0.3 }
              }}
              className="absolute top-[2px] bottom-[2px] rounded-full z-10"
              style={{
                width: 'calc(50% - 3px)',
              }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.main
          key={theme + location.pathname} // Key change triggers the animation
          className="relative z-10 pb-24 sm:pb-28 md:pb-32 min-h-screen"
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage theme={theme} lang={lang} />} />
              <Route path="/about" element={<AboutPage theme={theme} lang={lang} />} />
              <Route path="/services" element={<ServicesPage theme={theme} lang={lang} />} />
              <Route path="/philosophy" element={<PhilosophyPage theme={theme} lang={lang} />} />
              <Route path="/team" element={<TeamPage theme={theme} lang={lang} />} />
              <Route path="/gallery" element={<GalleryPage lang={lang} />} />
              <Route path="/contact" element={<ContactPage theme={theme} lang={lang} />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <Footer
        lang={lang}
        description={lang === 'ar'
          ? "نحن نصنع تجارب بصرية وصوتية تترك أثراً لا يمحى."
          : "We create visual and audio experiences that leave an indelible impact."}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
