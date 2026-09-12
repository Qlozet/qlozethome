"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck, MapPin, Navigation, ArrowUpRight } from "lucide-react";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  closing: string;
};

type LogisticsHeroProps = {
  data: HeroData;
};

export function LogisticsHero({ data }: LogisticsHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-10 lg:pt-32 lg:pb-24 overflow-hidden bg-white" data-theme="light">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.01),transparent)]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10"
      >
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-8">
              <motion.span 
                variants={itemVariants}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                {data.title}
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <Link
                href={data.cta.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-brand-button px-12 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition-all hover:scale-[1.02] active:scale-95 shadow-2xl"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="font-ui text-sm italic text-black/30"
            >
              {data.closing}
            </motion.p>
          </div>

          {/* Right: Technical Routing Engine Mockup */}
          <div className="relative lg:w-1/2 flex items-center justify-center px-4">
             <div className="relative h-[450px] lg:h-[550px] w-full max-w-md rounded-[3rem] bg-brand-light border border-brand-darker/5 shadow-2xl p-10 flex flex-col gap-10 overflow-hidden group">
                {/* Technical Node Overlay (Background Layer) */}
                <div className="absolute inset-x-0 inset-y-0 opacity-[0.02] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1e1008 1px, transparent 1px), linear-gradient(90deg, #1e1008 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                {/* Routing Header */}
                <div className="flex items-center justify-between border-b border-brand-darker/5 pb-8 relative z-10">
                   <div className="flex items-center gap-4">
                      <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-brand-darker text-white shadow-xl shadow-brand-darker/10">
                         <Navigation className="h-4 w-4" />
                      </div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-brand-darker">Live Tracking Engine</span>
                   </div>
                   <div className="flex items-center gap-2">
                       <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-darker/40 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-darker"></span>
                        </span>
                       <span className="font-display text-[8px] font-bold uppercase tracking-widest text-[#111111]/50">Active Flow</span>
                   </div>
                </div>

                {/* Vertical Step Track with Live Animation */}
                 <div className="flex flex-col gap-12 flex-1 justify-center relative py-10 z-10">
                    {/* Vertical Connector Path (Background) */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-darker opacity-[0.05]" />
                    
                    {/* Animated Progress Path (The Pulse) */}
                    <div className="absolute left-6 top-0 bottom-0 w-px overflow-hidden">
                       <motion.div 
                          initial={{ top: "-20%" }}
                          animate={{ top: "120%" }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="h-24 w-full bg-gradient-to-b from-transparent via-brand-darker to-transparent opacity-[0.15]"
                       />
                    </div>
                    
                    {[
                       { icon: MapPin, label: "01: Atelier Pickup", desc: "Creator Verified", id: 'pickup', color: 'text-brand-darker' },
                       { icon: Truck, label: "02: Hub Transit", desc: "Batch Distro", id: 'transit', color: 'text-[#111111]/70' },
                       { icon: ArrowUpRight, label: "03: Client Drop", desc: "Last Mile", id: 'final', color: 'text-[#111111]/40' },
                    ].map((step, i) => (
                       <motion.div 
                         key={step.id} 
                         initial={{ opacity: 0.2 }}
                         whileInView={{ opacity: 1 }}
                         className="flex items-center gap-6 lg:gap-8 group/step relative"
                       >
                          {/* Pulse Glow for active node */}
                          {i === 0 && (
                             <div className="absolute left-6 -translate-x-1/2 h-16 w-16 bg-brand-darker/[0.03] rounded-full blur-xl animate-pulse" />
                          )}
 
                          <div className={`h-12 w-12 lg:h-14 lg:w-14 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-xl z-20 border bg-white group-hover/step:scale-110 group-hover/step:bg-brand-darker group-hover/step:text-brand-light ${i === 0 ? 'border-brand-darker/20 shadow-brand-darker/5' : 'border-brand-darker/5'}`}>
                             <step.icon className={`h-5 w-5 lg:h-6 lg:w-6 ${i === 0 ? 'text-brand-darker' : 'text-zinc-500'} group-hover/step:text-brand-light transition-colors`} strokeWidth={1.5} />
                          </div>
 
                          <div className="flex flex-col gap-0.5 pt-1 min-w-0">
                             <span className={`font-display text-[9px] lg:text-[10px] font-bold uppercase tracking-widest truncate ${step.color}`}>{step.label}</span>
                             <span className="font-ui text-[10px] lg:text-[11px] text-[#111111]/40 group-hover/step:text-brand-darker/70 transition-colors whitespace-nowrap">{step.desc}</span>
                          </div>
 
                          {/* Moving "Shipment Dot" */}
                          {i === 0 && (
                             <motion.div 
                                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute left-6 -translate-x-1/2 h-3.5 w-3.5 bg-brand-darker rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] z-30 ring-4 ring-white"
                             />
                          )}
                       </motion.div>
                    ))}
                 </div>

                {/* Live Scanning UI */}
                <div className="absolute inset-0 pointer-events-none z-20">
                    <motion.div 
                       initial={{ top: "-10%" }}
                       animate={{ top: "110%" }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       className="h-px w-full bg-gradient-to-r from-transparent via-brand-darker/10 to-transparent shadow-[0_0_20px_rgba(0,0,0,0.05)]"
                    />
                </div>
             </div>
          </div>
        </div>
      </motion.div>
 
      {/* Delivery Path Entry */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-darker shadow-sm" />
      </div>
    </section>
  );
}
