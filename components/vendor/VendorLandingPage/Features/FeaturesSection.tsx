"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type FeaturesData = typeof import("@/data/vendor/vendorlanding/features.json");

type FeaturesProps = {
  data: FeaturesData;
};

export function VendorFeatures({ data }: FeaturesProps) {
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
    hidden: { opacity: 0, y: 40 },
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
    <section id={data.id} className="scroll-mt-32 bg-white py-24 sm:py-32 lg:py-48">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex w-full max-w-[94rem] flex-col gap-24 px-6 md:px-10 lg:px-10"
      >
        <div className="flex flex-col gap-8 max-w-3xl">
          <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">
            Platform Capabilities
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[0.9] tracking-tighter text-black sm:text-7xl lg:text-8xl">
            {data.title}
          </motion.h2>
          <motion.div variants={itemVariants} className="h-px w-24 bg-black/10 mt-4" />
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {data.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group flex flex-col gap-12 bg-white"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <span className="font-display text-sm font-light text-black/20 italic">0{index + 1}</span>
                  <h3 className="font-display text-3xl font-medium leading-tight text-black sm:text-4xl">
                    {feature.title}
                  </h3>
                </div>
                <p className="max-w-xl font-ui text-lg leading-relaxed text-black/50">
                  {feature.description}
                </p>
              </div>

              {/* Feature Image with Refined Reveal */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] bg-zinc-50 border border-black/5">
                <motion.div
                  initial={{ filter: "blur(20px)", scale: 1.1, opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(min-width: 1280px) 700px, 95vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                </motion.div>
              </div>

              {feature.cta && (
                <div className="flex justify-start">
                  <Link
                    href={feature.cta.href}
                    className="group/btn relative flex items-center gap-4 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black"
                  >
                    {feature.cta.label}
                    <span className="h-[1px] w-12 bg-black transition-all duration-500 group-hover/btn:w-20" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
