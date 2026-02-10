
import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  theme: 'agency' | 'production';
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description, theme }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  return (
    <div className="relative pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
         {/* Noise overlay */}
         <div className="absolute inset-0 opacity-20 noise-overlay brightness-150 contrast-150 mix-blend-overlay"></div>
         {/* Ambient Glow */}
         <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-15" style={{ backgroundColor: accentColor }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12" style={{ backgroundColor: accentColor }}></div>
            <span className="text-sm font-english font-bold tracking-[0.2em] uppercase text-white/60">
              {subtitle}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="max-w-2xl text-silver/70 text-lg md:text-xl leading-relaxed mt-4 font-light">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
