"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Check } from "lucide-react";

type InspirationData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type InspirationSectionProps = {
  data: InspirationData;
};

export function InspirationSection({ data }: InspirationSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-[#F9F9F8] py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Right: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
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
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A3A3A]/10"><Check className="h-3.5 w-3.5 text-[#3A3A3A]" /></span>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-[#3A3A3A]/30"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Left: Enhanced Layered Moodboard Visual */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto min-h-[450px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 overflow-hidden flex items-center justify-center group/moodboard">
               
               {/* Scaled Play Area for Mobile */}
               <div className="absolute inset-0 w-full h-full transform scale-[0.70] sm:scale-100 origin-center">
                  {/* Background Canvas Effect */}
               <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, black 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#3E1C01]/5 via-transparent to-[#3A3A3A]/5" />

               {/* Geometric Thread Connector */}
               <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-30 z-0">
                  <motion.path 
                     d="M150,400 C 150,200 400,200 350,500"
                     fill="none" 
                     stroke="#3E1C01" 
                     strokeWidth="1.5"
                     strokeDasharray="6 6"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
               </svg>

               <div className="relative w-full h-full">
                  
                  {/* Card 1: Fabric Swatch (Back, Left) */}
                  <motion.div 
                     initial={{ x: -40, y: 30, opacity: 0, rotate: -15 }}
                     whileInView={{ x: 0, y: 0, opacity: 1, rotate: -8 }}
                     viewport={{ once: true }}
                     animate={{ y: [-3, 3, -3], rotate: [-8, -7, -8] }}
                     transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }, default: { type: "spring", stiffness: 50, damping: 20 } }}
                     className="absolute top-[10%] left-[5%] w-[45%] h-[50%] bg-zinc-900 rounded-[2rem] shadow-2xl border border-black/5 overflow-hidden flex flex-col z-0 hover:z-30 transition-shadow duration-500 transform-gpu"
                  >
                     <div className="flex-1 relative bg-zinc-800 overflow-hidden rounded-t-[2rem]">
                        <motion.div 
                           className="absolute inset-0 bg-zinc-800"
                           style={{ backgroundImage: "url('/image/Striped.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }} 
                           whileHover={{ scale: 1.1 }}
                           transition={{ duration: 0.6 }}
                        />
                     </div>
                     <div className="h-10 bg-white/95 backdrop-blur px-4 flex flex-col justify-center rounded-b-[2rem]">
                        <span className="font-display text-[8px] font-bold text-black uppercase tracking-widest">Base Material</span>
                     </div>
                  </motion.div>

                  {/* Card 2: Outfit Concept (Center, Front) */}
                  <motion.div 
                     initial={{ y: 80, scale: 0.9, opacity: 0, rotate: 0 }}
                     whileInView={{ y: 0, scale: 1, opacity: 1, rotate: 4 }}
                     viewport={{ once: true }}
                     animate={{ y: [4, -4, 4], rotate: [4, 5, 4] }}
                     transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }, default: { type: "spring", stiffness: 40, damping: 15, delay: 0.2 } }}
                     className="absolute top-[15%] left-[28%] w-[55%] h-[60%] bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black/5 overflow-hidden p-2 flex flex-col gap-2 z-10 group/outfit hover:rotate-0 hover:z-30 transition-all duration-500"
                  >
                     <div className="flex-1 rounded-[2rem] flex items-center justify-center relative overflow-hidden bg-zinc-100/50 group-hover/outfit:shadow-inner transition-all">
                        <motion.div 
                           className="absolute inset-0 bg-black/5" 
                           style={{ backgroundImage: "url('/image/bespoke-outfit-4.webp')", backgroundSize: 'cover', backgroundPosition: 'top' }} 
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.7 }}
                        />
                     </div>
                     <div className="absolute top-6 right-6 h-8 w-8 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center">
                        <Palette className="h-3 w-3 text-[#3E1C01]" />
                     </div>
                     <div className="px-4 py-3 flex items-center justify-between pointer-events-none">
                        <span className="font-display text-[10px] font-bold text-black uppercase tracking-widest">Outfit Concept</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-[#3E1C01] animate-pulse" />
                     </div>
                  </motion.div>

                  {/* Card 3: Color Palette (Bottom Right, Overlapping) */}
                  <motion.div 
                     initial={{ x: 50, y: 50, opacity: 0, rotate: 12 }}
                     whileInView={{ x: 0, y: 0, opacity: 1, rotate: -3 }}
                     viewport={{ once: true }}
                     animate={{ y: [-2, 2, -2], rotate: [-3, -2, -3] }}
                     transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }, default: { type: "spring", stiffness: 60, damping: 15, delay: 0.4 } }}
                     className="absolute bottom-[10%] right-[5%] w-[45%] bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-black/5 p-4 flex flex-col gap-3 z-20 hover:-translate-y-2 transition-transform duration-500"
                  >
                     <span className="font-display text-[9px] font-bold text-black/60 uppercase tracking-widest flex items-center gap-2">
                        <Sparkles className="h-3 w-3 text-[#3E1C01]" />
                        Color Extraction
                     </span>
                     <div className="flex gap-2">
                        <div className="flex-1 h-10 rounded-xl shadow-inner border border-black/5 hover:scale-110 transition-transform origin-bottom" style={{ backgroundColor: '#58472e' }} />
                        <div className="flex-1 h-10 rounded-xl shadow-inner border border-black/5 hover:scale-110 transition-transform origin-bottom" style={{ backgroundColor: '#111413' }} />
                        <div className="flex-1 h-10 rounded-xl shadow-inner border border-black/5 hover:scale-110 transition-transform origin-bottom" style={{ backgroundColor: '#554135' }} />
                     </div>
                  </motion.div>
               </div>
               
               </div> {/* scale wrapper */}

               {/* Ambient Glow */}
               <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-30" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
