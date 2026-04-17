"use client";

import { Shirt, Layers, Palette, Ruler } from "lucide-react";
import { motion } from "framer-motion";

type WhatsCustomizeData = typeof import("@/data/user/designyouroutfit/what-you-can-customize.json");

const iconMap: Record<string, any> = {
  Shirt,
  Layers,
  Palette,
  Ruler
};

type WhatsCustomizeSectionProps = {
  data: WhatsCustomizeData;
};

export function WhatsCustomizeSection({ data }: WhatsCustomizeSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="customize" className="relative z-10 overflow-hidden bg-white px-6 py-32 sm:py-40">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-8 text-center lg:mb-32">
          <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">
            The Design Vocabulary
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative flex flex-col items-center gap-10 overflow-hidden rounded-[3rem] bg-[#FAFAFA] p-10 transition-all duration-700 hover:-translate-y-2 hover:bg-zinc-50"
              >
                {/* Icon Container */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-110">
                  {(() => {
                    const Icon = iconMap[item.icon] || Shirt;
                    return <Icon className="h-8 w-8 text-black/40 transition-colors duration-700 group-hover:text-black" strokeWidth={1.5} />;
                  })()}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="font-ui text-base leading-relaxed text-black/50 transition-colors duration-700 group-hover:text-black/70">
                    {item.description}
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

