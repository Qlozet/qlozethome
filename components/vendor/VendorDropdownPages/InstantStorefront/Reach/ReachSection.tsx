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
    <section ref={containerRef} className="relative w-full bg-white py-24 lg:py-40 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-12 lg:w-1/2 order-2 lg:order-1">
            <div className="flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
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

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col gap-2 rounded-2xl bg-zinc-50 p-6 border border-zinc-100 transition-colors hover:bg-zinc-100"
                >
                  <BarChart3 className="h-5 w-5 text-black/30" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Market</span>
                  <span className="font-display text-lg font-medium text-black">{stat}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Globe Visualization */}
          <div className="relative lg:w-1/2 order-1 lg:order-2 flex justify-center items-center py-20 lg:py-0">
             <motion.div 
               style={{ rotate, scale }}
               className="relative w-full aspect-square max-w-md rounded-full bg-gradient-to-tr from-zinc-50 via-white to-zinc-100 shadow-2xl flex items-center justify-center border border-zinc-200"
             >
                <Globe className="h-1/2 w-1/2 text-black opacity-[0.03] absolute" strokeWidth={0.5} />
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
                    className="absolute h-3 w-3 rounded-full bg-black/10 border border-black/20"
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
