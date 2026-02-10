import React from 'react';
import { motion } from 'framer-motion';

interface HeadlineSectionProps {
    titleLine1: string;
    titleLine2: string;
    description: string;
    theme: 'agency' | 'production';
    lang: 'ar' | 'en';
}

const HeadlineSection: React.FC<HeadlineSectionProps> = ({
    titleLine1,
    titleLine2,
    description,
    theme,
    lang
}) => {
    const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative py-20 sm:py-28 md:py-32 lg:py-48 px-4 sm:px-6 bg-obsidian overflow-hidden">

            {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
            {/* Animated Wave Glow */}
            <motion.div
                animate={{
                    x: [-100, 100, -100],
                    y: [-50, 50, -50],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-0 left-0 w-[100vw] h-[100vh] opacity-[0.08] pointer-events-none gpu-accelerate"
                style={{
                    background: `radial-gradient(circle at 30% 30%, ${accentColor} 0%, transparent 50%),
                       radial-gradient(circle at 70% 60%, ${accentColor} 0%, transparent 50%)`,
                    filter: 'blur(120px)'
                }}
            />

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay noise-overlay contrast-125 brightness-125"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 max-w-6xl mx-auto"
            >
                <div className="flex flex-col items-center">

                    {/* GLASSMORPHIC CONTAINER */}
                    <motion.div
                        variants={itemVariants}
                        className="relative px-5 py-10 sm:px-8 sm:py-14 md:px-20 md:py-24 rounded-[2rem] sm:rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden group"
                    >
                        {/* Inner Border Glow */}
                        <div className="absolute inset-0 border border-white/5 rounded-[3rem] pointer-events-none transition-opacity group-hover:opacity-50" />

                        {/* Light leak effect */}
                        <div
                            className="absolute -top-24 -left-24 w-48 h-48 opacity-20 blur-[60px] pointer-events-none"
                            style={{ background: accentColor }}
                        />

                        <div className="flex flex-col items-center text-center relative z-10">

                            {/* HEADLINES */}
                            <div className="mb-10 space-y-2">
                                <motion.h2
                                    variants={itemVariants}
                                    className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight ${lang === 'en' ? 'font-english' : 'font-heading'
                                        }`}
                                >
                                    {titleLine1}
                                </motion.h2>
                                <motion.h2
                                    variants={itemVariants}
                                    className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight ${lang === 'en' ? 'font-english' : 'font-heading'
                                        }`}
                                    style={{ color: accentColor }}
                                >
                                    {titleLine2}
                                </motion.h2>
                            </div>

                            {/* DESCRIPTION */}
                            <motion.div
                                variants={itemVariants}
                                className="max-w-3xl"
                            >
                                <div className="w-16 h-[2px] mb-10 mx-auto" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                                <p className={`text-silver/60 text-base sm:text-lg md:text-2xl leading-relaxed font-light ${lang === 'en' ? 'font-english tracking-wide' : 'font-body tracking-normal'
                                    }`}>
                                    {description}
                                </p>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </motion.div>

            {/* Edge Vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)]" />
        </section>
    );
};

export default HeadlineSection;
