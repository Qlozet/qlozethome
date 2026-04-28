"use client";

import { motion } from "framer-motion";
import { Sparkles, Search, Zap, Compass, Check } from "lucide-react";

const MATCHED_PRODUCTS = [
  { image: "/image/product-5.png", name: "Classic Tuxedo", match: 98 },
  { image: "/image/product-6.png", name: "Designer Suit", match: 94 }
];

const STYLE_TAGS = ["Minimalist", "Evening Wear", "Earth Tones", "Tailored Fit"];

type DiscoveryData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type SmartDiscoverySectionProps = {
  data: DiscoveryData;
};

export function SmartDiscoverySection({ data }: SmartDiscoverySectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-32 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
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

          {/* Right: AI Matching Engine */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-[#3A3A3A]/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                
                {/* AI Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#3A3A3A]/5 mb-6">
                   <div className="flex items-center gap-3">
                      <motion.div 
                         animate={{ rotate: 360 }}
                         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                         className="h-8 w-8 flex items-center justify-center rounded-xl bg-[#3A3A3A] text-white"
                      >
                         <Compass className="h-3.5 w-3.5" />
                      </motion.div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">Style Compass</span>
                   </div>
                   <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#3A3A3A]/5 shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/60 uppercase tracking-widest">AI Active</span>
                   </div>
                </div>

                {/* Your Preferences */}
                <div className="mb-6">
                   <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest block mb-3">Your Taste Profile</span>
                   <div className="flex flex-wrap gap-2">
                      {STYLE_TAGS.map((tag, i) => (
                         <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400 } }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.08 }}
                            className="h-7 px-3 rounded-full bg-[#3A3A3A] text-white flex items-center font-display text-[8px] font-bold uppercase tracking-wider cursor-pointer hover:bg-[#4A4A4A] transition-colors"
                         >
                            {tag}
                         </motion.div>
                      ))}
                   </div>
                </div>

                {/* Matching Beam */}
                <div className="relative mb-6 flex items-center justify-center py-3">
                   <div className="absolute inset-x-0 h-px bg-[#3A3A3A]/5" />
                   <motion.div 
                      animate={{ scaleX: [0, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent origin-left" 
                   />
                   <div className="relative bg-zinc-50 px-4 py-1.5 rounded-full border border-[#3A3A3A]/5 shadow-sm flex items-center gap-2 z-10">
                      <Sparkles className="h-3 w-3 text-[#3A3A3A]/40" />
                      <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/40 uppercase tracking-widest">Matching</span>
                   </div>
                </div>

                {/* Matched Products */}
                <div className="flex flex-col gap-4">
                   {MATCHED_PRODUCTS.map((product, i) => (
                      <motion.div
                         key={i}
                         initial={{ opacity: 0, x: 30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         whileHover={{ scale: 1.03, x: 5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 + i * 0.15, duration: 0.6, type: "spring" }}
                         className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#3A3A3A]/5 shadow-md cursor-pointer hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300"
                      >
                         <div className="h-20 w-20 rounded-xl overflow-hidden shrink-0 bg-zinc-100 transition-transform duration-300 group-hover:scale-105">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                         </div>
                         <div className="flex-1 flex flex-col gap-2">
                            <span className="font-display text-[11px] font-bold text-[#3A3A3A] uppercase tracking-wider">{product.name}</span>
                            <div className="flex items-center gap-2">
                               <div className="h-1.5 flex-1 bg-zinc-100 rounded-full overflow-hidden">
                                  <motion.div
                                     initial={{ width: "0%" }}
                                     whileInView={{ width: `${product.match}%` }}
                                     viewport={{ once: true }}
                                     transition={{ delay: 0.8 + i * 0.2, duration: 1, ease: "easeOut" }}
                                     className="h-full bg-emerald-500 rounded-full"
                                  />
                               </div>
                               <span className="font-mono text-[10px] font-bold text-emerald-600">{product.match}%</span>
                            </div>
                         </div>
                         <Search className="h-4 w-4 text-[#3A3A3A]/10 shrink-0 transition-all duration-300 hover:text-[#3A3A3A]/40 hover:rotate-12" />
                      </motion.div>
                   ))}
                </div>

                {/* Discovery Footer */}
                <div className="mt-6 pt-5 border-t border-[#3A3A3A]/5 flex items-center justify-center">
                   <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Personalized Recommendations</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-px h-1 rounded-full bg-[#3A3A3A]/20" />
      </div>
    </section>
  );
}
