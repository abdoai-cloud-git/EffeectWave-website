
import React from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
  theme: 'agency' | 'production';
  title?: string;
  subtitle?: string;
  description?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, theme, title, subtitle, description }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* --- PAGE SPECIFIC BACKGROUND LAYERS --- */}
      {/* Note: Starfield and Noise are now global in App.tsx */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Top Center Ambient Light (Subtle, Wide) */}
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute top-[-400px] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] rounded-full blur-[180px]" 
            style={{ 
              background: `radial-gradient(circle at center, ${accentColor}, transparent 70%)` 
            }} 
         />

         {/* Bottom Accent Glow */}
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-[-300px] right-[-100px] w-[800px] h-[800px] rounded-full blur-[200px]" 
            style={{ backgroundColor: accentColor }} 
         />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10">
        
        {/* Header Section */}
        {(title || subtitle) && (
          <div className="pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start gap-6"
            >
              {subtitle && (
                <div className="flex items-center gap-4 group">
                  <div className="h-[2px] w-12 transition-all duration-500 group-hover:w-20" style={{ backgroundColor: accentColor }}></div>
                  <span className="text-sm md:text-base font-english font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors duration-300">
                    {subtitle}
                  </span>
                </div>
              )}
              
              {title && (
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight drop-shadow-2xl">
                  {title}
                </h1>
              )}
              
              {description && (
                <p className="max-w-3xl text-silver/70 text-lg md:text-xl leading-relaxed font-light border-r-2 border-white/10 pr-6 mt-2">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
        )}

        {/* Page Content */}
        <div className="pb-24">
          {children}
        </div>

      </div>
    </div>
  );
};

export default PageLayout;
