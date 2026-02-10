import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
    id: number;
    type: 'image' | 'video';
    thumbnail: string;
    url: string;
    category: string;
    title: {
        en: string;
        ar: string;
    };
}

const galleryData: MediaItem[] = [
    // Images from public/assets/Media
    {
        id: 1,
        type: 'image',
        thumbnail: '/assets/Media/02 شيماء بوست copy.jpg',
        url: '/assets/Media/02 شيماء بوست copy.jpg',
        category: 'Social Media',
        title: { en: 'Social Media Campaign', ar: 'حملة تواصل اجتماعي' }
    },
    {
        id: 2,
        type: 'image',
        thumbnail: '/assets/Media/BIANCO copy.jpg',
        url: '/assets/Media/BIANCO copy.jpg',
        category: 'Branding',
        title: { en: 'Premium Branding', ar: 'هوية بصرية فاخرة' }
    },
    {
        id: 3,
        type: 'image',
        thumbnail: '/assets/Media/baw social media 2 copy.jpg',
        url: '/assets/Media/baw social media 2 copy.jpg',
        category: 'Social Media',
        title: { en: 'Dynamic Content', ar: 'محتوى تفاعلي' }
    },
    {
        id: 4,
        type: 'image',
        thumbnail: '/assets/Media/tetto.jpg',
        url: '/assets/Media/tetto.jpg',
        category: 'Branding',
        title: { en: 'Corporate Identity', ar: 'هوية مؤسسية' }
    },
    {
        id: 5,
        type: 'image',
        thumbnail: '/assets/Media/الرسالة.jpg',
        url: '/assets/Media/الرسالة.jpg',
        category: 'Social Media',
        title: { en: 'Creative Storytelling', ar: 'سرد قصصي إبداعي' }
    },
    {
        id: 6,
        type: 'image',
        thumbnail: '/assets/Media/بوست التسويق الإلكتروني copy.jpg',
        url: '/assets/Media/بوست التسويق الإلكتروني copy.jpg',
        category: 'Marketing',
        title: { en: 'Digital Marketing', ar: 'تسويق إلكتروني' }
    },
    {
        id: 7,
        type: 'image',
        thumbnail: '/assets/Media/بوست سوشل ميديا رؤيتنا copy.jpg',
        url: '/assets/Media/بوست سوشل ميديا رؤيتنا copy.jpg',
        category: 'Social Media',
        title: { en: 'Our Vision Post', ar: 'بوست رؤيتنا' }
    },
    {
        id: 8,
        type: 'image',
        thumbnail: '/assets/Media/بوست سوشل ميديا التسويق التقليدي copy.jpg',
        url: '/assets/Media/بوست سوشل ميديا التسويق التقليدي copy.jpg',
        category: 'Marketing',
        title: { en: 'Traditional Marketing', ar: 'التسويق التقليدي' }
    },
    {
        id: 9,
        type: 'image',
        thumbnail: '/assets/Media/بوست سوشل ميديا الانتاج الاعلامي copy.jpg',
        url: '/assets/Media/بوست سوشل ميديا الانتاج الاعلامي copy.jpg',
        category: 'Production',
        title: { en: 'Media Production', ar: 'الإنتاج الإعلامي' }
    },
    {
        id: 10,
        type: 'image',
        thumbnail: '/assets/Media/بوست توصيلة 02 copy.jpg',
        url: '/assets/Media/بوست توصيلة 02 copy.jpg',
        category: 'Social Media',
        title: { en: 'Delivery App Post', ar: 'بوست تطبيق توصيل' }
    },
    {
        id: 11,
        type: 'image',
        thumbnail: '/assets/Media/برايمر الطوقان بلس copy.jpg',
        url: '/assets/Media/برايمر الطوقان بلس copy.jpg',
        category: 'Branding',
        title: { en: 'Toucan Primer', ar: 'برايمر الطوقان' }
    },
    {
        id: 12,
        type: 'image',
        thumbnail: '/assets/Media/اليوم التاني 3.jpg',
        url: '/assets/Media/اليوم التاني 3.jpg',
        category: 'Events',
        title: { en: 'Event Coverage: Day 2', ar: 'تغطية اليوم الثاني' }
    },
    // Video Samples (YouTube)
    {
        id: 101,
        type: 'video',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        category: 'Video',
        title: { en: 'Product Commercial', ar: 'إعلان تجاري لمنتج' }
    },
    {
        id: 102,
        type: 'video',
        thumbnail: 'https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
        url: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
        category: 'Video',
        title: { en: 'Brand Story', ar: 'قصة العلامة التجارية' }
    }
];

