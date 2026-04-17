"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type WhyItMattersData = typeof import("@/data/vendor/vendordropdown/managesteps/whyitmatters.json");

type WhyItMattersSectionProps = {
  data: WhyItMattersData;
};

export function WhyItMattersSection({ data }: WhyItMattersSectionProps) {
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
    <section id="why-it-matters" className="relative z-30 bg-white px-6 py-24 sm:py-32 lg:py-48">
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
            The Impact
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Editorial Reveal List */}
        <div className="flex flex-col border-b border-black/10">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group border-t border-black/10 transition-colors duration-500 hover:bg-black/[0.02]"
            >
              <div className="flex w-full flex-col lg:flex-row lg:items-center">
                {/* Always visible Title Row */}
                <div className="flex w-full items-center gap-8 py-8 transition-all duration-500 lg:w-5/12 lg:py-16">
                  <span className="font-display text-xl font-medium text-black/20 transition-colors duration-500 group-hover:text-[#FF6A3D]">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-4xl font-medium tracking-tighter text-black transition-transform duration-500 group-hover:translate-x-4 sm:text-5xl lg:text-[4rem]">
                    {item.title}
                  </h3>
                </div>

                {/* Collapsed Description & Image Row */}
                <div className="grid w-full grid-rows-[0fr] overflow-hidden opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100 lg:w-7/12">
                  <div className="min-h-0">
                    <div className="flex flex-col gap-8 pb-10 pt-0 lg:flex-row lg:items-center lg:py-16">
                      <p className="font-ui text-lg leading-relaxed text-black/60 lg:w-1/2">
                        {item.description}
                      </p>
                      <div className="relative aspect-video w-full rounded-[2rem] bg-[#050505] lg:w-1/2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-6 transition-transform duration-1000 group-hover:scale-110"
                          sizes="(min-width: 1024px) 25vw, 100vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

