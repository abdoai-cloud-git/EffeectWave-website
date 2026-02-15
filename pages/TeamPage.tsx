
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Phone } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface TeamPageProps {
  theme: 'agency' | 'production';
  lang: 'ar' | 'en';
}

interface SocialLink {
  type: 'instagram' | 'linkedin' | 'phone';
  url: string;
}

interface TeamMember {
  name: string;
  title: string;
  englishTitle: string;
  image: string;
  socials: SocialLink[];
}

const socialIcon = (type: SocialLink['type']) => {
  switch (type) {
    case 'instagram': return <Instagram size={16} />;
    case 'linkedin': return <Linkedin size={16} />;
    case 'phone': return <Phone size={16} />;
  }
};

const TeamPage: React.FC<TeamPageProps> = ({ theme, lang }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  useDocumentMeta({
    title: lang === 'ar' ? 'فريق العمل | موجة تأثير' : 'Team | Effect Wave',
    description: lang === 'ar'
      ? 'تعرف على فريق عمل وكالة موجة تأثير القيادي'
      : 'Meet the Effect Wave Agency leadership team',
    canonicalUrl: 'https://www.effectwaveco.com/team',
    ogLocale: lang === 'ar' ? 'ar_LY' : 'en_US',
  });

  const teamMembers: TeamMember[] = [
    {
      name: lang === 'ar' ? "سامي التاجوري" : "Sami Al-Tajouri",
      title: lang === 'ar' ? "المؤسس والمدير التنفيذي" : "Founder & CEO",
      englishTitle: "Founder & CEO",
      image: "/assets/Media/team/سامي التاجوري - مدير عام.jpg",
      socials: [
        { type: 'instagram', url: 'https://www.instagram.com/sami_altajouri' },
        { type: 'linkedin', url: 'https://www.linkedin.com/in/sami-altajuory' },
        { type: 'phone', url: 'tel:+218944689827' },
      ]
    },
    {
      name: lang === 'ar' ? "محمد بن ناصر" : "Mohamed Ben Nasser",
      title: lang === 'ar' ? "المدير العام" : "Managing Director",
      englishTitle: "Managing Director",
      image: "/assets/Media/team/محمد رمضان بن ناصر المدير التنفيذي للشركة.jpg",
      socials: [
        { type: 'instagram', url: 'https://www.instagram.com/mohamed.bennaser.official' },
        { type: 'phone', url: 'tel:+21892-8701432' },
      ]
    },
    {
      name: lang === 'ar' ? "أحمد عمار" : "Ahmed Amar",
      title: lang === 'ar' ? "مدير العلاقات العامة" : "Public Relations Manager",
      englishTitle: "Public Relations Manager",
      image: "/assets/Media/team/أحمد عمار-مدير العلاقات العامة.jpg",
      socials: [
        { type: 'instagram', url: 'https://www.instagram.com/ahmedbnamarr' },
        { type: 'linkedin', url: 'https://www.linkedin.com/in/ahmedamarr' },
        { type: 'phone', url: 'tel:+905338693063' },
      ]
    },
    {
      name: lang === 'ar' ? "دانيا الفرجاني" : "Dania Fergiani",
      title: lang === 'ar' ? "المدير الإبداعي" : "Creative Director",
      englishTitle: "Creative Director",
      image: "/assets/Media/team/المدير الابداعي-دانيا الفرجاني.jpeg",
      socials: [
        { type: 'instagram', url: 'https://www.instagram.com/dfergiani' },
        { type: 'phone', url: 'tel:+905050762000' },
      ]
    }
  ];

  return (
    <PageLayout
      theme={theme}
      title={lang === 'ar' ? "فريق العمل" : "Our Team"}
      subtitle="OUR TEAM"
      description={lang === 'ar'
        ? "فريق يصنع التأثير بعقلية استثمارية. مختصون يعملون معًا لبناء مشاريع ذات قيمة وتأثير مستدام."
        : "A team that creates impact with an investment mindset. Specialists working together to build projects of value and sustainable impact."}
    >
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">

        <div className="mb-16 flex items-center gap-4">
          <h2 className="text-3xl font-heading font-bold text-white">{lang === 'ar' ? 'الفريق القيادي' : 'Leadership Team'}</h2>
          <div className="h-[1px] flex-grow max-w-[100px] bg-white/20"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-3xl mb-6 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500">
                {/* Real Photo */}
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:text-black transition-colors duration-300"
                      style={{ ['--tw-hover-bg' as any]: accentColor }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                    >
                      {socialIcon(social.type)}
                    </a>
                  ))}
                </div>

                {/* Decorative Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ backgroundColor: accentColor }}></div>
                </div>
              </div>

              <div className={lang === 'ar' ? 'pr-2' : 'pl-2'}>
                <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300" style={{ '--color-accent': accentColor } as any}>
                  {member.name}
                </h3>
                <p className="text-xs font-english text-silver/40 uppercase tracking-widest mb-2">
                  {member.englishTitle}
                </p>
                <p className="text-sm font-bold opacity-80" style={{ color: accentColor }}>
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 p-6 sm:p-10 md:p-16 rounded-[1.5rem] sm:rounded-[2rem] bg-onyx/30 border border-white/5 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <p className="text-lg md:text-2xl text-silver/80 max-w-4xl mx-auto leading-relaxed font-light">
            {lang === 'ar'
              ? '"يعمل فريقنا القيادي جنبًا إلى جنب مع شبكة من الكفاءات الإبداعية والتنفيذية حسب طبيعة كل مشروع، لضمان جودة العمل وتحقيق أفضل النتائج."'
              : '"Our leadership team works side-by-side with a network of creative and executive talents tailored to each project, ensuring work quality and achieving the best results."'
            }
          </p>
        </div>

      </section>
    </PageLayout>
  );
};

export default TeamPage;
