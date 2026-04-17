"use client";

import Image from "next/image";
import { CheckCircle2, Scissors, Package, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

type HowItWorksData = typeof import("@/data/vendor/vendordropdown/managesteps/howitworks.json");

const iconMap: Record<string, any> = {
  CheckCircle2,
  Scissors,
  Package,
  UserCheck
};

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section id="how-it-works" className="relative z-20 overflow-hidden bg-[#FAFAFA] px-6 py-32 lg:py-48">
      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col gap-6 md:mb-32">
          <span className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
            <div className="h-px w-6 bg-black/20" />
            The Workflow
          </span>
          <h2 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
            {data.title}
          </h2>
        </div>

        {/* Sticky Card Stack Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto flex max-w-5xl flex-col gap-10 pb-32 lg:gap-32"
        >
          {data.steps.map((step, index) => {
            const Icon = iconMap[step.icon] || CheckCircle2;
            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="sticky flex flex-col gap-8 rounded-[3rem] border border-black/5 bg-white p-10 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] transition-all sm:p-14 lg:p-20 lg:flex-row lg:items-center lg:justify-between"
                style={{ top: `calc(150px + ${index * 40}px)` }}
              >
                {/* Left Side: Index & Icon */}
                <div className="flex w-full flex-col gap-6 lg:w-1/3">
                  <span className="font-display text-5xl font-black text-black/5 lg:text-7xl">
                    0{index + 1}
                  </span>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black shadow-xl shadow-black/20 lg:h-20 lg:w-20">
                    <Icon className="h-8 w-8 stroke-[1] text-white" />
                  </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="flex w-full flex-col gap-4 lg:w-2/3">
                  <h3 className="font-display text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl">
                    {step.title}
                  </h3>
                  <p className="font-ui text-lg leading-relaxed text-black/60 lg:text-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
