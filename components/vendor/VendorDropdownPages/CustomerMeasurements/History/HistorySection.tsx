"use client";

import { motion, useInView } from "framer-motion";
import { History, LineChart, FileClock, Ruler, ArrowUpRight, ArrowDownRight, CheckCircle2, Clock } from "lucide-react";
import { useRef } from "react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type HistorySectionProps = {
  data: SectionData;
};

// ─── Timeline data ────────────────────────────────────────────────────────────
const events = [
  {
    date: "Oct 2025",
    label: "Initial Profile",
    order: "ORD-941",
    note: "Shoulder adjusted +1cm per request",
    status: "Archived" as const,
    measurements: [
      { key: "Chest", val: "92.0 cm", delta: null },
      { key: "Waist", val: "76.0 cm", delta: null },
      { key: "Sleeve", val: "63.0 cm", delta: null },
    ],
  },
  {
    date: "Dec 2025",
    label: "Winter Update",
    order: "ORD-102",
    note: "Winter coat. Sleeves +2cm",
    status: "Archived" as const,
    measurements: [
      { key: "Chest", val: "92.5 cm", delta: "+0.5" },
      { key: "Waist", val: "75.2 cm", delta: "−0.8" },
      { key: "Sleeve", val: "65.0 cm", delta: "+2.0" },
    ],
  },
  {
    date: "Mar 2026",
    label: "Active Profile",
    order: "ORD-334",
    note: "Base profile updated",
    status: "Current" as const,
    measurements: [
      { key: "Chest", val: "94.2 cm", delta: "+1.7" },
      { key: "Waist", val: "78.5 cm", delta: "+3.3" },
      { key: "Sleeve", val: "65.0 cm", delta: "±0" },
    ],
  },
];

function DeltaBadge({ delta }: { delta: string | null }) {
  if (!delta) return null;
  const isPos = delta.startsWith("+");
  const isNeg = delta.startsWith("−") || delta.startsWith("-");
  const Icon = isPos ? ArrowUpRight : isNeg ? ArrowDownRight : null;
  const color = isPos ? "text-emerald-600 bg-emerald-50 border-emerald-100"
    : isNeg ? "text-rose-500 bg-rose-50 border-rose-100"
    : "text-zinc-500 bg-zinc-50 border-zinc-200";

  return (
    <span className={`inline-flex items-center gap-0.5 rounded-full border px-1.5 py-0.5 font-mono text-[8px] font-bold ${color}`}>
      {Icon && <Icon className="h-2.5 w-2.5" />}
      {delta}
    </span>
  );
}

export function HistorySection({ data }: HistorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id={data.id} className="relative z-10 bg-zinc-50 py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-32">

          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
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
                const icons = [History, LineChart, FileClock];
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: History Timeline Illustration */}
          <div className="relative lg:mt-0 lg:w-1/2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-white border border-black/5 shadow-2xl overflow-hidden"
            >
              {/* Subtle dot grid bg */}
              <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

              <div className="relative z-10 p-5 sm:p-8 flex flex-col gap-5">

                {/* ── Header ── */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-black/30">Measurement Log</span>
                    <span className="font-display text-base sm:text-lg font-medium text-black leading-none">Michael Chen · CUST-8820</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 shrink-0">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Profile Active</span>
                  </div>
                </div>

                {/* ── Timeline ── */}
                <div className="relative flex flex-col gap-0">

                  {/* Vertical track line */}
                  <div className="absolute left-[18px] sm:left-5 top-4 bottom-4 w-px bg-black/8 z-0" />

                  {/* Animated progress fill */}
                  <motion.div
                    className="absolute left-[18px] sm:left-5 top-4 w-px bg-emerald-400 origin-top z-0"
                    initial={{ height: 0 }}
                    animate={inView ? { height: "calc(100% - 2rem)" } : {}}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  />

                  {events.map((event, i) => {
                    const isCurrent = event.status === "Current";
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                        className={`relative flex gap-4 sm:gap-5 pb-4 last:pb-0 ${i < events.length - 1 ? "pb-5" : ""}`}
                      >
                        {/* Node dot */}
                        <div className="relative z-10 flex shrink-0 flex-col items-center mt-1">
                          <div className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl border flex items-center justify-center shadow-sm
                            ${isCurrent
                              ? "bg-emerald-500 border-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.3)]"
                              : "bg-white border-black/10"
                            }`}
                          >
                            <Ruler className={`h-4 w-4 ${isCurrent ? "text-white" : "text-black/30"}`} strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Event card */}
                        <div className={`flex-1 min-w-0 rounded-2xl border p-3 sm:p-4 transition-all
                          ${isCurrent
                            ? "border-emerald-200 bg-emerald-50/60 shadow-sm"
                            : "border-black/5 bg-zinc-50/80"
                          }`}
                        >
                          {/* Card header */}
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-black/40 shrink-0">
                                  {event.date}
                                </span>
                                <span className={`font-mono text-[7px] sm:text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded-full border
                                  ${isCurrent
                                    ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                                    : "border-black/8 bg-black/[0.04] text-black/35"
                                  }`}
                                >
                                  {event.status}
                                </span>
                              </div>
                              <span className="font-display text-sm font-bold text-black leading-none">{event.label}</span>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <Clock className="h-3 w-3 text-black/20" />
                              <span className="font-mono text-[8px] text-black/30">{event.order}</span>
                            </div>
                          </div>

                          {/* Measurement rows */}
                          <div className="grid grid-cols-3 gap-1.5">
                            {event.measurements.map((m) => (
                              <div key={m.key} className={`flex flex-col gap-0.5 rounded-xl p-2 ${isCurrent ? "bg-white/70" : "bg-white/60"} border border-black/[0.04]`}>
                                <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest text-black/30">{m.key}</span>
                                <span className="font-display text-[11px] sm:text-xs font-bold text-black leading-none">{m.val}</span>
                                {m.delta && <DeltaBadge delta={m.delta} />}
                              </div>
                            ))}
                          </div>

                          {/* Note */}
                          <p className="mt-2 font-ui text-[10px] sm:text-xs text-black/40 italic">&ldquo;{event.note}&rdquo;</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* ── Footer summary ── */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.1 }}
                  className="flex items-center justify-between rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-black/30" strokeWidth={1.5} />
                    <span className="font-mono text-[9px] text-black/40 uppercase tracking-widest">3 snapshots · 5 months</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[8px] text-emerald-600 font-bold">Auto-tracked</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
