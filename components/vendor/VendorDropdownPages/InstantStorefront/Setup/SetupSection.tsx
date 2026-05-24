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
    <section className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-3xl flex-col gap-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display max-w-4xl text-5xl sm:text-7xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A]"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-ui text-base leading-relaxed text-[#3A3A3A]/50 sm:text-lg max-w-xl"
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9F9F8] transition-colors group-hover:bg-[#3A3A3A] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#3A3A3A]">
                      {feature.title}
                    </h3>
                    <p className="font-ui text-sm leading-relaxed text-[#3A3A3A]/40">
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
