"use client";

import { motion } from "framer-motion";
import { Globe, Dna, Heart, Sparkles, LucideIcon, Network, Check } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe: Globe,
  Dna: Dna,
  Heart: Heart
};

type Feature = {
  title: string;
  icon: string;
};

type EcosystemData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type EcosystemSectionProps = {
  data: EcosystemData;
};

export function EcosystemSection({ data }: EcosystemSectionProps) {
  return (
    <section className="relative z-10 bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                {data.badge}
              </motion.div>
              
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

            <div className="flex flex-col gap-3">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Globe;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-darker/10"><Check className="h-3.5 w-3.5 text-brand-darker" /></span>
                    <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Infinite Global Discovery Wall */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center py-10 lg:py-0">
              <div className="relative w-full max-w-[600px] h-[600px] rounded-[3.5rem] bg-zinc-100 border border-brand-darker/5 shadow-2xl overflow-hidden flex items-center justify-center p-2">
                
                {/* The Scrolling Masonry Layout */}
                <div className="absolute inset-0 flex gap-4 p-4 opacity-80 -rotate-6 scale-110">
                   
                   {/* Column 1 (Scrolling Up) */}
                   <motion.div 
                      animate={{ y: ["0%", "-50%"] }}
                      transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                      className="flex flex-col gap-4 w-1/2"
                   >
                      {/* We duplicate the set of images so it scrolls infinitely without empty spaces */}
                      {[1, 2].map((set) => (
                         <div key={`col1-${set}`} className="flex flex-col gap-4">
                            <div className="w-full aspect-[4/5] rounded-[2rem] bg-white overflow-hidden shadow-lg border border-brand-darker/5">
                               <img src="/image/agbada.png" className="w-full h-full object-cover" alt="Agbada African Fashion" />
                            </div>
                            <div className="w-full aspect-square rounded-[2rem] bg-white overflow-hidden shadow-lg border border-brand-darker/5 grayscale">
                               <img src="/image/slim-girl-1.jpg" className="w-full h-full object-cover" alt="Global Designer" />
                            </div>
                            <div className="w-full aspect-[4/5] rounded-[2rem] bg-white overflow-hidden shadow-lg border border-brand-darker/5">
                               <img src="/image/custom-outfit-1.png" className="w-full h-full object-cover" alt="Premium Custom Fit" />
                            </div>
                         </div>
                      ))}
                   </motion.div>

                   {/* Column 2 (Scrolling Down) */}
                   <motion.div 
                      animate={{ y: ["-50%", "0%"] }}
                      transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                      className="flex flex-col gap-4 w-1/2"
                   >
                      {[1, 2].map((set) => (
                         <div key={`col2-${set}`} className="flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-[2rem] bg-white overflow-hidden shadow-lg border border-brand-darker/5 grayscale">
                               <img src="/image/slim-man-2.jpg" className="w-full h-full object-cover" alt="Emerging Tailor" />
                            </div>
                            <div className="w-full aspect-[3/4] rounded-[2rem] bg-white overflow-hidden shadow-lg border border-brand-darker/5">
                               <img src="/image/ankara.png" className="w-full h-full object-cover" alt="Ankara Global Print" />
                            </div>
                            <div className="w-full aspect-square rounded-[2rem] bg-white overflow-hidden shadow-lg border border-brand-darker/5">
                               <img src="/image/fabric-1.jpg" className="w-full h-full object-cover" alt="Sourced Fabric" />
                            </div>
                         </div>
                      ))}
                   </motion.div>

                </div>

                {/* Fade Overlays to hide sharp cutoff edges */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-100 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-100 to-transparent z-10" />

                {/* Central Anchor / Focus Lens */}
                <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, type: "spring" }}
                   className="relative z-20 hover:scale-105 transition-transform duration-500 cursor-pointer"
                >
                   {/* Glass effect wrapper */}
                   <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white/80 shadow-2xl" />
                   
                   <div className="relative px-8 py-10 flex flex-col items-center gap-6 text-center">
                      <div className="relative">
                         {/* Spinning Orbit Ring around Icon */}
                         <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border border-dashed border-brand-darker/20 rounded-full"
                         />
                         <div className="h-16 w-16 bg-brand-darker rounded-full shadow-2xl flex items-center justify-center relative z-10 text-white">
                            <Globe className="h-8 w-8 text-white/90" />
                         </div>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                         <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#111111]">
                            10,000+ Creators
                         </span>
                         <span className="font-ui text-[10px] uppercase tracking-widest text-[#111111]/50">
                            Endless Discovery Feed
                         </span>
                      </div>
                      
                      <div className="h-10 px-6 rounded-full bg-brand-darker text-white flex items-center justify-center font-display text-[9px] font-bold uppercase tracking-widest shadow-xl">
                         Explore Network
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
