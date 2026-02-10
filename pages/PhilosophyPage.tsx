
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
              <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay"></div>

              {/* Decorative Abstract Shapes */}
              <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-[100px] opacity-40" style={{ backgroundColor: accentColor }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full blur-[60px] bg-white opacity-10"></div>

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
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-onyx/50 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-4xl font-english font-bold text-white">{t.sideEffectTitle}</h3>
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Plus size={24} />
                  </div>
                </div>
                <p className="text-silver/70 text-lg leading-relaxed">
                  {t.sideEffectDesc}
                </p>
              </motion.div>

              {/* Rowad */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-onyx/50 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <h3 className={`text-4xl font-bold text-white ${lang === 'en' ? 'font-english' : 'font-heading'}`}>{t.rowadTitle}</h3>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{t.soon}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <TrendingUp size={24} />
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
