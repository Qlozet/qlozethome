"use client";

import { motion } from "framer-motion";
import { Check, ShoppingBag, ShieldCheck, CreditCard, Sparkles } from "lucide-react";

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

            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-ui text-lg text-black/70">{feature}</span>
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

          {/* Right: Checkout Console */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2"
            >
              {/* Checkout Header */}
              <div className="flex items-center justify-between pb-6 border-b border-black/5">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-black/40" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/40">Bag / 01 Item</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E1C01]/10 border border-[#3E1C01]/20">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#3E1C01]" />
                  <span className="font-mono text-[7px] font-bold uppercase tracking-widest text-[#3E1C01] leading-none">Secured</span>
                </div>
              </div>

              {/* Product Item */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="h-20 w-20 rounded-2xl overflow-hidden shadow-md shrink-0">
                  <img src="/image/bespoke-kaftan-brown-5.png" alt="Product" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-display text-sm font-bold text-black">Bespoke Kaftan</span>
                  <span className="font-ui text-[10px] text-black/40">Custom Tailored · Mandarin Collar</span>
                  <span className="font-ui text-[10px] text-black/30">Size: Custom Fit</span>
                </div>
                <div className="ml-auto flex items-center font-display text-sm font-bold text-black">$240.00</div>
              </motion.div>

              {/* Delivery Option */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/5"
              >
                <Sparkles className="h-4 w-4 text-[#3E1C01]" />
                <span className="font-ui text-[10px] text-black/60">Express Delivery</span>
                <span className="ml-auto font-display text-[10px] font-bold text-[#3E1C01] uppercase tracking-widest">FREE</span>
              </motion.div>

              {/* Pricing Summary */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-3 py-6 border-t border-black/5"
              >
                <div className="flex justify-between font-ui text-[10px] uppercase tracking-widest text-black/40">
                  <span>Order Subtotal</span>
                  <span>$240.00</span>
                </div>
                <div className="flex justify-between font-ui text-[10px] uppercase tracking-widest text-black/40">
                  <span>Logistics & Transit</span>
                  <span className="text-[#3E1C01] font-bold">FREE</span>
                </div>
                <div className="flex justify-between font-display text-lg font-bold text-black pt-2">
                  <span>Total Amount</span>
                  <span>$240.00</span>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/5"
              >
                <CreditCard className="h-4 w-4 text-black/20" />
                <span className="font-mono text-[9px] text-black/40 tracking-[0.2em]">•••• •••• •••• 4242</span>
                <span className="ml-auto font-display text-[8px] font-bold uppercase tracking-widest text-black/30">Visa</span>
              </motion.div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-16 w-full items-center justify-center rounded-2xl bg-black text-white font-display text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow-xl"
              >
                Confirm & Transit
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
