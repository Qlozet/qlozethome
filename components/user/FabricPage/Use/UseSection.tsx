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
    <section id={data.id} className="relative z-10 bg-zinc-50 py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <MoveRight className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-black/30"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Left: Transformation Pipeline Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
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
                           <div className="backdrop-blur-md bg-emerald-500 text-white px-4 py-2 flex items-center justify-center rounded-xl text-sm font-mono font-bold shadow-2xl border border-emerald-400">
                              03. BESPOKE REALITY
                           </div>
                        </div>
                        <div className="text-[8px] lg:text-[9px] font-mono tracking-[0.2em] text-emerald-400 font-bold text-right bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
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
