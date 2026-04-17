"use client";

import Image from "next/image";
import { Shirt, Sliders, Scissors, Sparkles, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

type HowItWorksData = typeof import("@/data/user/designyouroutfit/how-it-works.json");

const iconMap: Record<string, any> = {
  Shirt,
  Sliders,
  Scissors,
  Sparkles,
  ShoppingCart
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="how-it-works" className="relative z-20 overflow-hidden bg-[#0A0A0A] px-6 py-32 sm:py-48">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#0A0A0A] to-[#0A0A0A]" />

      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-8 text-center lg:mb-32">
          <motion.span 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/30"
          >
            The Creation Process
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-7xl"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* Modern Vertical Steps Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative flex flex-col gap-10 rounded-[3rem] border border-white/5 bg-white/5 p-10 backdrop-blur-md transition-all duration-700 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-medium tracking-tighter text-white/10 transition-colors group-hover:text-white/20 lg:text-6xl">
                  0{index + 1}
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  {(() => {
                    const Icon = iconMap[step.icon] || Scissors;
                    return <Icon className="h-8 w-8 text-black opacity-80 transition-opacity group-hover:opacity-100" strokeWidth={1.5} />;
                  })()}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  {step.title}
                </h3>
                <p className="font-ui text-lg leading-relaxed text-white/50 transition-colors duration-700 group-hover:text-white/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

