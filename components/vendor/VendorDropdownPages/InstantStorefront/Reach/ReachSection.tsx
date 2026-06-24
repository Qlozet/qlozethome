"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe, MapPin, BarChart3 } from "lucide-react";

type ReachData = {
  badge: string;
  title: string;
  description: string;
  stats: string[];
};

type ReachSectionProps = {
  data: ReachData;
};

export function ReachSection({ data }: ReachSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative w-full bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2 order-2 lg:order-1">
            <div className="flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display max-w-4xl text-5xl sm:text-7xl font-medium leading-[1.05] tracking-tight text-[#111111]"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-ui text-base leading-relaxed text-[#111111]/50 sm:text-lg max-w-xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col gap-2 rounded-2xl bg-brand-light p-6 border border-brand-darker/5 transition-colors hover:bg-brand-light/70"
                >
                  <BarChart3 className="h-5 w-5 text-brand-darker/30" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">Market</span>
                  <span className="font-display text-lg font-medium text-[#111111]">{stat}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Globe Visualization */}
          <div className="relative lg:w-1/2 order-1 lg:order-2 flex justify-center items-center py-8 sm:py-16 lg:py-0">
             <motion.div 
               style={{ rotate, scale }}
               className="relative w-full aspect-square max-w-md rounded-full bg-gradient-to-tr from-zinc-50 via-white to-zinc-100 shadow-2xl flex items-center justify-center border border-zinc-200"
             >
                <Globe className="h-1/2 w-1/2 text-brand-darker opacity-20 absolute" strokeWidth={1} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent)] pointer-events-none" />
                
                {/* Floating "Markers" */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute h-3 w-3 rounded-full bg-brand-darker/10 border border-brand-darker/20"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
