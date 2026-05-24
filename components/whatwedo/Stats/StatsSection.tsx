"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatsData = typeof import("@/data/whatwedo/whatwedo-stats.json");

type StatsSectionProps = {
  data: StatsData;
};

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse value
  const numericPart = value.replace(/[^0-9.]/g, "");
  const suffix = value.replace(/[0-9.,]/g, "");
  const target = parseFloat(numericPart.replace(/,/g, ""));
  
  const spring = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });
  
  const displayValue = useTransform(spring, (current) => {
    if (value.includes("k")) {
      return Math.floor(current) + suffix;
    }
    if (value.includes(",")) {
      return Math.floor(current).toLocaleString() + suffix;
    }
    return Math.floor(current) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, spring, target]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group flex flex-col gap-4"
    >
      {/* Number */}
      <motion.h3 className="font-display text-7xl font-medium leading-none tracking-tighter text-white transition-transform duration-500 group-hover:scale-[1.05] sm:text-9xl lg:text-[11rem] xl:text-[13rem]">
        {displayValue}
      </motion.h3>

      {/* Label */}
      <div className="flex items-center gap-4">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px bg-white/20" 
        />
        <p className="font-ui text-sm font-bold uppercase tracking-[0.2em] text-white/50">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function StatsSection({ data }: StatsSectionProps) {
  return (
    <section id="impact" className="relative z-10 bg-[#3A3A3A] px-6 md:px-10 lg:px-10 py-24 sm:py-32 lg:py-48" data-theme="dark">
      <div className="mx-auto max-w-[90rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col gap-6">
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-white/30">
            Our Impact
          </span>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-6xl">
            {data.title}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-20 sm:grid-cols-2 lg:gap-x-32 lg:gap-y-24">
          {data.stats.map((stat) => (
            <Counter key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

