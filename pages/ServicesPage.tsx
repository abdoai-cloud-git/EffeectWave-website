
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import {
  Clapperboard, Film, Mic2, Monitor,
  Target, Megaphone, PenTool, Image, Tv, Layers
} from 'lucide-react';

interface ServicesPageProps {
  theme: 'agency' | 'production';
  lang: 'ar' | 'en';
}

const ServicesPage: React.FC<ServicesPageProps> = ({ theme, lang }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  useDocumentMeta({
    title: lang === 'ar' ? 'خدماتنا | موجة تأثير' : 'Services | Effect Wave',
    description: lang === 'ar'
      ? 'استكشف خدمات التسويق والإنتاج الإعلامي التي تقدمها وكالة موجة تأثير'
      : 'Explore marketing and media production services offered by Effect Wave Agency',
  });

  const agencyServices = {
    ar: [
      {
        title: "إعداد الاستراتيجيات التسويقية",
        subtitle: "STRATEGIC PLANNING",
        icon: Target,
        items: ["دراسة السوق", "تحليل الجمهور", "بناء الخطط", "تحديد الرسائل"]
      },
      {
        title: "التسويق الرقمي وإدارة المنصات",
        subtitle: "DIGITAL MARKETING",
        icon: Monitor,
        items: ["إدارة حسابات التواصل", "صناعة المحتوى", "الحملات الرقمية", "تحليل الأداء"]
      },
      {
        title: "الحملات الإعلانية",
        subtitle: "ADVERTISING CAMPAIGNS",
        icon: Tv,
        items: ["التخطيط", "التنفيذ", "الإشراف والمتابعة", "قياس النتائج"]
      },
      {
        title: "التصميم والهوية البصرية",
        subtitle: "BRANDING & IDENTITY",
        icon: PenTool,
        items: ["تصميم الشعارات", "التصميم الإعلاني", "المواد التسويقية"]
      },
      {
        title: "تنظيم المؤتمرات والمعارض",
        subtitle: "EVENTS & EXHIBITIONS",
        icon: Megaphone,
        items: ["تخطيط المؤتمرات", "إدارة الفعاليات", "تغطية إعلامية"]
      }
    ],
    en: [
      {
        title: "Marketing Strategy Formulation",
        subtitle: "STRATEGIC PLANNING",
        icon: Target,
        items: ["Market Research", "Audience Analysis", "Strategic Planning", "Messaging Design"]
      },
      {
        title: "Digital Marketing & Management",
        subtitle: "DIGITAL MARKETING",
        icon: Monitor,
        items: ["Social Media Management", "Content Creation", "Digital Campaigns", "Performance Analysis"]
      },
      {
        title: "Advertising Campaigns",
        subtitle: "ADVERTISING CAMPAIGNS",
        icon: Tv,
        items: ["Campaign Planning", "Execution", "Supervision & Tracking", "Results Measurement"]
      },
      {
        title: "Branding & Visual Identity",
        subtitle: "BRANDING & IDENTITY",
        icon: PenTool,
        items: ["Logo Design", "Advertising Design", "Marketing Collateral"]
      },
      {
        title: "Events & Exhibitions",
        subtitle: "EVENTS & EXHIBITIONS",
        icon: Megaphone,
        items: ["Conference Planning", "Exhibition Management", "Media Coverage"]
      }
    ]
  };

  const productionServices = {
    ar: [
      {
        title: "الإنتاج الإعلامي",
        subtitle: "MEDIA PRODUCTION",
        icon: Clapperboard,
        items: ["الإعلانات التجارية", "برامج تلفزيونية", "أفلام وثائقية", "تغطيات إعلامية"]
      },
      {
        title: "الإنتاج الفني",
        subtitle: "ART & POST-PRODUCTION",
        icon: Film,
        items: ["موشن جرافيك 2D", "فيديوهات 3D", "المعالجة البصرية", "الإخراج الفني"]
      },
      {
        title: "الإنتاج الصوتي والبودكاست",
        subtitle: "AUDIO SERVICES",
        icon: Mic2,
        items: ["إنتاج بودكاست", "التعليق الصوتي", "تسجيل الأعمال", "المكساج الصوتي"]
      },
      {
        title: "المطبوعات والتصميمات",
        subtitle: "PRINT & DESIGN",
        icon: Image,
        items: ["تصميم المطبوعات", "الكتيبات والنشرات", "الهويات البصرية"]
      }
    ],
    en: [
      {
        title: "Media Production",
        subtitle: "MEDIA PRODUCTION",
        icon: Clapperboard,
        items: ["Commercial Ads", "TV & Digital Programs", "Documentaries", "Media Coverage"]
      },
      {
        title: "Artistic & Post-Production",
        subtitle: "ART & POST-PRODUCTION",
        icon: Film,
        items: ["2D Motion Graphics", "3D Project Videos", "Visual Effects (VFX)", "Art Direction"]
      },
      {
        title: "Audio & Podcast Production",
        subtitle: "AUDIO SERVICES",
        icon: Mic2,
        items: ["Full Podcast Production", "Voice Over", "Audio Recording", "Mixing & Mastering"]
      },
      {
        title: "Print & Design Services",
        subtitle: "PRINT & DESIGN",
        icon: Image,
        items: ["Print Design", "Brochures & Flyers", "Visual Identity", "Billboards"]
      }
    ]
  };

  const services = (theme === 'agency' ? agencyServices : productionServices)[lang];

  return (
    <PageLayout
      theme={theme}
      title={lang === 'ar' ? "خدماتنا" : "Our Services"}
      subtitle={theme === 'agency' ? "AGENCY SERVICES" : "PRODUCTION SERVICES"}
      description={theme === 'agency'
        ? (lang === 'ar' ? "نقدم حلولاً تسويقية واستراتيجية مبنية على فهم دقيق للسوق والجمهور." : "We provide marketing and strategic solutions based on a deep understanding of the market and audience.")
        : (lang === 'ar' ? "نحول الأفكار إلى واقع مرئي ومسموع بأعلى معايير الجودة الفنية." : "We transform ideas into visual and audio reality with the highest standards of artistic quality.")}
    >
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx + theme}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-onyx/60 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 hover:border-white/10 hover:bg-onyx transition-all duration-300 group hover:-translate-y-1 h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 group-hover:border-accent/30 transition-all duration-300">
                  <service.icon
                    size={30}
                    className="text-silver group-hover:text-accent transition-colors duration-300"
                    style={{ '--color-accent': accentColor } as any}
                  />
                </div>
                <div className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: accentColor }} />
              </div>

              <div className="mb-2 text-xs font-english tracking-widest opacity-50 uppercase text-accent" style={{ color: accentColor }}>
                {service.subtitle}
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-6 group-hover:text-accent transition-colors duration-300" style={{ color: 'white', '--hover-color': accentColor } as any}>
                {service.title}
              </h3>

              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-silver/60 text-sm md:text-base leading-snug group-hover:text-silver/90 transition-colors duration-300">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-white/20 group-hover:bg-accent transition-colors duration-300" style={{ '--color-accent': accentColor } as any} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto mt-20 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 sm:p-16 rounded-[2rem] border border-white/5 bg-onyx/30 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {lang === 'ar' ? 'هل تحتاج خدماتنا؟' : 'Need our services?'}
          </h2>
          <p className="text-silver/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {lang === 'ar'
              ? 'تواصل معنا اليوم لنناقش كيف يمكننا مساعدتك في تحقيق أهدافك.'
              : 'Get in touch today and let\'s discuss how we can help you achieve your goals.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-sm tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 min-h-[48px]"
            style={{ backgroundColor: accentColor }}
          >
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            <svg className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
