"use client";

import { motion } from "framer-motion";
import { MessageSquareText, ImagePlus, SwatchBook, Upload, Type, Palette } from "lucide-react";
import { useState } from "react";

const iconMap: any = { MessageSquareText, ImagePlus, SwatchBook };

type InspirationData = {
   badge: string;
   title: string;
   description: string;
   features: { title: string; icon: string }[];
};

type InspirationSectionProps = { data: InspirationData };

const INPUT_MODES = [
   { id: "text", label: "Describe It", icon: Type, placeholder: "A flowing ankara maxi dress with bell sleeves and gold embroidery...", image: "/image/custom-outfit-2.png" },
   { id: "image", label: "Upload Image", icon: Upload, placeholder: "Drop your inspiration image here", image: "/image/bespoke-dress-1.png" },
   { id: "fabric", label: "Pick Fabric", icon: Palette, placeholder: "Select from premium fabric swatches", image: "/image/fabric-swatch-1.jpg" }
];

export function InspirationSection({ data }: InspirationSectionProps) {
   const [activeMode, setActiveMode] = useState(0);
   const mode = INPUT_MODES[activeMode];

   return (
      <section id="inspiration" className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
         <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
               {/* Left: Interactive Input Builder */}
               <div className="relative mt-16 order-2 lg:order-1 lg:mt-0 lg:w-1/2">
                  <div className="relative mx-auto w-full max-w-[520px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">

                     {/* Header */}
                     <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                        <div className="flex items-center gap-3">
                           <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-[#3A3A3A] text-white">
                              <MessageSquareText className="h-3.5 w-3.5" />
                           </div>
                           <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Design Input</span>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                           <span className="font-mono text-[8px] font-bold text-black/60 uppercase tracking-widest leading-none">Step 1 of 4</span>
                        </div>
                     </div>

                     {/* Mode Switcher Tabs */}
                     <div className="flex flex-col gap-2 mb-6 sm:flex-row">
                        {INPUT_MODES.map((m, i) => {
                           const Icon = m.icon;
                           return (
                              <motion.button
                                 key={m.id}
                                 onClick={() => setActiveMode(i)}
                                 whileHover={{ scale: 1.03 }}
                                 whileTap={{ scale: 0.97 }}
                                 className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-display text-[9px] font-bold uppercase tracking-widest transition-all ${i === activeMode ? 'bg-[#3A3A3A] text-white shadow-lg' : 'bg-white text-black/40 border border-black/5 hover:border-black/10'}`}
                              >
                                 <Icon className="h-3 w-3" />
                                 {m.label}
                              </motion.button>
                           );
                        })}
                     </div>

                     {/* Input Area */}
                     <motion.div
                        key={mode.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl border border-black/5 shadow-md p-4 mb-5"
                     >
                        {activeMode === 0 ? (
                           <div className="flex flex-col gap-3">
                              <div className="h-24 w-full rounded-xl bg-zinc-50 border border-dashed border-black/10 p-4 flex items-start">
                                 <span className="font-ui text-[11px] text-black/30 leading-relaxed italic">{mode.placeholder}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                 <div className="h-1.5 flex-1 bg-zinc-100 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: ["0%", "65%"] }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-[#3A3A3A] rounded-full" />
                                 </div>
                                 <span className="font-mono text-[8px] font-bold text-black/30">typing...</span>
                              </div>
                           </div>
                        ) : activeMode === 1 ? (
                           <div className="flex flex-col items-center gap-3 py-6">
                              <div className="h-14 w-14 rounded-2xl bg-zinc-50 border border-dashed border-black/10 flex items-center justify-center">
                                 <Upload className="h-6 w-6 text-black/20" />
                              </div>
                              <span className="font-ui text-[10px] text-black/30">{mode.placeholder}</span>
                           </div>
                        ) : (
                           <div className="grid grid-cols-3 gap-2">
                              {["/image/fabric-swatch-1.jpg", "/image/fabric-swatch-2.jpg", "/image/fabric-swatch-3.jpg"].map((img, i) => (
                                 <motion.div key={i} whileHover={{ scale: 1.05 }} className={`aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${i === 0 ? 'border-black shadow-lg' : 'border-transparent hover:border-black/20'}`}>
                                    <img src={img} alt="fabric" className="w-full h-full object-cover" />
                                 </motion.div>
                              ))}
                           </div>
                        )}
                     </motion.div>

                     {/* Preview Output */}
                     <motion.div
                        key={`preview-${mode.id}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/5 shadow-md group cursor-pointer"
                     >
                        <img src={mode.image} alt="Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                           <span className="font-display text-[9px] font-bold text-white uppercase tracking-widest">AI Preview</span>
                           <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                              <span className="font-mono text-[8px] font-bold text-black uppercase tracking-widest leading-none">Generated</span>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>

               {/* Right: Content */}
               <div className="flex flex-col gap-6 mt-8 order-1 lg:order-2 lg:w-1/2 lg:pl-16 lg:mt-0">
                  <div className="flex flex-col gap-6">
                     <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">{data.badge}</motion.span>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg">{data.description}</motion.p>
                  </div>
                  <div className="flex flex-col gap-6">
                     {data.features.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || MessageSquareText;
                        return (
                           <motion.div key={feature.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.1 }} className="flex items-center gap-4 group">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 transition-all group-hover:bg-[#3A3A3A] group-hover:text-white shadow-sm">
                                 <Icon className="h-4 w-4" strokeWidth={1.5} />
                              </div>
                              <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature.title}</span>
                           </motion.div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
