"use client";

import { motion } from "framer-motion";
import { Layers, Zap, LucideIcon, Share2, Palette, Scissors, UserPlus } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  Layers: Layers,
  Scissors: Scissors,
  UserPlus: UserPlus
};

type Feature = {
  title: string;
  icon: string;
};

type MixMatchSectionProps = {
  data: {
    badge: string;
    title: string;
    description: string;
    features: Feature[];
  };
};

export function MixMatchSection({ data }: MixMatchSectionProps) {
  return (
    <section className="relative z-10 bg-white py-32 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
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

            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Zap;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 group"
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

          {/* Right: Modular Assembly Visualization */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2 flex justify-center items-center">
             <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                {/* Central Focus Ring */}
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-4 rounded-full border-[1px] border-dashed border-black/10 z-0"
                />

                {/* The Assembly Core (Connecting Lines) */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none">
                    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Node 1: Vendor A (Fabric) */}
                <motion.div 
                   initial={{ opacity: 0, x: -50, y: -50 }}
                   whileInView={{ opacity: 1, x: 0, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                   className="absolute top-[5%] left-[5%] z-10 flex flex-col items-center gap-3"
                >
                   <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-white border border-black/5 shadow-2xl p-2.5 rotate-[-5deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
                      <div className="w-full h-full rounded-2xl overflow-hidden relative">
                         <img src="/image/fabric-swatch-3.jpg" className="w-full h-full object-cover" alt="Sourced Fabric" />
                      </div>
                   </div>
                   <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                      <span className="font-display text-[9px] sm:text-[10px] font-bold text-black uppercase tracking-widest flex items-center gap-1.5">
                         <Scissors className="w-3 h-3 text-emerald-500" /> Vendor A: Fabric
                      </span>
                   </div>
                </motion.div>

                {/* Node 2: Vendor B (Designer) */}
                <motion.div 
                   initial={{ opacity: 0, x: 50, y: -50 }}
                   whileInView={{ opacity: 1, x: 0, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                   className="absolute top-[5%] right-[5%] z-10 flex flex-col items-center gap-3"
                >
                   <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-white border border-black/5 shadow-2xl p-2.5 rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
                      <div className="w-full h-full rounded-2xl overflow-hidden relative">
                         <img src="/image/slim-girl-1.jpg" className="w-full h-full object-cover grayscale" alt="Sourced Designer" />
                      </div>
                   </div>
                   <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                      <span className="font-display text-[9px] sm:text-[10px] font-bold text-black uppercase tracking-widest flex items-center gap-1.5">
                         <UserPlus className="w-3 h-3 text-orange-500" /> Vendor B: Design
                      </span>
                   </div>
                </motion.div>

                {/* Node 3 (Center Bottom): Output / Creation */}
                <motion.div 
                   initial={{ opacity: 0, y: 50, scale: 0.9 }}
                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.4 }}
                   className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
                >
                   <div className="w-40 h-52 sm:w-56 sm:h-72 rounded-[2.5rem] bg-white border border-black/5 shadow-2xl p-3 z-10 group cursor-pointer">
                      <div className="w-full h-full rounded-3xl overflow-hidden relative">
                         <img src="/image/bespoke-dress-2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Combined Output" />
                         
                         {/* Scanline overlay */}
                         <motion.div 
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 w-full h-1 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none"
                         />
                      </div>
                   </div>
                   <div className="bg-black text-white px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest">Constructed Outfit</span>
                   </div>
                </motion.div>

                {/* Pulsing Energy Core behind the constructed outfit */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.5 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1.2, duration: 1.5 }}
                   className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl z-0 pointer-events-none"
                />

             </div>
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
