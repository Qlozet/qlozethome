"use client";

import { motion, useInView } from "framer-motion";
import { AlertTriangle, TrendingDown, CheckSquare } from "lucide-react";
import { useRef } from "react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type ConfidenceSectionProps = {
  data: SectionData;
};

// ─── Bar chart data ────────────────────────────────────────────────────────────
const stages = [
  { label: "Manual",     value: 18.4, color: "#ef4444", textColor: "#dc2626" },
  { label: "Hybrid",     value: 11.2, color: "#f59e0b", textColor: "#d97706" },
  { label: "AI-Assist",  value: 5.6,  color: "#34d399", textColor: "#059669" },
  { label: "Qlozet",     value: 1.2,  color: "#10b981", textColor: "#047857" },
];
const MAX_VAL = 20; // domain ceiling (%)

// ─── Bar Chart (HTML-based — no SVG attribute animation quirks) ───────────────
function ErrorBarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="w-full">
      {/* Chart area */}
      <div className="relative flex items-end justify-around gap-2 sm:gap-4 px-2 sm:px-4" style={{ height: "clamp(120px, 24vw, 180px)" }}>

        {/* Y-axis grid lines (absolute, behind bars) */}
        {[0, 25, 50, 75, 100].map((pct) => (
          <div
            key={pct}
            className="absolute left-0 right-0 border-t border-dashed border-black/[0.06]"
            style={{ bottom: `${pct}%` }}
          />
        ))}

        {/* Bars */}
        {stages.map((stage, i) => {
          const targetPct = (stage.value / MAX_VAL) * 100;
          return (
            <div key={i} className="relative flex flex-col items-center gap-1 flex-1 min-w-0 h-full justify-end">
              {/* Value label above bar */}
              <motion.span
                className="font-mono text-[9px] sm:text-[10px] font-bold tabular-nums"
                style={{ color: stage.textColor }}
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.3 }}
              >
                {stage.value}%
              </motion.span>

              {/* Bar */}
              <motion.div
                className="w-full rounded-t-lg sm:rounded-t-xl relative overflow-hidden"
                style={{ backgroundColor: stage.color }}
                initial={{ height: 0, scaleY: 0 }}
                animate={inView ? { height: `${targetPct}%`, scaleY: 1 } : { height: 0, scaleY: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.12 }}
                // Important: scaleY from bottom, not top
                style={{ backgroundColor: stage.color, transformOrigin: "bottom" }}
              >
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  animate={inView ? { x: "200%" } : {}}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.6, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Baseline rule */}
      <div className="h-px bg-black/10 mx-2 sm:mx-4 mt-0" />

      {/* X-axis labels */}
      <div className="flex justify-around px-2 sm:px-4 mt-2">
        {stages.map((stage, i) => (
          <span
            key={i}
            className="flex-1 text-center font-mono text-[8px] sm:text-[9px] min-w-0 truncate"
            style={{ color: i === stages.length - 1 ? "#047857" : "rgba(0,0,0,0.3)",
              fontWeight: i === stages.length - 1 ? 700 : 400 }}
          >
            {stage.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function ConfidenceSection({ data }: ConfidenceSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-32">

          {/* Right/Top: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40"
              >
                {data.badge}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const icons = [AlertTriangle, TrendingDown, CheckSquare];
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left/Bottom: Chart Illustration */}
          <div className="relative lg:mt-0 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden"
            >
              {/* Subtle grid bg */}
              <div
                className="absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)", backgroundSize: "32px 32px" }}
              />

              <div className="relative z-10 p-5 sm:p-8 flex flex-col gap-5">

                {/* ── Card header ── */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-[9px] font-bold uppercase tracking-[0.4em] text-black/30">Error Rate by Stage</span>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-display text-3xl sm:text-4xl font-medium text-black">1.2%</span>
                      <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100">
                        <TrendingDown className="h-3 w-3" />
                        <span className="font-mono text-[9px] font-bold">−93%</span>
                      </div>
                    </div>
                    <span className="font-mono text-[9px] text-black/30 tracking-widest">with Qlozet System</span>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-col gap-2 items-end shrink-0 pt-1">
                    <div className="flex gap-1 items-center">
                      {stages.map((s) => (
                        <div key={s.label} className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
                      ))}
                    </div>
                    <span className="font-mono text-[7px] text-black/25 tracking-widest">Red → Green = Improvement</span>
                  </div>
                </div>

                {/* ── Chart ── */}
                <div className="rounded-2xl bg-white border border-black/[0.05] shadow-sm pt-5 pb-3 px-3 sm:px-4">
                  <ErrorBarChart />
                </div>

                {/* ── Bottom stat pills ── */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: "Manual",    value: "18.4%", cls: "bg-red-50 text-red-600 border-red-100" },
                    { label: "Reduction", value: "−93%",  cls: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                    { label: "Qlozet",    value: "1.2%",  cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                  ].map((pill) => (
                    <div key={pill.label} className={`flex flex-col items-center gap-0.5 rounded-xl border px-2 py-2 sm:px-3 sm:py-2.5 ${pill.cls}`}>
                      <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest opacity-60">{pill.label}</span>
                      <span className="font-display text-sm sm:text-base font-bold">{pill.value}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
