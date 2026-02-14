import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Facebook } from 'lucide-react';

interface ClientLink {
    type: 'instagram' | 'facebook' | 'twitter' | 'linkedin';
    url: string;
}

interface ClientLogo {
    path: string;
    name?: string;
    socialLinks?: ClientLink[];
}

interface ClientsSectionProps {
    theme: 'agency' | 'production';
    lang: 'ar' | 'en';
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ theme, lang }) => {
    const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';
    const [selectedClient, setSelectedClient] = useState<ClientLogo | null>(null);

    // Generate all 13 client logo paths with metadata
    const clientLogos: ClientLogo[] = Array.from({ length: 13 }, (_, i) => {
        const num = (i + 1).toString().padStart(2, '0');
        const path = `/logos/clients/${num}.png`;

        // Add specific metadata for clients
        if (num === '06') {
            return {
                path,
                name: 'Side Effect',
                socialLinks: [
                    { type: 'instagram', url: 'https://www.instagram.com/sideeffect_platform' },
                    { type: 'facebook', url: 'https://www.facebook.com/share/1ALZaxgPNA/?mibextid=wwXIfr' }
                ]
            };
        }

        return { path };
    });

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
                        <span className="text-white">{lang === 'ar' ? 'شركات ومؤسسات تعاملنا معها' : 'Our '}</span>
                        <span style={{ color: accentColor }}>{lang === 'ar' ? '' : 'Clients'}</span>
                    </h2>

                    <p className="text-silver/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                        {lang === 'ar'
                            ? 'نفخر بتقديم خدماتنا لعدد من الشركات والمؤسسات في مختلف المجالات.'
                            : 'We take pride in our clients\' trust and successful partnerships'}
                    </p>
                </motion.div>

                {/* Logo Grid — All Visible with Staggered Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto px-6"
                >
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8 justify-items-center">
                        {clientLogos.map((client, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                onClick={() => setSelectedClient(client)}
                                whileHover={{ scale: 1.1, y: -8 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-2xl p-3 sm:p-4 md:p-5 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-500 cursor-pointer relative group"
                            >
                                {/* Hover glow ring */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        boxShadow: `inset 0 0 20px ${accentColor}10, 0 0 30px ${accentColor}08`
                                    }}
                                />

                                <img
                                    src={client.path}
                                    alt={client.name || `Client ${index + 1}`}
                                    className="w-full h-full object-contain relative z-10 opacity-70 group-hover:opacity-100 transition-all duration-500 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                                />
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 mt-12 sm:mt-16 px-6"
                >
                    {[
                        { value: lang === 'ar' ? '50+' : '50+', label: lang === 'ar' ? 'مشروع مكتمل' : 'Projects Delivered' },
                        { value: lang === 'ar' ? '30+' : '30+', label: lang === 'ar' ? 'عميل راضٍ' : 'Happy Clients' },
                        { value: lang === 'ar' ? '5+' : '5+', label: lang === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
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
                {selectedClient && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        onClick={() => setSelectedClient(null)}
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
                                onClick={() => setSelectedClient(null)}
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

                            {/* Client Info */}
                            <div className="relative flex flex-col items-center justify-center min-h-[250px] sm:min-h-[350px]">
                                <img
                                    src={selectedClient.path}
                                    alt={selectedClient.name || "Client Logo Preview"}
                                    className="max-w-[80%] max-h-[250px] sm:max-h-[300px] object-contain drop-shadow-2xl mb-8"
                                />

                                {selectedClient.name && (
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                        {selectedClient.name}
                                    </h3>
                                )}

                                {selectedClient.socialLinks && (
                                    <div className="flex items-center gap-4 mt-2">
                                        {selectedClient.socialLinks.map((social, idx) => (
                                            <a
                                                key={idx}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                                                onClick={(e) => e.stopPropagation()}
                                                aria-label={social.type}
                                            >
                                                {social.type === 'instagram' && (
                                                    <Instagram size={22} className="text-white" />
                                                )}
                                                {social.type === 'facebook' && (
                                                    <Facebook size={22} className="text-white" />
                                                )}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ClientsSection;
