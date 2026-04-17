"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Navigation, Info, ArrowRight } from "lucide-react";
import Link from "next/link";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type TrackingSectionProps = {
  data: SectionData;
};

export function TrackingSection({ data }: TrackingSectionProps) {
  return (
    <section id="tracking" className="relative w-full bg-zinc-50 py-24 lg:py-40 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Left: Content (Reversed layout) */}
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

            <div className="grid gap-6">
              {data.features.map((feature, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="flex items-center gap-4 group"
                >
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                      <Navigation className="h-4 w-4" />
                   </div>
                   <span className="font-ui text-lg text-black/70">{feature}</span>
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

          {/* Right: The Tracking Map Visual */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-md p-8 lg:p-12">
                {/* Background Board */}
                <div className="relative rounded-[3rem] bg-white border border-black/5 p-8 shadow-2xl flex flex-col gap-6 overflow-hidden min-h-[500px]">
                   {/* Search Header */}
                   <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-black/5">
                      <Search className="h-4 w-4 text-black/20" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">QL-294-ZX</span>
                      <div className="ml-auto flex items-center gap-2">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="font-display text-[8px] font-bold uppercase tracking-widest text-emerald-600">Syncing</span>
                      </div>
                   </div>

                   {/* The Abstract Map Visual */}
                   <div className="relative flex-1 rounded-[2rem] bg-zinc-50 border border-black/5 overflow-hidden">
                      <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                         <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
                         <motion.path 
                            d="M 20,80 Q 50,50 80,20" 
                            fill="none" 
                            stroke="black" 
                            strokeWidth="1" 
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                         />
                      </svg>

                      {/* Map Markers */}
                      <motion.div 
                         initial={{ opacity: 0, scale: 0 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         className="absolute bottom-[20%] left-[20%] flex flex-col items-center gap-2"
                      >
                         <div className="h-4 w-4 rounded-full bg-black shadow-lg" />
                         <span className="font-mono text-[7px] font-bold uppercase tracking-widest text-black/40">Studio A</span>
                      </motion.div>

                      <motion.div 
                         initial={{ opacity: 0, scale: 0 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ delay: 1 }}
                         className="absolute top-[20%] right-[20%] flex flex-col items-center gap-2"
                      >
                         <div className="flex h-8 w-8 items-center justify-center bg-white rounded-xl shadow-xl border border-black/5">
                            <MapPin className="h-4 w-4 text-emerald-500" />
                         </div>
                         <span className="font-mono text-[7px] font-bold uppercase tracking-widest text-black/40">Final Mile</span>
                      </motion.div>

                      {/* Moving Marker */}
                      <motion.div 
                         animate={{ 
                            left: ["20%", "80%"],
                            bottom: ["20%", "80%"] 
                         }}
                         transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                         className="absolute h-10 w-10 flex items-center justify-center opacity-40"
                      >
                         <Navigation className="h-6 w-6 text-black rotate-45" />
                      </motion.div>
                   </div>

                   {/* Info Footer */}
                   <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-3xl text-white shadow-xl">
                      <div className="flex items-center gap-4">
                         <Info className="h-5 w-5 text-emerald-500" />
                         <div className="flex flex-col gap-0.5">
                            <span className="font-display text-[9px] font-bold uppercase tracking-widest">En Route</span>
                            <span className="font-ui text-[8px] text-white/40">Estimated: 35 Minutes</span>
                         </div>
                      </div>
                      <Link href="/waitlist">
                        <div className="h-10 w-10 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all">
                           <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </Link>
                   </div>
                </div>

                {/* Floating "Live" Callout */}
                <div className="absolute top-1/2 -right-8 z-20 flex flex-col gap-2 p-4 bg-white rounded-2xl border border-black/5 shadow-2xl skew-x-3 rotate-1 lg:-right-4">
                   <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/40">Live Status</span>
                   </div>
                   <span className="font-display text-sm font-bold text-black">Hub Transfer</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
