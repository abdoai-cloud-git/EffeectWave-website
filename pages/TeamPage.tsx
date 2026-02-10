
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { User } from 'lucide-react';

interface TeamPageProps {
  theme: 'agency' | 'production';
  lang: 'ar' | 'en';
}

const TeamPage: React.FC<TeamPageProps> = ({ theme, lang }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  const teamMembers = [
    {
      name: lang === 'ar' ? "سامي التاجوري" : "Sami Al-Tajouri",
      title: lang === 'ar' ? "المؤسس والمدير التنفيذي" : "Founder & CEO",
      englishTitle: "Founder & CEO"
    },
    {
      name: lang === 'ar' ? "محمد بن ناصر" : "Mohammed Bin Nasser",
      title: lang === 'ar' ? "المدير العام" : "Managing Director",
      englishTitle: "Managing Director"
    },
    {
      name: lang === 'ar' ? "أحمد عمار" : "Ahmed Ammar",
      title: lang === 'ar' ? "مدير العلاقات" : "Head of Relations",
      englishTitle: "Head of Relations"
    },
    {
      name: lang === 'ar' ? "الإدارة الإبداعية" : "Creative Management",
      title: lang === 'ar' ? "المدير الإبداعي" : "Creative Director",
      englishTitle: "Creative Director"
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
      <section className="px-6 max-w-7xl mx-auto">

        <div className="mb-16 flex items-center gap-4">
          <h2 className="text-3xl font-heading font-bold text-white">{lang === 'ar' ? 'الفريق القيادي' : 'Leadership Team'}</h2>
          <div className="h-[1px] flex-grow max-w-[100px] bg-white/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-onyx/50 rounded-3xl mb-6 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500">
                {/* Placeholder for Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                  <User size={64} className="text-white/10 group-hover:text-white/20 transition-colors duration-500" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

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

        <div className="mt-24 p-10 md:p-16 rounded-[2rem] bg-onyx/30 border border-white/5 text-center backdrop-blur-sm relative overflow-hidden">
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
