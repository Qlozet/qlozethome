"use client";

import { motion } from "framer-motion";
import { BarChart3, Activity, Gauge, AreaChart } from "lucide-react";

const iconMap = {
  BarChart3,
  Activity,
  Gauge
};

type Feature = {
  title: string;
  icon: keyof typeof iconMap;
};

type PerformanceData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type PerformanceSectionProps = {
  data: PerformanceData;
};

export function PerformanceSection({ data }: PerformanceSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative z-10 bg-white px-6 py-24 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-8 text-center lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 shadow-sm border border-black/5"
          >
            <AreaChart className="h-6 w-6 text-black/40" strokeWidth={1.5} />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30"
          >
            {data.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-7xl lg:text-[5rem]"
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl font-ui text-lg text-black/50 sm:text-xl md:text-2xl"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || BarChart3;
            
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative flex flex-col items-center gap-10 overflow-hidden rounded-[4rem] bg-[#FAFAFA] p-12 text-center transition-all duration-700 hover:bg-zinc-50 hover:shadow-2xl hover:shadow-black/5 md:p-16"
              >
                {/* Icon Container */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-black/40 transition-colors duration-700 group-hover:text-black" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <h3 className="font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
                  {feature.title}
                </h3>

                {/* Abstract Interactive Element */}
                <div className="relative mt-auto w-full h-24 overflow-hidden rounded-2xl bg-white/50 border border-black/5 p-6 flex items-end justify-between gap-1">
                  {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                      className="w-full rounded-t-lg bg-black/5 transition-colors duration-700 group-hover:bg-black/10"
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
