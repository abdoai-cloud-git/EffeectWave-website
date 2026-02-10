
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { Target, Eye } from 'lucide-react';

interface AboutPageProps {
  theme: 'agency' | 'production';
  lang: 'ar' | 'en';
}

const AboutPage: React.FC<AboutPageProps> = ({ theme, lang }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  const content = {
    agency: {
      ar: {
        intro: "في عالم أصبحت فيه الصورة، الرسالة، والتوقيت عوامل حاسمة، تأتي موجة تأثير كوكالة تسويق متكاملة، تقدم فهمًا عميقًا للسوق وبناء تأثير حقيقي ومستدام للعلامات التجارية والمؤسسات.",
        vision: {
          title: "رؤيتنا",
          text: "أن نكون جهة رائدة في صناعة التأثير الإعلامي والتسويقي المبني على الفهم والمعرفة.",
          sub: "بيانات دقيقة، قرارات ذكية."
        },
        mission: {
          title: "رسالتنا",
          text: "تقديم حلول إعلامية وتسويقية مدروسة، مبنية على تحليل السوق وفهم الجمهور، لإنتاج محتوى يليق بالعلامات والمؤسسات التي نمثلها.",
          sub: "تخطيط استراتيجي، نتائج ملموسة."
        }
      },
      en: {
        intro: "In a world where image, message, and timing have become decisive factors, Effect Wave comes as an integrated marketing agency, offering a deep understanding of the market and building real and sustainable impact for brands and institutions.",
        vision: {
          title: "Our Vision",
          text: "To be a leading force in the media and marketing impact industry built on understanding and knowledge.",
          sub: "Accurate data, smart decisions."
        },
        mission: {
          title: "Our Mission",
          text: "To provide thoughtful media and marketing solutions, based on market analysis and audience understanding, to produce content worthy of the brands and institutions we represent.",
          sub: "Strategic planning, tangible results."
        }
      }
    },
    production: {
      ar: {
        intro: "نحن نؤمن بأن الإبداع البصري هو اللغة الأقوى. موجة تأثير للإنتاج الفني تقدم حلولاً مبتكرة تحول الأفكار إلى تجارب بصرية وصوتية تترك أثراً لا يمحى في ذاكرة المشاهد.",
        vision: {
          title: "رؤيتنا",
          text: "أن نكون الخيار الأول في صناعة المحتوى المرئي والمسموع الذي يجمع بين الجودة السينمائية والرسالة الهادفة.",
          sub: "صورة سينمائية، صوت نقي."
        },
        mission: {
          title: "رسالتنا",
          text: "توظيف أحدث التقنيات الفنية والكفاءات الإبداعية لإنتاج أعمال فنية ترتقي بالذائقة البصرية وتحقق رؤية شركائنا.",
          sub: "إتقان فني، إبداع بلا حدود."
        }
      },
      en: {
        intro: "We believe that visual creativity is the most powerful language. Effect Wave for Artistic Production offers innovative solutions that transform ideas into visual and audio experiences that leave an indelible impact in the viewer's memory.",
        vision: {
          title: "Our Vision",
          text: "To be the first choice in the visual and audio content industry that combines cinematic quality with a purposeful message.",
          sub: "Cinematic image, pure sound."
        },
        mission: {
          title: "Our Mission",
          text: "Employing the latest artistic technologies and creative competencies to produce artistic works that elevate visual taste and achieve our partners' vision.",
          sub: "Artistic perfection, limitless creativity."
        }
      }
    }
  };

  const selectedContent = (theme === 'agency' ? content.agency : content.production)[lang];
  const pageTitle = lang === 'ar' ? "من نحن" : "About Us";
  const pageDesc = theme === 'agency'
    ? (lang === 'ar' ? "وكالة رائدة في التسويق والإعلام، نصنع التأثير." : "A leading marketing and media agency, we create impact.")
    : (lang === 'ar' ? "رواد في الإنتاج الفني والإعلامي، نصنع المشهد." : "Pioneers in artistic and media production, we create the scene.");

  return (
    <PageLayout
      theme={theme}
      title={pageTitle}
      subtitle="ABOUT US"
      description={pageDesc}
    >
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">

        {/* Main Introduction Text */}
        <div className="mb-20">
          <motion.p
            key={theme}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-xl md:text-3xl leading-relaxed text-silver/90 font-heading font-bold max-w-5xl"
          >
            "{selectedContent.intro}"
          </motion.p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-onyx/40 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110">
              <Eye size={250} />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-accent/30 transition-colors">
                <Eye size={32} style={{ color: accentColor }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{selectedContent.vision.title}</h2>
              <p className="text-sm font-bold tracking-wider opacity-50 mb-6" style={{ color: accentColor }}>OUR VISION</p>
              <p className="text-silver/70 text-lg md:text-xl leading-relaxed">
                {selectedContent.vision.text}
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <span className="text-sm text-silver/40 font-english uppercase tracking-widest">{selectedContent.vision.sub}</span>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-onyx/40 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110">
              <Target size={250} />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-accent/30 transition-colors">
                <Target size={32} style={{ color: accentColor }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{selectedContent.mission.title}</h2>
              <p className="text-sm font-bold tracking-wider opacity-50 mb-6" style={{ color: accentColor }}>OUR MISSION</p>
              <p className="text-silver/70 text-lg md:text-xl leading-relaxed">
                {selectedContent.mission.text}
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <span className="text-sm text-silver/40 font-english uppercase tracking-widest">{selectedContent.mission.sub}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
