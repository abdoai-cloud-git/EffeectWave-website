
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { EffectWaveLogo } from './EffectWaveLogo';

interface HeroProps {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonText: string;
  theme: 'agency' | 'production';
  lang: 'ar' | 'en';
}

const Hero: React.FC<HeroProps> = ({ badge, titleLine1, titleLine2, description, buttonText, theme, lang }) => {

  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';
  const buttonTextColor = theme === 'agency' ? 'text-black' : 'text-white';

  // Stagger container for the text elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-32 md:pt-20 md:pb-20">

      {/* --- CINEMATIC VOLUMETRIC SPOTLIGHT (SVG-based) --- */}
      {/* Uses SVG feGaussianBlur for truly soft, feathered cone edges */}

      {/* SVG SPOTLIGHT — the main god ray cone */}
      <div className="absolute inset-0 z-0 pointer-events-none gpu-accelerate">
        {/* Desktop version - perfect as is */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Heavy blur for outer atmospheric glow */}
            <filter id="spotlight-blur-outer" x="-50%" y="-20%" width="200%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
            </filter>
            {/* Medium blur for the main cone */}
            <filter id="spotlight-blur-mid" x="-30%" y="-10%" width="160%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="35" />
            </filter>
            {/* Light blur for the bright core */}
            <filter id="spotlight-blur-core" x="-20%" y="-10%" width="140%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
            </filter>
            {/* Vertical fade mask — light fades as it travels down */}
            <linearGradient id="spotlight-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="30%" stopColor="white" stopOpacity="0.6" />
              <stop offset="60%" stopColor="white" stopOpacity="0.2" />
              <stop offset="85%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="spotlight-mask">
              <rect x="0" y="0" width="1920" height="1080" fill="url(#spotlight-fade)" />
            </mask>
          </defs>

          {/* Layer 1: Wide atmospheric outer cone — very soft */}
          <polygon
            points="810,0 1110,0 1650,900 270,900"
            fill="rgba(255,255,255,0.12)"
            filter="url(#spotlight-blur-outer)"
            mask="url(#spotlight-mask)"
          />

          {/* Layer 2: Main cone body — medium intensity */}
          <polygon
            points="870,0 1050,0 1440,850 480,850"
            fill="rgba(255,255,255,0.18)"
            filter="url(#spotlight-blur-mid)"
            mask="url(#spotlight-mask)"
          />

          {/* Layer 3: Bright inner core — narrow, intense */}
          <polygon
            points="910,0 1010,0 1250,750 670,750"
            fill="rgba(255,255,255,0.30)"
            filter="url(#spotlight-blur-core)"
            mask="url(#spotlight-mask)"
          />

          {/* Layer 4: Hot center strip — brightest at the very top */}
          <polygon
            points="940,0 980,0 1100,500 820,500"
            fill="rgba(255,255,255,0.4)"
            filter="url(#spotlight-blur-core)"
            mask="url(#spotlight-mask)"
          />

          {/* Light source glow at the very top */}
          <ellipse
            cx="960" cy="0" rx="80" ry="30"
            fill="rgba(255,255,255,0.5)"
            filter="url(#spotlight-blur-mid)"
          />
        </svg>

        {/* Mobile version - wider to cover logo */}
        <svg
          className="block md:hidden absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Heavy blur for outer atmospheric glow */}
            <filter id="spotlight-blur-outer-mobile" x="-50%" y="-20%" width="200%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
            </filter>
            {/* Medium blur for the main cone */}
            <filter id="spotlight-blur-mid-mobile" x="-30%" y="-10%" width="160%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="35" />
            </filter>
            {/* Light blur for the bright core */}
            <filter id="spotlight-blur-core-mobile" x="-20%" y="-10%" width="140%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
            </filter>
            {/* Vertical fade mask — light fades as it travels down */}
            <linearGradient id="spotlight-fade-mobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="30%" stopColor="white" stopOpacity="0.6" />
              <stop offset="60%" stopColor="white" stopOpacity="0.2" />
              <stop offset="85%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="spotlight-mask-mobile">
              <rect x="0" y="0" width="1920" height="1080" fill="url(#spotlight-fade-mobile)" />
            </mask>
          </defs>

          {/* Layer 1: Wide atmospheric outer cone — wider on mobile */}
          <polygon
            points="650,0 1270,0 1800,900 120,900"
            fill="rgba(255,255,255,0.12)"
            filter="url(#spotlight-blur-outer-mobile)"
            mask="url(#spotlight-mask-mobile)"
          />

          {/* Layer 2: Main cone body — wider on mobile */}
          <polygon
            points="720,0 1200,0 1600,850 320,850"
            fill="rgba(255,255,255,0.18)"
            filter="url(#spotlight-blur-mid-mobile)"
            mask="url(#spotlight-mask-mobile)"
          />

          {/* Layer 3: Bright inner core — wider on mobile */}
          <polygon
            points="800,0 1120,0 1400,750 520,750"
            fill="rgba(255,255,255,0.30)"
            filter="url(#spotlight-blur-core-mobile)"
            mask="url(#spotlight-mask-mobile)"
          />

          {/* Layer 4: Hot center strip — wider on mobile */}
          <polygon
            points="860,0 1060,0 1250,500 670,500"
            fill="rgba(255,255,255,0.4)"
            filter="url(#spotlight-blur-core-mobile)"
            mask="url(#spotlight-mask-mobile)"
          />

          {/* Light source glow at the very top - wider on mobile */}
          <ellipse
            cx="960" cy="0" rx="120" ry="30"
            fill="rgba(255,255,255,0.5)"
            filter="url(#spotlight-blur-mid-mobile)"
          />
        </svg>
      </div>

      {/* LIGHT POOL — radial glow where the spotlight hits the logo area */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] z-0 pointer-events-none gpu-accelerate"
        style={{
          background: `radial-gradient(ellipse 50% 35% at 50% 40%,
            rgba(255,255,255,0.07) 0%,
            rgba(255,255,255,0.03) 40%,
            transparent 100%
          )`,
        }}
      />

      {/* VIGNETTE & DEPTH — keeps edges cinematic */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,0.85)] z-0 pointer-events-none" />

      {/* --- CONTENT CENTER --- */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-0 md:mt-10 px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* LOGO - CENTERPIECE */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative"
        >
          {/* Soft accent glow behind logo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full pointer-events-none gpu-accelerate"
            style={{
              background: `radial-gradient(circle, ${accentColor}20 0%, ${accentColor}0a 40%, transparent 70%)`,
            }}
          />

          <EffectWaveLogo className="w-40 sm:w-56 md:w-72 lg:w-[22rem] h-auto relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
        </motion.div>

        {/* ENGLISH BRAND NAME */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-english font-bold text-white tracking-widest leading-none mb-3 drop-shadow-lg relative"
        >
          {/* Accent glow orb near WAVE */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[-20%] w-20 h-20 rounded-full pointer-events-none gpu-accelerate"
            style={{
              background: `radial-gradient(circle, ${accentColor}1a 0%, ${accentColor}08 50%, transparent 100%)`,
              filter: 'blur(10px)',
            }}
          />
          EFFECT <span style={{ color: accentColor }}>WAVE</span>
        </motion.h1>

        {/* SUBTITLE - Dynamic based on theme */}
        <motion.div
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          variants={itemVariants}
          className="relative mb-8 w-full"
        >
          <p className={`text-xl md:text-3xl lg:text-4xl font-body font-light text-silver/90 uppercase text-center ${lang === 'en' ? 'tracking-[0.3em]' : ''}`}>
            {theme === 'agency'
              ? (lang === 'ar' ? 'وكالة تسويق' : 'MARKETING AGENCY')
              : (lang === 'ar' ? 'إنتاج إعلامي' : 'MEDIA PRODUCTION')}
          </p>
        </motion.div>

        {/* Slogan & CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-8 mt-10"
        >
          <p className="text-white/80 text-lg md:text-2xl font-body tracking-[0.1em] text-center max-w-2xl px-4">
            {badge}
          </p>

          <a
            href="/#/contact"
            className={`inline-block px-8 py-3 rounded-full ${buttonTextColor} font-bold text-xs md:text-sm tracking-widest transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] min-h-[44px] flex items-center justify-center`}
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 20px ${accentColor}40`
            }}
          >
            {buttonText}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/10 hidden md:flex"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-english">
          {lang === 'ar' ? 'مرر للأسفل' : 'Scroll'}
        </span>
        <div
          className="w-[1px] h-16"
          style={{ background: `linear-gradient(to bottom, transparent, white)` }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
