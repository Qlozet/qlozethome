"use client";

import { Icon } from "@/components/ui/Icon";
import { motion } from "framer-motion";

type ToolkitData = typeof import("@/data/vendor/flexiblesellingoptions/toolkit.json");

type ToolkitSectionProps = {
  data: ToolkitData;
};

export function ToolkitSection({ data }: ToolkitSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="toolkit" className="relative z-10 bg-white px-6 py-24 sm:py-32 lg:py-40">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-20 flex flex-col gap-6 md:mb-28">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
            <div className="h-px w-6 bg-[#3A3A3A]/20" />
            The Toolkit
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Interactive Pill Grid */}
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
          {data.tools.map((tool, index) => {
            const isDark = index % 3 === 0; // Every 3rd pill is high contrast dark mode
            const bgClass = isDark ? "bg-[#050505] text-white" : "bg-white text-[#3A3A3A] border border-[#3A3A3A]/5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]";
            const iconColor = isDark ? "text-white" : "text-[#050505]";
            const descColor = isDark ? "text-white/60" : "text-[#3A3A3A]/60";

            return (
              <motion.div
                key={tool.title}
                variants={itemVariants}
                className={`group flex flex-col gap-8 rounded-[3rem] p-8 transition-transform duration-500 hover:-translate-y-2 sm:p-10 lg:w-[calc(50%-1rem)] lg:p-12 xl:w-auto xl:min-w-[400px] xl:max-w-[600px] xl:flex-1 ${bgClass}`}
              >
                {/* Icon Container with specific pill styling */}
                <div className="flex items-center gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#3A3A3A]/5 group-hover:bg-[#FF6A3D] transition-colors duration-500">
                    <Icon name={tool.icon} className={`h-7 w-7 transition-colors duration-500 ${iconColor} group-hover:text-white`} />
                  </div>
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
                    {tool.title}
                  </h3>
                </div>

                <p className={`font-ui text-lg leading-relaxed ${descColor}`}>
                  {tool.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

