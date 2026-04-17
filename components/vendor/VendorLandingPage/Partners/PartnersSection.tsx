"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PartnersData = typeof import("@/data/vendor/vendorlanding/partners.json");

type PartnersProps = {
  data: PartnersData;
};

export function VendorPartners({ data }: PartnersProps) {
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
    <section
      id={data.id}
      className="scroll-mt-32 bg-white py-24 sm:py-32"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6"
      >
        <motion.h2 variants={itemVariants} className="text-center text-4xl font-bold text-black sm:text-5xl lg:font-display tracking-tight text-6xl">
          {data.title}
        </motion.h2>
        <div className="grid grid-cols-2 items-center gap-12 sm:grid-cols-3 lg:grid-cols-5">
          {data.logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className="flex items-center justify-center grayscale transition hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 transition hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
        <motion.p variants={itemVariants} className="mx-auto max-w-3xl text-center text-sm leading-relaxed font-ui text-zinc-600">
          {data.note}
        </motion.p>
      </motion.div>
    </section>
  );
}
