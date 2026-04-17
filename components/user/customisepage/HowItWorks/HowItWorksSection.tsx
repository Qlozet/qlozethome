"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HowItWorksData = typeof import("@/data/user/customize/customize-how-it-works.json");

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="how-it-works" className="relative z-20 bg-white py-24 sm:py-32 lg:py-40" data-theme="light">
      <div className="mx-auto grid max-w-[94rem] gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:gap-24">

        {/* Left Content - Blueprint Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:py-16"
        >
          {/* Title Group */}
          <div className="mb-20 flex flex-col gap-6">
            <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
              [ SEC 02 : Pipeline ]
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
              {data.title}
            </motion.h2>
          </div>

          {/* Blueprint Steps Pipeline */}
          <div className="relative pl-10 sm:pl-16 mt-8">
            {/* Dashed Architectural Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-px border-l-[2px] border-dashed border-black/10"
            />

            <div className="flex flex-col gap-20">
              {data.steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="group relative flex flex-col gap-6"
                >
                  {/* Schematic Node Ring */}
                  <div className="absolute -left-[45px] top-2 flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-white bg-black/10 transition-colors duration-500 group-hover:bg-[#FF6A3D] sm:-left-[69px]" />

                  {/* Header Row */}
                  <div className="flex items-center gap-6">
                    <span className="font-display text-4xl font-light tracking-tighter text-black/20 transition-colors group-hover:text-[#FF6A3D] sm:text-5xl">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
                      {step.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col gap-6">
                    <p className="font-ui text-lg leading-relaxed text-black/60 max-w-lg">
                      {step.description}
                    </p>
                    {/* Schematic Icon Panel */}
                    <div className="flex h-16 w-16 items-center justify-center border border-black/10 bg-[#FAFAFA] transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        width={24}
                        height={24}
                        className="object-contain opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Blueprint Technical Drawing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          className="relative hidden items-center justify-center border border-black/10 bg-[#FAFAFA] lg:flex lg:h-[850px] lg:sticky lg:top-32"
        >
          <Image
            src="/image/custom-outfit-2.png"
            alt="Product Customization Schematic"
            fill
            className="object-contain p-20 mix-blend-multiply opacity-80 transition-transform duration-[2s] hover:scale-105 hover:opacity-100"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
          {/* Technical Corner Markers */}
          <div className="absolute top-8 left-8 h-4 w-4 border-t border-l border-black/30" />
          <div className="absolute top-8 right-8 h-4 w-4 border-t border-r border-black/30" />
          <div className="absolute bottom-8 left-8 h-4 w-4 border-b border-l border-black/30" />
          <div className="absolute bottom-8 right-8 h-4 w-4 border-b border-r border-black/30" />
        </motion.div>
      </div>
    </section>
  );
}
