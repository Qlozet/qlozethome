"use client";

import { LayoutDashboard, Bell, Route, Globe } from "lucide-react";
import { motion } from "framer-motion";

type WhyData = typeof import("@/data/vendor/vendordropdown/shipsmarter/why.json");

const iconMap: Record<string, any> = {
  LayoutDashboard,
  Bell,
  Route,
  Globe
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
    <section id="why" className="relative z-10 bg-white px-6 py-24 sm:py-32">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex max-w-[94rem] flex-col gap-20 lg:flex-row lg:items-start lg:gap-24"
      >
        {/* Left Sticky Title Group */}
        <div className="lg:sticky lg:top-40 lg:w-5/12">
          <div className="flex flex-col gap-8">
            <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
              The Impact
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl lg:text-[5.5rem]">
              {data.title}
            </motion.h2>
          </div>
        </div>

        {/* Right Staggered Cards Area */}
        <div className="grid gap-6 sm:grid-cols-2 lg:w-7/12 lg:gap-10">
          {/* Even Items Column */}
          <div className="flex flex-col gap-6 lg:gap-10">
            {data.tools.filter((_, idx) => idx % 2 === 0).map((tool) => (
              <motion.div
                key={tool.title}
                variants={itemVariants}
                className="group flex flex-col gap-10 rounded-[3rem] bg-[#F9F9F8] p-10 shadow-xl shadow-zinc-200/20 transition-all duration-700 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-[#3A3A3A]/5 lg:p-14"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-110">
                  <div className="h-10 w-10 text-black/40 transition-colors duration-700 group-hover:text-black">
                    {(() => {
                      const Icon = iconMap[tool.icon] || LayoutDashboard;
                      return <Icon className="h-full w-full stroke-[1]" />;
                    })()}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
                    {tool.title}
                  </h3>
                  <p className="font-ui text-lg leading-relaxed text-black/50 transition-colors duration-700 group-hover:text-black/70">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Odd Items Column (Staggered Downward) */}
          <div className="flex flex-col gap-6 pt-0 sm:pt-24 lg:gap-10 lg:pt-32">
            {data.tools.filter((_, idx) => idx % 2 !== 0).map((tool) => (
              <motion.div
                key={tool.title}
                variants={itemVariants}
                className="group flex flex-col gap-10 rounded-[3rem] bg-[#F9F9F8] p-10 shadow-xl shadow-zinc-200/20 transition-all duration-700 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-[#3A3A3A]/5 lg:p-14"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-110">
                  <div className="h-10 w-10 text-black/40 transition-colors duration-700 group-hover:text-black">
                    {(() => {
                      const Icon = iconMap[tool.icon] || LayoutDashboard;
                      return <Icon className="h-full w-full stroke-[1]" />;
                    })()}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
                    {tool.title}
                  </h3>
                  <p className="font-ui text-lg leading-relaxed text-black/50 transition-colors duration-700 group-hover:text-black/70">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


