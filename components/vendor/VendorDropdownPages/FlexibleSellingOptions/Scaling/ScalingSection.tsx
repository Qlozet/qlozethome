"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, ShoppingBag, Palette, Sparkles, Lock, ArrowRight } from "lucide-react";

type ScaleData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type ScalingSectionProps = {
  data: ScaleData;
};

export function ScalingSection({ data }: ScalingSectionProps) {
  const milestones = [
    {
      stage: "01",
      label: "Start with Basics",
      desc: "List your first products and go live",
      icon: ShoppingBag,
      items: ["5 Products", "Standard Photos", "Simple Pricing"],
      done: true,
    },
    {
      stage: "02",
      label: "Add Customization",
      desc: "Enable customers to modify styles",
      icon: Palette,
      items: ["Style Options", "Custom Sizing", "+15% Revenue"],
      done: true,
    },
    {
      stage: "03",
      label: "Scale Your Catalog",
      desc: "Full product ecosystem and analytics",
      icon: Sparkles,
      items: ["Unlimited Items", "Full Custom", "Advanced Analytics"],
      done: false,
    },
  ];

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/40 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm"><TrendingUp className="h-4 w-4" strokeWidth={1.5} /></div>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#3A3A3A]/30">{data.closing}</motion.p>
          </div>

          {/* Right: Growth Timeline */}
          <div className="relative lg:w-1/2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-md">
              <div className="flex flex-col gap-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.15 }}
                    className="relative flex gap-5"
                  >
                    {/* Track */}
                    <div className="flex flex-col items-center flex-shrink-0 w-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 300 }}
                        className={`h-10 w-10 rounded-full flex items-center justify-center z-10 shadow-lg ${
                          m.done
                            ? 'bg-[#3A3A3A] text-white'
                            : 'bg-zinc-100 border-2 border-dashed border-[#3A3A3A]/10 text-[#3A3A3A]/20'
                        }`}
                      >
                        {m.done ? <CheckCircle2 className="h-4 w-4" /> : <Lock className="h-3.5 w-3.5" />}
                      </motion.div>
                      {i < milestones.length - 1 && (
                        <div className="relative w-px flex-1 min-h-[16px]">
                          <div className="absolute inset-0 bg-zinc-100" />
                          {m.done && (
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: "100%" }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                              className="absolute top-0 left-0 right-0 bg-[#3A3A3A]"
                            />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Card */}
                    <div className={`flex-1 mb-5 rounded-2xl border p-5 transition-all duration-300 group cursor-pointer ${
                      m.done
                        ? 'bg-white border-[#3A3A3A]/[0.06] shadow-lg hover:shadow-xl hover:border-[#3A3A3A]/15 hover:scale-[1.01]'
                        : 'bg-[#F9F9F8]/50 border-dashed border-[#3A3A3A]/[0.06] opacity-50'
                    }`}>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-[9px] font-bold text-[#3A3A3A]/10">{m.stage}</span>
                          <span className="font-display text-[10px] font-bold uppercase tracking-wider text-[#3A3A3A]/70">{m.label}</span>
                        </div>
                        <div className={`h-7 w-7 rounded-lg flex items-center justify-center ${m.done ? 'bg-[#F9F9F8] border border-[#3A3A3A]/5' : 'bg-zinc-100'}`}>
                          <m.icon className="h-3.5 w-3.5 text-[#3A3A3A]/25" strokeWidth={1.5} />
                        </div>
                      </div>

                      <p className="font-ui text-[8px] text-[#3A3A3A]/25 mb-3">{m.desc}</p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {m.items.map((item, j) => (
                          <motion.span
                            key={j}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 + j * 0.05 }}
                            className={`px-2.5 py-1.5 rounded-lg font-display text-[7px] font-bold uppercase tracking-wider ${
                              m.done
                                ? 'bg-[#F9F9F8] border border-[#3A3A3A]/5 text-[#3A3A3A]/40'
                                : 'bg-zinc-100 text-[#3A3A3A]/10'
                            }`}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Growth footer */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-center pt-3"
              >
                <span className="font-display text-[7px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/15">Unlock features as you grow</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#3A3A3A]/10 shadow-sm" />
    </section>
  );
}
