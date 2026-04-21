"use client";

import { motion, useInView } from "framer-motion";
import {
  Workflow, Network, Link as LinkIcon,
  DatabaseZap, Package, Scissors, BarChart2, Truck, MessageSquare,
  ArrowRight, Zap,
} from "lucide-react";
import { useRef } from "react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type IntegrationSectionProps = {
  data: SectionData;
};

// ─── Integration node data ────────────────────────────────────────────────────
const integrations = [
  { icon: Package,      label: "Inventory",  status: "Synced",   color: "#10b981", delay: 0.15 },
  { icon: Scissors,     label: "Production", status: "Live",     color: "#10b981", delay: 0.25 },
  { icon: BarChart2,    label: "Analytics",  status: "Active",   color: "#10b981", delay: 0.35 },
  { icon: Truck,        label: "Shipper",    status: "Ready",    color: "#10b981", delay: 0.45 },
  { icon: MessageSquare,label: "CRM",        status: "Online",   color: "#10b981", delay: 0.55 },
  { icon: Workflow,     label: "Automations",status: "Running",  color: "#10b981", delay: 0.65 },
];

// ─── Animated data packet flowing through the connection line ─────────────────
function DataPacket({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-4 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]"
      animate={{ left: ["0%", "100%"] }}
      transition={{ duration: 1.4, repeat: Infinity, delay, ease: "linear", repeatDelay: 0.6 }}
    />
  );
}

// ─── Integration node card ─────────────────────────────────────────────────────
function IntegrationNode({
  icon: Icon, label, status, color, delay, inView,
}: {
  icon: any; label: string; status: string; color: string; delay: number; inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="relative flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-3 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group"
    >
      {/* Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
        <Icon className="h-4 w-4 text-white/60 group-hover:text-emerald-400 transition-colors" strokeWidth={1.5} />
      </div>

      {/* Label + status */}
      <div className="flex flex-col min-w-0">
        <span className="font-display text-sm font-medium text-white/80 leading-none mb-0.5">{label}</span>
        <span className="font-mono text-[8px] uppercase tracking-widest text-emerald-400">{status}</span>
      </div>

      {/* Live indicator */}
      <div className="ml-auto flex items-center gap-1.5 shrink-0">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      {/* Connection line to hub (right edge) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-3 bg-emerald-500/20 group-hover:bg-emerald-500/50 transition-colors" />
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function IntegrationSection({ data }: IntegrationSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <section id={data.id} className="relative z-10 bg-[#050505] py-16 lg:py-48 overflow-hidden text-white" data-theme="dark">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-32">

          {/* Right/Top: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
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
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-white/50 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const icons = [LinkIcon, Workflow, Network];
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-black transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-white/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left/Bottom: Integration Hub Illustration */}
          <div className="relative lg:mt-0 lg:w-1/2">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-900 border border-white/5 shadow-2xl overflow-hidden"
            >
              {/* Background radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)]" />
              {/* dot grid */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

              <div className="relative z-10 p-5 sm:p-8 flex flex-col gap-6">

                {/* ── Header bar ── */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Qlozet Sync Engine</span>
                    <span className="font-display text-lg font-medium text-white leading-none">Integration Hub</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                    <Zap className="h-3 w-3 text-emerald-400" />
                    <span className="font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-widest">All Systems Live</span>
                  </div>
                </div>

                {/* ── Hub + spokes layout ── */}
                <div className="flex items-center gap-3 sm:gap-5">

                  {/* Left column: top 3 services */}
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    {integrations.slice(0, 3).map((int) => (
                      <IntegrationNode key={int.label} {...int} inView={inView} />
                    ))}
                  </div>

                  {/* Center: Hub node + animated pipes */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    {/* Top pipe */}
                    <div className="relative h-8 w-px bg-emerald-500/15 overflow-hidden">
                      <DataPacket delay={0.0} />
                    </div>

                    {/* Hub core */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-black shadow-[0_0_40px_rgba(16,185,129,0.2)]"
                    >
                      <DatabaseZap className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400" />
                      {/* Ping ring */}
                      <div className="absolute inset-0 rounded-2xl border border-emerald-500/40 animate-[ping_2.5s_ease-in-out_infinite]" />
                      {/* Label */}
                      <div className="absolute -bottom-6 whitespace-nowrap rounded-full bg-emerald-500 px-2 py-0.5">
                        <span className="font-mono text-[7px] font-bold text-white uppercase tracking-widest">Core</span>
                      </div>
                    </motion.div>

                    {/* Bottom pipe */}
                    <div className="relative h-10 w-px bg-emerald-500/15 mt-2 overflow-hidden">
                      <DataPacket delay={0.7} />
                    </div>
                  </div>

                  {/* Right column: bottom 3 services */}
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    {integrations.slice(3).map((int) => (
                      <IntegrationNode key={int.label} {...int} inView={inView} />
                    ))}
                  </div>
                </div>

                {/* ── Live activity feed ── */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="rounded-2xl border border-white/5 bg-black/40 p-3 sm:p-4 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/30">Live Activity</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  {[
                    { msg: "Measurement synced → Production queue", time: "now",   color: "text-emerald-400" },
                    { msg: "Order ORD-7921 profile matched",         time: "2s",   color: "text-white/50" },
                    { msg: "Shipper notified: size data ready",      time: "14s",  color: "text-white/40" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.0 + i * 0.15 }}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <ArrowRight className="h-3 w-3 shrink-0 text-emerald-500/50" />
                        <span className={`font-mono text-[9px] truncate ${item.color}`}>{item.msg}</span>
                      </div>
                      <span className="font-mono text-[8px] text-white/20 shrink-0">{item.time}</span>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
