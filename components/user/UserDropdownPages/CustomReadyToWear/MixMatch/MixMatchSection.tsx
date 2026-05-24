"use client";

import { motion } from "framer-motion";
import { Zap, LucideIcon, Scissors, UserPlus, Check, Plus, ArrowRight } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  Scissors: Scissors,
  UserPlus: UserPlus
};

type Feature = {
  title: string;
  icon: string;
};

type MixMatchSectionProps = {
  data: {
    badge: string;
    title: string;
    description: string;
    features: Feature[];
  };
};

const SOURCES = [
  {
    vendor: "Vendor A",
    role: "Fabric",
    img: "/image/fabric-swatch-1.jpg",
    detail: "Italian Silk"
  },
  {
    vendor: "Vendor B",
    role: "Design",
    img: "/image/slim-girl-1.jpg",
    detail: "Pattern Expert"
  },
  {
    vendor: "Vendor C",
    role: "Tailor",
    img: "/image/slim-man.jpg",
    detail: "Master Craftsman"
  }
];

export function MixMatchSection({ data }: MixMatchSectionProps) {
  return (
    <section className="relative z-10 bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
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
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
            >
              {data.description}
            </motion.p>

            <div className="flex flex-col gap-3 mt-2">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A3A3A]/10">
                    <Check className="h-3.5 w-3.5 text-[#3A3A3A]" />
                  </span>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Assembly Board */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              className="w-full max-w-[440px] rounded-3xl bg-white border border-[#3A3A3A]/5 shadow-2xl overflow-hidden"
            >
              {/* Console Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#3A3A3A]/5 bg-[#3A3A3A]/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-[#3A3A3A]/10" />
                    <div className="h-2 w-2 rounded-full bg-[#3A3A3A]/10" />
                    <div className="h-2 w-2 rounded-full bg-[#3A3A3A]/10" />
                  </div>
                  <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">Assembly Board</span>
                </div>
                <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/20 uppercase tracking-widest">3 Sources</span>
              </div>

              {/* Source Vendor Cards */}
              <div className="px-5 pt-5 pb-3">
                <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/25 uppercase tracking-widest block mb-3">Selected Sources</span>
                <div className="flex flex-col gap-0">
                  {SOURCES.map((source, idx) => (
                    <div key={idx}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.15 }}
                        className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#3A3A3A]/[0.02] transition-colors cursor-default group"
                      >
                        {/* Vendor Image */}
                        <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-[#3A3A3A]/5 shadow-sm group-hover:shadow-md transition-shadow">
                          <img src={source.img} className="w-full h-full object-cover" alt={source.vendor} />
                        </div>
                        {/* Vendor Info */}
                        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-display text-[11px] font-bold text-[#3A3A3A]">{source.vendor}</span>
                            <span className="font-mono text-[7px] text-[#3A3A3A]/20 uppercase tracking-widest">{source.detail}</span>
                          </div>
                          <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/40 uppercase tracking-widest">{source.role} Provider</span>
                        </div>
                        {/* Linked Badge */}
                        <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
                        </div>
                      </motion.div>

                      {/* Connector */}
                      {idx < SOURCES.length - 1 && (
                        <div className="flex items-center justify-center py-1">
                          <div className="flex items-center gap-1">
                            <div className="w-px h-3 bg-[#3A3A3A]/10" />
                            <Plus className="h-2.5 w-2.5 text-[#3A3A3A]/15" />
                            <div className="w-px h-3 bg-[#3A3A3A]/10" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Merge Arrow */}
              <div className="px-5 py-2 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="flex flex-col items-center gap-1 origin-top"
                >
                  <div className="w-px h-5 bg-gradient-to-b from-[#3A3A3A]/10 to-[#3A3A3A]/20" />
                  <div className="h-6 w-6 rounded-full bg-[#3A3A3A]/5 flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-[#3A3A3A]/30 rotate-90" />
                  </div>
                </motion.div>
              </div>

              {/* Result: Combined Outfit */}
              <div className="px-5 pb-5">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  className="relative rounded-2xl bg-[#3A3A3A] p-4 flex items-center gap-4 overflow-hidden"
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />

                  {/* Result Image */}
                  <div className="relative h-20 w-16 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-lg z-10">
                    <img src="/image/bespoke-dress-2.png" className="w-full h-full object-cover" alt="Combined Outfit" />
                  </div>

                  {/* Result Info */}
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0 z-10">
                    <div className="flex items-center gap-2">
                      <Zap className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <span className="font-display text-[10px] font-bold text-white uppercase tracking-wider">Your Creation</span>
                    </div>
                    <span className="font-mono text-[7px] text-white/30 uppercase tracking-widest">
                      3 vendors • 1 unique outfit
                    </span>

                    {/* Source chips */}
                    <div className="flex gap-1.5 mt-1">
                      {SOURCES.map((s, idx) => (
                        <span key={idx} className="bg-white/10 px-2 py-0.5 rounded-md font-mono text-[6px] text-white/50 uppercase tracking-wider border border-white/5">
                          {s.role}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="w-1 h-1 rounded-full bg-[#3A3A3A]/20" />
      </div>
    </section>
  );
}
