import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PlatformsSectionProps {
    theme: 'agency' | 'production';
    lang: 'ar' | 'en';
}

const PlatformsSection: React.FC<PlatformsSectionProps> = ({ theme, lang }) => {
    const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

    const platforms = [
        {
            name: 'روااد',
            nameEn: 'Rawad',
            description: lang === 'ar'
                ? 'منصة رقمية متكاملة لإدارة المحتوى والتسويق الإلكتروني'
                : 'Integrated digital platform for content management and digital marketing',
            url: 'https://rawad.com', // Replace with actual URL
            logo: '/logos/clients/04.png',
            gradient: 'from-blue-600 to-cyan-500'
        },
        {
            name: 'Side Effect',
            nameEn: 'Side Effect',
            description: lang === 'ar'
                ? 'استوديو إنتاج إعلامي متخصص في المحتوى الإبداعي والمؤثرات البصرية'
                : 'Media production studio specialized in creative content and visual effects',
            url: 'https://sideeffect.com', // Replace with actual URL
            logo: '/logos/clients/06.png',
            gradient: 'from-red-600 to-orange-500'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-obsidian">
            {/* Background Glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-8 gpu-accelerate pointer-events-none"
                style={{ background: `radial-gradient(circle, ${accentColor}22 0%, transparent 70%)` }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-12 sm:w-16" style={{ backgroundColor: accentColor }} />
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${lang === 'ar' ? 'font-heading' : 'font-english'}`}>
                            <span className="text-white">{lang === 'ar' ? 'منصاتنا' : 'Our '}</span>
                            <span style={{ color: accentColor }}>{lang === 'ar' ? '' : 'Platforms'}</span>
                        </h2>
                        <div className="h-[2px] w-12 sm:w-16" style={{ backgroundColor: accentColor }} />
                    </div>
                    <p className="text-silver/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                        {lang === 'ar'
                            ? 'منصات رقمية متطورة تقدم حلولاً مبتكرة في التسويق والإنتاج الإعلامي'
                            : 'Advanced digital platforms offering innovative solutions in marketing and media production'}
                    </p>
                </motion.div>

                {/* Platforms Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                >
                    {platforms.map((platform, index) => (
                        <motion.a
                            key={index}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-onyx/60 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 md:p-12 border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Accent Glow */}
                            <div
                                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 gpu-accelerate"
                                style={{ background: `radial-gradient(circle, ${accentColor}66 0%, transparent 70%)` }}
                            />

                            {/* Logo */}
                            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                <img
                                    src={platform.logo}
                                    alt={platform.name}
                                    className="w-full h-full object-contain filter drop-shadow-2xl"
                                />
                            </div>

                            {/* Platform Name */}
                            <h3 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-heading' : 'font-english'}`}>
                                <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                                    {lang === 'ar' ? platform.name : platform.nameEn}
                                </span>
                            </h3>

                            {/* Description */}
                            <p className="text-silver/70 text-base sm:text-lg mb-8 leading-relaxed">
                                {platform.description}
                            </p>

                            {/* CTA Button */}
                            <div className="flex items-center gap-3 text-sm sm:text-base font-bold tracking-wider">
                                <span
                                    className="transition-colors duration-300"
                                    style={{ color: accentColor }}
                                >
                                    {lang === 'ar' ? 'زيارة المنصة' : 'Visit Platform'}
                                </span>
                                <ExternalLink
                                    size={18}
                                    className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                    style={{ color: accentColor }}
                                />
                            </div>

                            {/* Decorative Corner */}
                            <div
                                className="absolute bottom-0 left-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(135deg, ${accentColor} 0%, transparent 70%)`,
                                    borderRadius: '0 100% 0 0'
                                }}
                            />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PlatformsSection;
