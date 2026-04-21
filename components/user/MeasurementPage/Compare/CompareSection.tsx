"use client";

import Image from "next/image";
import { Timer, Crosshair, Smile, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

type CompareData = {
  title: string;
  subtitle: string;
  comparisonTable: {
    rows: Array<{
      method: string;
      speed: string;
      accuracy: string;
      convenience: string;
      reusable: string;
    }>;
  };
  features: Array<{
    image: string;
    title: string;
    description: string;
  }>;
};

type CompareSectionProps = {
  data: CompareData;
};

export function CompareSection({ data }: CompareSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  const oldMethod = data.comparisonTable.rows[0];
  const newMethod = data.comparisonTable.rows[1];

  return (
    <section id="compare" className="relative z-20 overflow-hidden bg-[#050505] px-6 py-24 sm:py-32">
      {/* Biometric background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="h-[600px] w-[600px] rounded-full bg-[#00F0FF] blur-[150px]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#00F0FF]">
            <div className="h-1 w-1 animate-pulse rounded-full bg-[#00F0FF]" />
            Comparative Analysis
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-white sm:text-6xl md:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Digital Twin Splitter */}
        <motion.div variants={itemVariants} className="mb-14 sm:mb-32 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Left: Standard Method (Dimmed) */}
          <div className="relative flex flex-col gap-6 sm:gap-8 rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-white/[0.02] p-6 sm:p-14 opacity-60 transition-opacity duration-500 hover:opacity-100">
            <h3 className="font-display text-3xl font-medium tracking-tight text-white/50">{oldMethod.method}</h3>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Timer className="h-5 w-5 text-white/40" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">Speed</span>
                </div>
                <span className="font-ui text-lg text-white/50">{oldMethod.speed}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Crosshair className="h-5 w-5 text-white/40" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">Accuracy</span>
                </div>
                <span className="font-ui text-lg text-white/50">{oldMethod.accuracy}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Smile className="h-5 w-5 text-white/40" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">Convenience</span>
                </div>
                <span className="font-ui text-lg text-white/50">{oldMethod.convenience}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-white/40" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">Reusable</span>
                </div>
                <span className="font-ui text-lg text-white/50">{oldMethod.reusable}</span>
              </div>
            </div>
          </div>

          {/* Right: Digital Twin (Glowing) */}
          <div className="relative flex flex-col gap-6 sm:gap-8 rounded-[2rem] sm:rounded-[3rem] border border-[#00F0FF]/30 bg-black p-6 sm:p-14 shadow-[0_0_60px_rgba(0,240,255,0.1)]">
            <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />
            <h3 className="font-display text-3xl font-medium tracking-tight text-white">{newMethod.method}</h3>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Timer className="h-5 w-5 text-[#00F0FF]" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/70">Speed</span>
                </div>
                <span className="font-ui text-xl text-[#00F0FF]">{newMethod.speed}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Crosshair className="h-5 w-5 text-[#00F0FF]" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/70">Accuracy</span>
                </div>
                <span className="font-ui text-xl text-[#00F0FF]">{newMethod.accuracy}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Smile className="h-5 w-5 text-[#00F0FF]" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/70">Convenience</span>
                </div>
                <span className="font-ui text-xl text-[#00F0FF]">{newMethod.convenience}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-[#00F0FF]" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/70">Reusable</span>
                </div>
                <span className="font-ui text-xl text-[#00F0FF]">{newMethod.reusable}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Header */}
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <motion.h3 variants={itemVariants} className="max-w-4xl font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
            {data.subtitle}
          </motion.h3>
        </div>

        {/* Feature Cards - Scanner Overlays */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col gap-8 overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-[#00F0FF]/30 hover:bg-white/[0.04] sm:p-10"
            >
              <div className="absolute right-0 top-0 h-32 w-32 bg-[#00F0FF] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-20" />
              
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/50 transition-transform duration-700">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-8 mix-blend-screen grayscale transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
                
                {/* Horizontal Scanline */}
                <div className="absolute left-0 top-0 h-1 w-full -translate-y-full bg-[#00F0FF] opacity-0 shadow-[0_0_20px_#00F0FF] transition-all duration-1000 group-hover:translate-y-[400px] group-hover:opacity-100" />
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="font-display text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-[#00F0FF]">
                  {feature.title}
                </h4>
                <p className="font-ui text-base leading-relaxed text-white/40 transition-colors group-hover:text-white/70">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