interface GalleryProps {
    lang: 'en' | 'ar';
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
    const [filter, setFilter] = useState('All');
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

    const categories = ['All', 'Social Media', 'Branding', 'Marketing', 'Production', 'Events', 'Video'];

    const filteredMedia = filter === 'All'
        ? galleryData
        : galleryData.filter(item => item.category === filter);

    const labels = {
        title: lang === 'en' ? 'Our Creative Showcase' : 'معرض أعمالنا الإبداعية',
        subtitle: lang === 'en' ? 'A glimpse into the waves of impact we create.' : 'لمحة عن موجات التأثير التي نصنعها.',
        close: lang === 'en' ? 'Close' : 'إغلاق',
        next: lang === 'en' ? 'Next' : 'التالي',
        prev: lang === 'en' ? 'Previous' : 'السابق',
    };

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedMedia) return;
        const currentIndex = filteredMedia.findIndex(item => item.id === selectedMedia.id);
        const nextIndex = (currentIndex + 1) % filteredMedia.length;
        setSelectedMedia(filteredMedia[nextIndex]);
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedMedia) return;
        const currentIndex = filteredMedia.findIndex(item => item.id === selectedMedia.id);
        const prevIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
        setSelectedMedia(filteredMedia[prevIndex]);
    };

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedMedia) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setSelectedMedia(null);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedMedia, filteredMedia]); // Re-bind when state changes to get fresh closures

    return (
        <section className="py-20 bg-obsidian relative overflow-hidden" id="gallery">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white"
                    >
                        {labels.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        {labels.subtitle}
                    </motion.p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, idx) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${filter === cat
                                ? 'bg-accent border-accent text-black font-bold scale-105'
                                : 'bg-white/5 border-white/10 text-white hover:border-accent/50'
                                }`}
                        >
                            {lang === 'ar' && cat === 'All' ? 'الكل' :
                                lang === 'ar' && cat === 'Social Media' ? 'تواصل اجتماعي' :
                                    lang === 'ar' && cat === 'Branding' ? 'هوية بصرية' :
                                        lang === 'ar' && cat === 'Marketing' ? 'تسويق' :
                                            lang === 'ar' && cat === 'Production' ? 'إنتاج' :
                                                lang === 'ar' && cat === 'Events' ? 'فعاليات' :
                                                    lang === 'ar' && cat === 'Video' ? 'فيديو' : cat}
                        </motion.button>
                    ))}
                </div>

                {/* Media Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredMedia.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10 }}
                                className="group relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 cursor-pointer"
                                onClick={() => setSelectedMedia(item)}
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={lang === 'en' ? item.title.en : item.title.ar}
                                    loading="lazy"
                                    width={640}
                                    height={360}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                                                {item.category}
                                            </span>
                                            <h3 className="text-white font-bold text-lg">
                                                {lang === 'en' ? item.title.en : item.title.ar}
                                            </h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                                            {item.type === 'video' ? <Play size={20} fill="currentColor" /> : <ImageIcon size={20} />}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal / Lightbox */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedMedia(null)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-colors z-[110]"
                            aria-label={labels.close}
                        >
                            <X size={24} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-colors z-[110] flex"
                            aria-label={labels.prev}
                        >
                            <ChevronLeft size={24} className="md:w-8 md:h-8" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-colors z-[110] flex"
                            aria-label={labels.next}
                        >
                            <ChevronRight size={24} className="md:w-8 md:h-8" />
                        </button>

                        <motion.div
                            key={selectedMedia.id} // Re-animate on change
                            initial={{ scale: 0.95, opacity: 0, x: 20 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            exit={{ scale: 0.95, opacity: 0, x: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-obsidian group"
                        >
                            {selectedMedia.type === 'video' ? (
                                <iframe
                                    src={`${selectedMedia.url}?autoplay=1`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <img
                                    src={selectedMedia.url}
                                    alt={lang === 'en' ? selectedMedia.title.en : selectedMedia.title.ar}
                                    className="w-full h-full object-contain bg-black"
                                />
                            )}

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">
                                            {selectedMedia.category}
                                        </span>
                                        <h2 className="text-white text-2xl md:text-3xl font-bold">
                                            {lang === 'en' ? selectedMedia.title.en : selectedMedia.title.ar}
                                        </h2>
                                    </div>
                                    <div className="text-white/50 font-mono text-sm">
                                        {filteredMedia.findIndex(i => i.id === selectedMedia.id) + 1} / {filteredMedia.length}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default memo(Gallery);
