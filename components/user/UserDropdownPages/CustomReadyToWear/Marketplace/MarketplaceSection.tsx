"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Search, Sparkles, LucideIcon, LayoutGrid } from "lucide-react";

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
    <section id={data.id} className="relative z-10 bg-white py-32 lg:py-48" data-theme="light">
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

            <div className="grid gap-6 sm:grid-cols-2">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Search;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col gap-4 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Marketplace Collection Mockup */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto h-[600px] sm:h-[700px] w-full max-w-lg rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-8 flex flex-col gap-8 overflow-hidden">
                {/* Lookbook Header */}
                <div className="flex items-center justify-between pb-6 border-b border-black/5 z-10 relative">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white">
                         <LayoutGrid className="h-5 w-5" />
                      </div>
                      <span className="font-display text-sm font-bold uppercase tracking-widest text-black">Lookbook</span>
                   </div>
                   <div className="flex h-10 px-4 items-center rounded-full border border-black/10 bg-white shadow-sm font-ui text-[9px] font-bold uppercase text-black">
                      Filter: Latest
                   </div>
                </div>

                {/* Collection Items - Auto Scrolling Vertical Grid */}
                <div className="absolute inset-0 top-24 sm:top-28 bottom-0 overflow-hidden z-10 w-full px-6 sm:px-8 pb-4" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 85%, transparent)' }}>
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
                               <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/5 flex items-center justify-center font-display text-[9px] sm:text-[10px] font-bold text-black shadow-lg shadow-black/5">
                                  {item.price}
                               </div>
                               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                           </div>
                           <div className="flex flex-col gap-1 px-1">
                              <span className="font-display text-[11px] sm:text-xs font-bold text-black">{item.title}</span>
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
                   className="absolute bottom-8 left-6 right-6 flex h-[4.5rem] items-center gap-5 rounded-3xl bg-white border border-black/5 shadow-2xl p-4 z-20"
                >
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-black flex items-center justify-center shrink-0">
                       <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                       <span className="font-display text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-zinc-400">Curator Alert</span>
                       <span className="font-ui text-[11px] sm:text-xs font-medium text-black">New Emerging Designer Collection</span>
                    </div>
                </motion.div>
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
