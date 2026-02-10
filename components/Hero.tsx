
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

      {/* --- OPTIMIZED CINEMATIC BACKGROUND --- */}
      {/* All effects use CSS gradients + opacity instead of blur filters for 60fps */}

      {/* 1. VOLUMETRIC GOD RAY — CSS radial gradient, NO blur filter */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[120vh] origin-top z-0 pointer-events-none gpu-accelerate"
        style={{
          background: `radial-gradient(ellipse 80% 90% at 50% 0%, 
            rgba(255,255,255,0.12) 0%, 
            rgba(255,255,255,0.04) 30%, 
            rgba(255,255,255,0.01) 60%, 
            transparent 100%
          )`,
          opacity: 0.9,
        }}
      />

      {/* 2. CORE BEAM — Smaller, softer via gradient, NO blur */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[100vh] origin-top z-0 pointer-events-none gpu-accelerate"
        style={{
          background: `radial-gradient(ellipse 60% 80% at 50% 0%, 
            rgba(255,255,255,0.18) 0%, 
            rgba(255,255,255,0.05) 40%, 
            transparent 75%
          )`,
        }}
      />

      {/* 3. THEME ACCENT GLOW — CSS animation via keyframes instead of framer-motion */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[90vh] z-0 pointer-events-none gpu-accelerate"
        style={{
          background: `radial-gradient(ellipse 70% 70% at 50% 0%, ${accentColor}22 0%, transparent 70%)`,
          animation: 'accentPulse 5s ease-in-out infinite',
        }}
      />

      {/* 4. VIGNETTE & DEPTH — lightweight CSS only */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.7)] z-0 pointer-events-none" />

      {/* 5. FLOATING BEAMS — CSS-animated via keyframes, not framer-motion loops */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden gpu-accelerate">
        {[0, 1, 2, 3, 4].map((i) => {
          const positions = [
            { left: '15%', top: '25%', rot: -15 },
            { left: '70%', top: '40%', rot: 20 },
            { left: '40%', top: '60%', rot: -8 },
            { left: '80%', top: '20%', rot: 12 },
            { left: '25%', top: '70%', rot: -25 },
          ];
          const p = positions[i];
          return (
            <div
              key={i}
              className="absolute w-24 sm:w-32 h-[2px] opacity-0 gpu-accelerate"
              style={{
                left: p.left,
                top: p.top,
                transform: `rotate(${p.rot}deg)`,
                background: `linear-gradient(to right, transparent, ${accentColor}88, transparent)`,
                animation: `beamFloat ${6 + i * 1.2}s ease-in-out ${i * 1.5}s infinite`,
              }}
            />
          );
        })}
      </div>

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
          {/* Soft glow behind logo — CSS gradient, no blur filter */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] rounded-full pointer-events-none gpu-accelerate"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
            }}
          />

          <EffectWaveLogo className="w-40 sm:w-56 md:w-72 lg:w-[22rem] h-auto relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
        </motion.div>

        {/* ENGLISH BRAND NAME */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-english font-bold text-white tracking-widest leading-none mb-3 drop-shadow-lg"
        >
          EFFECT <span style={{ color: accentColor }}>WAVE</span>
        </motion.h1>

        {/* SUBTITLE - Dynamic based on theme */}
        <motion.div
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          variants={itemVariants}
          className="relative mb-8 w-full"
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-body font-light text-silver/90 tracking-[0.3em] uppercase text-center">
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

          <button
            className={`px-8 py-3 rounded-full ${buttonTextColor} font-bold text-xs md:text-sm tracking-widest transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] min-h-[44px]`}
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 20px ${accentColor}40`
            }}
          >
            {buttonText}
          </button>
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
