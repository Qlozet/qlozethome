"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shirt, Scissors, Gem, Shapes, Check } from "lucide-react";
import { useState } from "react";

const PILLARS = [
  { 
    label: "Clothing", 
    image: "/image/custom-outfit-2.png",
    icon: Shirt,
    count: "600+",
    description: "Curated garments from global designers"
  },
  { 
    label: "Fabrics", 
    image: "/image/fabric-swatch-1.jpg",
    icon: Scissors,
    count: "420+",
    description: "Premium textiles for custom builds"
  },
  { 
    label: "Accessories", 
    image: "/image/totebag.png",
    icon: Gem,
    count: "220+",
    description: "Complete your look with finishing pieces"
  }
];

type EcoData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type StyleEcosystemSectionProps = {
  data: EcoData;
};

export function StyleEcosystemSection({ data }: StyleEcosystemSectionProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // When nothing is hovered, use the default stacked arrangement
  // When a card is hovered, it comes to the absolute front with scale + rotation reset
  const getCardStyle = (i: number) => {
    const defaults = {
      rotations: [-8, 0, 8],
      xOffsets: [-40, 0, 40],
      yOffsets: [10, 0, 10],
      zIndexes: [1, 3, 2],
      scales: [0.92, 1, 0.95],
      opacities: [1, 1, 1]
    };

    if (focusedIndex === null) {
      return {
        rotate: defaults.rotations[i],
        x: defaults.xOffsets[i],
        y: defaults.yOffsets[i],
        scale: defaults.scales[i],
        zIndex: defaults.zIndexes[i],
        opacity: 1
      };
    }

    if (i === focusedIndex) {
      // Focused card: center, no rotation, largest, on top
      return {
        rotate: 0,
        x: 0,
        y: -10,
        scale: 1.05,
        zIndex: 10,
        opacity: 1
      };
    }

    // Non-focused cards: fan further out, shrink, dim
    const direction = i < focusedIndex ? -1 : 1;
    const distance = Math.abs(i - focusedIndex);
    return {
      rotate: direction * (15 + distance * 5),
      x: direction * (80 + distance * 30),
      y: 20,
      scale: 0.82,
      zIndex: 1,
      opacity: 0.5
    };
  };

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-10 lg:gap-24">
          {/* Right: Content */}
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

          {/* Left: Interactive Fashion Triptych Stack */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
             <div 
                className="relative mx-auto w-full max-w-[500px] h-[520px] flex items-center justify-center cursor-pointer"
                onMouseLeave={() => setFocusedIndex(null)}
             >
                {PILLARS.map((pillar, i) => {
                   const Icon = pillar.icon;
                   const style = getCardStyle(i);
                   
                   return (
                      <motion.div
                         key={pillar.label}
                         onMouseEnter={() => setFocusedIndex(i)}
                         initial={{ opacity: 0, y: 60, rotate: 0, scale: 0.7 }}
                         whileInView={{ 
                            opacity: style.opacity, 
                            y: style.y, 
                            rotate: style.rotate, 
                            scale: style.scale,
                            x: style.x
                         }}
                         viewport={{ once: true }}
                         animate={{
                            opacity: style.opacity,
                            y: style.y,
                            rotate: style.rotate,
                            scale: style.scale,
                            x: style.x
                         }}
                         transition={{ 
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                            mass: 0.8
                         }}
                         className="absolute rounded-[2rem] bg-white border border-brand-darker/5 shadow-2xl overflow-hidden w-[260px] sm:w-[280px] h-[370px] sm:h-[400px]"
                         style={{ 
                            zIndex: style.zIndex,
                            left: `calc(50% - 140px)`,
                            transformOrigin: "center bottom"
                         }}
                      >
                         {/* Image */}
                         <div className="relative h-[65%] w-full overflow-hidden bg-zinc-100">
                            <img src={pillar.image} alt={pillar.label} className="w-full h-full object-cover transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                               <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-brand-darker/5 shadow-sm flex items-center gap-2">
                                  <Icon className="h-3 w-3 text-brand-darker" />
                                  <span className="font-display text-[8px] font-bold text-brand-darker uppercase tracking-widest">{pillar.label}</span>
                               </div>
                            </div>

                            {/* Item Count */}
                            <div className="absolute bottom-3 right-3">
                               <div className="bg-brand-darker/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                  <span className="font-mono text-[8px] font-bold text-white uppercase tracking-widest">{pillar.count} items</span>
                               </div>
                            </div>
                         </div>
                         
                         {/* Info Footer */}
                         <div className="p-5 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                               <span className="font-display text-sm font-bold text-brand-darker uppercase tracking-wider">{pillar.label}</span>
                               <div className="h-9 w-9 rounded-full bg-zinc-50 border border-brand-darker/5 flex items-center justify-center shadow-sm">
                                  <Icon className="h-4 w-4 text-brand-darker/30" />
                               </div>
                            </div>
                            <span className="font-ui text-[11px] text-[#111111]/40 leading-relaxed">{pillar.description}</span>
                         </div>
                      </motion.div>
                   );
                })}

                {/* Hover Hint */}
                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1.2 }}
                   className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-0"
                >
                   <span className="font-mono text-[8px] font-bold text-zinc-300 uppercase tracking-widest">Hover to explore</span>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-px h-1 rounded-full bg-brand-darker/20" />
      </div>
    </section>
  );
}
