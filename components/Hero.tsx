
import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
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

interface FloatingBeamConfig {
  color: string;
  x: string;
  y: string;
  rotate: number;
  delay: number;
  duration: number;
  width: number;
  blur: number;
  opacity: number;
}

interface FloatingBeamProps {
  config: FloatingBeamConfig;
  animate: boolean;
}

interface ParticleConfig {
  x: string;
  y: string;
  opacity: number;
  scale: number;
  duration: number;
  delay: number;
  size: number;
}

const MOBILE_MEDIA_QUERY = '(max-width: 767px)';

const seededRandom = (seed: number): number => {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
};

const seededRange = (seed: number, min: number, max: number): number =>
  min + seededRandom(seed) * (max - min);

const useIsSmallScreen = (): boolean => {
  const [isSmallScreen, setIsSmallScreen] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      setIsSmallScreen(event.matches);
    };

    setIsSmallScreen(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return isSmallScreen;
};

const createBeamConfig = (index: number, theme: 'agency' | 'production'): FloatingBeamConfig => {
  const primaryColor = theme === 'agency' ? '#ebe125' : '#b20600';
  const rareColor = theme === 'agency' ? '#ff3131' : '#00f2ff';
  const raritySeed = seededRandom(index + (theme === 'agency' ? 111 : 222));
  const isRare = raritySeed > 0.85;

  return {
    color: isRare ? rareColor : primaryColor,
    x: `${Math.round(seededRange(index * 3 + 1, 10, 90))}%`,
    y: `${Math.round(seededRange(index * 5 + 2, 20, 80))}%`,
    rotate: seededRange(index * 7 + 3, -20, 20),
    delay: seededRange(index * 11 + 4, 0, 5),
    duration: seededRange(index * 13 + 5, 4, 8),
    width: seededRange(index * 17 + 6, 96, 168),
    blur: seededRange(index * 19 + 7, 6, 10),
    opacity: seededRange(index * 23 + 8, 0.35, 0.6),
  };
};

const createParticleConfig = (index: number): ParticleConfig => ({
  x: `${Math.round(seededRange(index * 3 + 10, 0, 100))}%`,
  y: `${Math.round(seededRange(index * 5 + 20, 0, 100))}%`,
  opacity: seededRange(index * 7 + 30, 0.1, 0.3),
  scale: seededRange(index * 9 + 40, 0.5, 1),
  duration: seededRange(index * 11 + 50, 20, 40),
  delay: seededRange(index * 13 + 60, 0, 20),
  size: seededRange(index * 15 + 70, 1, 2.2),
});

