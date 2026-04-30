"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cpu, Wand2, Gem, ArrowRight } from "lucide-react";
import { useState } from "react";

const iconMap: any = { Lightbulb, Cpu, Wand2, Gem };

type Step = { id: string; title: string; description: string; icon: string };
type WorkflowData = { badge: string; title: string; description: string; steps: Step[] };
type WorkflowSectionProps = { data: WorkflowData };

const STEP_IMAGES = [
  "/image/fabric-swatch-2.jpg",
  "/image/blue-bespoke-2.png",
  "/image/orange-bespoke-1.png",
  "/image/custom-outfit-4.webp"
];

export function WorkflowSection({ data }: WorkflowSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-[#F9F9F8] py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-8 text-center items-center mx-auto max-w-3xl">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">{data.badge}</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg">{data.description}</motion.p>
          </div>

          {/* Interactive Step Flow */}
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Steps Sidebar */}
            <div className="lg:w-2/5 flex flex-col gap-3">
              {data.steps.map((step, i) => {
                const Icon = iconMap[step.icon] || Lightbulb;
                const isActive = i === activeStep;
                return (
                  <motion.div
                    key={step.id}
                    onClick={() => setActiveStep(i)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`flex items-center gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-[#3A3A3A] text-white shadow-2xl scale-[1.02]' : 'bg-white text-black border border-black/5 shadow-sm hover:shadow-md hover:scale-[1.01]'}`}
                  >
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive ? 'bg-white/10' : 'bg-zinc-50 border border-black/5'}`}>
                      <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-black/40'}`} />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <span className={`font-mono text-[8px] font-bold uppercase tracking-widest ${isActive ? 'text-white/40' : 'text-black/30'}`}>Phase 0{i + 1}</span>
                      <span className={`font-display text-sm font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-black'}`}>{step.title}</span>
                      <span className={`font-ui text-[10px] leading-relaxed ${isActive ? 'text-white/60' : 'text-black/40'}`}>{step.description}</span>
                    </div>
                    {isActive && <ArrowRight className="h-4 w-4 text-white/40 shrink-0" />}
                  </motion.div>
                );
              })}
            </div>

            {/* Preview Card */}
            <div className="lg:w-3/5 mt-8 lg:mt-0">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-white border border-black/5 shadow-2xl cursor-pointer group"
              >
                <img src={STEP_IMAGES[activeStep]} alt={data.steps[activeStep].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                  <span className="font-mono text-[8px] font-bold text-black uppercase tracking-widest leading-none">Phase 0{activeStep + 1}</span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-2">{data.steps[activeStep].title}</h3>
                  <p className="font-ui text-sm text-white/60">{data.steps[activeStep].description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
