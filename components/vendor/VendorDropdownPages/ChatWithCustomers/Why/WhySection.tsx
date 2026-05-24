"use client";

import { Sparkles, Languages, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

type WhyData = typeof import("@/data/vendor/vendordropdown/chatwithcustomers/why.json");

const iconMap: Record<string, any> = {
  Sparkles,
  Languages,
  Zap,
  Users
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="why" className="relative z-10 bg-white px-6 md:px-10 lg:px-10 py-24 sm:py-32 lg:py-48" data-theme="light">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-24 flex flex-col gap-6 md:mb-32">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
            <div className="h-px w-6 bg-black/20" />
            The Advantage
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Conversational Bento Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-10">
          {data.tools.map((tool, index) => {
            const isDark = index === 1 || index === 2; // Dark theme for top-right and bottom-left to create a checkerboard pattern
            
            const radiusClass = [
              "rounded-[3rem] rounded-br-[0.5rem]", // Top Left 
              "rounded-[3rem] rounded-bl-[0.5rem]", // Top Right 
              "rounded-[3rem] rounded-tr-[0.5rem]", // Bottom Left 
              "rounded-[3rem] rounded-tl-[0.5rem]", // Bottom Right 
            ][index % 4];

            const bgClass = isDark ? "bg-[#050505] text-white" : "bg-[#FAFAFA] text-black border border-black/5";
            const iconBg = isDark ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.1)]" : "bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.05)]";
            const textColor = isDark ? "text-white" : "text-black";
            const descColor = isDark ? "text-white/60" : "text-black/60";

            return (
              <motion.div
                key={tool.title}
                variants={itemVariants}
                className={`group flex flex-col justify-between gap-16 p-10 transition-transform duration-700 hover:-translate-y-2 sm:p-14 lg:p-20 lg:min-h-[500px] ${radiusClass} ${bgClass}`}
              >
                {/* Icon Container */}
                <div className={`flex h-20 w-20 items-center justify-center rounded-[1.5rem] ${iconBg} transition-transform duration-500 group-hover:scale-110`}>
                  {(() => {
                    const Icon = iconMap[tool.icon] || Sparkles;
                    return <Icon className="h-8 w-8 stroke-[1]" />;
                  })()}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-6">
                  <h3 className={`font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl ${textColor}`}>
                    {tool.title}
                  </h3>
                  <p className={`font-ui text-lg leading-relaxed ${descColor} lg:text-xl`}>
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}


