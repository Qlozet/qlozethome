"use client";

import { Timer, Lock, AlertCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

type WhyData = typeof import("@/data/vendor/vendordropdown/aimmeasurement/why.json");

const iconMap: Record<string, any> = {
  Timer,
  Lock,
  AlertCircle,
  ShieldCheck
};

type WhySectionProps = {
  data: WhyData;
};

export function WhySection({ data }: WhySectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="why" className="relative z-10 bg-white px-6 py-32 lg:py-48" data-theme="light">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[90rem]"
      >
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-8 text-center lg:mb-40">
          <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">
            The Benefits
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Staggered Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-16">
          {data.tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              variants={itemVariants}
              className={`group flex flex-col gap-10 rounded-[3rem] bg-[#FAFAFA] p-10 transition-all duration-700 hover:bg-[#F0F0F0] sm:p-16 ${
                index % 2 !== 0 ? "lg:mt-32" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                {/* Massive Numeric Indicator */}
                <span className="font-display text-7xl font-light tracking-tighter text-black/10 transition-colors duration-700 group-hover:text-black/30 lg:text-8xl">
                  0{index + 1}
                </span>
                {/* Minimalist Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-110">
                  {(() => {
                    const Icon = iconMap[tool.icon] || Timer;
                    return <Icon className="h-6 w-6 text-black/40 transition-colors duration-700 group-hover:text-black" strokeWidth={1.5} />;
                  })()}
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-8 flex flex-col gap-6 lg:mt-16">
                <h3 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-black sm:text-4xl">
                  {tool.title}
                </h3>
                <p className="font-ui text-lg leading-relaxed text-black/50">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
