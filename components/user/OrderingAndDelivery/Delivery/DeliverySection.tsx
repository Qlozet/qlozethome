"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Globe, Clock4 } from "lucide-react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type DeliverySectionProps = {
  data: SectionData;
};

export function DeliverySection({ data }: DeliverySectionProps) {
  return (
    <section id="delivery" className="relative w-full bg-white py-24 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-2xl text-black/40 font-ui font-normal tracking-normal">{data.subtitle}</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.features.map((feature, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="flex items-center gap-4 group"
                >
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                      {i === 0 ? <Clock4 className="h-4 w-4" /> : 
                       i === 1 ? <ShieldCheck className="h-4 w-4" /> : 
                       <Globe className="h-4 w-4" />}
                   </div>
                   <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/60">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display text-sm font-medium italic text-black/30"
            >
               {data.footer}
            </motion.p>
          </div>

          {/* Right: The Delivery Visual */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-md p-8 lg:p-12">
                <div className="relative rounded-[3rem] bg-zinc-900 border border-white/5 p-10 shadow-2xl flex flex-col gap-10 overflow-hidden">
                   {/* Logistics Grid Overlay */}
                   <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                   {/* Delivery Animation */}
                   <div className="relative h-64 w-full bg-black/40 rounded-[2rem] border border-white/5 flex items-center justify-center overflow-hidden">
                      {/* Perspective Road */}
                      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white/5 to-transparent skew-x-[-20deg]" />
                      
                      {/* Truck Visual */}
                      <motion.div 
                        initial={{ x: -200 }}
                        animate={{ x: 200 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="relative z-10 flex flex-col items-center gap-2"
                      >
                         <Truck className="h-16 w-16 text-white" />
                         <motion.div 
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="h-1.5 w-12 bg-emerald-500/40 blur-sm rounded-full" 
                         />
                      </motion.div>

                      {/* Speed Lines */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ left: "100%" }}
                          animate={{ left: "-20%" }}
                          transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, ease: "linear" }}
                          className="absolute h-px w-20 bg-white/20"
                          style={{ top: `${20 + i * 15}%` }}
                        />
                      ))}
                   </div>

                   {/* Partner Badges */}
                   <div className="flex flex-col gap-4">
                      <span className="font-display text-[9px] font-bold uppercase tracking-widest text-white/40">Trusted Networks</span>
                      <div className="flex items-center gap-6">
                         <div className="h-4 w-12 bg-white/10 rounded-full" />
                         <div className="h-4 w-16 bg-white/10 rounded-full" />
                         <div className="h-4 w-10 bg-white/20 rounded-full" />
                         <div className="ml-auto flex items-center gap-2">
                            <span className="font-display text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Global Reach</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Secure Label */}
                <div className="absolute -bottom-6 right-0 h-24 w-24 bg-white rounded-full shadow-2xl border border-black/5 flex items-center justify-center p-4">
                   <div className="flex flex-col items-center gap-1 text-center">
                      <ShieldCheck className="h-6 w-6 text-emerald-500" />
                      <span className="font-display text-[7px] font-bold uppercase tracking-widest leading-tight">Secured Transit</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
