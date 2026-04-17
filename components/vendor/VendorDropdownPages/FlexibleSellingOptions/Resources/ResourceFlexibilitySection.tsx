"use client";

import { motion } from "framer-motion";
import { Scissors, ShoppingBag, Truck, LucideIcon, Share2, Layers } from "lucide-react";

type ResourceData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type ResourceFlexibilitySectionProps = {
  data: ResourceData;
};

export function ResourceFlexibilitySection({ data }: ResourceFlexibilitySectionProps) {
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

          {/* Left: Simple Resource Sourcing Mockup (Mobile: Second) */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 order-2 lg:order-1">
             <div className="relative mx-auto h-[400px] lg:h-[500px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-10 flex flex-col gap-10 overflow-hidden transform items-center justify-center">
                {/* Visualizing "Sourcing Versatility" */}
                <div className="relative h-64 w-64 items-center justify-center flex">
                   {/* Center Hub */}
                   <div className="h-20 w-20 rounded-full bg-black flex items-center justify-center shadow-3xl z-10 transition-transform hover:scale-110 duration-500">
                      <Share2 className="h-6 w-6 text-white/40" />
                   </div>
                   
                   {/* Sourcing Nodes */}
                   {[
                      { icon: ShoppingBag, label: "Your Supply", pos: "top-0 left-1/2 -translate-x-1/2" },
                      { icon: Truck, label: "Customer Ship", pos: "bottom-0 left-1/2 -translate-x-1/2" },
                   ].map((node, i) => (
                      <div key={i} className={`absolute ${node.pos} flex flex-col items-center gap-4`}>
                          <div className="h-14 w-14 rounded-full bg-white border border-black/[0.03] shadow-xl flex items-center justify-center transition-transform hover:scale-105 duration-500">
                             <node.icon className="h-5 w-5 text-black/20" strokeWidth={1.5} />
                          </div>
                          <div className="h-2 w-12 bg-black/5 rounded-full" />
                      </div>
                   ))}
                   
                   {/* Connecting Path Visual */}
                   <div className="absolute inset-x-0 inset-y-0 border border-dashed border-black/[0.03] rounded-full" />
                </div>
                
                <div className="text-center z-10 pt-12">
                   <p className="font-ui text-[9px] text-black/20 leading-relaxed uppercase tracking-[0.4em]">Fabric Collaboration Ecology</p>
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
