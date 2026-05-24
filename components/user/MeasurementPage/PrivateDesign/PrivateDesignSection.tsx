"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Fingerprint, EyeOff, Shield } from "lucide-react";

type PrivateDesignData = {
  title: string;
  leftColumn: {
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  rightColumn: {
    title: string;
    description: string;
  };
};

type PrivateDesignSectionProps = {
  data: PrivateDesignData;
};

export function PrivateDesignSection({ data }: PrivateDesignSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  const icons = [Shield, Fingerprint, EyeOff];

  return (
    <section id="private-design" className="relative z-30 overflow-hidden bg-[#0A0A0A] px-6 md:px-10 lg:px-10 py-24 sm:py-32 lg:py-40">
      {/* Encryption Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[80rem]"
      >
        {/* The Vault Box */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-white/5 bg-black/40 p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl sm:p-16 lg:p-24">
          
          {/* Animated Vault Scanline */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00F0FF]/20 to-transparent opacity-0 transition-opacity duration-1000 group-hover:animate-pulse group-hover:opacity-100" />

          {/* Title Group */}
          <div className="mb-20 flex flex-col items-center gap-6 text-center">
            <motion.span variants={itemVariants} className="inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-[#00F0FF]/60">
              <Lock className="h-3 w-3" />
              End-to-End Encryption
            </motion.span>
            <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tighter text-white sm:text-6xl lg:text-7xl">
              {data.title}
            </motion.h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Left Column - Encrypted Nodes */}
            <div className="flex flex-col gap-6">
              {data.leftColumn.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="relative flex items-start gap-6 rounded-2xl border border-white/5 bg-[#0A0A0A]/50 p-6 transition-all duration-500 hover:border-[#00F0FF]/20 hover:bg-white/[0.02]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/50 ring-1 ring-white/10 transition-colors group-hover:ring-[#00F0FF]/30">
                      <Icon className="h-5 w-5 text-[#00F0FF]/60 transition-colors group-hover:text-[#00F0FF]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-xl font-medium tracking-tight text-white transition-colors group-hover:text-[#00F0FF]">
                        {item.title}
                      </h3>
                      <p className="font-ui text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column - Master Key Box */}
            <motion.div variants={itemVariants} className="relative flex flex-col justify-center overflow-hidden rounded-[2.5rem] border border-[#00F0FF]/20 bg-[#00F0FF]/[0.02] p-12 transition-all duration-700 hover:bg-[#00F0FF]/[0.04] hover:shadow-[0_0_40px_rgba(0,240,255,0.05)]">
              {/* Glowing Corner Accents */}
              <div className="absolute left-0 top-0 h-16 w-16 border-l border-t border-[#00F0FF]/40" />
              <div className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-[#00F0FF]/40" />
              
              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00F0FF]/10 ring-1 ring-[#00F0FF]/30">
                  <ShieldCheck className="h-8 w-8 text-[#00F0FF]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
                    {data.rightColumn.title}
                  </h3>
                  <p className="font-ui text-lg leading-relaxed text-white/50">
                    {data.rightColumn.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
