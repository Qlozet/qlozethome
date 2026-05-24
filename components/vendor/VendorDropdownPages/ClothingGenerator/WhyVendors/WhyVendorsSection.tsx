"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type WhyVendorsData = typeof import("@/data/vendor/vendordropdown/clothinggenerator/whyvendors.json");

type WhyVendorsSectionProps = {
  data: WhyVendorsData;
};

export function WhyVendorsSection({ data }: WhyVendorsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="why-vendors" className="relative z-30 bg-[#050505] px-6 md:px-10 lg:px-10 py-32 lg:py-48" data-theme="dark">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex max-w-[94rem] flex-col gap-20 lg:flex-row lg:items-start lg:gap-32"
      >
        {/* Left Typography Sticky Header */}
        <div className="lg:sticky lg:top-40 lg:w-5/12">
          <div className="flex flex-col gap-8">
            <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
              The Advantage
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-[5rem]">
              {data.title}
            </motion.h2>
          </div>
        </div>

        {/* Right Minimalist List */}
        <div className="flex flex-col lg:w-7/12 lg:pt-32">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group flex flex-col gap-8 border-t border-white/10 py-12 transition-colors hover:border-white/30 sm:flex-row sm:items-start sm:gap-16 sm:py-16 ${index === data.items.length - 1 ? "border-b" : ""}`}
            >
              {/* Graphic/Icon abstraction */}
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-110 sm:h-24 sm:w-24">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-50 transition-opacity duration-700 group-hover:opacity-100 mix-blend-screen"
                  sizes="96px"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 sm:pt-4">
                <h3 className="font-display text-3xl font-medium text-white sm:text-4xl">
                  {item.title}
                </h3>
                <p className="max-w-md font-ui text-lg leading-relaxed text-white/50 transition-colors duration-700 group-hover:text-white/80 sm:text-xl">
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
