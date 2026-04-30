"use client";

import { PackageCheck, ArrowRightLeft, MapPin, Stamp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HowItWorksData = typeof import("@/data/vendor/vendordropdown/shipsmarter/howitworks.json");

const iconMap: Record<string, any> = {
  PackageCheck,
  ArrowRightLeft,
  MapPin,
  Stamp
};

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="how-it-works" className="relative z-20 overflow-hidden bg-[#050505] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-6 text-center lg:mb-32">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
            The Process
          </span>
          <h2 className="font-display text-5xl font-medium tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
            {data.title}
          </h2>
        </div>

        {/* Vertical Tracking Line Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Background Line */}
          <div className="absolute bottom-0 left-8 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          
          {/* Animated Fill Line */}
          <motion.div 
            style={{ height: pathHeight }}
            className="absolute left-8 top-0 min-h-[50px] w-px bg-gradient-to-b from-[#FF6A3D] to-transparent shadow-[0_0_15px_rgba(255,106,61,0.5)] md:left-1/2 md:-translate-x-1/2" 
          />

          {/* Steps Steps */}
          <div className="relative flex flex-col gap-20 sm:gap-32">
            {data.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = iconMap[step.icon] || PackageCheck;

              return (
                <motion.div 
                  key={step.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-center md:justify-between ${!isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Space for absolute node */}
                  <div className="hidden w-[45%] md:block" />

                  {/* Tracking Node */}
                  <div className="absolute left-8 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#050505] bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-transform duration-500 hover:scale-110 md:left-1/2 md:h-20 md:w-20">
                    <Icon className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1} />
                  </div>

                  {/* Content Card */}
                  <div className="ml-24 flex w-full flex-col md:ml-0 md:w-[45%]">
                    <div className={`flex flex-col gap-6 rounded-[3rem] bg-white/[0.03] p-8 backdrop-blur-md transition-colors duration-500 hover:bg-white/[0.06] sm:p-12 ${!isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                      <span className="font-display text-5xl font-black text-white/5 lg:text-7xl">
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                        {step.title}
                      </h3>
                      <p className="font-ui text-lg leading-relaxed text-white/50">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
