"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Globe, Clock4, Package, MapPin, CheckCircle2 } from "lucide-react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type DeliverySectionProps = {
  data: SectionData;
};

export function DeliverySection({ data }: DeliverySectionProps) {
  return (
    <section id="delivery" className="relative w-full bg-white py-24 lg:py-40" data-theme="light">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                    {i === 0 ? <Clock4 className="h-4 w-4" /> :
                     i === 1 ? <ShieldCheck className="h-4 w-4" /> :
                     <Globe className="h-4 w-4" />}
                  </div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/60">{feature}</span>
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

          {/* Right: Delivery Status Card */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="relative rounded-[3rem] bg-zinc-900 border border-white/5 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-2">
                {/* Package Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="/image/bespoke-kaftan-brown-2.png" alt="Package" className="w-full h-full object-cover object-top opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />

                  <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                    <Truck className="h-3 w-3 text-white" />
                    <span className="font-mono text-[8px] font-bold text-white uppercase tracking-widest leading-none">In Transit</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="p-8 flex flex-col gap-6">
                  {/* Progress Bar */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">Delivery Progress</span>
                      <span className="font-mono text-[9px] font-bold text-[#EDEAEA]">78%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "78%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>

                  {/* Waypoint Steps */}
                  <div className="flex items-center gap-3">
                    {[
                      { icon: Package, label: "Packed", done: true },
                      { icon: Truck, label: "Shipped", done: true },
                      { icon: MapPin, label: "Nearby", done: false },
                      { icon: CheckCircle2, label: "Delivered", done: false },
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex-1 flex flex-col items-center gap-2"
                      >
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${step.done ? 'bg-[#EDEAEA]/20' : 'bg-white/5'}`}>
                          <step.icon className={`h-3.5 w-3.5 ${step.done ? 'text-[#EDEAEA]' : 'text-white/20'}`} />
                        </div>
                        <span className={`font-mono text-[6px] font-bold uppercase tracking-widest ${step.done ? 'text-[#EDEAEA]' : 'text-white/20'}`}>
                          {step.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Courier & ETA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Truck className="h-4 w-4 text-white/40" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-display text-[9px] font-bold text-white uppercase tracking-widest">Express Courier</span>
                        <span className="font-ui text-[8px] text-white/30">DHL Express · Tracked</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">ETA</span>
                      <span className="font-display text-sm font-bold text-white">3:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -right-4 h-20 w-20 bg-white rounded-full shadow-2xl border border-black/5 flex items-center justify-center p-4 z-20"
              >
                <div className="flex flex-col items-center gap-1 text-center">
                  <ShieldCheck className="h-5 w-5 text-[#3E1C01]" />
                  <span className="font-display text-[6px] font-bold uppercase tracking-widest leading-tight">Secured</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
