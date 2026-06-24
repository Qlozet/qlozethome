"use client";

import { motion } from "framer-motion";
import { ListChecks, FormInput, MessageSquare } from "lucide-react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type SpecsSectionProps = {
  data: SectionData;
};

export function SpecsSection({ data }: SpecsSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-brand-light py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Right/Top: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                 const icons = [ListChecks, FormInput, MessageSquare];
                 const Icon = icons[i % icons.length];
                 return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-brand-light transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left/Bottom: Spec Sheet Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto min-h-[480px] sm:h-[550px] lg:h-[650px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-white border border-black/5 shadow-2xl overflow-hidden p-5 sm:p-6 lg:p-10 flex flex-col pt-10 sm:pt-12 group">
               
               {/* Background Header Pattern */}
               <div className="absolute top-0 inset-x-0 h-32 bg-brand-darker border-b border-black/10 flex items-center px-8 z-0">
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative z-10 flex flex-col">
                     <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase">Production Sheet</span>
                     <span className="font-mono text-xl text-white tracking-widest">ORDER #8920</span>
                  </div>
               </div>

               {/* Overlapping Spec Document */}
               <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
                  className="relative z-10 flex-1 bg-white rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-black/5 p-6 flex flex-col gap-6 mt-16"
               >
                  {/* Style Specs */}
                  <div className="flex flex-col gap-3">
                     <div className="flex items-center gap-2 mb-1">
                        <ListChecks className="h-4 w-4 text-brand-darker" />
                        <span className="font-display text-[10px] font-bold tracking-widest uppercase text-brand-darker/50">Style Configuration</span>
                     </div>
                     <div className="grid grid-cols-2 gap-3">
                        <div className="bg-brand-light border border-brand-darker/5 rounded-xl p-3 flex flex-col gap-1 hover:border-brand-darker/20 transition-colors">
                           <span className="font-mono text-[8px] text-zinc-400 tracking-widest uppercase">Collar</span>
                           <span className="font-display text-sm font-medium text-brand-darker">Mandarin</span>
                        </div>
                        <div className="bg-brand-light border border-brand-darker/5 rounded-xl p-3 flex flex-col gap-1 hover:border-brand-darker/20 transition-colors">
                           <span className="font-mono text-[8px] text-zinc-400 tracking-widest uppercase">Cuffs</span>
                           <span className="font-display text-sm font-medium text-brand-darker">French</span>
                        </div>
                        <div className="bg-brand-light border border-brand-darker/5 rounded-xl p-3 flex flex-col gap-1 hover:border-brand-darker/20 transition-colors">
                           <span className="font-mono text-[8px] text-zinc-400 tracking-widest uppercase">Fit</span>
                           <span className="font-display text-sm font-medium text-brand-darker">Slim Tailored</span>
                        </div>
                        <div className="bg-brand-light border border-brand-darker/5 rounded-xl p-3 flex flex-col gap-1 hover:border-brand-darker/20 transition-colors">
                           <span className="font-mono text-[8px] text-zinc-400 tracking-widest uppercase">Placket</span>
                           <span className="font-display text-sm font-medium text-brand-darker">Hidden</span>
                        </div>
                     </div>
                  </div>

                  {/* Material Spec */}
                  <div className="flex flex-col gap-3">
                     <div className="flex items-center gap-2 mb-1">
                        <FormInput className="h-4 w-4 text-brand-darker" />
                        <span className="font-display text-[10px] font-bold tracking-widest uppercase text-brand-darker/50">Material</span>
                     </div>
                     <div className="flex items-center gap-4 bg-brand-light border border-brand-darker/5 rounded-xl p-3">
                        <div className="h-10 w-10 rounded-full bg-zinc-200 border border-black/10 overflow-hidden shadow-inner">
                           <div className="w-full h-full bg-[url('/image/Striped.jpeg')] bg-cover" />
                        </div>
                        <div className="flex flex-col">
                           <span className="font-display text-sm font-medium text-brand-darker">Egyptian Cotton Stripe</span>
                           <span className="font-mono text-[8px] text-zinc-400 tracking-widest uppercase">REF: FAB-192-CW</span>
                        </div>
                     </div>
                  </div>

                  {/* Notes UI (Animated typing effect) */}
                  <div className="flex flex-col gap-3 flex-1">
                     <div className="flex items-center gap-2 mb-1">
                        <MessageSquare className="h-4 w-4 text-brand-darker" />
                        <span className="font-display text-[10px] font-bold tracking-widest uppercase text-brand-darker/50">Customer Notes</span>
                     </div>
                     <div className="relative flex-1 bg-[#fffdf0] border border-[#f0e6d2] rounded-xl p-4 shadow-inner overflow-hidden font-ui italic text-black/70 text-sm">
                        <motion.div
                           initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                           whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                           viewport={{ once: true }}
                           transition={{ duration: 2, ease: "linear", delay: 1 }}
                        >
                           "Please ensure the right cuff is 0.5cm wider to accommodate my watch. Keep the overall look very sharp."
                        </motion.div>
                     </div>
                  </div>

               </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
