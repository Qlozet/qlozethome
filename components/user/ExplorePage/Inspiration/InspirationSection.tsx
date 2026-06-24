"use client";

import { motion } from "framer-motion";
import { Camera, Heart, TrendingUp, Eye, Check } from "lucide-react";

const LOOKBOOK_ITEMS = [
  { image: "/image/bespoke-outfit-1.webp", likes: "2.4k", aspect: "aspect-[3/4]", tag: null },
  { image: "/image/ankara.png", likes: "1.8k", aspect: "aspect-square", tag: "Trending" },
  { image: "/image/agbada.png", likes: "3.1k", aspect: "aspect-[3/4]", tag: null },
  { image: "/image/bespoke-dress-1.png", likes: "956", aspect: "aspect-[4/5]", tag: "New Drop" },
  { image: "/image/custom-outfit-1.png", likes: "4.2k", aspect: "aspect-[3/4]", tag: null },
  { image: "/image/bespoke-outfit-3.webp", likes: "1.2k", aspect: "aspect-square", tag: null }
];

type InspoData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type InspirationSectionProps = {
  data: InspoData;
};

export function InspirationSection({ data }: InspirationSectionProps) {
  const col1 = [LOOKBOOK_ITEMS[0], LOOKBOOK_ITEMS[2], LOOKBOOK_ITEMS[4]];
  const col2 = [LOOKBOOK_ITEMS[1], LOOKBOOK_ITEMS[3], LOOKBOOK_ITEMS[5]];

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

          {/* Right: Community Lookbook Masonry */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-brand-darker/5 shadow-2xl p-5 sm:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-darker/5">
                   <div className="flex items-center gap-3">
                      <Eye className="h-4 w-4 text-brand-darker/40" />
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-brand-darker">Community Lookbook</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                      <TrendingUp className="h-3 w-3 text-emerald-500" />
                      <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Live</span>
                   </div>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-2 gap-3">
                   {/* Column 1 */}
                   <div className="flex flex-col gap-3">
                      {col1.map((item, i) => (
                         <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                            className={`relative ${item.aspect} rounded-xl bg-white border border-brand-darker/5 shadow-md overflow-hidden group cursor-pointer`}
                         >
                            <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300" />
                            
                            {item.tag && (
                               <div className="absolute top-2 left-2">
                                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                     <span className="font-mono text-[7px] font-bold text-brand-darker uppercase tracking-widest">{item.tag}</span>
                                  </div>
                               </div>
                            )}
                            
                            {/* Save overlay on hover */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <div className="h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                                  <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
                               </div>
                            </div>
                            
                            <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                               <Heart className="h-3 w-3 text-white fill-white/40 group-hover:fill-rose-500 group-hover:text-rose-500 transition-colors duration-300" />
                               <span className="font-mono text-[8px] font-bold text-white/90">{item.likes}</span>
                            </div>
                         </motion.div>
                      ))}
                   </div>

                   {/* Column 2 */}
                   <div className="flex flex-col gap-3 pt-6">
                      {col2.map((item, i) => (
                         <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                            className={`relative ${item.aspect} rounded-xl bg-white border border-brand-darker/5 shadow-md overflow-hidden group cursor-pointer`}
                         >
                            <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300" />
                            
                            {item.tag && (
                               <div className="absolute top-2 left-2">
                                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                     <span className="font-mono text-[7px] font-bold text-brand-darker uppercase tracking-widest">{item.tag}</span>
                                  </div>
                               </div>
                            )}
                            
                            {/* Save overlay on hover */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <div className="h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                                  <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
                               </div>
                            </div>
                            
                            <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                               <Heart className="h-3 w-3 text-white fill-white/40 group-hover:fill-rose-500 group-hover:text-rose-500 transition-colors duration-300" />
                               <span className="font-mono text-[8px] font-bold text-white/90">{item.likes}</span>
                            </div>
                         </motion.div>
                      ))}
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
