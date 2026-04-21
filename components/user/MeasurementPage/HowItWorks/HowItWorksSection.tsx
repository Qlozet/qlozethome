"use client";

import Image from "next/image";
import { User, Ruler, Camera, CheckCircle2, Save, ScanLine } from "lucide-react";
import { motion } from "framer-motion";

type HowItWorksData = typeof import("@/data/user/measurement/measurement-how-it-works.json");

const iconMap: Record<string, any> = {
  User,
  Ruler,
  Camera,
  CheckCircle2,
  Save,
  ScanLine
};

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section id="how-it-works" className="relative z-20 overflow-hidden bg-[#0A0A0A] px-6 py-24 sm:py-32 lg:py-40">
      {/* Biometric background texture */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at center, #00F0FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-[1fr,1.3fr] lg:gap-16 xl:gap-20">
        {/* Left Content - Silhouette Pipeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 flex flex-col py-12"
        >
          {/* Title Group */}
          <div className="mb-20 flex flex-col gap-6">
            <motion.span variants={itemVariants} className="inline-flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#00F0FF]/60">
              [ SEC 03 : Process Flow ]
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[1.1] tracking-tighter text-white sm:text-6xl">
              {data.title}
            </motion.h2>
          </div>

          {/* Three-Step Silhouette Timeline */}
          <div className="relative pl-12 sm:pl-16">
            {/* Cyan Scanning Track */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[3px] top-0 w-px bg-gradient-to-b from-[#00F0FF] via-[#00F0FF]/50 to-transparent shadow-[0_0_15px_#00F0FF]"
            />

            <div className="flex flex-col gap-16">
              {data.steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="group relative flex flex-col gap-5"
                >
                  {/* Crosshair Node */}
                  <div className="absolute -left-[58px] top-1 flex h-6 w-6 items-center justify-center transition-transform duration-500 group-hover:scale-110 sm:-left-[74px]">
                    <div className="absolute h-full w-[2px] bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                    <div className="absolute h-[2px] w-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                    <div className="h-2 w-2 rounded-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Header Row */}
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl font-light text-white/30 transition-colors group-hover:text-[#00F0FF]">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-white">
                      {step.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-500 group-hover:border-[#00F0FF]/20 group-hover:bg-white/[0.04]">
                    <p className="font-ui text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                      {step.description}
                    </p>
                    {/* Icon Tech Panel */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/50 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-[#00F0FF]/10 group-hover:ring-[#00F0FF]/40">
                        {(() => {
                          const Icon = iconMap[step.icon] || ScanLine;
                          return <Icon className="h-5 w-5 stroke-[1.5] text-white/40 transition-colors group-hover:text-[#00F0FF]" />;
                        })()}
                      </div>
                      <div className="h-px w-full max-w-[4rem] bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Interface Preview & Interactive Scanner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
          className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-[4rem] border border-white/10 bg-black p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)] lg:aspect-auto lg:h-[800px] lg:sticky lg:top-32"
        >
          {/* Tech Spec Corners */}
          <div className="absolute top-8 left-8 h-8 w-8 border-t-2 border-l-2 border-[#00F0FF]/50" />
          <div className="absolute bottom-8 right-8 h-8 w-8 border-b-2 border-r-2 border-[#00F0FF]/50" />

          <Image
            src="/image/dresstab.png"
            alt="Digital Silhouette Generation"
            fill
            className="object-contain p-16 mix-blend-screen opacity-70 grayscale transition-all duration-[2s] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
          
          {/* Sweeping Scanner Overlay */}
          <motion.div 
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute left-1/2 w-4/5 -translate-x-1/2 h-1 bg-[#00F0FF] shadow-[0_0_30px_5px_rgba(0,240,255,0.6)]"
          />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0A0A0A_100%)] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
