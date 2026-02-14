import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  description: string;
  lang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ description, lang }) => {
  return (
    <footer className={`bg-onyx pt-20 pb-40 px-6 border-t border-white/10 relative overflow-hidden ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">

        {/* Brand Column */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-4xl font-english font-bold text-white mb-6 tracking-tighter">
            EFFECT <span className="text-accent transition-colors duration-300">WAVE</span>
          </h2>
          <p className="text-silver max-w-md text-lg leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex gap-4">
            {([
              { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/effectwave_ly' },
              { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1DWwkZR1w9/' },
              { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/effect-wave/' },
            ] as const).map(({ Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center">
          <div className="grid gap-6">
            <a href="mailto:info@effectwaveco.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                <Mail />
              </div>
              <div>
                <div className="text-xs text-silver/50 uppercase tracking-wider mb-1">
                  {lang === 'ar' ? 'بريدنا الإلكتروني' : 'Email Us'}
                </div>
                <div className="text-xl text-white font-english group-hover:text-accent transition-colors duration-300">info@effectwaveco.com</div>
              </div>
            </a>

            <a href="tel:+218944689827" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                <Phone />
              </div>
              <div>
                <div className="text-xs text-silver/50 uppercase tracking-wider mb-1">
                  {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
                </div>
                <div className="text-xl text-white font-english group-hover:text-accent transition-colors duration-300 flex flex-col items-start" dir="ltr">
                  <a href="tel:+218944689827" className="hover:underline">094 - 468 98 27</a>
                  <a href="tel:+218918824194" className="hover:underline">091 - 882 41 94</a>
                </div>
              </div>
            </a>

            <a href="https://www.effectwaveco.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                <Globe />
              </div>
              <div>
                <div className="text-xs text-silver/50 uppercase tracking-wider mb-1">
                  {lang === 'ar' ? 'موقعنا الإلكتروني' : 'Visit Us'}
                </div>
                <div className="text-xl text-white font-english group-hover:text-accent transition-colors duration-300">www.effectwaveco.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-silver/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Effect Wave Agency. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</Link>
        </div>
      </div>

      {/* Big Footer Text */}
      <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none opacity-[0.03]">
        <span className="text-[12vw] font-english font-bold leading-none text-white">EFFECTWAVE</span>
      </div>
    </footer>
  );
};

export default Footer;
