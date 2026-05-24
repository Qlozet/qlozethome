"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ShowcaseData = {
  badge: string;
  title: string;
  description: string;
  items: string[];
  image: { src: string; alt: string };
};

type ShowcaseSectionProps = {
  data: ShowcaseData;
};

export function ShowcaseSection({ data }: ShowcaseSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#F9F9F8] py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left Column: Image with Parallax */}
          <div className="relative lg:w-1/2">
            <div className="group relative aspect-square w-full overflow-hidden rounded-[4rem] shadow-2xl">
              <motion.div style={{ y, height: "120%", marginTop: "-10%" }} className="relative w-full">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-8 mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex flex-col gap-8">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {data.items.map((item) => (
                <div key={item} className="rounded-full border border-[#3A3A3A]/10 bg-white px-8 py-4 font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A] shadow-sm transition-all hover:scale-[1.05] hover:border-[#3A3A3A]/20">
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
