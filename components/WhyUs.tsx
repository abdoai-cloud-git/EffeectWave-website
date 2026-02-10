
import React from 'react';
import { motion } from 'framer-motion';

interface ReasonData {
  title: string;
  desc: string;
  icon: React.ElementType;
}

interface WhyUsProps {
  reasons: ReasonData[];
  lang: 'ar' | 'en';
}

const WhyUs: React.FC<WhyUsProps> = ({ reasons, lang }) => {
  return (
    <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-b from-obsidian to-onyx relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none transition-colors duration-700" style={{ backgroundImage: "radial-gradient(var(--color-accent) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            {lang === 'ar' ? 'لماذا' : 'Why'} <span className="text-accent transition-colors duration-300">Effect Wave?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx + item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-surface/50 p-6 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-onyx rounded-full flex items-center justify-center border border-white/10 mb-6 text-accent shadow-[0_0_15px_rgba(var(--color-accent),0.1)] transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-silver/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
