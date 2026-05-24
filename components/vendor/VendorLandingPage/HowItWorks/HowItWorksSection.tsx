"use client";

import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { motion } from "framer-motion";

type HowItWorksData = typeof import("@/data/vendor/vendorlanding/how-it-works.json");

type HowItWorksProps = {
  data: HowItWorksData;
};

export function VendorHowItWorks({ data }: HowItWorksProps) {
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
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section id={data.id} className="relative overflow-hidden scroll-mt-32 bg-[#1A1A1A] py-24 sm:py-32 lg:py-48">
      {/* Background visual elements */}
      <div className="absolute -left-[10%] top-1/4 h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[120px]" />
      <div className="absolute -right-[5%] bottom-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[100px]" />

      <div className="relative mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
          
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Header Group */}
            <div className="mb-20 flex flex-col gap-6">
              <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                The Process
              </motion.span>
              <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[1] tracking-tight text-white sm:text-7xl lg:text-8xl">
                {data.title}
              </motion.h2>
            </div>

            {/* Steps List */}
            <div className="flex flex-col gap-4">
              {data.steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative flex items-start gap-8 rounded-[3rem] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10"
                >
                  {/* Step Number & Icon Column */}
                  <div className="flex flex-col items-center gap-4">
                    <span className="font-display text-sm font-medium text-white/20 transition-colors group-hover:text-white/40">
                      0{index + 1}
                    </span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:ring-white/30">
                      <Icon
                        name={step.icon}
                        className="h-7 w-7 text-white"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-3 py-1">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="font-ui text-base leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line (except last) */}
                  {index !== data.steps.length - 1 && (
                    <motion.div 
                      initial={{ scaleY: 0, originY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute bottom-[-16px] left-[68px] h-8 w-px bg-gradient-to-b from-white/20 to-transparent" 
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Preview */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="sticky top-32 flex h-fit flex-col gap-8"
          >
            <div className="group relative aspect-square w-full overflow-hidden rounded-[4rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-12 transition-all duration-700 hover:border-white/20">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              
              <motion.div 
                className="relative h-full w-full transition-transform duration-1000 group-hover:scale-110"
                style={{ perspective: 1000 }}
              >
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-contain drop-shadow-[0_48px_96px_rgba(0,0,0,0.6)]"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  priority
                />
              </motion.div>
              
              {/* Refined Overlays */}
              <div className="absolute inset-x-12 bottom-12 flex items-center gap-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "auto" }}
                  className="h-px flex-1 bg-white/10" 
                />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                  Platform Interface
                </span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "2rem" }}
                  className="h-px bg-white/10" 
                />
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
            </div>

            {/* Sub-visual caption */}
            <motion.p 
              variants={itemVariants} 
              className="max-w-md px-4 font-ui text-sm leading-relaxed text-white/20"
            >
              Our intuitive dashboard empowers fashion entrepreneurs with real-time analytics, order management, and global storefront controls.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
