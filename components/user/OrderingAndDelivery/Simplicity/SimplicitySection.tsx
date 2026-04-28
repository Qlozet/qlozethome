"use client";

import { motion } from "framer-motion";
import { Sparkles, Package, Truck, CheckCircle2, Layout, Layers, RefreshCcw } from "lucide-react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type SimplicitySectionProps = {
  data: SectionData;
};

const FLOW_NODES = [
  { icon: Sparkles, label: "Design", color: "bg-black" },
  { icon: Package, label: "Produce", color: "bg-zinc-700" },
  { icon: Truck, label: "Transit", color: "bg-zinc-600" },
  { icon: CheckCircle2, label: "Deliver", color: "bg-[#3E1C01]" },
];

export function SimplicitySection({ data }: SimplicitySectionProps) {
  return (
    <section id="simplicity" className="relative w-full bg-zinc-50 py-24 lg:py-40 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-2xl text-black/40 font-ui font-normal tracking-normal">{data.subtitle}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-6">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                    {i === 0 ? <Layout className="h-4 w-4" /> :
                     i === 1 ? <Layers className="h-4 w-4" /> :
                     <RefreshCcw className="h-4 w-4" />}
                  </div>
                  <span className="font-ui text-lg text-black/70 italic">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-sm font-medium italic text-black/30"
            >
              {data.footer}
            </motion.p>
          </div>

          {/* Right: Connected Flow Visual */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-square w-full max-w-md"
            >
              {/* Central Card */}
              <div className="relative z-10 h-full w-full rounded-[4rem] bg-white shadow-2xl border border-black/5 p-10 sm:p-12 flex flex-col items-center justify-center text-center gap-10 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                {/* Header */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 shadow-xl">
                    <Layout className="h-8 w-8 text-white/20" />
                  </div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black">Qlozet Core</span>
                  <p className="font-ui text-xs text-black/40 max-w-[180px]">Design, Vendor, and Logistics Unified in One Engine.</p>
                </div>

                {/* Connected Flow Nodes */}
                <div className="flex items-center gap-3 w-full max-w-xs">
                  {FLOW_NODES.map((node, i) => {
                    const Icon = node.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 flex-1">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                          className={`h-10 w-10 rounded-xl ${node.color} flex items-center justify-center shadow-lg shrink-0`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </motion.div>
                        {i < FLOW_NODES.length - 1 && (
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                            className="h-px bg-black/10 flex-1"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Node Labels */}
                <div className="flex items-center gap-3 w-full max-w-xs">
                  {FLOW_NODES.map((node, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex-1 text-center font-mono text-[7px] font-bold uppercase tracking-widest text-black/30"
                    >
                      {node.label}
                    </motion.span>
                  ))}
                </div>

                {/* Seal */}
                <div className="h-1 w-20 bg-black/5 rounded-full" />
              </div>

              {/* Floating Labels */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-4 p-3 bg-white rounded-xl shadow-xl border border-black/5 font-mono text-[7px] font-bold uppercase tracking-widest text-black/40 sm:left-8"
              >
                All-in-One Engine
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-4 p-3 bg-white rounded-xl shadow-xl border border-black/5 font-mono text-[7px] font-bold uppercase tracking-widest text-black/40 sm:right-8"
              >
                Zero Friction
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
