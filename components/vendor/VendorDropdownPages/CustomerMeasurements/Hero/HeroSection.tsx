"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ScanFace, ArrowRight, Ruler, CheckCircle2, Zap, ShieldCheck } from "lucide-react";
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

// ─── Animated scan line counter ───────────────────────────────────────────────
function useCount(target: number, duration: number = 1.6, delay: number = 0) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / (duration * 1000), 1);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [inView, target, duration, delay]);
  return { val, ref };
}

// ─── Body measurement rows ────────────────────────────────────────────────────
const measurements = [
  { label: "Chest",   value: "94.2",  unit: "cm", delay: 0.8 },
  { label: "Waist",   value: "78.5",  unit: "cm", delay: 0.95 },
  { label: "Hips",    value: "102.1", unit: "cm", delay: 1.1 },
  { label: "Sleeve",  value: "65.0",  unit: "cm", delay: 1.25 },
  { label: "Inseam",  value: "80.2",  unit: "cm", delay: 1.4 },
  { label: "Shoulder","value": "44.8",  unit: "cm", delay: 1.55 },
];

export function HeroSection({ data }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const { val: pointsVal, ref: pointsRef } = useCount(142, 1.4, 0.6);
  const { val: accVal,    ref: accRef    } = useCount(99,  1.2, 0.8);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-28 sm:pt-32 lg:pt-40"
      data-theme="dark"
    >
      {/* ── Background grid ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500 opacity-[0.06] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-[94rem] px-6"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">

          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-white/20" />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">{data.badge}</span>
                <ScanFace className="h-3 w-3 text-emerald-500 animate-pulse" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl font-medium leading-[1.05] tracking-tighter text-white sm:text-7xl lg:text-8xl"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href={data.cta.href}
                className="group inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 text-[10px] font-bold uppercase tracking-[0.4em] text-black shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95"
              >
                {data.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* ── Quick stats row ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { label: "Data Points", value: "142+", icon: Zap },
                { label: "Accuracy",    value: "99.8%", icon: ShieldCheck },
                { label: "Scan Time",   value: "<3s",   icon: ScanFace },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-sm font-bold text-white leading-none">{value}</span>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/30">{label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Illustration ── */}
          <motion.div style={{ y, opacity }} className="relative lg:w-1/2">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">

              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full border border-dashed border-white/8"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50px] rounded-full border border-white/4"
              />

              {/* ── Main card ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/90 shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden"
              >
                {/* Grid bg inside card */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

                {/* Card top bar */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/6 px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <ScanFace className="h-4 w-4 text-emerald-400" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">AI Body Scan</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-emerald-400">Scanning</span>
                  </div>
                </div>

                <div className="relative z-10 p-5">
                  {/* ── Scan visual ── */}
                  <div className="relative rounded-2xl bg-black/50 border border-white/5 overflow-hidden mb-5" style={{ height: "180px" }}>
                    {/* Dot pattern inside scan area */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)", backgroundSize: "14px 14px" }} />

                    {/* Silhouette SVG */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 80 160" className="h-full opacity-30" fill="none">
                        {/* Simplified body outline */}
                        <ellipse cx="40" cy="18" rx="12" ry="12" stroke="white" strokeWidth="1.5" />
                        <path d="M24 36 Q18 50 20 70 L16 130 L30 130 L32 90 L40 92 L48 90 L50 130 L64 130 L60 70 Q62 50 56 36 Q48 30 40 30 Q32 30 24 36Z" stroke="white" strokeWidth="1.5" fill="none" />
                        {/* Shoulder line */}
                        <line x1="20" y1="42" x2="60" y2="42" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                        {/* Chest line */}
                        <line x1="22" y1="58" x2="58" y2="58" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                        {/* Waist line */}
                        <line x1="24" y1="76" x2="56" y2="76" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                        {/* Hip line */}
                        <line x1="19" y1="92" x2="61" y2="92" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                      </svg>
                    </div>

                    {/* Animated scanner beam */}
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
                      style={{ zIndex: 10 }}
                    />

                    {/* Corner brackets */}
                    {[
                      "top-3 left-3 border-t border-l",
                      "top-3 right-3 border-t border-r",
                      "bottom-3 left-3 border-b border-l",
                      "bottom-3 right-3 border-b border-r",
                    ].map((cls, i) => (
                      <div key={i} className={`absolute h-4 w-4 border-emerald-500/60 ${cls}`} />
                    ))}

                    {/* Progress indicator */}
                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-emerald-400"
                          animate={{ width: ["0%", "100%", "0%"] }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── Measurement rows ── */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-white/25">Measurements Captured</span>
                      <div className="flex items-baseline gap-0.5">
                        <span ref={pointsRef} className="font-mono text-[10px] font-bold text-emerald-400">{pointsVal}</span>
                        <span className="font-mono text-[8px] text-emerald-400/60"> pts</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {measurements.map((m, i) => (
                        <motion.div
                          key={m.label}
                          initial={{ opacity: 0, x: i % 2 === 0 ? -8 : 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: m.delay, duration: 0.4 }}
                          className="flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/5 px-3 py-2"
                        >
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                            <span className="font-mono text-[8px] uppercase tracking-widest text-white/40">{m.label}</span>
                          </div>
                          <span className="font-display text-xs font-bold text-white tabular-nums">{m.value} <span className="text-white/30 font-normal text-[9px]">{m.unit}</span></span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card bottom bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="relative z-10 flex items-center justify-between border-t border-white/6 px-5 py-3"
                >
                  <span className="font-mono text-[8px] uppercase tracking-widest text-white/25">Accuracy</span>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 rounded-full bg-white/8 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-emerald-400"
                        initial={{ width: 0 }}
                        animate={{ width: "99.8%" }}
                        transition={{ delay: 1.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span ref={accRef} className="font-mono text-[9px] font-bold text-emerald-400">{accVal}.8%</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Floating badge: Format ── */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
                className="absolute -left-4 sm:-left-10 top-1/3 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Ruler className="h-4 w-4 text-white/60" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[7px] uppercase tracking-widest text-white/30">Format</span>
                  <span className="font-display text-sm font-bold text-white">CM / IN</span>
                </div>
              </motion.div>

              {/* ── Floating badge: Profile Saved ── */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
                className="absolute -right-2 sm:-right-8 bottom-1/4 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[7px] uppercase tracking-widest text-emerald-400/60">Profile</span>
                  <span className="font-display text-sm font-bold text-emerald-300">Saved</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
