"use client";
import { motion } from "framer-motion";

type ValuesSectionProps = {
  data: {
    id: string;
    tagline: string;
    title: string;
    cards: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export function ValuesSection({ data }: ValuesSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-zinc-50 px-6 py-24 sm:py-32 scroll-mt-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-4 sm:px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex h-px w-12 bg-[#3A3A3A]/20" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
              {data.tagline}
            </span>
          </div>
          <h2 className="font-display max-w-2xl text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl">
            {data.title}
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {data.cards.map((card, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="group flex flex-col gap-8 bg-white p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#3A3A3A] text-white transition-transform duration-500 group-hover:scale-110">
                {card.icon === 'ruler' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M21.3 15.3l-9-9c-.7-.7-1.9-.7-2.6 0l-7 7c-.7.7-.7 1.9 0 2.6l9 9c.7.7 1.9.7 2.6 0l7-7c.7-.7.7-1.9 0-2.6z" />
                    <path d="M7 14l1.5-1.5" /><path d="M10 11l1.5-1.5" /><path d="M13 8l1.5-1.5" />
                  </svg>
                )}
                {card.icon === 'brush' && (
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
                    <path d="M7.07 14.94c-3.91.35-5.59 5.42-2.11 7.17 2.11 1.05 5.1-.5 6.06-2.1" />
                    <path d="m16.6 7.6 2.6 2.6" />
                  </svg>
                )}
                {card.icon === 'global' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
               {card.icon === 'shop' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                )}
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl font-medium text-[#3A3A3A]">
                  {card.title}
                </h3>
                <p className="font-ui text-base leading-relaxed text-[#3A3A3A]/50">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
