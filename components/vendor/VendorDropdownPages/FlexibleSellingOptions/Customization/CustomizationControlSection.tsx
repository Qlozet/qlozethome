"use client";

import { motion } from "framer-motion";
import { Scissors, Settings, CheckCircle2, LucideIcon, Sliders } from "lucide-react";

type ControlData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type CustomizationControlSectionProps = {
  data: ControlData;
};

export function CustomizationControlSection({ data }: CustomizationControlSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
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
                    <Scissors className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Left: Simple Customization Controller Mockup (Mobile: Second) */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 order-2 lg:order-1">
             <div className="relative mx-auto h-[400px] lg:h-[500px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-10 flex flex-col gap-10 overflow-hidden transform items-center justify-center">
                {/* Visualizing "Style Control" */}
                <div className="flex items-center justify-between w-full border-b border-black/5 pb-8">
                   <div className="flex items-center gap-4">
                      <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-black text-white">
                         <Sliders className="h-4 w-4" />
                      </div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Style Editor</span>
                   </div>
                </div>

                {/* Control Toggles Mockup */}
                <div className="flex-1 grid grid-cols-1 gap-6 w-full items-center">
                   {['Neckline', 'Sleeves', 'Fit', 'Length'].map((option, i) => (
                      <div key={i} className="flex h-12 w-full rounded-full bg-white border border-black/[0.03] shadow-md px-6 items-center justify-between group hover:border-black/10 transition-colors">
                          <span className="font-display text-[9px] font-bold uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">{option}</span>
                          <div className={`h-4 w-10 rounded-full border border-black/5 relative transition-colors ${i < 2 ? 'bg-black' : 'bg-zinc-50'}`}>
                             <div className={`absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-sm transition-all ${i < 2 ? 'right-1' : 'left-1 bg-black/10'}`} />
                          </div>
                      </div>
                   ))}
                </div>

                {/* Technical Node Overlay */}
                <div className="absolute -top-10 right-10 h-32 w-32 items-center justify-center rounded-full bg-zinc-100 hidden lg:flex opacity-20 border border-dashed border-black/5 rotate-45" />
             </div>
          </div>
        </div>
      </div>
      
      {/* Spine Marker */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}
