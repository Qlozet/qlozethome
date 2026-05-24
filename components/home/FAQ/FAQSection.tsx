"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQData = typeof import("@/data/home/faq.json");

type FAQSectionProps = {
  data: FAQData;
  dark?: boolean;
};

export function FAQSection({ data, dark = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section 
      id={data.id} 
      className={`relative z-10 scroll-mt-32 py-32 lg:py-48 ${dark ? 'bg-[#050505]' : 'bg-white'}`} 
      data-theme={dark ? "dark" : "light"}
    >
      <div className="mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="grid gap-24 lg:grid-cols-[0.7fr_1.3fr]">
          
          {/* Left Column: Title & Subtext */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-32 h-fit">
            <div className="flex flex-col gap-6">
              <motion.span variants={itemVariants} className={`font-display text-[10px] font-bold uppercase tracking-[0.5em] ${dark ? 'text-white/30' : 'text-black/30'}`}>
                Concierge
              </motion.span>
              <motion.h2 variants={itemVariants} className={`font-display text-5xl font-medium leading-[0.95] tracking-tighter sm:text-6xl ${dark ? 'text-white' : 'text-black'}`}>
                {data.title}
              </motion.h2>
              <motion.p variants={itemVariants} className={`max-w-sm font-ui text-lg leading-relaxed ${dark ? 'text-white/50' : 'text-black/50'}`}>
                Architectural Fit. Global Discovery. Scalable Craft. Find answers to your technical and operational inquiries.
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants} className="flex flex-col gap-4 pt-4">
              <p className={`font-display text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-white/20' : 'text-black/20'}`}>Still have questions?</p>
              <a 
                href="mailto:support@qlozet.com" 
                className={`group flex w-fit items-center gap-4 border-b pb-2 font-display text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${dark ? 'border-white/10 text-white hover:border-white' : 'border-black/10 text-black hover:border-black'}`}
              >
                Contact our styling team
                <div className={`h-px transition-all duration-500 group-hover:w-12 ${dark ? 'bg-white w-8' : 'bg-black w-8'}`} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Minimalist List */}
          <div className={`flex flex-col border-t ${dark ? 'border-white/10' : 'border-black/5'}`}>
            {data.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div variants={itemVariants} key={item.question} className={`border-b ${dark ? 'border-white/10' : 'border-black/5'}`}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-8 py-10 text-left transition-all hover:opacity-100 sm:py-12"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className={`flex-1 font-display text-xl font-medium tracking-tight transition-colors sm:text-2xl ${isOpen ? (dark ? 'text-white' : 'text-black') : (dark ? 'text-white/40' : 'text-black/40')}`}>
                      {item.question}
                    </span>
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                      <div className={`h-px w-6 transition-transform duration-700 ${isOpen ? 'rotate-180 bg-black' : ''} ${dark ? 'bg-white' : 'bg-black/20'}`} />
                      <div className={`absolute h-6 w-px transition-transform duration-700 ${isOpen ? 'rotate-90 opacity-0' : ''} ${dark ? 'bg-white' : 'bg-black/20'}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className={`pb-12 font-ui text-lg leading-relaxed lg:max-w-2xl ${dark ? 'text-white/50' : 'text-black/50'}`}>
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}


