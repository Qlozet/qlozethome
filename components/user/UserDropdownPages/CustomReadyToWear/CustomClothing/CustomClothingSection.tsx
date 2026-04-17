"use client";

import { motion } from "framer-motion";
import { UserCheck, Ruler, ClipboardCheck, Zap, Scissors, LucideIcon, PenTool, PencilLine, SwatchBook } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UserCheck: UserCheck,
  Ruler: Ruler,
  ClipboardCheck: ClipboardCheck,
  Zap: Zap,
  PencilLine: PencilLine,
  SwatchBook: SwatchBook
};

type Feature = {
  title: string;
  icon: string;
};

type CustomData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type CustomSectionProps = {
  data: CustomData;
};

export function CustomClothingSection({ data }: CustomSectionProps) {
  return (
    <section className="relative z-10 bg-white py-32 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex h-10 w-40 items-center justify-center border-2 border-black/10 bg-zinc-50 font-display text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 shadow-sm"
              >
                {data.badge}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/50 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Ruler;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left: Atelier Pattern Mockup */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, type: "spring", bounce: 0.3 }}
               className="relative mx-auto h-[650px] w-full max-w-lg rounded-[3.5rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-10 flex flex-col gap-8 overflow-hidden transform rotate-[-1deg]"
             >
                {/* Vintage Pattern Draft Overlay */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                   <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,#000_39px,#000_40px),repeating-linear-gradient(90deg,transparent,transparent_39px,#000_39px,#000_40px)]" />
                </div>

                <div className="flex items-center justify-between z-10 border-b border-black/5 pb-6">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-xl bg-black text-white">
                         <PenTool className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex flex-col">
                         <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Project Ref: 7822-Custom</span>
                         <span className="font-ui text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Measurement Mode: Active</span>
                      </div>
                   </div>
                   <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Pattern Visualization - Live Fitting */}
                <div className="relative flex-1 rounded-[2.5rem] bg-white border border-black/5 shadow-inner p-4 flex items-center justify-center overflow-hidden group">
                    <img 
                       src="/image/custom-outfit-2.png" 
                       alt="Live Fitting" 
                       className="w-full h-full object-cover rounded-[2rem] grayscale opacity-90 mix-blend-multiply transition-all duration-700 group-hover:grayscale-0"
                    />

                    {/* Interactive Measurement Points Overlay */}
                    
                    {/* Shoulder Measurement */}
                    <div className="absolute top-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none w-full">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "140px" }}
                          transition={{ delay: 0.5, duration: 1, type: "spring" }}
                          className="h-px bg-black border-dashed border-black/30 relative flex items-center justify-center"
                       >
                          <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-white border-[3px] border-black shadow-lg" />
                          <div className="absolute -right-1.5 h-3 w-3 rounded-full bg-white border-[3px] border-black shadow-lg" />
                          <span className="absolute -top-6 font-mono text-[10px] font-bold text-black bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm border border-black/5">Shoulder: 42cm</span>
                       </motion.div>
                    </div>

                    {/* Chest Measurement */}
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none w-full">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "120px" }}
                          transition={{ delay: 0.8, duration: 1, type: "spring" }}
                          className="h-px bg-black border-dashed border-black/30 relative flex items-center justify-center"
                       >
                          <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-white border-[3px] border-black shadow-lg" />
                          <div className="absolute -right-1.5 h-3 w-3 rounded-full bg-white border-[3px] border-black shadow-lg" />
                          <span className="absolute -top-6 font-mono text-[10px] font-bold text-black bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm border border-black/5">Chest: 104cm</span>
                       </motion.div>
                    </div>

                    {/* Vertical Hem Line */}
                    <div className="absolute top-[25%] bottom-[20%] left-[80%] flex items-center justify-center pointer-events-none">
                       <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: "100%" }}
                          transition={{ delay: 1.2, duration: 1.5, type: "spring" }}
                          className="w-px bg-black border-dashed border-black/30 relative flex flex-col items-center justify-center"
                       >
                          <div className="absolute -top-1.5 h-3 w-3 rounded-full bg-white border-[3px] border-emerald-500 shadow-lg" />
                          <div className="absolute -bottom-1.5 h-3 w-3 rounded-full bg-white border-[3px] border-emerald-500 shadow-lg" />
                          <span className="absolute -left-20 font-mono text-[10px] font-bold text-emerald-600 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm border border-emerald-500/20">Length: 72cm</span>
                       </motion.div>
                    </div>
                </div>

                {/* Fabric Swatch Selectors */}
                <div className="flex gap-4 z-10 w-full justify-between">
                   {[
                     { img: 'fabric-swatch-1.jpg', delay: 1.6 },
                     { img: 'fabric-swatch-2.jpg', delay: 1.8 },
                     { img: 'fabric-swatch-3.jpg', delay: 2.0 },
                   ].map((swatch, idx) => (
                      <motion.div 
                         key={idx} 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: swatch.delay, duration: 0.6, type: "spring" }}
                         className="h-[4.5rem] flex-1 rounded-2xl border border-black/10 bg-white overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                      >
                         <img src={`/image/${swatch.img}`} className="w-full h-full object-cover" alt="Fabric Swatch" />
                      </motion.div>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-1 h-1 rounded-full bg-black/20" />
      </div>
    </section>
  );
}
