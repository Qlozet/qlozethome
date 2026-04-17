"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type DifferentiatorsData = typeof import("@/data/whatwedo/whatwedo-differentiators.json");

type DifferentiatorsSectionProps = {
  data: DifferentiatorsData;
};

export function DifferentiatorsSection({ data }: DifferentiatorsSectionProps) {
  return (
    <section id="edge" className="relative z-10 bg-white px-6 pt-8 pb-20 sm:pt-12 sm:pb-32" data-theme="light">
      <div className="mx-auto max-w-[90rem]">
        {/* Title Group */}
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3A3A3A]/40">
            The Advantage
          </span>
          <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight tracking-tight text-[#3A3A3A] sm:text-6xl">
            {data.title}
          </h2>
          <p className="max-w-2xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {data.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group flex flex-col gap-8 rounded-[2rem] border border-[#3A3A3A]/5 bg-[#3A3A3A]/[0.02] p-6 transition-all duration-500 hover:bg-white hover:border-[#3A3A3A]/10 hover:shadow-2xl hover:shadow-[#3A3A3A]/5 sm:p-10"
            >
              {/* Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3A3A3A]/5 shadow-sm transition-colors group-hover:bg-[#3A3A3A]/10">
                <div className="relative h-7 w-7">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    fill
                    className="object-contain grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    sizes="28px"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-medium tracking-tight text-[#3A3A3A]">
                  {item.title}
                </h3>
                <p className="font-ui text-sm leading-relaxed text-[#3A3A3A]/60">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

