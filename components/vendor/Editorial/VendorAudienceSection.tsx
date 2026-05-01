"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function VendorAudienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const audiences = [
    { title: "Fashion Designers", image: "/image/custom-outfit-1.png" },
    { title: "Tailors & Creators", image: "/image/tailorwork.png" },
    { title: "Fabric Vendors", image: "/image/fabric-1.jpg" },
    { title: "Accessories Sellers", image: "/image/totebag.png" },
    { title: "Emerging Brands", image: "/image/bespoke-outfit-4.webp" }
  ];

  return (
    <section className="relative py-32 sm:py-48 bg-black text-white overflow-hidden min-h-[100vh] flex flex-col justify-center" data-theme="dark">
      
      {/* Background Image Takeover */}
      <AnimatePresence>
         {hoveredIndex !== null && (
            <motion.div
               key={hoveredIndex}
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 0.6, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="absolute inset-0 z-0 pointer-events-none"
            >
               <img src={audiences[hoveredIndex].image} className="w-full h-full object-cover" />
            </motion.div>
         )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <div className="mx-auto w-full max-w-[94rem] px-6 relative z-10">
        
        <div className="mb-16 sm:mb-24 flex justify-between items-end border-b border-white/20 pb-8">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/50">03 // The Creators</span>
        </div>

        {/* List */}
        <div className="flex flex-col">
           {audiences.map((item, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.6 }}
                 onMouseEnter={() => setHoveredIndex(i)}
                 onMouseLeave={() => setHoveredIndex(null)}
                 className="group py-6 sm:py-10 flex justify-between items-center cursor-pointer opacity-100"
              >
                 <span className={`font-display text-4xl sm:text-6xl lg:text-8xl tracking-tight transition-all duration-500 ${hoveredIndex === i ? 'text-white translate-x-4 sm:translate-x-8' : (hoveredIndex !== null ? 'text-white/20' : 'text-white/80')} `}>
                     {item.title}
                 </span>
                 <span className={`hidden sm:block font-mono text-xs uppercase tracking-widest transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                    View Fit
                 </span>
              </motion.div>
           ))}
        </div>

        {/* Footer Statement */}
        <div className="mt-24 sm:mt-32">
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-white max-w-4xl leading-[1.2]"
           >
              If you create fashion— <br/>
              <span className="text-white/40 italic">you belong here.</span>
           </motion.p>
        </div>

      </div>
    </section>
  );
}
