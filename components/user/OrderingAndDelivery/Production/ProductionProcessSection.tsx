"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Clock, Scissors, Ruler, Shirt, PackageCheck } from "lucide-react";
import { useState, useEffect } from "react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type ProductionProcessSectionProps = {
  data: SectionData;
};

const STEPS = [
  {
    title: "Order Received",
    description: "Your design specs have been received by the atelier",
    icon: PackageCheck,
    time: "Mon 10:24 AM",
    image: "/image/bespoke-kaftan-pattern.png",
  },
  {
    title: "Fabric Cutting",
    description: "Precision cutting of your selected fabric underway",
    icon: Scissors,
    time: "Tue 2:15 PM",
    image: "/image/fabric-swatch-2.jpg",
  },
  {
    title: "Tailoring & Assembly",
    description: "Master tailor hand-stitching your bespoke piece",
    icon: Ruler,
    time: "In Progress",
    image: "/image/bespoke-kaftan-brown-4.png",
  },
  {
    title: "Quality Inspection",
    description: "Final fit check and finishing details",
    icon: Shirt,
    time: "Est: Tomorrow",
    image: "/image/bespoke-kaftan-brown-2.png",
  },
];

export function ProductionProcessSection({ data }: ProductionProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance through steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const completedUpTo = 2; // Steps 0 and 1 are "complete" in the demo

  return (
    <section id="production" className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-xl text-[#3A3A3A]/40 font-ui font-normal tracking-normal sm:text-2xl">{data.subtitle}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-black/20" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/60">{feature}</span>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-sm font-medium italic text-black/30"
            >
              {data.footer}
            </motion.p>
          </div>

          {/* Right: Production Console */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[460px]"
            >
              <div className="relative rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                {/* Live Preview Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeStep}
                      src={STEPS[activeStep].image}
                      alt={STEPS[activeStep].title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-cover object-top absolute inset-0"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/30 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-black/5 shadow-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#3E1C01] animate-pulse" />
                    <span className="font-mono text-[8px] font-bold text-black uppercase tracking-widest leading-none">Live Feed</span>
                  </div>

                  {/* Step Label */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bottom-4 left-5 right-5"
                    >
                      <span className="font-display text-sm font-bold text-black">{STEPS[activeStep].description}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Timeline Steps */}
                <div className="p-6 sm:p-8 flex flex-col gap-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">Production Status</span>
                    <span className="font-mono text-[9px] font-bold text-black">BATCH #72-A</span>
                  </div>

                  {STEPS.map((step, i) => {
                    const Icon = step.icon;
                    const isComplete = i < completedUpTo;
                    const isActive = i === activeStep;
                    const isPending = i >= completedUpTo;

                    return (
                      <motion.div
                        key={i}
                        onClick={() => setActiveStep(i)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`flex items-center gap-4 p-3.5 rounded-xl cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "bg-[#3A3A3A] text-white shadow-lg"
                            : "bg-white border border-black/5 hover:bg-zinc-50"
                        }`}
                      >
                        {/* Status Icon */}
                        <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive ? "bg-white/10" : isComplete ? "bg-[#3E1C01]/10" : "bg-zinc-50"
                        }`}>
                          {isComplete && !isActive ? (
                            <CheckCircle2 className="h-4 w-4 text-[#3E1C01]" />
                          ) : isActive ? (
                            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                              <Icon className="h-4 w-4 text-white" />
                            </motion.div>
                          ) : (
                            <Circle className="h-4 w-4 text-black/10" />
                          )}
                        </div>

                        {/* Step Info */}
                        <div className={`flex-1 min-w-0 ${isPending && !isActive ? "opacity-40" : ""}`}>
                          <span className={`font-display text-xs font-bold ${isActive ? "text-white" : "text-black"}`}>{step.title}</span>
                        </div>

                        {/* Time */}
                        <span className={`font-mono text-[8px] uppercase tracking-widest shrink-0 ${
                          isActive ? "text-white/40" : isComplete ? "text-[#3E1C01]" : "text-black/25"
                        }`}>
                          {step.time}
                        </span>
                      </motion.div>
                    );
                  })}

                  {/* Progress Footer */}
                  <div className="flex items-center gap-3 pt-4 mt-2 border-t border-black/5">
                    <div className="flex gap-1 flex-1">
                      {STEPS.map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + i * 0.15 }}
                          className={`h-1 flex-1 rounded-full ${i < completedUpTo ? "bg-[#3E1C01]" : i === completedUpTo ? "bg-[#3E1C01]/30" : "bg-black/5"}`}
                        />
                      ))}
                    </div>
                    <span className="font-display text-[9px] font-bold uppercase tracking-widest text-black/40 shrink-0">55%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
