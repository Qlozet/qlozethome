"use client";

import { motion } from "framer-motion";
import { MoveRight, Scissors, Ruler, Layers, Check } from "lucide-react";

type UseData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type UseSectionProps = {
  data: UseData;
};

export function UseSection({ data }: UseSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-brand-light py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Right: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
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
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
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

            <div className="flex flex-col gap-3 mt-2">
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-darker/10"><Check className="h-3.5 w-3.5 text-brand-darker" /></span>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-[#111111]/30"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Left: Transformation Pipeline Visual */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto min-h-[450px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-white border border-black/5 shadow-2xl overflow-hidden flex flex-col pt-8 sm:pt-12 items-center">
               
               {/* Background Grid */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100 to-white pointer-events-none" />

               {/* Cinematic Storyboard Container */}
               <div className="absolute inset-0 w-full h-full overflow-hidden">

                  {/* Layer 1: Base Fabric */}
                  <motion.div 
                     animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
                     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute inset-0 z-10"
                  >
                     <img src="/image/Striped.jpeg" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/20" />
                     <div className="absolute top-6 left-6 lg:top-8 lg:left-8 backdrop-blur-md bg-white/95 px-4 py-2 rounded-full text-[10px] font-mono font-bold tracking-widest border border-white/20 text-black shadow-xl">
                        01. BASE LAYER
                     </div>
                  </motion.div>

                  {/* Layer 2: The Sketches / Styles */}
                  <motion.div 
                     animate={{ 
                        opacity: [0, 0, 1, 0, 0, 0],
                        scale: [0.95, 0.95, 1, 1.05, 1.05, 0.95]
                     }}
                     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                  >
                     <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                     <div className="flex -space-x-8 lg:-space-x-12 bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-2xl relative">
                        <img src="/svg/style-1.svg" className="w-24 h-48 lg:w-32 lg:h-64 opacity-90 drop-shadow-2xl" />
                        <img src="/svg/style-2.svg" className="w-24 h-48 lg:w-32 lg:h-64 opacity-90 drop-shadow-2xl scale-110 z-10" />
                        <img src="/svg/style-3.svg" className="w-24 h-48 lg:w-32 lg:h-64 opacity-90 drop-shadow-2xl" />
                     </div>
                     <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 flex flex-col items-end">
                        <div className="backdrop-blur-md bg-black/80 text-white px-4 py-2 rounded-full text-[10px] font-mono font-bold tracking-widest border border-white/10 shadow-2xl">
                           02. DIGITAL DRAPING
                        </div>
                        <span className="text-[8px] text-white/50 font-mono tracking-[0.2em] mt-2 mr-2">APPLYING CUTITECT MAPS...</span>
                     </div>
                  </motion.div>

                  {/* Layer 3: Final Outcome Fade / Reveal */}
                  <motion.div 
                     animate={{ 
                        opacity: [0, 0, 0, 1, 1, 0],
                        scale: [1.05, 1.05, 1.05, 1, 1, 1.05]
                     }}
                     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute inset-0 z-30"
                  >
                     <img src="/image/bespoke-outfit-1.webp" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none" />
                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                     
                     <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 right-6 lg:right-8 flex justify-between items-end">
                        <div className="flex flex-col gap-2">
                           <div className="backdrop-blur-md bg-white text-brand-darker px-4 py-2 flex items-center justify-center rounded-xl text-sm font-mono font-bold shadow-2xl border border-white/20">
                              03. BESPOKE REALITY
                           </div>
                        </div>
                        <div className="text-[8px] lg:text-[9px] font-mono tracking-[0.2em] text-white font-bold text-right bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                           GENERATION COMPLETE <br/> MATCH RATE: 100%
                        </div>
                     </div>
                  </motion.div>

               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
