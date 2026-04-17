"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Lightbulb, BrainCircuit, ArrowRight, TrendingUp, AlertCircle } from "lucide-react";

const iconMap: any = { Sparkles, Target, Lightbulb };

type Feature = { title: string; icon: string };
type AssistantData = { badge: string; title: string; description: string; features: Feature[] };
type AssistantSectionProps = { data: AssistantData };

const AI_MESSAGES = [
  { type: "insight", text: "Your Ankara Maxi Dress is trending 3x above average. Consider restocking and featuring it in your storefront.", icon: TrendingUp, time: "2m ago" },
  { type: "action", text: "Customers who buy your Agbada Set also look at Kaftans. Add a Kaftan to capture cross-sell revenue.", icon: Target, time: "15m ago" },
  { type: "alert", text: "Your conversion rate dropped 12% this week. Try adjusting pricing on your top 3 products.", icon: AlertCircle, time: "1h ago" },
];

export function AIAssistantSection({ data }: AssistantSectionProps) {
  return (
    <section className="relative z-30 bg-[#050505] px-6 py-32 lg:py-48 overflow-hidden" data-theme="dark">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 mx-auto flex max-w-[94rem] flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
        {/* Left: Content */}
        <div className="lg:sticky lg:top-40 lg:w-5/12">
          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
              <BrainCircuit className="h-7 w-7 text-white/40" strokeWidth={1} />
            </motion.div>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">{data.badge}</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-4xl font-medium leading-[1.05] tracking-tighter text-white sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="max-w-md font-ui text-lg text-white/40">{data.description}</motion.p>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 mt-4">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Sparkles;
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-sm font-medium text-white/60 group-hover:text-white transition-colors">{feature.title}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Right: AI Chat Console */}
        <div className="lg:w-7/12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-[3rem] bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06]">
            
            {/* Console Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/5 mb-6">
              <div className="flex items-center gap-3">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="h-8 w-8 rounded-xl bg-white text-black flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5" />
                </motion.div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">AI Assistant</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[8px] font-bold text-emerald-400 uppercase tracking-widest">Analyzing</span>
              </div>
            </div>

            {/* AI Messages */}
            <div className="flex flex-col gap-4 mb-6">
              {AI_MESSAGES.map((msg, i) => {
                const Icon = msg.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="group bg-white/[0.03] border border-white/5 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:bg-white/[0.08] hover:border-white/10">
                    <div className="flex items-start gap-4">
                      <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${msg.type === 'insight' ? 'bg-emerald-500/10 border border-emerald-500/20' : msg.type === 'action' ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-amber-500/10 border border-amber-500/20'}`}>
                        <Icon className={`h-4 w-4 ${msg.type === 'insight' ? 'text-emerald-400' : msg.type === 'action' ? 'text-blue-400' : 'text-amber-400'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`font-mono text-[7px] font-bold uppercase tracking-widest ${msg.type === 'insight' ? 'text-emerald-400' : msg.type === 'action' ? 'text-blue-400' : 'text-amber-400'}`}>
                            {msg.type}
                          </span>
                          <span className="font-mono text-[7px] text-white/20">{msg.time}</span>
                        </div>
                        <p className="font-ui text-[11px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{msg.text}</p>
                      </div>
                      <ArrowRight className="h-3 w-3 text-white/10 shrink-0 mt-1 group-hover:text-white/30 transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Typing indicator */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}
              className="flex items-center gap-3 bg-white/[0.02] rounded-xl p-4 border border-white/5">
              <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <motion.div key={i} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.3 }}
                    className="h-1.5 w-1.5 rounded-full bg-white" />
                ))}
              </div>
              <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">AI is analyzing your latest sales data...</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
