
import React from 'react';
import Hero from '../components/Hero';
import HeadlineSection from '../components/HeadlineSection';
import ServicesGrid from '../components/ServicesGrid';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Team from '../components/Team';

import {
  Users, Sparkles, Layers,
  Target, Monitor, Megaphone, PenTool,
  Clapperboard, Film, Mic2, Image,
  Eye, Star, BarChart3, Check, Tv, Zap
} from 'lucide-react';

interface HomePageProps {
  theme: 'agency' | 'production';
  lang: 'ar' | 'en';
}

const agencyContent = {
  ar: {
    hero: {
      badge: "استثمار رائد | A Groundbreaking Investment",
      titleLine1: "نصنع التأثير...",
      titleLine2: "ونفهم السوق قبل أن نخاطبه",
      description: "موجة تأثير وكالة رائدة في التسويق والإعلام، تقدم حلولاً مبتكرة تساعد العلامات التجارية والمؤسسات على التواصل بفعالية.",
      buttonText: "ابدأ رحلتك معنا"
    },
    headline: {
      titleLine1: "نصنع التأثير...",
      titleLine2: "ونبني حضوراً مستداماً",
      description: "نساعد العلامات التجارية على النمو من خلال التسويق الاستراتيجي والإنتاج الإعلامي المتقدم."
    },
    about: [
      {
        title: "من نحن",
        icon: Users,
        text: "موجة تأثير وكالة رائدة في التسويق والإعلام، تقدّم حلولاً مبتكرة تساعد العلامات التجارية والمؤسسات على التواصل بفعالية."
      },
      {
        title: "رؤيتنا",
        icon: Target,
        text: "أن نكون جهة رائدة في صناعة التأثير الإعلامي والتسويقي المبني على الفهم والمعرفة."
      },
      {
        title: "فلسفتنا",
        icon: Sparkles,
        text: "التأثير يبدأ من الفهم. نسعى لتقديم حلول مبنية على البيانات والتحليل لتحقيق نتائج ملموسة وقيمة مستدامة."
      }
    ],
    servicesTitle: "خدماتنا",
    servicesSubtitle: "SOLUTIONS",
    services: [
      {
        title: "إعداد الاستراتيجيات",
        subtitle: "STRATEGIC PLANNING",
        icon: Target,
        features: ["دراسة السوق", "تحليل الجمهور", "بناء الخطط وتحديد الرسائل"]
      },
      {
        title: "التسويق الرقمي",
        subtitle: "DIGITAL MARKETING",
        icon: Monitor,
        features: ["إدارة حسابات التواصل", "صناعة المحتوى", "إدارة الحملات الرقمية"]
      },
      {
        title: "المؤتمرات والفعاليات",
        subtitle: "EVENTS & PR",
        icon: Megaphone,
        features: ["تخطيط وتنفيذ المؤتمرات", "إدارة المعارض والفعاليات", "التغطية الإعلامية"]
      },
      {
        title: "المطبوعات والتصميم",
        subtitle: "DESIGN & PRINT",
        icon: PenTool,
        features: ["بناء الهويات البصرية", "تصميم المواد التسويقية", "اللوحات الإعلانية"]
      }
    ],
    whyUs: [
      { title: "التأثير يبدأ من الفهم", desc: "لا نخاطب السوق قبل أن نفهمه بدقة.", icon: Eye },
      { title: "استثمار رائد", desc: "استثمار حقيقي يعود بقيمة مستدامة.", icon: Star },
      { title: "قيمة حقيقية", desc: "نقدم شراكة طويلة الأمد.", icon: Check }
    ]
  },
  en: {
    hero: {
      badge: "A Groundbreaking Investment",
      titleLine1: "We Create Impact...",
      titleLine2: "And understand the market before we speak to it",
      description: "Effect Wave is a leading marketing and media agency, providing innovative solutions that help brands connect effectively.",
      buttonText: "Start Your Journey"
    },
    headline: {
      titleLine1: "We Create Impact...",
      titleLine2: "And Build Lasting Presence",
      description: "We help brands grow through strategic marketing and advanced media production."
    },
    about: [
      {
        title: "Who We Are",
        icon: Users,
        text: "Effect Wave is a leading agency in marketing and media, offering innovative solutions to help brands and institutions communicate effectively."
      },
      {
        title: "Our Vision",
        icon: Target,
        text: "To be a leading force in creating media and marketing impact built on understanding and knowledge."
      },
      {
        title: "Our Philosophy",
        icon: Sparkles,
        text: "Impact starts with understanding. We provide data-driven solutions to achieve tangible results and sustainable value."
      }
    ],
    servicesTitle: "Our Services",
    servicesSubtitle: "SOLUTIONS",
    services: [
      {
        title: "Strategy Formulation",
        subtitle: "STRATEGIC PLANNING",
        icon: Target,
        features: ["Market Study", "Audience Analysis", "Strategic Planning & Messaging"]
      },
      {
        title: "Digital Marketing",
        subtitle: "DIGITAL MARKETING",
        icon: Monitor,
        features: ["Social Media Management", "Content Creation", "Digital Ads Campaigns"]
      },
      {
        title: "Events & PR",
        subtitle: "EVENTS & PR",
        icon: Megaphone,
        features: ["Conference Planning", "Exhibition Management", "Media Coverage"]
      },
      {
        title: "Design & Print",
        subtitle: "DESIGN & PRINT",
        icon: PenTool,
        features: ["Visual Identity Design", "Marketing Collateral", "Outdoor Billboards"]
      }
    ],
    whyUs: [
      { title: "Impact Starts with Understanding", desc: "We don't address the market before deeply understanding it.", icon: Eye },
      { title: "A Groundbreaking Investment", desc: "A real investment that returns sustainable value.", icon: Star },
      { title: "Real Value", desc: "We offer long-term partnerships, not just temporary services.", icon: Check }
    ]
  }
};

