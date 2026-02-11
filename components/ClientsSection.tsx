import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ClientsSectionProps {
    theme: 'agency' | 'production';
    lang: 'ar' | 'en';
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ theme, lang }) => {
    const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';
    const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Client logos (excluding 04 and 06 which are platform logos)
    const clientLogos = [1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 13].map(num => {
        const filename = num < 10 ? `0${num}.png` : `0${num}.png`;
        return `/logos/clients/${filename}`;
    });

    // Smooth infinite scroll with requestAnimationFrame
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationId: number;
        let scrollPos = 0;
        const speed = 0.5; // pixels per frame

        const animate = () => {
            if (!isPaused) {
                scrollPos += speed;
                // Reset when first set is fully scrolled past
                const halfWidth = container.scrollWidth / 2;
                if (scrollPos >= halfWidth) {
                    scrollPos = 0;
                }
                container.style.transform = `translateX(-${scrollPos}px)`;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    return (
        <section className="py-16 sm:py-20 md:py-28 px-0 relative overflow-hidden bg-gradient-to-b from-obsidian to-onyx">
            {/* Decorative dot pattern — matching WhyUs style */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(${accentColor} 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Subtle accent glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] opacity-[0.06] pointer-events-none gpu-accelerate"
                style={{ background: `radial-gradient(ellipse at center, ${accentColor} 0%, transparent 70%)` }}
            />

            <div className="relative z-10">
                {/* Section Header — matching ServicesGrid pattern */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-12 sm:mb-16 md:mb-20 px-6"
                >
                    {/* Accent line + subtitle */}
                    <div className="flex items-center gap-3 justify-center mb-4">
                        <div className="h-[1px] w-12" style={{ backgroundColor: accentColor }} />
                        <span
                            className="font-english text-xs sm:text-sm font-bold tracking-[0.2em] uppercase"
                            style={{ color: accentColor }}
                        >
                            {lang === 'ar' ? 'شركاؤنا' : 'Trusted By'}
                        </span>
                        <div className="h-[1px] w-12" style={{ backgroundColor: accentColor }} />
                    </div>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 ${lang === 'ar' ? 'font-heading' : 'font-english'}`}>
                        <span className="text-white">{lang === 'ar' ? 'عملاؤنا' : 'Our '}</span>
                        <span style={{ color: accentColor }}>{lang === 'ar' ? '' : 'Clients'}</span>
                    </h2>

                    <p className="text-silver/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                        {lang === 'ar'
                            ? 'نفخر بثقة عملائنا وشراكاتنا الناجحة معهم'
                            : 'We take pride in our clients\' trust and successful partnerships'}
                    </p>
                </motion.div>

                {/* Logo Marquee — sleek glassmorphism approach */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Gradient fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 bg-gradient-to-l from-onyx via-onyx/80 to-transparent z-20 pointer-events-none" />

                    {/* Scrolling track */}
                    <div className="overflow-hidden py-4">
                        <div
                            ref={scrollRef}
                            className="flex items-center gap-6 sm:gap-8 md:gap-10 will-change-transform"
                        >
                            {/* Two identical sets for seamless loop */}
                            {[0, 1].map(setIndex => (
                                <React.Fragment key={setIndex}>
                                    {clientLogos.map((logo, index) => (
                                        <motion.button
                                            key={`set-${setIndex}-${index}`}
                                            onClick={() => setSelectedLogo(logo)}
                                            whileHover={{ scale: 1.08, y: -4 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                            className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-2xl p-3 sm:p-4 md:p-5 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-500 cursor-pointer relative group"
                                        >
                                            {/* Hover glow ring */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                                style={{
                                                    boxShadow: `inset 0 0 20px ${accentColor}10, 0 0 30px ${accentColor}08`
                                                }}
                                            />

                                            <img
                                                src={logo}
                                                alt={`Client ${index + 1}`}
                                                className="w-full h-full object-contain relative z-10 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                                                loading="lazy"
                                            />
                                        </motion.button>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 mt-12 sm:mt-16 px-6"
                >
                    {[
                        { value: lang === 'ar' ? '+٥٠' : '50+', label: lang === 'ar' ? 'مشروع مكتمل' : 'Projects Delivered' },
                        { value: lang === 'ar' ? '+٣٠' : '30+', label: lang === 'ar' ? 'عميل راضٍ' : 'Happy Clients' },
                        { value: lang === 'ar' ? '+٥' : '5+', label: lang === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div
                                className="text-2xl sm:text-3xl md:text-4xl font-bold font-english mb-1 transition-colors duration-300"
                                style={{ color: accentColor }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-silver/40 text-xs sm:text-sm tracking-wider uppercase font-english">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-10 sm:mt-14 px-6"
                >
                    <div className="inline-flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-white/10" />
                        <p className="text-silver/30 text-xs sm:text-sm tracking-widest uppercase font-english">
                            {lang === 'ar'
                                ? 'شركاء النجاح في رحلتنا'
                                : 'Partners in our journey to success'}
                        </p>
                        <div className="h-[1px] w-8 bg-white/10" />
                    </div>
                </motion.div>
            </div>

            {/* Preview Modal — dark glassmorphism */}
            <AnimatePresence>
                {selectedLogo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        onClick={() => setSelectedLogo(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative bg-onyx/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 max-w-xl w-full border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedLogo(null)}
                                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
                                aria-label="Close preview"
                            >
                                <X size={18} className="text-silver" />
                            </button>

                            {/* Accent glow behind logo */}
                            <div
                                className="absolute inset-0 opacity-[0.06] rounded-3xl pointer-events-none gpu-accelerate"
                                style={{
                                    background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 60%)`
                                }}
                            />

                            {/* Logo Image */}
                            <div className="relative flex items-center justify-center min-h-[250px] sm:min-h-[350px]">
                                <img
                                    src={selectedLogo}
                                    alt="Client Logo Preview"
                                    className="max-w-[80%] max-h-[350px] sm:max-h-[400px] object-contain drop-shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ClientsSection;
