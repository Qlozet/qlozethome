"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Package, Truck, ArrowRight, Sparkles, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type HeroSectionProps = {
  data: HeroData;
};

const JOURNEY_STEPS = [
  { label: "Designed", icon: Sparkles, time: "Mon 10:24 AM" },
  { label: "Producing", icon: Package, time: "Tue 2:15 PM" },
  { label: "In Transit", icon: Truck, time: "Wed 8:00 AM" },
  { label: "Delivered", icon: MapPin, time: "Est. Thu" },
];

export function HeroSection({ data }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animate through journey steps
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-white pt-32 lg:pt-40" data-theme="light">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-[94rem] px-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          {/* Left Column: Text */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-black/20" />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
                  {data.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl lg:text-8xl"
              >
                {data.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 sm:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-8 sm:flex-row sm:items-center"
            >
              <Link
                href={data.cta.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-black px-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all shadow-2xl shadow-black/20 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Journey Tracker Console */}
          <motion.div
            style={{ y, opacity }}
            className="relative mt-20 lg:mt-0 lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-lg"
            >
              {/* Main Journey Card */}
              <div className="rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-8 sm:p-10 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-black/5 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-black flex items-center justify-center">
                      <Package className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Order Tracker</span>
                      <span className="font-mono text-[8px] text-black/30 uppercase tracking-widest">QL-294-ZX</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3E1C01]/10 border border-[#3E1C01]/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#3E1C01] animate-pulse" />
                    <span className="font-mono text-[8px] font-bold text-[#3E1C01] uppercase tracking-widest leading-none">Live</span>
                  </div>
                </div>

                {/* Product Preview Row */}
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-black/5 mb-8">
                  <div className="h-16 w-16 rounded-xl bg-zinc-100 overflow-hidden shrink-0">
                    <img src="/image/bespoke-kaftan-brown-4.png" alt="Order item" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center gap-1 min-w-0">
                    <span className="font-display text-sm font-bold text-black truncate">Bespoke Kaftan</span>
                    <span className="font-ui text-[10px] text-black/40">Custom Tailored · Brown</span>
                  </div>
                  <div className="ml-auto flex items-center">
                    <span className="font-display text-sm font-bold text-black">$240</span>
                  </div>
                </div>

                {/* Journey Timeline */}
                <div className="relative flex items-center justify-between mb-8">
                  {/* Progress Line (background) */}
                  <div className="absolute top-5 left-5 right-5 h-0.5 bg-black/5 z-0" />
                  {/* Progress Line (filled) */}
                  <motion.div
                    className="absolute top-5 left-5 h-0.5 bg-[#3E1C01] z-0"
                    animate={{ width: `${(activeStep / 3) * (100 - 10)}%` }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {JOURNEY_STEPS.map((step, i) => {
                    const Icon = step.icon;
                    const isComplete = i < activeStep;
                    const isActive = i === activeStep;
                    return (
                      <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                        <motion.div
                          animate={{
                            scale: isActive ? 1.15 : 1,
                            backgroundColor: isComplete ? "#3E1C01" : isActive ? "#000" : "#EDEAEA",
                          }}
                          transition={{ duration: 0.4 }}
                          className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-white shadow-md"
                        >
                          {isComplete ? (
                            <CheckCircle2 className="h-4 w-4 text-white" />
                          ) : (
                            <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-black/30"}`} />
                          )}
                        </motion.div>
                        <span className={`font-mono text-[7px] font-bold uppercase tracking-widest ${isActive ? "text-black" : isComplete ? "text-[#3E1C01]" : "text-black/25"}`}>
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Estimated Arrival Footer */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-black text-white">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">Estimated Arrival</span>
                    <span className="font-display text-sm font-bold">Thursday, 3:00 PM</span>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating accent pill */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-black/5 px-4 py-3 flex items-center gap-2"
              >
                <Truck className="h-4 w-4 text-black/30" />
                <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-black/40">Seamless Transit</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
