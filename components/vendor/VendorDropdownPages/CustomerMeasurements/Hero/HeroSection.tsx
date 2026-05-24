"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScanFace, ArrowRight, Ruler, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type HeroSectionProps = {
  data: HeroData;
};

const measurements = [
  { label: "Chest",  value: "94.2 cm" },
  { label: "Waist",  value: "78.5 cm" },
  { label: "Hips",   value: "102.1 cm" },
  { label: "Sleeve", value: "65.0 cm" },
];

export function HeroSection({ data }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-28 sm:pt-32 lg:pt-40"
      data-theme="dark"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white opacity-[0.06] blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10"
      >
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">

          {/* Left: Text */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-white/20" />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">{data.badge}</span>
                <ScanFace className="h-3 w-3 text-white/80 animate-pulse" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
              >
                {data.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-white/50 sm:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href={data.cta.href}
                className="group inline-flex h-14 items-center gap-3 rounded-full bg-white px-10 text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A] shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all hover:scale-105 active:scale-95"
              >
                {data.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div style={{ y, opacity }} className="relative lg:w-1/2">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">

              {/* Subtle spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-24px] rounded-full border border-dashed border-white/6"
              />

              {/* ── Main card ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/90 shadow-2xl backdrop-blur-xl overflow-hidden"
              >
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/6 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <ScanFace className="h-4 w-4 text-white/70" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">Body Scan</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
                    <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-white/70">Active</span>
                  </div>
                </div>

                {/* Scan viewport */}
                <div className="relative mx-5 mt-5 rounded-2xl bg-black/50 border border-white/5 overflow-hidden" style={{ height: 160 }}>
                  {/* Dot grid */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)", backgroundSize: "12px 12px" }} />

                  {/* Body silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 60 130" className="h-[80%] opacity-25" fill="none">
                      <ellipse cx="30" cy="13" rx="9" ry="9" stroke="white" strokeWidth="1.5" />
                      <path d="M16 28 Q12 40 14 58 L12 108 L24 108 L25 72 L30 74 L35 72 L36 108 L48 108 L46 58 Q48 40 44 28 Q37 22 30 22 Q23 22 16 28Z" stroke="white" strokeWidth="1.5" />
                      <line x1="13" y1="33" x2="47" y2="33" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
                      <line x1="14" y1="48" x2="46" y2="48" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
                      <line x1="16" y1="64" x2="44" y2="64" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
                    </svg>
                  </div>

                  {/* Scan beam */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-px bg-white/60 shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                  />

                  {/* Corner brackets */}
                  {["top-2.5 left-2.5 border-t border-l", "top-2.5 right-2.5 border-t border-r",
                    "bottom-2.5 left-2.5 border-b border-l", "bottom-2.5 right-2.5 border-b border-r"
                  ].map((cls, i) => (
                    <div key={i} className={`absolute h-3.5 w-3.5 border-white/30 ${cls}`} />
                  ))}

                  {/* Points label */}
                  <div className="absolute bottom-2 right-3">
                    <span className="font-mono text-[8px] text-white/70/70">142 pts</span>
                  </div>
                </div>

                {/* Measurement rows */}
                <div className="p-5 flex flex-col gap-2">
                  {measurements.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
                      className="flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/5 px-3.5 py-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-white/80 shrink-0" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">{m.label}</span>
                      </div>
                      <span className="font-display text-sm font-bold text-white">{m.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge: Format */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
                className="absolute -left-2 sm:-left-10 top-1/3 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl"
              >
                <Ruler className="h-4 w-4 text-white/50" />
                <div className="flex flex-col">
                  <span className="font-mono text-[7px] uppercase tracking-widest text-white/25">Format</span>
                  <span className="font-display text-sm font-bold text-white">CM / IN</span>
                </div>
              </motion.div>

              {/* Floating badge: Saved */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
                className="absolute -right-2 sm:-right-8 bottom-1/4 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#1A1A1A]/90 px-4 py-3 shadow-2xl backdrop-blur-xl"
              >
                <ShieldCheck className="h-4 w-4 text-white/70" />
                <div className="flex flex-col">
                  <span className="font-mono text-[7px] uppercase tracking-widest text-white/70/50">Profile</span>
                  <span className="font-display text-sm font-bold text-white/80">Saved</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
