"use client";

import { Rocket, CreditCard, Link as LinkIcon, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

type WhyData = typeof import("@/data/vendor/vendordropdown/instantstorefront/why.json");

const iconMap: Record<string, any> = {
  Rocket,
  CreditCard,
  Link: LinkIcon,
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
    <section id="why" className="relative z-10 bg-white px-6 md:px-10 lg:px-10 py-20 lg:py-40">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[94rem]"
      >
        {/* Architectural Title Group */}
        <div className="mb-24 flex flex-col gap-6 lg:mb-32">
          <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
            The Benefits
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Architectural Bento Grid */}
        <div className="grid border-t border-l border-[#3A3A3A]/20 sm:grid-cols-2 lg:grid-cols-3">
          {data.tools.map((tool, index) => {
            const isLarge = index === 0;
            const isWide = index === 3;
            const gridClasses = isLarge 
              ? "lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-[600px]" 
              : isWide 
                ? "sm:col-span-2 lg:col-span-3 min-h-[300px] lg:min-h-[400px]" 
                : "col-span-1 min-h-[300px]";

            return (
              <motion.div
                key={tool.title}
                variants={itemVariants}
                className={`group relative flex flex-col justify-between overflow-hidden border-b border-r border-[#3A3A3A]/20 bg-white p-10 transition-colors duration-500 hover:bg-[#050505] lg:p-16 ${gridClasses}`}
              >
                {/* Icon Container */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#3A3A3A]/10 bg-[#FAFAFA] transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/5 lg:h-20 lg:w-20">
                  <div className="h-8 w-8 text-[#3A3A3A] opacity-80 transition-colors duration-500 group-hover:text-white lg:h-10 lg:w-10">
                    {(() => {
                      const Icon = iconMap[tool.icon] || Rocket;
                      return <Icon className="h-full w-full stroke-[1]" />;
                    })()}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-6 pt-12">
                  <h3 className={`font-display font-medium tracking-tight text-[#3A3A3A] transition-colors duration-500 group-hover:text-white ${isLarge ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'}`}>
                    {tool.title}
                  </h3>
                  <p className={`font-ui leading-relaxed text-[#3A3A3A]/60 transition-colors duration-500 group-hover:text-white/60 ${isLarge ? 'max-w-md text-lg lg:text-xl' : 'text-base lg:text-lg'}`}>
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

