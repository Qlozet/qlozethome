"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CheckSquare, Ratio } from "lucide-react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type InsightsSectionProps = {
  data: SectionData;
};

export function InsightsSection({ data }: InsightsSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-[#050505] py-16 lg:py-48 overflow-hidden text-white" data-theme="dark">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-white/50 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const icons = [Ratio, BrainCircuit, CheckSquare];
                const Icon = icons[i % icons.length];
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-black transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-white/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: AI Insights Matrix Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[500px] sm:h-[550px] lg:h-[650px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-900 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
               
               {/* Grid & Vignette */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 opacity-80" />
               <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

               {/* Core AI Interface */}
               <div className="relative w-full h-full p-8 flex flex-col gap-6 z-10 scale-[0.85] sm:scale-100 origin-center">
                  
                  {/* Top Analysis Header */}
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="w-full bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-4 flex justify-between items-center"
                  >
                     <div className="flex items-center gap-3">
                        <BrainCircuit className="h-5 w-5 text-emerald-400" />
                        <div className="flex flex-col">
                           <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Analysis Engine</span>
                           <span className="font-display text-sm font-bold text-white">Posture & Proportion</span>
                        </div>
                     </div>
                     <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase tracking-wider">Online</span>
                     </div>
                  </motion.div>

                  {/* Matrix Cards (Staggered) */}
                  <div className="flex-1 relative flex flex-col justify-center gap-4">
                     
                     {/* Suggestion 1 */}
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 60 }}
                        className="bg-zinc-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-2xl relative z-20 group hover:border-white/20 transition-colors mr-12"
                     >
                        <div className="flex justify-between items-start mb-3">
                           <span className="font-display text-[10px] uppercase tracking-widest text-emerald-400 font-bold">Fit Recommendation</span>
                           <CheckSquare className="h-4 w-4 text-white/30 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <p className="font-ui text-white text-sm">Shoulder slope detected at 15°. Recommend adjusting armhole depth by +1.5cm for optimal mobility.</p>
                     </motion.div>

                     {/* Suggestion 2 */}
                     <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 60 }}
                        className="bg-black/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 shadow-2xl relative z-10 group hover:border-white/20 transition-colors ml-12"
                     >
                        <div className="flex justify-between items-start mb-3">
                           <span className="font-display text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Proportion Mapping</span>
                           <Ratio className="h-4 w-4 text-white/30" />
                        </div>
                        <p className="font-ui text-white/70 text-sm">Leg-to-torso ratio indicates high waist styling will provide the best aesthetic balance.</p>
                     </motion.div>

                  </div>

                  {/* Bottom Processing Bar */}
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.7 }}
                     className="w-full bg-white/5 border border-white/5 rounded-xl h-2 relative overflow-hidden"
                  >
                     <motion.div 
                        animate={{ left: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-y-0 w-1/3 bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                     />
                  </motion.div>
                  <div className="text-center">
                     <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">Continuous Learning Active</span>
                  </div>

               </div>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
