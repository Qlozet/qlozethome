"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, ShoppingBag, ShieldCheck } from "lucide-react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type OrderingSectionProps = {
  data: SectionData;
};

export function OrderingSection({ data }: OrderingSectionProps) {
  return (
    <section id="ordering" className="relative w-full bg-white py-24 lg:py-40" data-theme="light">
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

            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="flex items-center gap-4 group"
                >
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                      <Check className="h-4 w-4" />
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

          {/* Right: The UI Mockup (Checkout) */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto h-[500px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-8 flex flex-col gap-6 overflow-hidden">
                {/* Checkout Header */}
                <div className="flex items-center justify-between pb-6 border-b border-black/5">
                   <div className="flex items-center gap-3">
                      <ShoppingBag className="h-5 w-5 text-black/40" />
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/40">Bag / 01 Item</span>
                   </div>
                   <ShieldCheck className="h-5 w-5 text-emerald-500" />
                </div>

                {/* Items List */}
                <div className="flex flex-col gap-4">
                   <div className="flex gap-4">
                      <div className="h-20 w-20 rounded-2xl bg-zinc-900 overflow-hidden shadow-inner flex items-center justify-center">
                         <div className="h-12 w-1 transition-all bg-white/10 rounded-full" />
                      </div>
                      <div className="flex flex-col justify-center gap-1">
                         <span className="font-display text-sm font-bold text-black">A-Line Draft Outfit</span>
                         <span className="font-ui text-[10px] text-black/40">Custom Modular Silk / Black</span>
                      </div>
                      <div className="ml-auto flex items-center font-display text-sm font-bold text-black">$240.00</div>
                   </div>
                </div>

                {/* Pricing Summary */}
                <div className="mt-auto flex flex-col gap-3 py-6 border-t border-black/5">
                   <div className="flex justify-between font-ui text-[10px] uppercase tracking-widest text-black/40">
                      <span>Order Subtotal</span>
                      <span>$240.00</span>
                   </div>
                   <div className="flex justify-between font-ui text-[10px] uppercase tracking-widest text-black/40">
                      <span>Logistics & Transit</span>
                      <span className="text-emerald-500 font-bold">FREE</span>
                   </div>
                   <div className="flex justify-between font-display text-lg font-bold text-black pt-2">
                      <span>Total Amount</span>
                      <span>$240.00</span>
                   </div>
                </div>

                {/* Checkout Button */}
                <motion.div 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="flex h-16 w-full items-center justify-center rounded-2xl bg-black text-white font-display text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow-xl"
                >
                   Confirm & Transit
                </motion.div>

                {/* Card Payment Overlay (Subtle Gradient) */}
                <div className="absolute top-1/2 -right-20 h-40 w-80 bg-gradient-to-br from-white/80 to-zinc-200/20 backdrop-blur-xl border border-black/5 rounded-3xl shadow-2xl rotate-12 flex flex-col p-6 gap-4 opacity-50 xl:opacity-100">
                    <div className="flex justify-between items-start">
                       <CreditCard className="h-8 w-8 text-black/20" />
                       <span className="font-mono text-[9px] text-black/40 tracking-[0.2em] font-bold uppercase">SECURE PASS</span>
                    </div>
                    <div className="mt-auto font-mono text-sm tracking-[0.3em] text-black/30">**** **** **** 4242</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
