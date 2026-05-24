"use client";

import Image from "next/image";
import { Settings, UserRound, Ruler, Crosshair, Share2 } from "lucide-react";
import { motion } from "framer-motion";

type HowItWorksData = typeof import("@/data/vendor/vendordropdown/aimmeasurement/howitworks.json");

const iconMap: Record<string, any> = {
  Settings,
  UserRound,
  Ruler,
  Crosshair,
  Share2
};

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section id="how-it-works" className="relative z-20 bg-[#050505] px-6 md:px-10 lg:px-10 py-32 lg:py-48" data-theme="dark">
      <div className="mx-auto flex max-w-[94rem] flex-col gap-16 lg:flex-row lg:gap-32">
        {/* Left Content - Scrolling Steps */}
        <div className="flex w-full flex-col lg:w-1/2">
          {/* Title Area */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
              The Process
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-7xl">
              {data.title}
            </motion.h2>
          </motion.div>

          {/* Spaced Steps */}
          <div className="mt-24 flex flex-col gap-32 lg:mt-48 lg:gap-[40vh]">
            {data.steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0.2, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-200px 0px -200px 0px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col gap-8"
              >
                {/* Minimalist Step Number & Icon */}
                <div className="flex items-center gap-6">
                  <span className="font-display text-4xl font-light text-white/20 transition-colors duration-700 group-hover:text-white/40">
                    0{index + 1}
                  </span>
                  <div className="h-px w-12 bg-white/10" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md transition-transform duration-700 group-hover:scale-110">
                    {(() => {
                      const Icon = iconMap[step.icon] || Settings;
                      return <Icon className="h-6 w-6 text-white transition-colors duration-700" strokeWidth={1.5} />;
                    })()}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4 pl-0 sm:pl-[7.5rem]">
                  <h3 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="max-w-md font-ui text-lg leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom spacer to let the last item scroll past the sticky image */}
          <div className="h-[20vh] lg:h-[40vh]" />
        </div>

        {/* Right Content - Sticky Visual */}
        <div className="relative hidden w-full lg:block lg:w-1/2">
          <div className="sticky top-32 flex h-[calc(100vh-16rem)] w-full items-center justify-center overflow-hidden rounded-[3rem] bg-[#0A0A0A] ring-1 ring-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              className="relative h-full w-full p-16"
            >
              <Image
                src="/image/purpletab.png"
                alt="AI Measurement interface"
                fill
                className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-transform duration-1000 hover:scale-105"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
