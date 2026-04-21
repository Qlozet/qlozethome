"use client";

import { motion, useInView } from "framer-motion";
import { AlertTriangle, TrendingDown, CheckSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

// ─── Chart constants ─────────────────────────────────────────────────────────
// All coordinates live in SVG viewBox space — fully responsive on every screen.
const VW = 500; // viewBox width
const VH = 220; // viewBox height
const PAD_L = 32; // left padding (y-axis label space)
const PAD_R = 8;
const PAD_T = 10;
const PAD_B = 36; // bottom padding (x-axis label space)

const cL = PAD_L;
const cR = VW - PAD_R;
const cT = PAD_T;
const cB = VH - PAD_B;
const cW = cR - cL;
const cH = cB - cT;

// Stages: Manual → Hybrid → AI-Assisted → Qlozet System
const stages = ["Manual", "Hybrid", "AI-Assist", "Qlozet"];
// Error rates at each stage (%)
const errorRates = [18.4, 11.2, 5.6, 1.2];
// Bar max domain
const maxVal = 20;

function xBar(i: number, count: number) {
  const gap = cW / count;
  return cL + gap * i + gap * 0.15;
}
function barW(count: number) {
  return (cW / count) * 0.7;
}
function yVal(v: number) {
  return cT + cH - (v / maxVal) * cH;
}
function barH(v: number) {
  return (v / maxVal) * cH;
}

// Y grid lines
const yGridVals = [0, 5, 10, 15, 20];

// Trend line connecting bar tops (center of each bar)
function trendPath(count: number) {
  return errorRates
    .map((v, i) => {
      const x = xBar(i, count) + barW(count) / 2;
      const y = yVal(v);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

// ─── Chart component ──────────────────────────────────────────────────────────
function ErrorReductionChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setDrawn(true), 150);
      return () => clearTimeout(t);
    }
  }, [inView]);

  const n = stages.length;
  const bW = barW(n);

  // Color palette: red → yellow → light-green → emerald
  const barColors = ["#ef4444", "#f59e0b", "#34d399", "#10b981"];
  const labelColors = ["#ef4444", "#f59e0b", "#059669", "#059669"];

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid meet"
      overflow="visible"
      className="w-full"
      style={{ height: "clamp(150px, 32vw, 230px)", display: "block" }}
    >
      <defs>
        {barColors.map((color, i) => (
          <linearGradient key={i} id={`barGrad${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
        ))}
        <linearGradient id="trendGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {/* ── Y-axis grid + labels ─────────────────────────────────────── */}
      {yGridVals.map((v) => (
        <g key={v}>
          <line
            x1={cL} y1={yVal(v).toFixed(1)}
            x2={cR} y2={yVal(v).toFixed(1)}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
            strokeDasharray={v === 0 ? "none" : "3 3"}
          />
          <text
            x={(cL - 6).toFixed(1)}
            y={yVal(v).toFixed(1)}
            textAnchor="end"
            dominantBaseline="middle"
            fill="rgba(0,0,0,0.25)"
            fontSize="9"
            fontFamily="monospace"
          >
            {v}%
          </text>
        </g>
      ))}

      {/* ── Bars ─────────────────────────────────────────────────────── */}
      {errorRates.map((v, i) => {
        const x = xBar(i, n);
        const h = barH(v);
        const y = cB - h;
        return (
          <g key={i}>
            {/* Bar fill */}
            <motion.rect
              x={x.toFixed(1)}
              y={cB.toFixed(1)} // start from bottom
              width={bW.toFixed(1)}
              height="0"
              rx="4"
              fill={`url(#barGrad${i})`}
              animate={drawn ? { y: y.toFixed(1), height: h.toFixed(1) } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.12 }}
            />
            {/* Value label above bar */}
            <motion.text
              x={(x + bW / 2).toFixed(1)}
              y={(y - 5).toFixed(1)}
              textAnchor="middle"
              fill={labelColors[i]}
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={drawn ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.3 }}
            >
              {v}%
            </motion.text>
            {/* X-axis stage label */}
            <text
              x={(x + bW / 2).toFixed(1)}
              y={(VH - 8).toFixed(1)}
              textAnchor="middle"
              fill={i === n - 1 ? "#059669" : "rgba(0,0,0,0.3)"}
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight={i === n - 1 ? "bold" : "normal"}
            >
              {stages[i]}
            </text>
          </g>
        );
      })}

      {/* ── Trend line connecting bar tops ───────────────────────────── */}
      <motion.path
        d={trendPath(n)}
        fill="none"
        stroke="url(#trendGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={drawn ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
      />

      {/* ── Trend dots on bar tops ────────────────────────────────────── */}
      {errorRates.map((v, i) => {
        const cx = xBar(i, n) + bW / 2;
        const cy = yVal(v);
        return (
          <motion.circle
            key={`d${i}`}
            cx={cx.toFixed(1)}
            cy={cy.toFixed(1)}
            r="4"
            fill={barColors[i]}
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={drawn ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.1 + i * 0.1, duration: 0.3, type: "spring", stiffness: 400 }}
          />
        );
      })}

      {/* ── Qlozet "target" callout on last bar ─────────────────────── */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={drawn ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
      >
        {/* Callout bubble */}
        <rect
          x={(xBar(n - 1, n) + bW / 2 - 30).toFixed(1)}
          y={(yVal(errorRates[n - 1]) - 34).toFixed(1)}
          width="60"
          height="20"
          rx="6"
          fill="#10b981"
        />
        <text
          x={(xBar(n - 1, n) + bW / 2).toFixed(1)}
          y={(yVal(errorRates[n - 1]) - 21).toFixed(1)}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="8.5"
          fontFamily="monospace"
          fontWeight="bold"
        >
          −93% vs Manual
        </text>
        {/* Callout arrow */}
        <line
          x1={(xBar(n - 1, n) + bW / 2).toFixed(1)}
          y1={(yVal(errorRates[n - 1]) - 14).toFixed(1)}
          x2={(xBar(n - 1, n) + bW / 2).toFixed(1)}
          y2={(yVal(errorRates[n - 1]) - 2).toFixed(1)}
          stroke="#10b981"
          strokeWidth="1.5"
        />
      </motion.g>
    </svg>
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
              <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

              <div className="relative z-10 p-5 sm:p-8 flex flex-col gap-5">

                {/* ── Card header ── */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-[9px] font-bold uppercase tracking-[0.4em] text-black/30">Error Rate by Stage</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl sm:text-4xl font-medium text-black">1.2%</span>
                      <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100">
                        <TrendingDown className="h-3 w-3" />
                        <span className="font-mono text-[9px] font-bold">−93%</span>
                      </div>
                    </div>
                    <span className="font-mono text-[9px] text-black/30 tracking-widest">with Qlozet System</span>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-col gap-1.5 items-end shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-4 rounded-full" style={{ background: 'linear-gradient(to right, #ef4444, #10b981)' }} />
                      <span className="font-mono text-[8px] text-black/30">Error Rate</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-px w-4 border-t-2 border-dashed border-black/20" />
                      <span className="font-mono text-[8px] text-black/30">Trend</span>
                    </div>
                  </div>
                </div>

                {/* ── Chart ── */}
                <div className="rounded-2xl bg-white border border-black/[0.04] shadow-sm px-3 sm:px-5 pt-4 pb-2">
                  <ErrorReductionChart />
                </div>

                {/* ── Bottom stat pills ── */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: "Manual Error", value: "18.4%", color: "bg-red-50 text-red-600 border-red-100" },
                    { label: "Reduction", value: "−93%", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                    { label: "Qlozet Rate", value: "1.2%", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                  ].map((pill) => (
                    <div key={pill.label} className={`flex flex-col items-center gap-0.5 rounded-xl border px-2 py-2 sm:px-3 sm:py-2.5 ${pill.color}`}>
                      <span className="font-mono text-[8px] uppercase tracking-widest opacity-60">{pill.label}</span>
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
