"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Smartphone } from "lucide-react";

const iconMap: any = {
  "Beautiful Storefront": Zap,
  "No Technical Setup": ShieldCheck,
  "Fully Optimized": Smartphone,
};

type SetupData = {
  badge: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
};

type SetupSectionProps = {
  data: SetupData;
};

export function SetupSection({ data }: SetupSectionProps) {
  return (
    <section className="relative w-full bg-white py-14 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-3xl flex-col gap-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
            >
              {data.description}
            </motion.p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:w-1/2">
            {data.features.map((feature, index) => {
              const Icon = iconMap[feature.title] || Zap;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group flex flex-col gap-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 transition-colors group-hover:bg-black group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-black">
                      {feature.title}
                    </h3>
                    <p className="font-ui text-sm leading-relaxed text-black/40">
                      {feature.description}
                    </p>
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
