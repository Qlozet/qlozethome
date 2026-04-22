"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CreditCard, CheckCircle2 } from "lucide-react";

type PaymentData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type SecurePaymentsSectionProps = {
  data: PaymentData;
};

const PAYMENT_METHODS = [
  { name: "Bank Transfer", icon: "🏦", status: "Verified" },
  { name: "Card Payment", icon: "💳", status: "Secured" },
  { name: "Mobile Money", icon: "📱", status: "Active" }
];

export function SecurePaymentsSection({ data }: SecurePaymentsSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-black/30">{data.closing}</motion.p>
          </div>

          {/* Right: Secure Payment Illustration */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
               
               {/* Header */}
               <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-black text-white">
                        <Lock className="h-3.5 w-3.5" />
                     </div>
                     <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Payment Security</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                     <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Protected</span>
                  </div>
               </div>

               {/* Transaction Shield */}
               <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl border border-black/5 shadow-md p-5 mb-5 text-center"
               >
                  <div className="flex items-center justify-center mb-3">
                     <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center"
                     >
                        <ShieldCheck className="h-8 w-8 text-emerald-600" />
                     </motion.div>
                  </div>
                  <span className="font-display text-sm font-bold text-black uppercase tracking-wider block mb-1">End-to-End Encrypted</span>
                  <span className="font-mono text-[9px] text-black/40 uppercase tracking-widest">256-bit SSL · PCI DSS Compliant</span>
               </motion.div>

               {/* Payment Methods */}
               <div className="flex flex-col gap-3 mb-5">
                  <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Accepted Methods</span>
                  {PAYMENT_METHODS.map((method, i) => (
                     <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 4, transition: { type: "spring", stiffness: 300 } }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-4 p-3 rounded-xl bg-white border border-black/5 shadow-sm cursor-pointer hover:shadow-md transition-all"
                     >
                        <span className="text-xl">{method.icon}</span>
                        <span className="font-display text-[11px] font-bold text-black uppercase tracking-wider flex-1">{method.name}</span>
                        <div className="flex items-center gap-1.5">
                           <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                           <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">{method.status}</span>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* Trust Indicators */}
               <div className="flex items-center justify-center gap-6 pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2">
                     <Lock className="h-3 w-3 text-black/20" />
                     <span className="font-mono text-[8px] font-bold text-black/30 uppercase tracking-widest">Escrow Protected</span>
                  </div>
                  <div className="h-3 w-px bg-black/10" />
                  <div className="flex items-center gap-2">
                     <CreditCard className="h-3 w-3 text-black/20" />
                     <span className="font-mono text-[8px] font-bold text-black/30 uppercase tracking-widest">Instant Processing</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}
