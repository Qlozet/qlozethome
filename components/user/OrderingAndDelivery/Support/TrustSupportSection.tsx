"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, LifeBuoy, HeartHandshake } from "lucide-react";
import Link from "next/link";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type TrustSupportSectionProps = {
  data: SectionData;
};

export function TrustSupportSection({ data }: TrustSupportSectionProps) {
  return (
    <section id="support" className="relative w-full bg-white py-24 lg:py-40 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-2xl text-black/40 font-ui font-normal tracking-normal">{data.subtitle}</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="flex items-center gap-6 group"
                >
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                      <ShieldCheck className="h-5 w-5" />
                   </div>
                   <span className="font-ui text-lg text-black/70">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display text-sm font-medium italic text-black/30"
            >
               {data.footer}
            </motion.p>
          </div>

          {/* Right: The Support UI Visual */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-sm rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-8 flex flex-col gap-6 overflow-hidden min-h-[450px]">
                {/* Support Header */}
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <LifeBuoy className="h-6 w-6 text-black/40" />
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/40">24/7 Concierge</span>
                   </div>
                   <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Message Bubbles */}
                <div className="flex flex-col gap-4">
                   <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="p-4 rounded-2xl rounded-tl-none bg-white border border-black/5 shadow-sm max-w-[80%]"
                   >
                      <span className="font-ui text-sm text-black/70">"I'd like an update on the quality check for Batch #72-A."</span>
                   </motion.div>
                   <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      className="ml-auto p-4 rounded-2xl rounded-tr-none bg-zinc-900 border border-white/5 shadow-xl max-w-[80%] text-white"
                   >
                      <span className="font-ui text-sm text-white/90">"Absolutely! Master Tailor Alistair just approved the modular assembly. It moves to Transit shortly."</span>
                   </motion.div>
                </div>

                {/* Quick Actions */}
                <div className="mt-auto grid grid-cols-2 gap-3 pb-4">
                   <Link href="/waitlist" className="flex h-12 w-full items-center justify-center rounded-2xl bg-white border border-black/5 text-black font-display text-[8px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all">
                      Instant Chat
                   </Link>
                   <Link href="/waitlist" className="flex h-12 w-full items-center justify-center rounded-2xl bg-white border border-black/5 text-black font-display text-[8px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all">
                      Submit Ticket
                   </Link>
                </div>

                {/* Handwriting Accent */}
                <div className="absolute top-1/2 -right-8 flex flex-col gap-1 p-4 bg-white rounded-2xl border border-black/5 shadow-2xl rotate-12 pointer-events-none opacity-40">
                   <HeartHandshake className="h-8 w-8 text-rose-500/30" />
                   <span className="font-display text-[8px] font-bold text-black/20 uppercase tracking-widest italic">Resolving since 2024</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
