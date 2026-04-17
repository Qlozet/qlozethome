"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Star, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const VENDORS = [
  {
    id: 1,
    name: "Adebayo Studios",
    specialty: "Master Tailor",
    location: "Lagos, Nigeria",
    image: "/image/tailorwork.png",
    tags: ["Traditional Agbada", "Bespoke Suiting", "Groomswear"],
    rating: "4.9"
  },
  {
    id: 2,
    name: "Seun Couture",
    specialty: "Creative Director",
    location: "Accra, Ghana",
    image: "/image/seun.png",
    tags: ["Contemporary Fusion", "Ankara Remix", "Eveningwear"],
    rating: "4.8"
  },
  {
    id: 3,
    name: "Menswear Atelier",
    specialty: "Fabric Specialist",
    location: "London, UK",
    image: "/image/slim-man-2.jpg",
    tags: ["Premium Wool", "Italian Linen", "Luxury Cotton"],
    rating: "5.0"
  }
];

type VendorData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type VendorsSectionProps = {
  data: VendorData;
};

export function VendorsSection({ data }: VendorsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((c) => (c + 1) % VENDORS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const vendor = VENDORS[activeIndex];

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
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40"
              >
                {data.badge}
              </motion.span>
              
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
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-black/30"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Right: Live Vendor Spotlight */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div 
                className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
             >
                
                {/* Vendor Portrait */}
                <div className="relative h-[320px] w-full overflow-hidden bg-zinc-200">
                   <AnimatePresence mode="wait">
                      <motion.img
                        key={vendor.id}
                        src={vendor.image}
                        alt={vendor.name}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                   </AnimatePresence>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                   
                   {/* Hover CTA Overlay */}
                   <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-black/5">
                         <span className="font-display text-[10px] font-bold text-black uppercase tracking-widest">View Profile →</span>
                      </div>
                   </div>
                   
                   {/* Verified Badge Overlay */}
                   <div className="absolute top-5 right-5">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 shadow-sm flex items-center gap-2">
                         <ShieldCheck className="h-3 w-3 text-emerald-600" />
                         <span className="font-mono text-[8px] font-bold text-emerald-700 uppercase tracking-widest">Verified</span>
                      </div>
                   </div>

                   {/* Name Overlay */}
                   <div className="absolute bottom-5 left-6 right-6 z-10">
                      <AnimatePresence mode="wait">
                         <motion.div
                            key={vendor.name}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col gap-1"
                         >
                            <h3 className="font-display text-2xl font-bold text-white tracking-tight">{vendor.name}</h3>
                            <div className="flex items-center gap-3">
                               <span className="font-mono text-[9px] font-bold text-white/70 uppercase tracking-widest">{vendor.specialty}</span>
                               <span className="text-white/30">·</span>
                               <div className="flex items-center gap-1">
                                  <MapPin className="h-2.5 w-2.5 text-white/50" />
                                  <span className="font-mono text-[8px] text-white/50 uppercase tracking-wider">{vendor.location}</span>
                               </div>
                            </div>
                         </motion.div>
                      </AnimatePresence>
                   </div>
                </div>

                {/* Vendor Info Card */}
                <div className="p-6 flex flex-col gap-5">
                   {/* Tags */}
                   <div className="flex flex-wrap gap-2">
                      <AnimatePresence mode="wait">
                         {vendor.tags.map((tag, idx) => (
                            <motion.div
                               key={`${vendor.id}-${tag}`}
                               initial={{ opacity: 0, scale: 0.8, y: 10 }}
                               animate={{ opacity: 1, scale: 1, y: 0 }}
                               exit={{ opacity: 0, scale: 0.8 }}
                               transition={{ duration: 0.3, delay: idx * 0.08 }}
                               className="h-7 px-3 rounded-full bg-white border border-black/5 flex items-center font-display text-[9px] font-bold text-black/60 uppercase tracking-wider shadow-sm"
                            >
                               {tag}
                            </motion.div>
                         ))}
                      </AnimatePresence>
                   </div>

                   {/* Rating + Progress */}
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <Star className="h-4 w-4 fill-black text-black" />
                         <AnimatePresence mode="wait">
                            <motion.span
                               key={vendor.rating}
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               className="font-display text-sm font-bold text-black"
                            >
                               {vendor.rating}
                            </motion.span>
                         </AnimatePresence>
                      </div>
                      
                      {/* Cycle Progress Bar */}
                      <div className="flex items-center gap-2">
                         {VENDORS.map((_, i) => (
                            <div key={i} className="h-1 w-8 bg-black/5 rounded-full overflow-hidden">
                               {i === activeIndex && (
                                  <motion.div
                                     key={`progress-${activeIndex}`}
                                     initial={{ width: "0%" }}
                                     animate={{ width: "100%" }}
                                     transition={{ duration: 4, ease: "linear" }}
                                     className="h-full bg-black rounded-full"
                                  />
                               )}
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-px h-1 rounded-full bg-black/20" />
      </div>
    </section>
  );
}
