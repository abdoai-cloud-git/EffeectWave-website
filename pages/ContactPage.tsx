
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Mail, Phone, Globe, ArrowRight, ArrowUpLeft } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface ContactPageProps {
  theme: 'agency' | 'production';
  lang: 'ar' | 'en';
}

const ContactPage: React.FC<ContactPageProps> = ({ theme, lang }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  useDocumentMeta({
    title: lang === 'ar' ? 'تواصل معنا | موجة تأثير' : 'Contact | Effect Wave',
    description: lang === 'ar'
      ? 'تواصل مع وكالة موجة تأثير للتسويق والإنتاج الإعلامي'
      : 'Contact Effect Wave Agency for marketing and media production services',
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open user's email client
    window.location.href = `mailto:info@effectwaveco.com?subject=${subject}&body=${body}`;
  };

  const t = {
    title: lang === 'ar' ? "تواصل معنا" : "Contact Us",
    description: lang === 'ar'
      ? "إذا كنت تبحث عن جهة تفهم السوق قبل مخاطبته، وتحوّل الإعلام والتسويق إلى قيمة حقيقية، فأنت في المكان الصحيح."
      : "If you are looking for a partner who understands the market before addressing it, and turns media and marketing into real value, you are in the right place.",
    heading: lang === 'ar' ? "معلومات التواصل" : "Contact Information",
    phone: lang === 'ar' ? "الهاتف" : "Phone",
    email: lang === 'ar' ? "البريـد الإلكتروني" : "Email",
    website: lang === 'ar' ? "الموقع الإلكتروني" : "Website",
    formHeading: lang === 'ar' ? "أرسل رسالة" : "Send a Message",
    nameLabel: lang === 'ar' ? "الاسم الكامل" : "Full Name",
    namePlaceholder: lang === 'ar' ? "اكتب اسمك هنا" : "Enter your name",
    emailLabel: lang === 'ar' ? "البريد الإلكتروني" : "Email Address",
    messageLabel: lang === 'ar' ? "الرسالة" : "Message",
    messagePlaceholder: lang === 'ar' ? "كيف يمكننا مساعدتك؟" : "How can we help you?",
    submitButton: lang === 'ar' ? "إرسال الرسالة" : "Send Message"
  };

  return (
    <PageLayout
      theme={theme}
      title={t.title}
      subtitle="CONTACT US"
      description={t.description}
    >
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-10 relative inline-block">
                {t.heading}
                <span className={`absolute -bottom-2 ${lang === 'ar' ? 'right-0' : 'left-0'} w-1/2 h-1 rounded-full`} style={{ backgroundColor: accentColor }}></span>
              </h2>

              <div className="space-y-8">
                <a href="tel:+218944689827" className={`flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 ${lang === 'ar' ? '-mr-4' : '-ml-4'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/50 transition-colors duration-300">
                    <Phone style={{ color: accentColor }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs text-silver/40 uppercase tracking-widest mb-2 font-english">{t.phone}</h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-xl font-english text-white dir-ltr text-right group-hover:text-accent transition-colors">094 - 468 98 27</p>
                      <p className="text-xl font-english text-white dir-ltr text-right group-hover:text-accent transition-colors">091 - 882 41 94</p>
                    </div>
                  </div>
                </a>

                <a href="mailto:info@effectwaveco.com" className={`flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 ${lang === 'ar' ? '-mr-4' : '-ml-4'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/50 transition-colors duration-300">
                    <Mail style={{ color: accentColor }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs text-silver/40 uppercase tracking-widest mb-2 font-english">{t.email}</h3>
                    <p className="text-xl font-english text-white group-hover:text-accent transition-colors">info@effectwaveco.com</p>
                  </div>
                </a>

                <a href="https://www.effectwaveco.com" target="_blank" rel="noreferrer" className={`flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 ${lang === 'ar' ? '-mr-4' : '-ml-4'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/50 transition-colors duration-300">
                    <Globe style={{ color: accentColor }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs text-silver/40 uppercase tracking-widest mb-2 font-english">{t.website}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-english text-white group-hover:text-accent transition-colors">www.effectwaveco.com</p>
                      <ArrowUpLeft size={16} className={`text-silver/50 group-hover:text-accent transition-colors ${lang === 'en' ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-onyx/60 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}></div>

            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span>{t.formHeading}</span>
              <span className="h-[1px] flex-grow bg-white/10"></span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="contact-name" className={`text-sm text-silver/60 ${lang === 'ar' ? 'mr-1' : 'ml-1'}`}>{t.nameLabel}</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300"
                  style={{ '--color-accent': accentColor } as any}
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className={`text-sm text-silver/60 ${lang === 'ar' ? 'mr-1' : 'ml-1'}`}>{t.emailLabel}</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300"
                  style={{ '--color-accent': accentColor } as any}
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className={`text-sm text-silver/60 ${lang === 'ar' ? 'mr-1' : 'ml-1'}`}>{t.messageLabel}</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300 resize-none"
                  style={{ '--color-accent': accentColor } as any}
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-black flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 hover:brightness-110 mt-4 group min-h-[48px]"
                style={{ backgroundColor: accentColor }}
              >
                <span>{t.submitButton}</span>
                <ArrowRight size={20} className={`${lang === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
              </button>
            </form>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
