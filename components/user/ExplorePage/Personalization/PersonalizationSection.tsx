"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Target, Sparkles, TrendingUp, Check } from "lucide-react";
import { useState, useEffect } from "react";

const STYLE_MODES = [
  {
    id: 1,
    profile: "Casual Everyday",
    tags: ["Relaxed Fit", "Earth Tones", "Linen"],
    products: [
      { image: "/image/product-2.png", name: "Casual Wrap" },
      { image: "/image/product-4.png", name: "Linen Set" }
    ]
  },
  {
    id: 2,
    profile: "Evening Formal",
    tags: ["Structured", "Dark Palette", "Silk"],
    products: [
      { image: "/image/product-5.png", name: "Classic Tuxedo" },
      { image: "/image/product-6.png", name: "Evening Suit" }
    ]
  },
  {
    id: 3,
    profile: "Street Culture",
    tags: ["Oversized", "Bold Prints", "Cotton"],
    products: [
      { image: "/image/product-1.png", name: "Statement Piece" },
      { image: "/image/product-3.png", name: "Ankara Fusion" }
    ]
  }
];

type PersonalData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type PersonalizationSectionProps = {
  data: PersonalData;
};

export function PersonalizationSection({ data }: PersonalizationSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((c) => (c + 1) % STYLE_MODES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const mode = STYLE_MODES[activeIndex];

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
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
                  initial={{ opacity: 0, x: -10 }}
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

          {/* Right: Evolving Style Feed */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
             <div 
                className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-brand-darker/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
             >
                
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-brand-darker/5 mb-6">
                   <div className="flex items-center gap-3">
                      <motion.div 
                         animate={{ rotate: 360 }}
                         transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                         className="h-8 w-8 flex items-center justify-center rounded-full bg-brand-darker text-white"
                      >
                         <Sparkles className="h-3.5 w-3.5" />
                      </motion.div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#111111]">Your Feed</span>
                   </div>
                   <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-brand-darker/5 shadow-sm">
                      <TrendingUp className="h-3 w-3 text-emerald-500" />
                      <span className="font-mono text-[8px] font-bold text-[#111111]/60 uppercase tracking-widest">Learning</span>
                   </div>
                </div>

                {/* Active Taste Profile */}
                <div className="mb-6">
                   <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest block mb-3">Active Taste Profile</span>
                   <AnimatePresence mode="wait">
                      <motion.div
                         key={mode.id}
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -10 }}
                         transition={{ duration: 0.3 }}
                         className="flex flex-col gap-3"
                      >
                         <span className="font-display text-lg font-bold text-[#111111] tracking-tight">{mode.profile}</span>
                         <div className="flex flex-wrap gap-2">
                            {mode.tags.map((tag, idx) => (
                               <motion.div
                                  key={tag}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400 } }}
                                  transition={{ delay: idx * 0.08 }}
                                  className="h-7 px-3 rounded-full bg-brand-darker text-white flex items-center font-display text-[8px] font-bold uppercase tracking-wider cursor-pointer hover:bg-brand transition-colors"
                               >
                                  {tag}
                               </motion.div>
                            ))}
                         </div>
                      </motion.div>
                   </AnimatePresence>
                </div>

                {/* Syncing Indicator */}
                <div className="relative mb-6 flex items-center justify-center py-2">
                   <div className="absolute inset-x-0 h-px bg-brand-darker/5" />
                   <motion.div 
                      key={mode.id}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4.5, ease: "linear" }}
                      className="absolute left-0 h-px bg-brand-darker/20 origin-left" 
                   />
                   <div className="relative bg-zinc-50 px-3 py-1 rounded-full border border-brand-darker/5 z-10">
                      <span className="font-mono text-[7px] font-bold text-zinc-400 uppercase tracking-widest">Feed Updated</span>
                   </div>
                </div>

                {/* Product Feed */}
                <AnimatePresence mode="wait">
                   <motion.div
                      key={mode.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-2 gap-3"
                   >
                      {mode.products.map((product, i) => (
                         <motion.div
                            key={i}
                            whileHover={{ y: -6, scale: 1.04, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="relative aspect-[3/4] rounded-2xl bg-white border border-brand-darker/5 shadow-md overflow-hidden cursor-pointer group"
                         >
                            <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300" />
                            
                            {/* Shop Now overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                               <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-brand-darker/5">
                                  <span className="font-display text-[8px] font-bold text-brand-darker uppercase tracking-widest">Shop Now</span>
                               </div>
                            </div>
                            
                            <div className="absolute bottom-3 left-3">
                               <span className="font-display text-[9px] font-bold text-white uppercase tracking-wider">{product.name}</span>
                            </div>
                         </motion.div>
                      ))}
                   </motion.div>
                </AnimatePresence>

                {/* Learning Progress */}
                <div className="mt-6 pt-5 border-t border-brand-darker/5 flex items-center justify-between">
                   <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Taste Accuracy</span>
                   <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 bg-zinc-200 rounded-full overflow-hidden">
                         <motion.div
                            animate={{ width: ["60%", "85%", "92%", "60%"] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            className="h-full bg-emerald-500 rounded-full"
                         />
                      </div>
                      <span className="font-mono text-[9px] font-bold text-emerald-600">Evolving</span>
                   </div>
                </div>
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
