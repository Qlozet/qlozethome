"use client";

import { Icon } from "@/components/ui/Icon";
import { motion } from "framer-motion";

type DifferentiatorsData = typeof import("@/data/vendor/vendorlanding/differentiators.json");

type DifferentiatorsProps = {
  data: DifferentiatorsData;
  scrollPrompt?: {
    down: string;
    href?: string;
  };
};

export function VendorDifferentiators({ data, scrollPrompt }: DifferentiatorsProps) {
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
    <section id={data.id} className="scroll-mt-32 bg-white py-32 lg:py-48">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex w-full max-w-[94rem] flex-col gap-32 px-6"
      >
        {/* Header - Editorial Style */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between border-b border-black/5 pb-16">
          <div className="flex flex-col gap-6 lg:max-w-2xl">
            <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/30">
              {data.eyebrow}
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[0.95] tracking-tighter text-black sm:text-7xl lg:text-8xl">
              {data.title}
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="font-ui text-lg text-black/50 lg:max-w-sm lg:pb-2">
            Elevating the art of the bespoke through intelligent, scalable infrastructure built for the next century of fashion.
          </motion.p>
        </div>

        {/* Narrative List Layout */}
        <div className="grid gap-x-20 gap-y-32 lg:grid-cols-2">
          {data.cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className={`group flex flex-col gap-10 ${index % 2 === 1 ? 'lg:mt-32' : ''}`}
            >
              <div className="flex flex-col gap-12">
                {/* Numbering - Editorial Detail */}
                <div className="flex items-center gap-6">
                  <span className="font-display text-4xl font-light italic text-black/10">0{index + 1}</span>
                  <div className="h-px flex-1 bg-black/5" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-black/5 transition-transform duration-500 group-hover:scale-110">
                    <Icon name={card.icon} className="h-5 w-5 text-black" />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
                    {card.title}
                  </h3>
                  <p className="font-ui text-lg leading-relaxed text-black/50 lg:max-w-md">
                    {card.description}
                  </p>
                </div>
                
                {/* Decorative Visual Element (Placeholder for icons/detail) */}
                <div className="h-[1px] w-24 bg-black/20 group-hover:w-full transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
