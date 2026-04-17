"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, Plus, LayoutGrid, CheckCircle2 } from "lucide-react";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  closing: string;
};

type FlexHeroProps = {
  data: HeroData;
};

export function FlexHero({ data }: FlexHeroProps) {
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
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.02),transparent)]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[94rem] px-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-8">
              <motion.span 
                variants={itemVariants}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                {data.title}
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 sm:text-2xl"
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
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-black px-12 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition-all hover:scale-[1.02] active:scale-95 shadow-2xl"
              >
                <span className="relative z-10">{data.cta.label}</span>
              </Link>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="font-ui text-sm italic text-black/30"
            >
              {data.closing}
            </motion.p>
          </div>

          {/* Right: Technical Model Mockup */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 flex items-center justify-center">
             <div className="relative h-[500px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-10 flex flex-col gap-10 overflow-hidden group">
                {/* Model Header */}
                <div className="flex items-center justify-between border-b border-black/5 pb-8">
                   <div className="flex items-center gap-4">
                      <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-black text-white">
                         <LayoutGrid className="h-4 w-4" />
                      </div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Selling Controller</span>
                   </div>
                   <div className="h-2 w-24 bg-black/5 rounded-full" />
                </div>

                {/* Model Toggle Mockup */}
                <div className="flex-1 flex flex-col gap-8 justify-center">
                   {[1, 2].map((item, i) => (
                      <div key={i} className={`h-24 w-full rounded-2xl border border-black/5 flex items-center px-8 gap-6 shadow-xl transition-all ${i === 0 ? 'bg-white' : 'bg-black opacity-20 transform translate-x-4'}`}>
                         <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-zinc-50 border border-black/5' : 'bg-white/10'}`}>
                            {i === 0 ? <CheckCircle2 className="h-6 w-6 text-emerald-600" /> : <Settings className="h-6 w-6 text-white/40" />}
                         </div>
                         <div className="flex flex-col gap-2">
                             <div className={`h-2 w-32 rounded-full ${i === 0 ? 'bg-black/10' : 'bg-white/20'}`} />
                             <div className={`h-2 w-20 rounded-full opacity-40 ${i === 0 ? 'bg-black/5' : 'bg-white/10'}`} />
                         </div>
                      </div>
                   ))}
                </div>

                {/* Technical Overlay */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl border border-black/5">
                    <Plus className="h-8 w-8 text-black/10" />
                </div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Production Line Entry */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-24 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_4px,#000_4px,#000_8px)] opacity-[0.03]" />
        <div className="w-1.5 h-1.5 rounded-full bg-black/10 shadow-sm" />
      </div>
    </section>
  );
}
