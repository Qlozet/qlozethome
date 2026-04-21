"use client";

import { motion, useInView } from "framer-motion";
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

// ─── Chart constants ───────────────────────────────────────────────────────────
const W       = 500;   // SVG viewBox width
const H       = 220;   // SVG viewBox height
const PAD_X   = 10;    // horizontal padding so edge dots don't clip
const PAD_TOP = 8;
const PAD_BTM = 28;    // space reserved for x-axis labels inside SVG

const chartL = PAD_X;
const chartR = W - PAD_X;
const chartT = PAD_TOP;
const chartB = H - PAD_BTM;
const chartW = chartR - chartL;
const chartH = chartB - chartT;

const months         = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const errorRateData  = [62, 54, 44, 35, 26, 18, 11, 6];
const confidenceData = [38, 47, 57, 66, 74, 83, 90, 96];

function xFor(i: number) {
  return chartL + (i / (months.length - 1)) * chartW;
}
function yFor(v: number) {
  return chartT + chartH - (v / 100) * chartH;
}
function buildPath(data: number[]) {
  return data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${xFor(i).toFixed(2)} ${yFor(v).toFixed(2)}`)
    .join(" ");
}
function buildFill(data: number[]) {
  const line = buildPath(data);
  const last = data.length - 1;
  return `${line} L ${xFor(last).toFixed(2)} ${chartB} L ${xFor(0).toFixed(2)} ${chartB} Z`;
}

const errorPath = buildPath(errorRateData);
const errorFill = buildFill(errorRateData);
const confPath  = buildPath(confidenceData);
const confFill  = buildFill(confidenceData);

// Y-axis grid values
const yGridVals = [0, 25, 50, 75, 100];

// ─── Animated counter ──────────────────────────────────────────────────────────
function useCounter(target: number, delay: number = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(ease * target));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => {};
  }, [inView, target, delay]);

  return { value, ref };
}

// ─── Animated progress bar ─────────────────────────────────────────────────────
function StatBar({ label, value, color, delay, icon: Icon }: {
  label: string; value: number; color: string; delay: number; icon: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const { value: count, ref: countRef } = useCounter(value, (delay) * 1000);

  return (
    <div ref={ref} className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-3.5 w-3.5" style={{ color }} />
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/50">{label}</span>
        </div>
        <div className="flex items-baseline gap-0.5">
          <span ref={countRef} className="font-mono text-lg sm:text-xl font-bold" style={{ color }}>{count}</span>
          <span className="font-mono text-xs" style={{ color }}>%</span>
        </div>
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: color }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        />
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full blur-sm"
          style={{ background: color, opacity: 0.4 }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        />
      </div>
    </div>
  );
}

// ─── Chart ─────────────────────────────────────────────────────────────────────
function ErrorConfidenceChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-60px" });
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setDrawn(true), 150);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    /*
      Single SVG contains everything — grid, lines, dots, y-labels, x-labels.
      This guarantees pixel-perfect alignment on every screen size.
      overflow="visible" lets edge dots render outside the viewBox safely.
    */
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      overflow="visible"
      className="w-full"
      style={{ height: "clamp(160px, 30vw, 240px)", display: "block" }}
    >
      <defs>
        <linearGradient id="cErrorFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FF5C5C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FF5C5C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cConfFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00F0FF" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Y-axis labels (left, inside SVG) ── */}
      {yGridVals.map((v) => (
        <g key={v}>
          {/* Grid line */}
          <line
            x1={chartL} y1={yFor(v).toFixed(2)}
            x2={chartR} y2={yFor(v).toFixed(2)}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          {/* Label */}
          <text
            x={(chartL - 6).toFixed(2)}
            y={yFor(v).toFixed(2)}
            textAnchor="end"
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.22)"
            fontSize="9"
            fontFamily="monospace"
          >
            {v}%
          </text>
        </g>
      ))}

      {/* ── X-axis labels (bottom, inside SVG) ── */}
      {months.map((m, i) => (
        <text
          key={m}
          x={xFor(i).toFixed(2)}
          y={(H - 8).toFixed(2)}
          textAnchor="middle"
          fill="rgba(255,255,255,0.22)"
          fontSize="9"
          fontFamily="monospace"
        >
          {m}
        </text>
      ))}

      {/* ── Fill areas ── */}
      <motion.path
        d={errorFill}
        fill="url(#cErrorFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: drawn ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.path
        d={confFill}
        fill="url(#cConfFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: drawn ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* ── Error Rate line ── */}
      <motion.path
        d={errorPath}
        fill="none"
        stroke="#FF5C5C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
      />

      {/* ── Confidence line ── */}
      <motion.path
        d={confPath}
        fill="none"
        stroke="#00F0FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />

      {/* ── Error Rate dots ── */}
      {errorRateData.map((v, i) => (
        <motion.circle
          key={`e${i}`}
          cx={xFor(i).toFixed(2)}
          cy={yFor(v).toFixed(2)}
          r="4"
          fill="#FF5C5C"
          stroke="#0A0A0A"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
          transition={{ delay: 0.7 + i * 0.07, duration: 0.3, type: "spring", stiffness: 400 }}
        />
      ))}

      {/* ── Confidence dots ── */}
      {confidenceData.map((v, i) => (
        <motion.circle
          key={`c${i}`}
          cx={xFor(i).toFixed(2)}
          cy={yFor(v).toFixed(2)}
          r="4"
          fill="#00F0FF"
          stroke="#0A0A0A"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
          transition={{ delay: 0.9 + i * 0.07, duration: 0.3, type: "spring", stiffness: 400 }}
        />
      ))}
    </svg>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
export function ConfidenceSection({ data }: ConfidenceSectionProps) {
  return (
    <section className="relative w-full bg-black py-24 lg:py-40 overflow-hidden" data-theme="dark">
      {/* Radial glow */}
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

            {/* ── Left: Chart ── */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Chart header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <BarChart3 className="h-4 w-4 text-white/40" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/40">Performance Trend</span>
                    <span className="font-mono text-[9px] text-white/20">Jan → Aug · 8-Month View</span>
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

              {/* Chart panel — overflow-hidden clips the SVG safe zone */}
              <div className="rounded-[1.5rem] border border-white/5 bg-black/40 p-4 sm:p-6">
                <ErrorConfidenceChart />
              </div>

              {/* Footnote */}
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-white/5" />
                <span className="font-mono text-[8px] text-white/20">Data across 50,000+ orders · 2024</span>
              </div>
            </div>

            {/* ── Right: Stats ── */}
            <div className="flex flex-col gap-5 lg:w-[280px] xl:w-[320px]">
              {/* KPI cards */}
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
                <StatBar label="Better fit accuracy" value={96} color="#00F0FF"  delay={0.7}  icon={ShieldCheck} />
                <StatBar label="Fewer returns"        value={82} color="#a78bfa" delay={0.85} icon={TrendingDown} />
                <StatBar label="Order confidence"     value={94} color="#34d399" delay={1.0}  icon={TrendingUp} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
