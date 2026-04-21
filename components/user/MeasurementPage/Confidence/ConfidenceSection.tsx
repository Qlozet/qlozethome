"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { TrendingDown, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ConfidenceData = {
  badge: string;
  title: string;
  description: string;
  stats: string[];
};

type ConfidenceSectionProps = {
  data: ConfidenceData;
};

// Animated counter hook
function useCounter(target: number, duration: number = 1.8, delay: number = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const step = target / (duration * 60);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setValue(target);
          clearInterval(timer);
        } else {
          setValue(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, target, duration, delay]);

  return { value, ref };
}

// Chart data
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

const errorRateData   = [62, 54, 44, 35, 26, 18, 11, 6];   // % error, falling
const confidenceData  = [38, 47, 57, 66, 74, 83, 90, 96];  // % confidence, rising

function buildPath(data: number[], minY: number, maxY: number, W: number, H: number): string {
  const padX = 0;
  const padY = 4;
  const xStep = (W - padX * 2) / (data.length - 1);
  const range = maxY - minY;

  return data
    .map((v, i) => {
      const x = padX + i * xStep;
      const y = H - padY - ((v - minY) / range) * (H - padY * 2);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

// SVG chart component
function ErrorConfidenceChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setDrawn(true), 200);
      return () => clearTimeout(t);
    }
  }, [inView]);

  // Chart dimensions — we'll use viewBox for responsiveness
  const W = 500;
  const H = 200;

  const errorPath = buildPath(errorRateData, 0, 100, W, H);
  const confPath  = buildPath(confidenceData, 0, 100, W, H);

  // Approximate path lengths for stroke-dasharray animation
  const pathLen = 560;

  return (
    <div className="relative w-full">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-1 pr-2">
        {[100, 75, 50, 25, 0].map((v) => (
          <span key={v} className="font-mono text-[8px] sm:text-[9px] text-white/20 leading-none">{v}%</span>
        ))}
      </div>

      {/* Chart area */}
      <div className="pl-7 sm:pl-8">
        <svg
          ref={ref}
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: "clamp(140px, 28vw, 220px)" }}
        >
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((v) => {
            const y = H - 4 - (v / 100) * (H - 8);
            return (
              <line
                key={v}
                x1="0" y1={y.toFixed(1)}
                x2={W}  y2={y.toFixed(1)}
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
              />
            );
          })}

          {/* Error Rate fill */}
          <motion.path
            d={`${errorPath} L ${W} ${H} L 0 ${H} Z`}
            fill="url(#errorFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: drawn ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Confidence fill */}
          <motion.path
            d={`${confPath} L ${W} ${H} L 0 ${H} Z`}
            fill="url(#confFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: drawn ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Error Rate line */}
          <motion.path
            d={errorPath}
            fill="none"
            stroke="#FF5C5C"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
          />

          {/* Confidence line */}
          <motion.path
            d={confPath}
            fill="none"
            stroke="#00F0FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          />

          {/* Data dots — Error */}
          {errorRateData.map((v, i) => {
            const xStep = W / (errorRateData.length - 1);
            const x = i * xStep;
            const y = H - 4 - (v / 100) * (H - 8);
            return (
              <motion.circle
                key={`e${i}`}
                cx={x.toFixed(1)} cy={y.toFixed(1)} r="3.5"
                fill="#FF5C5C"
                stroke="#0A0A0A"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.3 }}
              />
            );
          })}

          {/* Data dots — Confidence */}
          {confidenceData.map((v, i) => {
            const xStep = W / (confidenceData.length - 1);
            const x = i * xStep;
            const y = H - 4 - (v / 100) * (H - 8);
            return (
              <motion.circle
                key={`c${i}`}
                cx={x.toFixed(1)} cy={y.toFixed(1)} r="3.5"
                fill="#00F0FF"
                stroke="#0A0A0A"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
                transition={{ delay: 0.8 + i * 0.07, duration: 0.3 }}
              />
            );
          })}

          {/* Gradient defs */}
          <defs>
            <linearGradient id="errorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF5C5C" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FF5C5C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="confFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between pt-2 px-0">
          {months.map((m) => (
            <span key={m} className="font-mono text-[8px] sm:text-[9px] text-white/20">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Individual stat bar
function StatBar({
  label, value, color, delay, icon: Icon
}: {
  label: string;
  value: number;
  color: string;
  delay: number;
  icon: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const { value: count, ref: countRef } = useCounter(value, 1.4, delay);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-3.5 w-3.5" style={{ color }} />
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/50">{label}</span>
        </div>
        <div className="flex items-baseline gap-0.5">
          <span ref={countRef} className="font-mono text-lg sm:text-xl font-bold" style={{ color }}>
            {count}
          </span>
          <span className="font-mono text-xs" style={{ color }}>%</span>
        </div>
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: color }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${value}%` } : { width: "0%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        />
        {/* Glow */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full blur-sm"
          style={{ background: color, opacity: 0.4 }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${value}%` } : { width: "0%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        />
      </div>
    </div>
  );
}

export function ConfidenceSection({ data }: ConfidenceSectionProps) {
  return (
    <section className="relative w-full bg-black py-24 lg:py-40 overflow-hidden" data-theme="dark">
      {/* Subtle radial bg */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00F0FF] blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[94rem] px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-20 flex flex-col gap-6 items-center text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/40"
          >
            {data.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl font-ui text-lg leading-relaxed text-white/50 lg:text-2xl"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Main panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-white/[0.03] p-5 sm:p-8 lg:p-12 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-start">

            {/* Left: Chart */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Chart header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <BarChart3 className="h-4 w-4 text-white/40" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/40">Performance Trend</span>
                    <span className="font-mono text-[9px] text-white/20">Jan → Aug · 8 Month View</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-5 rounded-full bg-[#FF5C5C]" />
                    <span className="font-mono text-[9px] text-white/40">Error Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-5 rounded-full bg-[#00F0FF]" />
                    <span className="font-mono text-[9px] text-white/40">Fit Confidence</span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="rounded-[1.5rem] border border-white/5 bg-black/40 p-4 sm:p-6">
                <ErrorConfidenceChart />
              </div>

              {/* Chart footnote */}
              <div className="flex items-center gap-2 justify-end">
                <div className="h-px flex-1 bg-white/5" />
                <span className="font-mono text-[8px] text-white/20">Data collected across 50,000+ orders · 2024</span>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="flex flex-col gap-6 lg:w-[280px] xl:w-[320px]">
              {/* Summary KPIs */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl border border-[#00F0FF]/20 bg-[#00F0FF]/5 p-4 sm:p-5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00F0FF]/10">
                      <TrendingUp className="h-4 w-4 text-[#00F0FF]" />
                    </div>
                    <span className="font-mono text-[8px] text-[#00F0FF]/60 uppercase tracking-widest">vs baseline</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#00F0FF]">96</span>
                    <span className="font-mono text-base text-[#00F0FF]/60">%</span>
                  </div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1 block">Fit Confidence</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="rounded-2xl border border-[#FF5C5C]/20 bg-[#FF5C5C]/5 p-4 sm:p-5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF5C5C]/10">
                      <TrendingDown className="h-4 w-4 text-[#FF5C5C]" />
                    </div>
                    <span className="font-mono text-[8px] text-[#FF5C5C]/60 uppercase tracking-widest">vs baseline</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#FF5C5C]">−90</span>
                    <span className="font-mono text-base text-[#FF5C5C]/60">%</span>
                  </div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1 block">Error Reduction</span>
                </motion.div>
              </div>

              {/* Progress bars */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 flex flex-col gap-5"
              >
                <span className="font-display text-[9px] font-bold uppercase tracking-widest text-white/30">Impact Metrics</span>

                <StatBar
                  label="Better fit accuracy"
                  value={96}
                  color="#00F0FF"
                  delay={0.7}
                  icon={ShieldCheck}
                />
                <StatBar
                  label="Fewer returns"
                  value={82}
                  color="#a78bfa"
                  delay={0.85}
                  icon={TrendingDown}
                />
                <StatBar
                  label="Order confidence"
                  value={94}
                  color="#34d399"
                  delay={1.0}
                  icon={TrendingUp}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
