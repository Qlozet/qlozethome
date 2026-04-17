"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LayoutGrid, Package, LucideIcon, ArrowRight } from "lucide-react";

type ModelData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type SellingModelsSectionProps = {
  data: ModelData;
};

export function SellingModelsSection({ data }: SellingModelsSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
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
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Right: Simple Selling Model Mockup */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto h-[400px] lg:h-[500px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-10 flex flex-col gap-10 overflow-hidden transform items-center justify-center">
                {/* Visualizing "Choice" between Models */}
                <div className="grid grid-cols-1 gap-6 w-full">
                   {[
                      { icon: Package, label: "Ready-to-Wear" },
                      { icon: LayoutGrid, label: "Custom Design" },
                   ].map((model, i) => (
                      <div key={i} className="group relative h-28 w-full rounded-2xl bg-white border border-black/[0.03] shadow-md p-8 flex items-center justify-between hover:scale-[1.02] transition-transform duration-500">
                          <div className="flex items-center gap-6">
                             <div className="h-12 w-12 rounded-xl bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shadow-sm">
                                <model.icon className="h-6 w-6" strokeWidth={1.5} />
                             </div>
                             <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">{model.label}</span>
                          </div>
                          <div className={`h-6 w-6 rounded-full border border-black/5 flex items-center justify-center ${i === 1 ? 'bg-black text-white' : 'bg-zinc-50 shadow-inner'}`}>
                             {i === 1 && <CheckCircle2 className="h-3 w-3" />}
                          </div>
                      </div>
                   ))}
                </div>
                
                {/* Integration Node */}
                <div className="h-10 w-44 rounded-full bg-zinc-100/50 border border-dashed border-black/5 flex items-center justify-center gap-3">
                   <div className="h-1.5 w-1.5 rounded-full bg-black/10 animate-pulse" />
                   <span className="font-display text-[8px] font-bold uppercase tracking-[0.4em] text-black/20">Unified Checkout</span>
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
