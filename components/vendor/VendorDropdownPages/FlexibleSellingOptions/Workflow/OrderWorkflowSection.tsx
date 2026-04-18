"use client";

import { motion } from "framer-motion";
import { ListChecks, Zap, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

type WorkflowData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type OrderWorkflowSectionProps = {
  data: WorkflowData;
};

export function OrderWorkflowSection({ data }: OrderWorkflowSectionProps) {
  const workflows = [
    {
      icon: Zap,
      label: "Direct Orders",
      desc: "Customer orders, you produce. No approval step needed.",
      tag: "Fastest",
      tagColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      steps: ["Order Placed", "Auto-Accepted", "Production Starts"],
      active: true,
    },
    {
      icon: CheckCircle2,
      label: "Review & Approve",
      desc: "Review each request before accepting. Full control over what you take on.",
      tag: "Recommended",
      tagColor: "bg-sky-50 text-sky-600 border-sky-200",
      steps: ["Request In", "You Review", "Accept or Decline"],
      active: false,
    },
    {
      icon: MessageSquare,
      label: "Quote & Bid",
      desc: "Receive custom requests, send quotes, and negotiate before committing.",
      tag: "Custom Pricing",
      tagColor: "bg-amber-50 text-amber-600 border-amber-200",
      steps: ["Request In", "You Quote", "Client Accepts"],
      active: false,
    },
  ];

  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm"><ListChecks className="h-4 w-4" strokeWidth={1.5} /></div>
                  <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-black/30">{data.closing}</motion.p>
          </div>

          {/* Right: Three Workflow Lanes */}
          <div className="relative lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md flex flex-col gap-4"
            >
              {workflows.map((wf, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className={`rounded-2xl border shadow-lg p-6 transition-all duration-300 group cursor-pointer hover:shadow-xl hover:scale-[1.01] ${
                    wf.active
                      ? 'bg-black text-white border-black/20'
                      : 'bg-white border-black/[0.06]'
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-9 rounded-xl flex items-center justify-center shadow-sm ${
                        wf.active
                          ? 'bg-white/15 text-white'
                          : 'bg-zinc-50 border border-black/5 text-black/40 group-hover:bg-black group-hover:text-white group-hover:border-transparent'
                      } transition-all duration-300`}>
                        <wf.icon className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className={`font-display text-[11px] font-bold uppercase tracking-wider ${
                          wf.active ? 'text-white' : 'text-black/70'
                        }`}>{wf.label}</span>
                        <span className={`font-ui text-[8px] leading-snug ${
                          wf.active ? 'text-white/40' : 'text-black/25'
                        }`}>{wf.desc}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg font-display text-[7px] font-bold uppercase tracking-wider border flex-shrink-0 ${
                      wf.active
                        ? 'bg-white/10 text-white/60 border-white/10'
                        : wf.tagColor
                    }`}>{wf.tag}</span>
                  </div>

                  {/* Step Flow */}
                  <div className={`flex items-center gap-2 ${wf.active ? '' : 'opacity-40 group-hover:opacity-70'} transition-opacity duration-300`}>
                    {wf.steps.map((step, si) => (
                      <div key={si} className="flex items-center gap-2 flex-1 min-w-0">
                        <div className={`h-7 flex-1 rounded-lg flex items-center justify-center px-2 ${
                          wf.active
                            ? 'bg-white/10'
                            : 'bg-zinc-50 border border-black/[0.04]'
                        }`}>
                          <span className={`font-display text-[7px] font-bold uppercase tracking-wider truncate ${
                            wf.active ? 'text-white/60' : 'text-black/30'
                          }`}>{step}</span>
                        </div>
                        {si < wf.steps.length - 1 && (
                          <ArrowRight className={`h-2.5 w-2.5 flex-shrink-0 ${
                            wf.active ? 'text-white/20' : 'text-black/10'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Active Indicator */}
                  {wf.active && (
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-display text-[7px] font-bold uppercase tracking-widest text-white/30">Currently Selected</span>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Bottom Note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-center pt-2"
              >
                <span className="font-display text-[7px] font-bold uppercase tracking-[0.5em] text-black/15">Switch anytime • No lock-in</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}
