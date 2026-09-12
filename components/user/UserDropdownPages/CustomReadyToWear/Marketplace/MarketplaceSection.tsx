"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Search, Sparkles, LucideIcon, LayoutGrid, Check } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart: ShoppingBag,
  Sparkles: Sparkles,
  Search: Search
};

type Feature = {
  title: string;
  icon: string;
};

type MarketplaceData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type MarketplaceSectionProps = {
  data: MarketplaceData;
};

export function MarketplaceSection({ data }: MarketplaceSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32" data-theme="light">
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
                const Icon = iconMap[feature.icon] || Search;
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

          {/* Right: Marketplace Collection Mockup */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto h-[600px] sm:h-[700px] w-full max-w-lg rounded-[3rem] bg-zinc-50 border border-brand-darker/5 shadow-2xl p-6 sm:p-8 flex flex-col gap-8 overflow-hidden">
                {/* Lookbook Header */}
                <div className="flex items-center justify-between pb-6 border-b border-brand-darker/5 z-10 relative">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-darker text-white">
                         <LayoutGrid className="h-5 w-5" />
                      </div>
                      <span className="font-display text-sm font-bold uppercase tracking-widest text-[#111111]">Lookbook</span>
                   </div>
                   <div className="flex h-10 px-4 items-center rounded-full border border-brand-darker/10 bg-white shadow-sm font-ui text-[9px] font-bold uppercase text-brand-darker">
                      Filter: Latest
                   </div>
                </div>

                {/* Collection Items - Auto Scrolling Vertical Grid */}
                <div className="absolute inset-0 top-24 sm:top-28 bottom-0 overflow-hidden z-10 w-full px-6 md:px-10 lg:px-10 sm:px-8 pb-4" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 85%, transparent)' }}>
                   <motion.div
                     animate={{ y: [0, -1200] }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="grid grid-cols-2 gap-4 sm:gap-6 w-full pt-4"
                   >
                     {[
                       { img: 'product-1.png', title: 'Midnight Velvet', designer: 'Sarah Cole', price: '$280' },
                       { img: 'product-2.png', title: 'Ivory Knits', designer: 'Olu Studios', price: '$145' },
                       { img: 'product-3.png', title: 'Urban Trench', designer: 'David K.', price: '$420' },
                       { img: 'product-4.png', title: 'Summer Linen', designer: 'Amara', price: '$120' },
                       { img: 'product-5.png', title: 'Noir Signature', designer: 'Olu Studios', price: '$550' },
                       // Duplicated seamlessly for infinite scroll illusion
                       { img: 'product-1.png', title: 'Midnight Velvet', designer: 'Sarah Cole', price: '$280' },
                       { img: 'product-2.png', title: 'Ivory Knits', designer: 'Olu Studios', price: '$145' },
                       { img: 'product-3.png', title: 'Urban Trench', designer: 'David K.', price: '$420' },
                       { img: 'product-4.png', title: 'Summer Linen', designer: 'Amara', price: '$120' },
                       { img: 'product-5.png', title: 'Noir Signature', designer: 'Olu Studios', price: '$550' }
                     ].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-3 group cursor-pointer mb-2">
                           <div className="w-full rounded-2xl bg-zinc-200 overflow-hidden relative shadow-sm transition-shadow duration-500 hover:shadow-xl">
                               <img 
                                  src={`/image/${item.img}`} 
                                  alt={item.title} 
                                  className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" 
                               />
                               <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-darker/5 flex items-center justify-center font-display text-[9px] sm:text-[10px] font-bold text-brand-darker shadow-lg shadow-black/5">
                                  {item.price}
                               </div>
                               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                           </div>
                           <div className="flex flex-col gap-1 px-1">
                              <span className="font-display text-[11px] sm:text-xs font-bold text-[#111111]">{item.title}</span>
                              <span className="font-ui text-[9px] text-zinc-500 uppercase tracking-widest">{item.designer}</span>
                           </div>
                        </div>
                     ))}
                   </motion.div>
                </div>

                {/* Bottom Discovery Overlay Tag */}
                 <motion.div 
                    initial={{ y: 50, opacity: 0, rotate: 0 }}
                    whileInView={{ y: 0, opacity: 1, rotate: -2 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                    className="absolute bottom-8 left-6 right-6 flex h-[4.5rem] items-center gap-5 rounded-3xl bg-white border border-brand-darker/5 shadow-2xl p-4 z-20"
                 >
                     <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-brand-darker flex items-center justify-center shrink-0">
                        <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                     </div>
                     <div className="flex flex-col">
                        <span className="font-display text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-zinc-400">Curator Alert</span>
                        <span className="font-ui text-[11px] sm:text-xs font-medium text-[#111111]">New Emerging Designer Collection</span>
                     </div>
                 </motion.div>
             </div>
          </div>
        </div>
      </div>
            {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-1 h-1 rounded-full bg-brand-darker/20" />
      </div>
    </section>
  );
}
