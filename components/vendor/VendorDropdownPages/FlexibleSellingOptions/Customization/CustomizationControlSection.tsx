"use client";

import { motion } from "framer-motion";
import { Scissors, Lock, Unlock, ChevronDown } from "lucide-react";
import { useState } from "react";

type ControlData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type CustomizationControlSectionProps = {
  data: ControlData;
};

export function CustomizationControlSection({ data }: CustomizationControlSectionProps) {
  const [options, setOptions] = useState([
    { label: "Neckline", enabled: true, choices: ["V-Neck", "Round", "Boat", "Square"], selected: 0 },
    { label: "Sleeves", enabled: true, choices: ["Full", "3/4", "Short", "Cap"], selected: 2 },
    { label: "Fit", enabled: false, choices: ["Slim", "Regular", "Relaxed"], selected: 1 },
    { label: "Length", enabled: true, choices: ["Mini", "Midi", "Maxi"], selected: 1 },
  ]);

  const toggle = (idx: number) => {
    setOptions(prev => prev.map((o, i) => i === idx ? { ...o, enabled: !o.enabled } : o));
  };

  const selectChoice = (optIdx: number, choiceIdx: number) => {
    setOptions(prev => prev.map((o, i) => i === optIdx ? { ...o, selected: choiceIdx } : o));
  };

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/40 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm"><Scissors className="h-4 w-4" strokeWidth={1.5} /></div>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#3A3A3A]/30">{data.closing}</motion.p>
          </div>

          {/* Left: Interactive Style Editor */}
          <div className="relative lg:w-1/2 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-white border border-[#3A3A3A]/[0.06] shadow-2xl overflow-hidden">
              
              {/* Top Bar */}
              <div className="px-8 pt-8 pb-5 border-b border-[#3A3A3A]/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#F9F9F8]0 animate-pulse" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">Style Controls</span>
                </div>
                <span className="font-mono text-[9px] text-[#3A3A3A]/20">{options.filter(o => o.enabled).length}/{options.length} open</span>
              </div>

              {/* Options */}
              <div className="px-6 py-5 flex flex-col gap-3">
                {options.map((opt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                      opt.enabled 
                        ? 'bg-white border-[#3A3A3A]/[0.06] shadow-md' 
                        : 'bg-[#F9F9F8] border-[#3A3A3A]/[0.03] opacity-50'
                    }`}
                  >
                    {/* Option Header */}
                    <div className="px-5 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggle(i)}
                          className={`h-8 w-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                            opt.enabled ? 'bg-[#3A3A3A] text-white shadow-lg' : 'bg-zinc-200 text-zinc-400'
                          }`}
                        >
                          {opt.enabled ? <Unlock className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5" />}
                        </button>
                        <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#3A3A3A]/70">{opt.label}</span>
                      </div>
                      {opt.enabled && (
                        <motion.span 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }}
                          className="font-display text-[9px] font-bold text-[#3A3A3A]/30 uppercase tracking-wider"
                        >
                          {opt.choices[opt.selected]}
                        </motion.span>
                      )}
                    </div>

                    {/* Choice Pills */}
                    {opt.enabled && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-4"
                      >
                        <div className="flex gap-2">
                          {opt.choices.map((choice, ci) => (
                            <button
                              key={ci}
                              onClick={() => selectChoice(i, ci)}
                              className={`flex-1 h-9 rounded-xl font-display text-[8px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                ci === opt.selected
                                  ? 'bg-[#3A3A3A] text-white shadow-md scale-[1.03]'
                                  : 'bg-[#F9F9F8] text-[#3A3A3A]/30 border border-[#3A3A3A]/5 hover:text-[#3A3A3A]/60 hover:border-[#3A3A3A]/15'
                              }`}
                            >
                              {choice}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom Summary */}
              <div className="px-8 py-5 bg-[#F9F9F8] border-t border-[#3A3A3A]/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {options.map((o, i) => (
                    <div key={i} className={`h-2 w-2 rounded-full transition-colors ${o.enabled ? 'bg-[#F9F9F8]0' : 'bg-zinc-200'}`} />
                  ))}
                </div>
                <span className="font-display text-[8px] font-bold uppercase tracking-widest text-[#3A3A3A]/20">Vendor controls what customers see</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#3A3A3A]/10 shadow-sm" />
    </section>
  );
}
