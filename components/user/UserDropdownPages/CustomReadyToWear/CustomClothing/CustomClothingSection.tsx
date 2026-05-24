"use client";

import { motion } from "framer-motion";
import { LucideIcon, PencilLine, SwatchBook, UserCheck, Ruler, Check, Maximize2, Shirt } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UserCheck: UserCheck,
  Ruler: Ruler,
  PencilLine: PencilLine,
  SwatchBook: SwatchBook
};

type Feature = {
  title: string;
  icon: string;
};

type CustomData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type CustomSectionProps = {
  data: CustomData;
};

const STYLE_SPECS = [
  { label: "Neckline", value: "Mandarin Collar", editable: true },
  { label: "Sleeve", value: "Full Length", editable: true },
  { label: "Fit", value: "Slim Tapered", editable: true },
  { label: "Length", value: "Below Knee", editable: true }
];

const FABRICS = [
  { img: "/image/fabric-swatch-1.jpg", name: "Italian Silk", selected: false },
  { img: "/image/fabric-swatch-2.jpg", name: "Turkish Cotton", selected: true },
  { img: "/image/fabric-swatch-3.jpg", name: "Poly-Blend", selected: false }
];

export function CustomClothingSection({ data }: CustomSectionProps) {
  return (
    <section className="relative z-10 bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-10 lg:gap-24">
          {/* Right: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
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
                  initial={{ opacity: 0, x: 10 }}
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

          {/* Left: Design Spec Card */}
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
                  <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">Design Studio</span>
                </div>
                <span className="font-mono text-[7px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  Editing
                </span>
              </div>

              {/* Garment Preview with Measurement Overlays */}
              <div className="relative h-56 bg-zinc-50 overflow-hidden">
                <img
                  src="/image/custom-outfit-2.png"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  alt="Custom Garment"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

                {/* Measurement Lines */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* Shoulder */}
                  <div className="absolute top-[28%] left-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100px" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                      className="h-px bg-white/80 relative"
                    >
                      <div className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white border border-[#3A3A3A]/30" />
                      <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white border border-[#3A3A3A]/30" />
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[7px] font-bold text-white bg-[#3A3A3A]/60 backdrop-blur-sm px-1.5 py-0.5 rounded whitespace-nowrap">42cm</span>
                    </motion.div>
                  </div>

                  {/* Length */}
                  <div className="absolute top-[30%] right-[18%]">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "80px" }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 1, type: "spring" }}
                      className="w-px bg-white/60 relative"
                    >
                      <div className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-white border border-[#3A3A3A]/30" />
                      <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-white border border-[#3A3A3A]/30" />
                      <span className="absolute top-1/2 -translate-y-1/2 left-3 font-mono text-[7px] font-bold text-white bg-[#3A3A3A]/60 backdrop-blur-sm px-1.5 py-0.5 rounded whitespace-nowrap">72cm</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* HUD Label */}
                <div className="absolute bottom-3 left-4 z-10">
                  <span className="font-mono text-[7px] text-[#3A3A3A]/40 font-bold uppercase tracking-widest">Ref: 7822-Custom</span>
                </div>
              </div>

              {/* Style Specifications */}
              <div className="px-5 pt-4 pb-3">
                <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/25 uppercase tracking-widest block mb-3">Style Specs</span>
                <div className="grid grid-cols-2 gap-2">
                  {STYLE_SPECS.map((spec, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.08 }}
                      className="rounded-xl bg-zinc-50 border border-[#3A3A3A]/5 p-3 flex flex-col gap-1 group hover:border-[#3A3A3A]/15 transition-all cursor-default"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[6px] font-bold text-[#3A3A3A]/20 uppercase tracking-widest">{spec.label}</span>
                        {spec.editable && <PencilLine className="h-2.5 w-2.5 text-[#3A3A3A]/15 group-hover:text-[#3A3A3A]/40 transition-colors" />}
                      </div>
                      <span className="font-display text-[10px] sm:text-[11px] font-bold text-[#3A3A3A]/70">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Fabric Selection */}
              <div className="px-5 pt-2 pb-3">
                <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/25 uppercase tracking-widest block mb-3">Fabric</span>
                <div className="flex gap-2.5">
                  {FABRICS.map((f, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className={`relative flex-1 aspect-[4/3] rounded-xl overflow-hidden cursor-default transition-all duration-300
                        ${f.selected
                          ? 'ring-2 ring-[#3A3A3A] ring-offset-1 shadow-md'
                          : 'opacity-50'
                        }`}
                    >
                      <img src={f.img} className="absolute inset-0 w-full h-full object-cover" alt={f.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-1.5 left-1.5">
                        <span className="font-display text-[7px] font-bold text-white uppercase tracking-wider">{f.name}</span>
                      </div>
                      {f.selected && (
                        <div className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-[#3A3A3A] flex items-center justify-center">
                          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Measurement Profile Link */}
              <div className="px-5 pb-5 pt-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="rounded-2xl bg-[#3A3A3A] p-4 flex items-center gap-4"
                >
                  <div className="h-10 w-10 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <img src="/image/seun.png" className="w-full h-full object-cover" alt="Profile" />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <span className="font-display text-[10px] font-bold text-white uppercase tracking-wider">Built to Your Measurements</span>
                    <span className="font-mono text-[7px] text-white/30 uppercase tracking-widest">Profile: SEUN_A • 6 points synced</span>
                  </div>
                  <div className="h-7 w-7 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-emerald-400" strokeWidth={3} />
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
