"use client";

import { motion, useInView } from "framer-motion";
import { History, LineChart, FileClock, Ruler, ArrowUpRight, ArrowDownRight } from "lucide-react";
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
  const color = isPos ? "text-brand-darker bg-brand-light border-brand-darker/10"
    : isNeg ? "text-rose-500 bg-rose-50 border-rose-100"
    : "text-zinc-500 bg-brand-light border-zinc-200";

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
    <section id={data.id} className="relative z-10 bg-brand-light py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">

          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                {data.badge}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg"
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-brand-light transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
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
              className="relative mx-auto w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-white border border-brand-darker/5 shadow-2xl overflow-hidden"
            >
              <div className="relative z-10 p-5 sm:p-8 flex flex-col gap-6">

                {/* ── Header ── */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-brand-darker flex items-center justify-center">
                      <History className="h-4 w-4 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-sm font-bold text-brand-darker leading-none">Michael Chen</span>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-brand-darker/35 mt-0.5">CUST-8820</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-brand-darker/10 bg-brand-light px-3 py-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-darker animate-pulse" />
                    <span className="font-mono text-[7px] font-bold text-brand-darker uppercase tracking-widest">Active</span>
                  </div>
                </div>

                {/* ── Timeline ── */}
                <div className="relative flex flex-col gap-0">
                  {/* Vertical track */}
                  <div className="absolute left-[18px] sm:left-5 top-5 bottom-5 w-px bg-brand-darker/8 z-0" />
                  <motion.div
                    className="absolute left-[18px] sm:left-5 top-5 w-px bg-brand-darker/30 origin-top z-0"
                    initial={{ height: 0 }}
                    animate={inView ? { height: "calc(100% - 2.5rem)" } : {}}
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
                        className={`relative flex gap-4 sm:gap-5 ${i < events.length - 1 ? "pb-5" : ""}`}
                      >
                        {/* Node */}
                        <div className="relative z-10 shrink-0 mt-1">
                          <div className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl border flex items-center justify-center transition-all
                            ${isCurrent
                              ? "bg-brand-darker border-brand-darker shadow-md"
                              : "bg-white border-brand-darker/10"
                            }`}
                          >
                            <Ruler className={`h-4 w-4 ${isCurrent ? "text-white" : "text-brand-darker/25"}`} strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Card */}
                        <div className={`flex-1 min-w-0 rounded-2xl border p-4 transition-all
                          ${isCurrent
                            ? "border-brand-darker/15 bg-brand-light shadow-sm"
                            : "border-brand-darker/5 bg-brand-light/50"
                          }`}
                        >
                          {/* Card top row */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#111111]/40">{event.date}</span>
                              <span className={`font-mono text-[7px] uppercase tracking-widest px-1.5 py-0.5 rounded-full border
                                ${isCurrent
                                  ? "border-brand-darker/20 bg-brand-darker text-white"
                                  : "border-brand-darker/8 bg-brand-darker/[0.04] text-brand-darker/35"
                                }`}
                              >
                                {event.status}
                              </span>
                            </div>
                            <span className="font-mono text-[7px] text-[#111111]/25">{event.order}</span>
                          </div>

                          <span className="font-display text-sm font-bold text-brand-darker leading-none block mb-3">{event.label}</span>

                          {/* Measurements */}
                          <div className="grid grid-cols-3 gap-2">
                            {event.measurements.map((m) => (
                              <div key={m.key} className="flex flex-col gap-1 rounded-xl bg-white p-2.5 border border-brand-darker/[0.04]">
                                <span className="font-mono text-[7px] uppercase tracking-widest text-brand-darker/25">{m.key}</span>
                                <span className="font-display text-xs font-bold text-brand-darker leading-none">{m.val}</span>
                                {m.delta && <DeltaBadge delta={m.delta} />}
                              </div>
                            ))}
                          </div>

                          {event.note && (
                            <p className="mt-2.5 font-ui text-[10px] text-brand-darker/35 italic leading-relaxed">&ldquo;{event.note}&rdquo;</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* ── Footer ── */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.1 }}
                  className="flex items-center justify-between rounded-xl border border-brand-darker/5 bg-brand-light px-4 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <LineChart className="h-3.5 w-3.5 text-brand-darker/25" strokeWidth={1.5} />
                    <span className="font-mono text-[8px] text-brand-darker/35 uppercase tracking-widest">3 snapshots · 5 months</span>
                  </div>
                  <span className="font-mono text-[7px] text-brand-darker/40 font-bold uppercase tracking-widest">Auto-tracked</span>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
