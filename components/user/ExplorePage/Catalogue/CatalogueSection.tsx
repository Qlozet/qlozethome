"use client";

import { motion } from "framer-motion";
import { Grid, Filter, Check } from "lucide-react";

const PRODUCTS = [
  { image: "/image/product-1.png", name: "Tailored Blazer", price: "$320" },
  { image: "/image/product-2.png", name: "Evening Gown", price: "$580" },
  { image: "/image/product-3.png", name: "Ankara Set", price: "$210" },
  { image: "/image/product-4.png", name: "Silk Wrap", price: "$145" }
];

const CATEGORIES = ["All", "Clothing", "Fabrics", "Accessories"];

type CatalogueData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type CatalogueSectionProps = {
  data: CatalogueData;
};

export function CatalogueSection({ data }: CatalogueSectionProps) {
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

          {/* Left: Visual Product Grid */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-[#3A3A3A]/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                
                {/* Filter Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#3A3A3A]/5 mb-6">
                   <div className="flex items-center gap-3">
                      <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-[#3A3A3A] text-white">
                         <Filter className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">Browse</span>
                   </div>
                   <div className="bg-white px-3 py-1.5 rounded-full border border-[#3A3A3A]/5 shadow-sm">
                      <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/60 uppercase tracking-widest">1,240+ Items</span>
                   </div>
                </div>

                {/* Category Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto">
                   {CATEGORIES.map((cat, i) => (
                      <motion.div
                         key={cat}
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.1 + i * 0.05 }}
                         className={`h-9 px-4 rounded-full flex items-center justify-center font-display text-[9px] font-bold uppercase tracking-widest shrink-0 transition-all ${i === 0 ? 'bg-[#3A3A3A] text-white shadow-lg' : 'bg-white text-[#3A3A3A]/40 border border-[#3A3A3A]/5'}`}
                      >
                         {cat}
                      </motion.div>
                   ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-4">
                   {PRODUCTS.map((product, i) => (
                      <motion.div
                         key={i}
                         initial={{ opacity: 0, y: 20, scale: 0.95 }}
                         whileInView={{ opacity: 1, y: 0, scale: 1 }}
                         whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                         className="relative aspect-[3/4] rounded-2xl bg-white border border-[#3A3A3A]/5 shadow-md overflow-hidden group cursor-pointer"
                      >
                         <img 
                            src={product.image} 
                            alt={product.name} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300" />
                         
                         {/* Quick View Overlay */}
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#3A3A3A]/5">
                               <span className="font-display text-[8px] font-bold text-[#3A3A3A] uppercase tracking-widest">Quick View</span>
                            </div>
                         </div>
                         
                         {/* Product Info */}
                         <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                            <div className="flex flex-col gap-0.5">
                               <span className="font-display text-[9px] font-bold text-white uppercase tracking-wider">{product.name}</span>
                               <span className="font-mono text-[10px] font-bold text-white/80">{product.price}</span>
                            </div>
                         </div>
                      </motion.div>
                   ))}
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