const productionContent = {
  ar: {
    hero: {
      badge: "استثمار رائد | A Groundbreaking Investment",
      titleLine1: "إبداع بصري",
      titleLine2: "وإنتاج إعلامي يترك أثراً حقيقياً",
      description: "نحول الأفكار إلى واقع بصري ملموس من خلال أحدث تقنيات الإنتاج الإعلامي والفني.",
      buttonText: "احجز استشارتك"
    },
    headline: {
      titleLine1: "نصنع التأثير...",
      titleLine2: "ونقود المشهد الإعلامي",
      description: "نحول الأفكار إلى واقع ملموس من خلال أحدث تقنيات الإنتاج الإعلامي والفني."
    },
    about: [
      {
        title: "من نحن",
        icon: Users,
        text: "موجة تأثير للإنتاج الفني والإعلامي هي الوجهة للحلول البصرية المبتكرة التي تخلق تأثيراً حقيقياً ومستداماً."
      },
      {
        title: "رؤيتنا",
        icon: Film,
        text: "أن نكون المعيار للجودة الفنية والإبداعية في السوق."
      },
      {
        title: "فلسفتنا",
        icon: Sparkles,
        text: "الإعلام الفعّال هو نتيجة قراءة دقيقة للبيئة الثقافية، مع لمسة إبداعية تضمن جودة الصورة وقوة الصوت."
      }
    ],
    servicesTitle: "خدمات الإنتاج الفني",
    servicesSubtitle: "CREATIVE PRODUCTION",
    services: [
      {
        title: "الإنتاج الإعلامي",
        subtitle: "MEDIA PRODUCTION",
        icon: Clapperboard,
        features: ["الإعلانات التجارية", "البرامج التلفزيونية", "الأفلام الوثائقية"]
      },
      {
        title: "الإنتاج الفني",
        subtitle: "ARTISTIC PRODUCTION",
        icon: Film,
        features: ["موشن جرافيك 2D", "فيديوهات 3D", "المعالجة البصرية (VFX)"]
      },
      {
        title: "الصوت والبودكاست",
        subtitle: "AUDIO & PODCAST",
        icon: Mic2,
        features: ["إنتاج بودكاست", "التعليق الصوتي", "المكساج الصوتي"]
      },
      {
        title: "الإخراج الفني",
        subtitle: "ART DIRECTION",
        icon: Image,
        features: ["الإخراج الفني", "تجهيز المحتوى", "تسجيل الأعمال"]
      }
    ],
    whyUs: [
      { title: "إبداع وتحليل", desc: "نربط الإبداع الفني بالنتائج ملموسة.", icon: BarChart3 },
      { title: "جودة بصرية", desc: "جودة تخاطب الجمهور وتلفت الأنظار.", icon: Tv },
      { title: "استثمار رائد", desc: "استثمار في صورة علامتك التجارية.", icon: Zap }
    ]
  },
  en: {
    hero: {
      badge: "A Groundbreaking Investment",
      titleLine1: "Visual Creativity",
      titleLine2: "Media Production that Leaves a Real Impact",
      description: "We transform ideas into tangible visual reality through the latest media and artistic production technologies.",
      buttonText: "Book Your Consultation"
    },
    headline: {
      titleLine1: "We Create Impact...",
      titleLine2: "And Lead the Media Scene",
      description: "We transform ideas into tangible reality through the latest media and artistic production technologies."
    },
    about: [
      {
        title: "Who We Are",
        icon: Users,
        text: "Effect Wave for Artistic and Media Production is the destination for innovative visual solutions that create a real and sustainable impact."
      },
      {
        title: "Our Vision",
        icon: Film,
        text: "To be the standard for artistic and creative quality in the market."
      },
      {
        title: "Our Philosophy",
        icon: Sparkles,
        text: "Effective media is the result of a careful reading of the cultural environment, with a creative touch that ensures image quality and sound power."
      }
    ],
    servicesTitle: "Production Services",
    servicesSubtitle: "CREATIVE PRODUCTION",
    services: [
      {
        title: "Media Production",
        subtitle: "MEDIA PRODUCTION",
        icon: Clapperboard,
        features: ["Commercial Ads", "TV & Digital Programs", "Documentaries"]
      },
      {
        title: "Artistic Production",
        subtitle: "ARTISTIC PRODUCTION",
        icon: Film,
        features: ["2D Motion Graphics", "3D Product Videos", "Visual Processing (VFX)"]
      },
      {
        title: "Audio & Podcast",
        subtitle: "AUDIO & PODCAST",
        icon: Mic2,
        features: ["Podcast Production", "Voice Over", "Audio Mixing"]
      },
      {
        title: "Art Direction",
        subtitle: "ART DIRECTION",
        icon: Image,
        features: ["Art Direction", "Audio Content Prep", "Audio Recording"]
      }
    ],
    whyUs: [
      { title: "Creativity & Analysis", desc: "We link artistic creativity with tangible results.", icon: BarChart3 },
      { title: "Visual Quality", desc: "Quality that speaks to the audience and catches the eye.", icon: Tv },
      { title: "A Groundbreaking Investment", desc: "An investment in your brand image.", icon: Zap }
    ]
  }
};

