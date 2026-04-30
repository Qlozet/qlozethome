"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Check } from "lucide-react";

type FindData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type FindSectionProps = {
  data: FindData;
};

export function FindSection({ data }: FindSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-[#F9F9F8] py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Right/Top: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
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

            <div className="flex flex-col gap-3 mt-2">
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

          {/* Left/Bottom: Editorial Search Interface Visual */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto min-h-[450px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 lg:p-8 flex flex-col gap-6">
               
               {/* Search Bar Animation */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", stiffness: 60, damping: 20 }}
                 className="h-14 w-full rounded-full bg-white border border-black/5 flex items-center px-6 gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative overflow-hidden"
               >
                  <Search className="h-5 w-5 text-black/30" strokeWidth={2} />
                  <div className="relative flex-1 overflow-hidden h-full flex items-center">
                     <span className="font-mono text-[11px] font-bold text-black tracking-widest absolute">EMERALD SILK PATTERN</span>
                     <motion.div 
                        initial={{ left: '0%' }}
                        whileInView={{ left: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        className="absolute inset-y-0 right-0 bg-white z-10 w-full"
                     />
                     <motion.div 
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="absolute h-4 w-0.5 bg-[#3E1C01] z-20"
                        style={{ left: 'calc(100% - 2px)' }} // Roughly position the cursor, though dynamic tracking is complex in pure CSS without a width tween. We'll just rely on the reveal block
                     />
                  </div>
                  <div className="ml-auto flex items-center h-8 w-8 justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors cursor-pointer">
                     <SlidersHorizontal className="h-3 w-3 text-black/60" />
                  </div>
               </motion.div>

               {/* Filters / Tags */}
               <div className="flex flex-wrap gap-2">
                  {[
                     { name: 'Silk', active: false },
                     { name: 'Emerald', active: true },
                     { name: 'Patterned', active: true },
                     { name: 'Formal', active: false }
                  ].map((tag, i) => (
                     <motion.div 
                        key={tag.name}
                        initial={{ scale: 0.8, opacity: 0, y: 10 }}
                        whileInView={{ scale: 1, opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + (i * 0.1), type: "spring" }}
                        className={`px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${tag.active ? 'bg-black text-white shadow-lg shadow-black/20' : 'bg-white border border-black/5 text-black/40 hover:bg-black/5 hover:text-black/80'}`}
                     >
                        {tag.name}
                     </motion.div>
                  ))}
               </div>

               {/* Asymmetrical Masonry Grid */}
               <div className="flex-1 overflow-hidden flex gap-4 mt-2">
                  
                  {/* Left Column */}
                  <div className="flex-1 flex flex-col gap-4 relative">
                     {/* Tall Image */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, type: "spring", stiffness: 50 }}
                        className="flex-[1.4] rounded-[2rem] overflow-hidden relative group bg-white border border-black/5 shadow-md"
                     >
                        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/image/fabric-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-white">
                           <p className="font-display text-sm font-medium">Lush Silk</p>
                           <p className="font-mono text-[8px] opacity-70">MATCHED</p>
                        </div>
                        {/* Selector indicator */}
                        <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-white shadow-lg flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                           <Check className="h-3 w-3 text-black" strokeWidth={3} />
                        </div>
                     </motion.div>

                     {/* Short Image */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 50 }}
                        className="flex-1 rounded-[2rem] overflow-hidden relative group bg-white border border-black/5 shadow-md"
                     >
                        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/image/fabric-swatch-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
                     </motion.div>
                  </div>

                  {/* Right Column (Staggered/Offset) */}
                  <div className="flex-1 flex flex-col gap-4 relative pt-12">
                     {/* Short Image */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1, type: "spring", stiffness: 50 }}
                        className="flex-1 rounded-[2rem] overflow-hidden relative group bg-white border border-black/5 shadow-md"
                     >
                        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/image/fabric-swatch-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
                     </motion.div>

                     {/* Tall Image */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.3, type: "spring", stiffness: 50 }}
                        className="flex-[1.4] rounded-[2rem] overflow-hidden relative group bg-white border border-black/5 shadow-md"
                     >
                        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/image/fabric-swatch-3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     </motion.div>
                  </div>

               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
