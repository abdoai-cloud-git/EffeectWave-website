
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

interface TeamProps {
  subtitle: string;
  title: string;
  description: string;
  lang: 'ar' | 'en';
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 group-hover:border-accent/50 transition-colors duration-500">
        {/* Profile Image with subtle scale effect */}
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Floating Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-accent text-xs font-bold tracking-widest uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {role}
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-4">
            {name}
          </h3>

          <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <button className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center hover:bg-white transition-colors">
              <Linkedin size={14} />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-colors">
              <Twitter size={14} />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-colors">
              <Mail size={14} />
            </button>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 bg-accent rounded-full text-black transition-colors duration-300">
            <ExternalLink size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team: React.FC<TeamProps> = ({ subtitle, title, description, lang }) => {
  const team = [
    {
      name: lang === 'ar' ? "سامي التاجوري" : "Sami El Tajouri",
      role: lang === 'ar' ? "المؤسس والمدير التنفيذي" : "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: lang === 'ar' ? "محمد بن ناصر" : "Mohamed Ben Nasser",
      role: lang === 'ar' ? "المدير العام" : "General Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: lang === 'ar' ? "أحمد عمار" : "Ahmed Ammar",
      role: lang === 'ar' ? "مدير العلاقات" : "Relations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: lang === 'ar' ? "المدير الإبداعي" : "Creative Director",
      role: lang === 'ar' ? "Creative Director" : "Creative Director",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-obsidian">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full -z-10 transition-colors duration-700 gpu-accelerate" style={{ background: 'linear-gradient(to left, var(--color-accent, #ebe125)08, transparent)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              key={subtitle}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[1px] w-12 bg-accent transition-colors duration-300"></div>
              <span className="text-accent font-english text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300">
                {subtitle}
              </span>
            </motion.div>

            <motion.h2
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-white mb-6"
            >
              {title}
            </motion.h2>

            <motion.p
              key={description}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-silver/70 text-base md:text-lg leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="text-accent text-sm font-english tracking-widest border-b border-accent/30 pb-2 transition-colors duration-300">
              JOIN THE WAVE
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, idx) => (
            <TeamMember key={idx} index={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