const HomePage: React.FC<HomePageProps> = ({ theme, lang }) => {
  const content = (theme === 'agency' ? agencyContent : productionContent)[lang];

  return (
    <>
      <Hero
        lang={lang}
        {...content.hero}
        theme={theme}
      />

      <HeadlineSection
        {...content.headline}
        theme={theme}
        lang={lang}
      />

      <div id="about">
        <About lang={lang} cards={content.about} />
      </div>

      <div id="services">
        <ServicesGrid
          lang={lang}
          title={content.servicesTitle}
          subtitle={content.servicesSubtitle}
          services={content.services}
        />
      </div>

      <div id="why-us">
        <WhyUs
          lang={lang}
          reasons={content.whyUs}
        />
      </div>

      <div id="team">
        <Team
          lang={lang}
          subtitle={lang === 'ar' ? "فريقنا" : "OUR TEAM"}
          title={lang === 'ar' ? "العقول خلف الإبداع" : "Minds Behind Creativity"}
          description={lang === 'ar'
            ? "مجموعة من الشغوفين المبدعين الذين يجمعهم هدف واحد: تحويل أفكارك إلى واقع استثنائي."
            : "A group of passionate creators united by one goal: transforming your ideas into extraordinary reality."}
        />
      </div>
    </>
  );
};

export default HomePage;
