"use client";

import { motion } from "framer-motion";
import { Package, Truck, User, MapPin, CheckCircle2, Store, LucideIcon } from "lucide-react";

type LogisticsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type EndToEndLogisticsSectionProps = {
  data: LogisticsData;
};

export function EndToEndLogisticsSection({ data }: EndToEndLogisticsSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
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
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/40 sm:text-lg"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm">
                    <Package className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
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

          {/* Right: Technical Routing Node Mockup */}
          <div className="relative lg:w-1/2">
             <div className="relative mx-auto h-[450px] lg:h-[550px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-10 flex flex-col gap-10 overflow-hidden transform items-center justify-center">
                {/* Visualizing "Seamless Journey" with Sequential Animation */}
                <div className="relative h-full w-full flex items-center justify-center py-10">
                   
                   {/* Background Layer Grid */}
                   <div className="absolute inset-x-0 inset-y-0 opacity-[0.02] pointer-events-none">
                       <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                   </div>

                   {/* Solid Vertical Track line (Background) */}
                   <div className="absolute top-[10%] bottom-[10%] left-1/2 w-px -translate-x-1/2 bg-black opacity-[0.05]" />
                   
                   {/* Animated Track Fill */}
                   <div className="absolute top-[10%] bottom-[10%] left-1/2 w-px -translate-x-1/2 overflow-hidden pointer-events-none">
                      <motion.div 
                         initial={{ top: "-20%" }}
                         animate={{ top: "120%" }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                         className="h-32 w-full bg-gradient-to-b from-transparent via-black to-transparent opacity-20"
                      />
                   </div>
                   
                   {/* Package Moving Dot */}
                   <motion.div
                     initial={{ top: "10%", opacity: 0 }}
                     animate={{ top: "90%", opacity: [0, 1, 1, 0] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.9, 1] }}
                     className="absolute left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-black shadow-[0_0_15px_rgba(0,0,0,0.2)] z-10 ring-4 ring-white"
                   />
                   
                   {/* Three Workflow Nodes */}
                   <div className="flex flex-col justify-between items-center h-full w-full relative z-20">
                     
                     {/* 1. Vendor */}
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative flex items-center justify-between w-full px-4 group/node"
                     >
                        <div className="flex-1 text-right pr-6">
                           <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-black transition-colors">Vendor Storefront</span>
                        </div>
                        
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/5 border border-black/10 transition-all duration-500 group-hover/node:scale-110 group-hover/node:bg-black group-hover/node:text-white">
                           <Store className="h-5 w-5 text-black group-hover/node:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        
                        <div className="flex-1 pl-6 opacity-0"></div>
                     </motion.div>

                     {/* 2. Hub (Center) */}
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative flex items-center justify-center group/hub z-30"
                     >
                        <div className="absolute -inset-4 rounded-full border border-dashed border-black/10 animate-[spin_10s_linear_infinite] group-hover/hub:border-black/20 transition-colors" />
                        <div className="absolute -inset-8 rounded-full border border-dashed border-black/5 animate-[spin_15s_linear_infinite_reverse]" />
                        
                        <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-full bg-white shadow-2xl border border-black/10 transition-transform duration-700 group-hover/hub:scale-110">
                           <Truck className="h-6 w-6 text-black" strokeWidth={1.5} />
                           <span className="font-display text-[7px] font-bold uppercase tracking-[0.3em] text-black">Hub</span>
                        </div>
                     </motion.div>

                     {/* 3. Customer */}
                     <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative flex items-center justify-between w-full px-4 group/node"
                     >
                        <div className="flex-1 pr-6 flex justify-end"></div>
                        
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/5 border border-black/10 transition-all duration-500 group-hover/node:scale-110 group-hover/node:bg-black group-hover/node:text-white">
                           <User className="h-5 w-5 text-black group-hover/node:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        
                        <div className="flex-1 pl-6 text-left">
                           <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover/node:text-black transition-colors">Client Drop</span>
                        </div>
                     </motion.div>

                   </div>

                </div>
             </div>
             
             <div className="text-center z-10 pt-10">
                <div className="flex flex-col gap-1 items-center">
                   <p className="font-display text-[9px] text-black/20 leading-relaxed uppercase tracking-[0.4em]">Batch ID: QL-809277</p>
                   <p className="font-display text-[9px] text-black/40 leading-relaxed uppercase tracking-[0.4em]">Integrated Logistics Stack</p>
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
