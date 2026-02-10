
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

interface FloatingBeamProps {
  key?: React.Key;
  index: number;
  theme: 'agency' | 'production';
}

const FloatingBeam = ({ index, theme }: FloatingBeamProps) => {
  const properties = React.useMemo(() => {
    const isRare = Math.random() > 0.85;
    const primaryColor = theme === 'agency' ? '#ebe125' : '#b20600';
    const rareColor = theme === 'agency' ? '#ff3131' : '#00f2ff';
    return {
      isRare,
      color: isRare ? rareColor : primaryColor,
      x: Math.random() * 80 + 10 + "%",
      y: Math.random() * 60 + 20 + "%",
      rotate: Math.random() * 40 - 20,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4
    };
  }, [theme]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: properties.x,
        y: properties.y,
        scaleX: 0,
        rotate: properties.rotate
      }}
      animate={{
        opacity: [0, 0.6, 0],
        scaleX: [0, 1.5, 0],
        x: ["-5%", "5%"],
        y: ["-5%", "5%"]
      }}
      transition={{
        duration: properties.duration,
        repeat: Infinity,
        delay: properties.delay,
        ease: "easeInOut"
      }}
      className="absolute w-32 h-1 blur-[8px] z-0 pointer-events-none"
      style={{
        background: `linear-gradient(to right, transparent, ${properties.color}, transparent)`,
      }}
    />
  );
};

const Hero: React.FC<HeroProps> = ({ badge, titleLine1, titleLine2, description, buttonText, theme, lang }) => {

  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';
  const buttonTextColor = theme === 'agency' ? 'text-black' : 'text-white';

  // Stagger container for the text elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-32 md:pt-20 md:pb-20">

      {/* --- PREMIUM CINEMATIC BACKGROUND --- */}

      {/* 1. ATMOSPHERIC PARTICLES (Dust/Light Scattering) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: Math.random() * 0.3,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* 2. VOLUMETRIC GOD RAY (Main Cone) - Widened & Softened */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vh] origin-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, 
            rgba(255,255,255,0.2) 0%, 
            rgba(255,255,255,0.08) 40%, 
            rgba(255,255,255,0.02) 70%, 
            transparent 100%
          )`,
          WebkitMaskImage: 'radial-gradient(ellipse 100% 120% at 50% 0%, black 0%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 100% 120% at 50% 0%, black 0%, transparent 80%)',
          filter: 'blur(110px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 3. CORE BEAM (Intense center) - Widened & Softened */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[130vh] origin-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, 
            rgba(255,255,255,0.4) 0%, 
            rgba(255,255,255,0.12) 50%, 
            transparent 80%
          )`,
          WebkitMaskImage: 'radial-gradient(ellipse 70% 120% at 50% 0%, black 0%, transparent 70%)',
          maskImage: 'radial-gradient(ellipse 70% 120% at 50% 0%, black 0%, transparent 70%)',
          filter: 'blur(70px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 4. THEME-SPECIFIC ACCENT GLOW */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[120vh] z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor} 0%, transparent 60%)`,
          filter: 'blur(100px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 5. VIGNETTE & DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] z-0 pointer-events-none" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none z-[1]"></div>


      {/* 6. FLOATING MAGIC BEAMS (Magic flares) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <FloatingBeam key={i} index={i} theme={theme} />
        ))}
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
          {/* Intense Glow behind logo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] blur-[80px] opacity-40 rounded-full bg-white pointer-events-none"
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] blur-[40px] opacity-60 rounded-full bg-white/20 pointer-events-none"
          ></div>

          <EffectWaveLogo className="w-40 sm:w-56 md:w-72 lg:w-[22rem] h-auto relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.5)]" />
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

        {/* Slogan & CTA - Refined Placement */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-8 mt-10"
        >
          <p className="text-white/80 text-lg md:text-2xl font-body tracking-[0.1em] text-center max-w-2xl px-4">
            {badge}
          </p>

          <button
            className={`px-8 py-3 rounded-full ${buttonTextColor} font-bold text-xs md:text-sm tracking-widest transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}
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
        transition={{ delay: 1.5, duration: 1 }}
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
