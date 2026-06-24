"use client";

import { motion } from "framer-motion";
import { Layers, ShoppingBag, Users, Truck, ArrowDown, Package } from "lucide-react";

type ResourceData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type ResourceFlexibilitySectionProps = {
  data: ResourceData;
};

export function ResourceFlexibilitySection({ data }: ResourceFlexibilitySectionProps) {
  const sources = [
    {
      icon: ShoppingBag,
      label: "Your Inventory",
      desc: "In-house fabric stock",
      swatches: [
        { color: "#292524", name: "Charcoal" },
        { color: "#78716c", name: "Stone" },
        { color: "#d6d3d1", name: "Cream" },
      ],
      count: "24 fabrics",
    },
    {
      icon: Users,
      label: "Customer Supplied",
      desc: "Client sends their own material",
      swatches: [
        { color: "#1e3a5f", name: "Navy" },
        { color: "#3b82f6", name: "Royal" },
        { color: "#93c5fd", name: "Sky" },
      ],
      count: "Per order",
    },
    {
      icon: Truck,
      label: "Partner Network",
      desc: "Source from external vendors",
      swatches: [
        { color: "#064e3b", name: "Forest" },
        { color: "#059669", name: "Emerald" },
        { color: "#6ee7b7", name: "Mint" },
      ],
      count: "150+ options",
    },
  ];

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-24">
          <div className="flex flex-col gap-10 lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/40 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-white transition-all shadow-sm"><Layers className="h-4 w-4" strokeWidth={1.5} /></div>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#111111]/30">{data.closing}</motion.p>
          </div>

          {/* Left: Source Panel */}
          <div className="relative lg:w-1/2 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-white border border-brand-darker/[0.06] shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="px-7 pt-7 pb-5 border-b border-brand-darker/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-brand-darker text-white flex items-center justify-center shadow-lg">
                    <Package className="h-4 w-4" />
                  </div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#111111]">Fabric Sources</span>
                </div>
                <span className="font-mono text-[9px] text-brand-darker/20">3 active</span>
              </div>

              {/* Source Cards */}
              <div className="px-5 py-5 flex flex-col gap-3">
                {sources.map((source, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12 }}
                    className="rounded-2xl bg-brand-light border border-brand-darker/[0.04] p-5 flex items-start justify-between group hover:bg-white hover:shadow-lg hover:border-brand-darker/10 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-white border border-brand-darker/5 flex items-center justify-center shadow-sm group-hover:bg-brand-darker group-hover:text-white transition-all">
                        <source.icon className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-[#111111]/70">{source.label}</span>
                        <span className="font-ui text-[8px] text-[#111111]/25">{source.desc}</span>
                        <span className="font-mono text-[8px] font-bold text-brand-darker/15 mt-1">{source.count}</span>
                      </div>
                    </div>

                    {/* Swatches with tooltips */}
                    <div className="flex flex-col gap-1.5 items-end">
                      <div className="flex -space-x-1.5">
                        {source.swatches.map((sw, si) => (
                          <motion.div
                            key={si}
                            initial={{ scale: 0, rotate: -30 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 + si * 0.06, type: "spring", stiffness: 300 }}
                            className="h-7 w-7 rounded-full border-[2.5px] border-white shadow-md hover:scale-125 hover:z-10 transition-transform cursor-pointer"
                            style={{ backgroundColor: sw.color }}
                            title={sw.name}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center gap-0.5">
                  {[0, 1, 2].map(d => (
                    <motion.div
                      key={d}
                      animate={{ y: [0, 3, 0], opacity: [0.15, 0.5, 0.15] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.15 }}
                      className="h-1 w-1 rounded-full bg-brand-darker/25"
                    />
                  ))}
                </div>
              </div>

              {/* Destination */}
              <div className="px-5 pb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="rounded-2xl bg-brand-darker text-white p-5 flex items-center justify-between group hover:scale-[1.01] transition-transform"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Layers className="h-4 w-4 text-white/60" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/80">Your Workshop</span>
                      <span className="font-ui text-[8px] text-white/30">All sources → One unified flow</span>
                    </div>
                  </div>
                  <div className="flex -space-x-1">
                    {sources.flatMap(s => s.swatches).slice(0, 5).map((sw, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + i * 0.04, type: "spring" }}
                        className="h-4 w-4 rounded-full border-2 border-brand-darker"
                        style={{ backgroundColor: sw.color }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-darker/10 shadow-sm" />
    </section>
  );
}
