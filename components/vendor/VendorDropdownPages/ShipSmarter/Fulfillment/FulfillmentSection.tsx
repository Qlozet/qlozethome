"use client";

import { motion } from "framer-motion";
import { Layers, Plus, ArrowRight, LucideIcon, Infinity as InfinityIcon } from "lucide-react";

type LogisticsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type FulfillmentSectionProps = {
  data: LogisticsData;
};

export function FulfillmentSection({ data }: FulfillmentSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right: Content (Mobile: First) */}
          <div className="flex flex-col gap-10 lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
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
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl"
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
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <Layers className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Left: Dynamic Scaling Mockup (Mobile: Second) */}
          <div className="relative lg:w-1/2 order-2 lg:order-1 flex items-center justify-center">
             <div className="relative mx-auto h-[480px] lg:h-[580px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden flex transform items-center justify-center">
                
                {/* Clean Background */}
                <div className="absolute inset-x-0 inset-y-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                {/* Vertical interactive slider visualization */}
                <div className="relative w-full h-full flex items-center p-8 gap-8 z-10">
                   
                   {/* left: Scale visualization */}
                   <div className="flex-1 h-full flex flex-col justify-center gap-1 relative">
                      {/* Active volume visualization (simulating a bar chart that grows dynamically) */}
                      <div className="absolute left-0 right-0 bottom-1/2 translate-y-1/2 flex items-end justify-between h-[60%] gap-1 opacity-20 pointer-events-none">
                         {[1,2,3,4,5,6,7,8,9,10].map((bar, i) => (
                            <motion.div 
                               key={i}
                               animate={{ height: ["10%", "100%", "20%"] }}
                               transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut", repeatType: "mirror" }}
                               className="w-full bg-black rounded-t-sm"
                            />
                         ))}
                      </div>

                      {/* Moving Volume Indicator */}
                      <motion.div 
                         animate={{ y: [-100, 100, -100] }}
                         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                         className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-90 blur-xl pointer-events-none"
                      />

                      {/* The "Volumes" */}
                      <div className="flex flex-col h-full justify-between py-10 z-10">
                         <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md p-3 rounded-xl border border-black/5 shadow-sm">
                            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-black text-white">
                               <InfinityIcon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                               <span className="font-display text-[9px] font-bold uppercase tracking-widest text-black">Enterprise Batch</span>
                               <span className="font-ui text-[9px] text-black/40">10,000+ Units/mo</span>
                            </div>
                         </div>
                         
                         <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md p-3 rounded-xl border border-black/5 shadow-sm relative left-8">
                            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-zinc-100 text-black border border-black/5">
                               <Layers className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                               <span className="font-display text-[9px] font-bold uppercase tracking-widest text-black">RTW Drops</span>
                               <span className="font-ui text-[9px] text-black/40">100 - 5,000 Units/mo</span>
                            </div>
                         </div>

                         <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md p-3 rounded-xl border border-black/5 shadow-sm relative left-16">
                            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white text-black border border-black/5 shadow-sm shadow-black/5">
                               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                            </div>
                            <div className="flex flex-col">
                               <span className="font-display text-[9px] font-bold uppercase tracking-widest text-black">Custom 1-of-1</span>
                               <span className="font-ui text-[9px] text-black/40">Bespoke Orders</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* right: The Slider Control */}
                   <div className="w-12 h-full py-10 flex flex-col items-center relative z-20">
                      <div className="absolute top-10 bottom-10 w-0.5 bg-black/5 rounded-full" />
                      <div className="absolute top-10 bottom-10 w-0.5 overflow-hidden rounded-full">
                         <motion.div 
                            animate={{ height: ["100%", "0%", "100%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-black w-full"
                         />
                      </div>
                      
                      {/* The Slider Thumb */}
                      <motion.div 
                         initial={{ top: "0%" }}
                         animate={{ top: ["0%", "100%", "0%"] }}
                         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                         className="absolute w-12 h-12 -ml-6 bg-white border border-black shadow-2xl rounded-full flex items-center justify-center group"
                      >
                         <div className="h-4 w-4 rounded-full bg-black flex items-center justify-center">
                            <div className="w-2 h-0.5 bg-white rounded-full opacity-50" />
                         </div>
                         
                         {/* Dynamic scale reader label */}
                         <div className="absolute -left-20 bg-black text-white px-3 py-1 rounded-md text-[8px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            Scaling
                         </div>
                      </motion.div>
                   </div>
                </div>

                {/* Footer Readout */}
                <div className="absolute bottom-6 w-full text-center z-30">
                   <p className="font-display text-[9px] font-bold text-black/20 uppercase tracking-[0.4em]">Seamless Capacity Adaptation</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Spine Marker */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}
