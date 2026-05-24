"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type WhatsCustomizeData = typeof import("@/data/user/customize/whats-customize.json");

type WhatsCustomizeSectionProps = {
  data: WhatsCustomizeData;
};

export function WhatsCustomizeSection({ data }: WhatsCustomizeSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section id="whats-customize" className="relative z-10 bg-[#FAFAFA] py-24 sm:py-32 lg:py-48" data-theme="light">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10"
      >
        {/* Title Group - Drafting Header */}
        <div className="mb-20 flex flex-col gap-6 border-b border-black/10 pb-12 lg:mb-32">
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div className="flex flex-col gap-6">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
                [ SEC 01 : Categorization ]
              </span>
              <h2 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
                {data.title}
              </h2>
            </div>
            
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/20 lg:flex">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Drafting Table Grid */}
        <div className="grid grid-cols-1 border-t border-l border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative flex flex-col gap-12 border-b border-r border-black/10 bg-[#FAFAFA] p-10 transition-colors duration-500 hover:bg-white lg:p-12 xl:p-16"
            >
              {/* Drafting Node Marker */}
              <div className="absolute right-6 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-black/10 text-[8px] font-bold text-black/30 transition-colors group-hover:border-[#FF6A3D] group-hover:text-[#FF6A3D]">
                0{index + 1}
              </div>

              {/* Schematic Icon Container */}
              <div className="flex h-16 w-16 items-center justify-center border border-black/10 bg-white transition-transform duration-500 group-hover:scale-110">
                <div className="relative h-7 w-7 opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    fill
                    className="object-contain"
                    sizes="28px"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl font-medium tracking-tight text-black transition-colors group-hover:text-[#FF6A3D]">
                  {item.title}
                </h3>
                <p className="font-ui text-base leading-relaxed text-black/50">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