const FloatingBeam = React.memo(({ config, animate }: FloatingBeamProps) => {
  const baseStyle: React.CSSProperties = {
    left: config.x,
    top: config.y,
    width: `${config.width}px`,
    background: `linear-gradient(to right, transparent, ${config.color}, transparent)`,
    filter: `blur(${config.blur}px)`,
    transformOrigin: 'center',
    willChange: animate ? 'transform, opacity' : 'auto',
  };

  if (!animate) {
    return (
      <div
        className="absolute h-1 z-0 pointer-events-none"
        style={{
          ...baseStyle,
          opacity: config.opacity * 0.65,
          transform: `rotate(${config.rotate}deg)`,
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0,
        rotate: config.rotate,
      }}
      animate={{
        opacity: [0, config.opacity, 0],
        scaleX: [0, 1.4, 0],
        x: ['-5%', '5%'],
        y: ['-5%', '5%'],
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        delay: config.delay,
        ease: 'easeInOut',
      }}
      className="absolute h-1 z-0 pointer-events-none"
      style={baseStyle}
    />
  );
});

const Hero: React.FC<HeroProps> = ({
  badge,
  titleLine1,
  titleLine2,
  description,
  buttonText,
  theme,
  lang,
}) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';
  const buttonTextColor = theme === 'agency' ? 'text-black' : 'text-white';
  const shouldReduceMotion = useReducedMotion();
  const isSmallScreen = useIsSmallScreen();
  const enableAmbientMotion = !shouldReduceMotion;

  const particleCount = shouldReduceMotion ? 6 : isSmallScreen ? 8 : 15;
  const beamCount = shouldReduceMotion ? 4 : isSmallScreen ? 5 : 8;

  const particles = React.useMemo(
    () => Array.from({ length: particleCount }, (_, index) => createParticleConfig(index)),
    [particleCount],
  );

  const beams = React.useMemo(
    () => Array.from({ length: beamCount }, (_, index) => createBeamConfig(index, theme)),
    [beamCount, theme],
  );

  const containerVariants: Variants = React.useMemo(
    () => ({
      hidden: { opacity: shouldReduceMotion ? 1 : 0 },
      visible: {
        opacity: 1,
        transition: shouldReduceMotion
          ? { duration: 0.01 }
          : {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
      },
    }),
    [shouldReduceMotion],
  );

  const itemVariants: Variants = React.useMemo(
    () => ({
      hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: shouldReduceMotion ? 0.01 : 0.8, ease: 'easeOut' },
      },
    }),
    [shouldReduceMotion],
  );

  // Keep props wired for compatibility with existing content schema.
  void titleLine1;
  void titleLine2;
  void description;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-32 pb-28 md:pt-20 md:pb-20">
      {/* 1. Atmospheric particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle, index) => (
          <motion.div
            key={`hero-particle-${index}`}
            initial={{
              opacity: particle.opacity,
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
            }}
            animate={
              enableAmbientMotion
                ? {
                    y: ['-10%', '110%'],
                    opacity: [0, particle.opacity, 0],
                  }
                : undefined
            }
            transition={
              enableAmbientMotion
                ? {
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: particle.delay,
                  }
                : undefined
            }
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* 2. Main volumetric ray */}
      <motion.div
        initial={{ opacity: enableAmbientMotion ? 0 : 0.85 }}
        animate={{ opacity: enableAmbientMotion ? 1 : 0.85 }}
        transition={enableAmbientMotion ? { duration: 3 } : undefined}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[130vh] md:h-[150vh] origin-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%,
            rgba(255,255,255,0.2) 0%,
            rgba(255,255,255,0.08) 40%,
            rgba(255,255,255,0.02) 70%,
            transparent 100%)`,
          WebkitMaskImage: 'radial-gradient(ellipse 100% 120% at 50% 0%, black 0%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 100% 120% at 50% 0%, black 0%, transparent 80%)',
          filter: `blur(${isSmallScreen ? 82 : 110}px)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* 3. Core beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[120vh] md:h-[130vh] origin-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%,
            rgba(255,255,255,0.4) 0%,
            rgba(255,255,255,0.12) 50%,
            transparent 80%)`,
          WebkitMaskImage: 'radial-gradient(ellipse 70% 120% at 50% 0%, black 0%, transparent 70%)',
          maskImage: 'radial-gradient(ellipse 70% 120% at 50% 0%, black 0%, transparent 70%)',
          filter: `blur(${isSmallScreen ? 54 : 70}px)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* 4. Theme glow */}
      <motion.div
        animate={enableAmbientMotion ? { opacity: [0.1, 0.2, 0.1] } : { opacity: 0.14 }}
        transition={enableAmbientMotion ? { duration: 5, repeat: Infinity } : undefined}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[110vh] md:h-[120vh] z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor} 0%, transparent 60%)`,
          filter: `blur(${isSmallScreen ? 72 : 100}px)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* 5. Vignette and texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] z-0 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.05] mix-blend-overlay pointer-events-none z-[1]" />

      {/* 6. Floating beams */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {beams.map((beam, index) => (
          <FloatingBeam key={`hero-beam-${index}`} config={beam} animate={enableAmbientMotion} />
        ))}
      </div>

      {/* --- Content center --- */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-0 md:mt-10 px-2 sm:px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] blur-[65px] md:blur-[80px] opacity-40 rounded-full bg-white pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] blur-[32px] md:blur-[40px] opacity-60 rounded-full bg-white/20 pointer-events-none" />

          <EffectWaveLogo className="w-40 sm:w-56 md:w-72 lg:w-[22rem] h-auto relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.5)]" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-english font-bold text-white tracking-widest leading-none mb-3 drop-shadow-lg"
        >
          EFFECT <span style={{ color: accentColor }}>WAVE</span>
        </motion.h1>

        <motion.div
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          variants={itemVariants}
          className="relative mb-8 w-full"
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-body font-light text-silver/90 tracking-[0.3em] uppercase text-center">
            {theme === 'agency'
              ? lang === 'ar'
                ? 'وكالة تسويق'
                : 'MARKETING AGENCY'
              : lang === 'ar'
                ? 'إنتاج إعلامي'
                : 'MEDIA PRODUCTION'}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-8 mt-10">
          <p className="text-white/80 text-lg md:text-2xl font-body tracking-[0.1em] text-center max-w-2xl px-4">
            {badge}
          </p>

          <button
            className={`px-8 py-3 rounded-full ${buttonTextColor} font-bold text-xs md:text-sm tracking-widest transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 20px ${accentColor}40`,
            }}
          >
            {buttonText}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={shouldReduceMotion ? undefined : { delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/10 hidden md:flex"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-english">
          {lang === 'ar' ? 'مرر للأسفل' : 'Scroll'}
        </span>
        <div
          className="w-[1px] h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
        />
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
