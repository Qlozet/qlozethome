"use client";

import { motion } from "framer-motion";
import { User, Users, Building2, LucideIcon, RefreshCw, Layers } from "lucide-react";

type AdaptData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type AdaptabilitySectionProps = {
  data: AdaptData;
};

export function AdaptabilitySection({ data }: AdaptabilitySectionProps) {
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
                    <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Left: Simple Adaptability Mockup (Mobile: Second) */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 order-2 lg:order-1">
             <div className="relative mx-auto h-[400px] lg:h-[500px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-10 flex flex-col gap-10 overflow-hidden transform items-center justify-center">
                {/* Visualizing Scaling Types */}
                <div className="flex flex-col gap-6 w-full h-full justify-center">
                   {[
                      { icon: User, label: "Solo Tailor", active: true },
                      { icon: Users, label: "Growing Brand", active: false },
                      { icon: Building2, label: "Large Workshop", active: false },
                   ].map((type, i) => (
                      <div key={i} className={`h-20 w-full rounded-2xl bg-white border border-black/[0.03] shadow-md p-6 flex items-center gap-6 group hover:scale-[1.02] transition-transform duration-500 ${i === 0 ? 'opacity-100' : 'opacity-40 translate-x-4'}`}>
                          <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-black text-white' : 'bg-zinc-50 border border-black/5 text-black/20'} shadow-sm`}>
                             <type.icon className="h-5 w-5" strokeWidth={1.5} />
                          </div>
                          <span className="font-display text-[9px] font-bold uppercase tracking-widest text-black/40">{type.label}</span>
                      </div>
                   ))}
                </div>

                {/* Adaptive Indicator */}
                <div className="absolute top-10 right-10 h-2 w-20 bg-black/5 rounded-full" />
             </div>
          </div>
        </div>
      </div>
      
      {/* Spine Marker */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}
