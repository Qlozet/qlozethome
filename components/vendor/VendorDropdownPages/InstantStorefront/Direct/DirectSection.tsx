"use client";

import { motion } from "framer-motion";
import { MessageSquare, Heart, ShieldCheck, User } from "lucide-react";

const iconMap: any = {
  "Direct Order Management": ShieldCheck,
  "Real-time Communication": MessageSquare,
  "Trust & Loyalty Building": Heart,
};

type DirectData = {
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type DirectSectionProps = {
  data: DirectData;
};

export function DirectSection({ data }: DirectSectionProps) {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-12 lg:w-1/2">
            <div className="flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display max-w-4xl text-5xl sm:text-7xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A]"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-ui text-base leading-relaxed text-[#3A3A3A]/50 sm:text-lg max-w-xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {data.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9F9F8] border border-zinc-100 transition-all group-hover:bg-[#3A3A3A] group-hover:text-white">
                    {(() => {
                        const Icon = iconMap[feature] || MessageSquare;
                        return <Icon className="h-5 w-5" strokeWidth={1.5} />;
                    })()}
                  </div>
                  <span className="font-ui text-lg font-medium text-[#3A3A3A]/70 group-hover:text-[#3A3A3A]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Chat/Interaction UI */}
          <div className="lg:w-1/2 flex justify-center items-center">
             <div className="relative w-full max-w-md p-6 sm:p-10 bg-[#F9F9F8] rounded-[2rem] sm:rounded-[3rem] border border-zinc-100 shadow-xl overflow-hidden group">
                <div className="flex flex-col gap-6 relative z-10">
                   <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="bg-white rounded-3xl p-6 shadow-sm border border-white/50 w-4/5 self-start"
                   >
                     <span className="font-ui text-sm text-[#3A3A3A]/60">Can I customize the sleeves on this piece?</span>
                   </motion.div>
                   
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2 }}
                     className="bg-[#3A3A3A] rounded-3xl p-6 shadow-xl w-4/5 self-end"
                   >
                     <span className="font-ui text-sm text-white">Absolutely! Just list it in your measurement specification.</span>
                   </motion.div>

                   <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.4 }}
                     className="flex items-center gap-4 bg-emerald-50 text-emerald-700 px-6 py-4 rounded-2xl border border-emerald-100 self-center"
                   >
                     <ShieldCheck className="h-4 w-4" />
                     <span className="font-display text-[10px] font-bold uppercase tracking-widest">New Order Confirmed</span>
                   </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-200/50 via-transparent to-transparent pointer-events-none" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
