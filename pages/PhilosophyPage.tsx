
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { Lightbulb, Plus, TrendingUp } from 'lucide-react';

interface PhilosophyPageProps {
  theme: 'agency' | 'production';
  lang: 'ar' | 'en';
}

const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ theme, lang }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  const t = {
    title: lang === 'ar' ? "فلسفتنا" : "Our Philosophy",
    desc: lang === 'ar' ? "التأثير يبدأ من الفهم... والإعلام الفعّال هو نتيجة قراءة دقيقة للسوق." : "Impact starts with understanding... and effective media is the result of a careful reading of the market.",
    heading: lang === 'ar' ? "التأثير يبدأ من" : "Impact Starts with",
    understanding: lang === 'ar' ? "الفهم" : "Understanding",
    p1: lang === 'ar'
      ? "الإعلام الفعّال هو نتيجة قراءة دقيقة للسوق، وسلوك الجمهور، والبيئة الثقافية والاقتصادية المحيطة."
      : "Effective media is the result of a precise reading of the market, audience behavior, and the surrounding cultural and economic environment.",
    p2: theme === 'agency'
      ? (lang === 'ar' ? "نسعى لتقديم حلول مبنية على البيانات والتحليل، مع لمسة إبداعية تضمن تحقيق نتائج ملموسة وقيمة مستدامة." : "We seek to provide data-driven solutions and analysis, with a creative touch that ensures tangible results and sustainable value.")
      : (lang === 'ar' ? "في الإنتاج، نؤمن بأن الجودة التقنية هي أساس الإقناع. ندمج الفن بالتكنولوجيا لخلق تجربة بصرية لا تُنسى." : "In production, we believe that technical quality is the basis of persuasion. We merge art with technology to create an unforgettable visual experience."),
    platformsTitle: lang === 'ar' ? "منصات" : "Platforms of",
    platformsDesc: lang === 'ar'
      ? "لتحقيق فهم أعمق للسوق الليبي، أنشأت موجة تأثير منصات متخصصة تعمل كأدوات بحث تسويقي تمكّننا من دراسة السوق مباشرة وتحليل سلوك الجمهور."
      : "To achieve a deeper understanding of the Libyan market, Effect Wave established specialized platforms that serve as marketing research tools, enabling us to study the market directly and analyze audience behavior.",
    sideEffectTitle: "Side Effect",
    sideEffectDesc: lang === 'ar'
      ? "منصة متخصصة في المجال الطبي والدوائي، تقدم محتوى توعوي وتحليلي، وتساعد على فهم ديناميكية السوق الصحي وسلوك المستهلك."
      : "A specialized platform in the medical and pharmaceutical field, providing educational and analytical content, helping to understand the dynamics of the health market and consumer behavior.",
    rowadTitle: lang === 'ar' ? "روّاد" : "Rowad",
    rowadDesc: lang === 'ar'
      ? "منصة متخصصة في الاقتصاد وريادة الأعمال، تركز على تحليل السوق والمشاريع وفهم بيئة الأعمال المحلية."
      : "A platform specialized in economics and entrepreneurship, focusing on analyzing the market and projects and understanding the local business environment.",
    soon: lang === 'ar' ? "قريباً" : "Soon"
  };

  return (
    <PageLayout
      theme={theme}
      title={t.title}
      subtitle="OUR PHILOSOPHY"
      description={t.desc}
    >
      <section className="px-4 sm:px-6 max-w-7xl mx-auto space-y-16 sm:space-y-24">

        {/* Philosophy Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${lang === 'ar' ? 'order-2 lg:order-1' : 'order-1'} `}
          >
            <div className="inline-flex w-20 h-20 rounded-3xl bg-white/5 border border-white/10 items-center justify-center mb-10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
              <Lightbulb size={40} style={{ color: accentColor }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              {t.heading} <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-silver">{t.understanding}</span>
            </h2>
            <div className="space-y-6 text-silver/70 text-lg md:text-xl leading-relaxed font-light">
              <p>{t.p1}</p>
              <div className="h-[1px] w-24 bg-white/10"></div>
              <p>{t.p2}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`${lang === 'ar' ? 'order-1 lg:order-2' : 'order-2'} p-1 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm`}
          >
            <div className="aspect-square md:aspect-[4/3] rounded-[2.3rem] bg-black/40 overflow-hidden relative flex items-center justify-center">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full opacity-30 gpu-accelerate" style={{ background: `radial-gradient(circle, ${accentColor}55 0%, transparent 60%)` }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-white/5 gpu-accelerate"></div>

              <div className="relative z-10 text-center px-6">
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-english font-bold text-white tracking-tighter opacity-90 drop-shadow-2xl uppercase">
                  {theme === 'agency' ? 'INSIGHT' : 'QUALITY'}
                  <br />
                  {theme === 'agency' ? 'DRIVEN' : 'FIRST'}
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Platforms Section - Only for Agency */}
        {theme === 'agency' && (
          <div className="border-t border-white/5 pt-20">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                {t.platformsTitle} <span style={{ color: accentColor }}>{lang === 'ar' ? 'موجة تأثير' : 'Effect Wave'}</span>
              </h2>
              <p className="text-silver/60 text-lg max-w-3xl leading-relaxed">
                {t.platformsDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Side Effect */}
              <motion.a
                href="https://www.instagram.com/sideeffect_platform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-onyx/50 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 overflow-hidden relative group cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Logo */}
                <div className="w-24 h-24 mb-6">
                  <img
                    src="/logos/clients/06.png"
                    alt="Side Effect"
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-4xl font-english font-bold text-white">{t.sideEffectTitle}</h3>
                </div>

                <p className="text-silver/70 text-lg leading-relaxed mb-6">
                  {t.sideEffectDesc}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/sideeffect_platform"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1ALZaxgPNA/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </motion.a>

              {/* Rowad */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-onyx/50 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Logo */}
                <div className="w-24 h-24 mb-6">
                  <img
                    src="/logos/clients/04.png"
                    alt="Rawad"
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h3 className={`text-4xl font-bold text-white ${lang === 'en' ? 'font-english' : 'font-heading'}`}>{t.rowadTitle}</h3>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{t.soon}</span>
                  </div>
                </div>

                <p className="text-silver/70 text-lg leading-relaxed">
                  {t.rowadDesc}
                </p>
              </motion.div>
            </div>
          </div>
        )}

      </section>
    </PageLayout>
  );
};

export default PhilosophyPage;
