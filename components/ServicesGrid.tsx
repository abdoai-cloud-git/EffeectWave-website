
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';

interface ServiceData {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  features: string[];
}

interface ServicesGridProps {
  title: string;
  subtitle: string;
  services: ServiceData[];
  lang: 'ar' | 'en';
}

const ServiceCard: React.FC<ServiceData & { index: number; lang: 'ar' | 'en' }> = ({ icon: Icon, title, subtitle, features, index, lang }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-onyx rounded-3xl p-6 md:p-8 border border-white/5 overflow-hidden flex flex-col h-full"
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors duration-300 mb-8 relative z-10">
        <Icon className="text-silver group-hover:text-accent transition-colors duration-300 w-8 h-8" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <div className="mb-2 text-accent text-sm font-bold tracking-wider uppercase transition-colors duration-300">{subtitle}</div>
        <h3 className={`text-2xl md:text-3xl font-bold text-white mb-6 ${lang === 'en' ? 'font-english' : 'font-heading'
          }`}>
          {title}
        </h3>

        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className={`flex items-start gap-3 text-silver/80 text-base md:text-lg ${lang === 'en' ? 'font-english' : 'font-body'
              }`}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 transition-colors duration-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative Arrow */}
      <div className="relative z-10 flex justify-end mt-auto">
        <motion.div
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300"
        >
          <ArrowUpLeft className="w-6 h-6" />
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-12 -left-12 text-white/5 pointer-events-none transform rotate-12 scale-150 group-hover:scale-125 transition-transform duration-700">
        <Icon className="w-64 h-64 opacity-[0.03]" strokeWidth={0.5} />
      </div>
    </motion.div>
  );
};

const ServicesGrid: React.FC<ServicesGridProps> = ({ title, subtitle, services, lang }) => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="mb-12 md:mb-16 relative z-10 text-center md:text-start">
        <motion.div
          key={subtitle}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-4 justify-center md:justify-start"
        >
          <div className="h-[1px] w-12 bg-accent transition-colors duration-300"></div>
          <span className="text-accent font-english text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300">
            {subtitle}
          </span>
        </motion.div>

        <motion.h2
          key={title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ${lang === 'en' ? 'font-english' : 'font-heading'
            }`}
        >
          {title}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx + service.title}
            index={idx}
            lang={lang}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
