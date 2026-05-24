"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type IntegrationsData = typeof import("@/data/vendor/vendorlanding/integrations.json");

type IntegrationsProps = {
  data: IntegrationsData;
};

export function VendorIntegrations({ data }: IntegrationsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id={data.id} className="scroll-mt-32 bg-[#3A3A3A] py-12 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto w-full max-w-[94rem] px-4 sm:px-6 md:px-10 lg:px-10"
      >
        <div className="flex flex-col items-center gap-12 border-y border-white/5 py-24 text-center">
          <motion.div variants={itemVariants} className="relative">
            <span className="absolute -left-8 -top-8 font-display text-8xl text-white/5">“</span>
            <h2 className="max-w-4xl font-display text-2xl font-medium italic leading-[1.3] text-white sm:text-4xl lg:text-5xl">
              {data.title}
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-white">
              {data.subtitle}
            </p>
            <div className="mx-auto h-px w-12 bg-white/20" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
