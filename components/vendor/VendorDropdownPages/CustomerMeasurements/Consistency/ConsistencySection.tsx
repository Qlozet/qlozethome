"use client";

import { motion, useInView } from "framer-motion";
import { Repeat, ShieldCheck, TrendingUp, CheckCircle2, RefreshCw } from "lucide-react";
import { useRef } from "react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type ConsistencySectionProps = {
  data: SectionData;
};

// ─── Consistency data ─────────────────────────────────────────────────────────
const orders = [
  { id: "ORD-4421", date: "Jan 2026", item: "Wool Blazer",    status: "Delivered" },
  { id: "ORD-5882", date: "Feb 2026", item: "Linen Shirt",    status: "Delivered" },
  { id: "ORD-6193", date: "Mar 2026", item: "Slim Trousers",  status: "In Production" },
];

// Measurements that stay consistent across all orders
const measurements = [
  { key: "Chest",   val: "94.2 cm" },
  { key: "Waist",   val: "78.5 cm" },
  { key: "Sleeve",  val: "65.0 cm" },
  { key: "Inseam",  val: "80.2 cm" },
];

export function ConsistencySection({ data }: ConsistencySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id={data.id} className="relative z-10 bg-[#050505] py-24 sm:py-32 overflow-hidden text-white" data-theme="dark">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">

          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
              >
                {data.badge}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-white/50 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const icons = [Repeat, ShieldCheck, TrendingUp];
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white group-hover:border-white/30 group-hover:text-[#1A1A1A] transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-white/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Consistency Illustration */}
          <div className="relative lg:mt-0 lg:w-1/2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-900 border border-white/5 shadow-2xl overflow-hidden"
            >
              {/* Background dot grid */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.07)_0%,transparent_65%)]" />

              <div className="relative z-10 p-5 sm:p-8 flex flex-col gap-5">

                {/* ── Header ── */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Consistency Engine</span>
                    <span className="font-display text-base sm:text-lg font-medium text-white leading-none">Profile Lock™</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shrink-0">
                    <RefreshCw className="h-3 w-3 text-white/70" />
                    <span className="font-mono text-[8px] font-bold text-white/70 uppercase tracking-widest">Auto-Synced</span>
                  </div>
                </div>

                {/* ── Master measurement source ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="rounded-2xl border border-white/15 bg-white/8 p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 border border-white/20">
                        <ShieldCheck className="h-3.5 w-3.5 text-white/70" />
                      </div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/70">Master Profile · CUST-8820</span>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
                  </div>

                  {/* Measurement values grid */}
                  <div className="grid grid-cols-4 gap-2">
                    {measurements.map((m, i) => (
                      <motion.div
                        key={m.key}
                        initial={{ opacity: 0, y: 6 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.35 + i * 0.08 }}
                        className="flex flex-col gap-1 rounded-xl bg-black/30 border border-white/5 p-2.5 text-center"
                      >
                        <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest text-white/30">{m.key}</span>
                        <span className="font-display text-[11px] sm:text-xs font-bold text-white/80 leading-none tabular-nums">{m.val}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* ── "Applied to" label with connector ── */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/5" />
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Repeat className="h-3 w-3 text-white/25" />
                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/25">Applied consistently to</span>
                  </div>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                {/* ── Order rows ── */}
                <div className="flex flex-col gap-2.5">
                  {orders.map((order, i) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: 16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.15, duration: 0.45 }}
                      className="rounded-2xl border border-white/6 bg-white/[0.03] p-3.5 sm:p-4"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span className="font-display text-sm font-bold text-white leading-none">{order.item}</span>
                          <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest">{order.id} · {order.date}</span>
                        </div>
                        <span className={`shrink-0 font-mono text-[8px] uppercase tracking-widest px-2 py-1 rounded-full border
                          ${order.status === "Delivered"
                            ? "border-white/20 bg-white/10 text-white/70"
                            : "border-amber-500/25 bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>

                      {/* Measurement echoes — same values, with a check mark */}
                      <div className="grid grid-cols-4 gap-1.5">
                        {measurements.map((m, j) => (
                          <motion.div
                            key={m.key}
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.65 + i * 0.15 + j * 0.05 }}
                            className="flex flex-col gap-1 rounded-lg bg-white/[0.04] border border-white/5 p-2 text-center"
                          >
                            <span className="font-mono text-[6px] sm:text-[7px] uppercase tracking-widest text-white/25">{m.key}</span>
                            <span className="font-display text-[10px] sm:text-[11px] font-bold text-white/60 leading-none tabular-nums">{m.val}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Match confirmation */}
                      <div className="flex items-center gap-1.5 mt-2.5">
                        <CheckCircle2 className="h-3 w-3 text-white/80" />
                        <span className="font-mono text-[8px] text-white/80/70">Measurements matched from master profile</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* ── Footer ── */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span className="font-mono text-[8px] text-white/25 uppercase tracking-widest">Zero measurement re-entry</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[8px] text-white/70 font-bold">100% Match Rate</span>
                    <ShieldCheck className="h-3 w-3 text-white/70" />
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
