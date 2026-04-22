"use client";

import { motion } from "framer-motion";
import { Map, LucideIcon, Share2 } from "lucide-react";

type DiscoverData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type DiscoverSectionProps = {
  data: DiscoverData;
};

export function DiscoverSection({ data }: DiscoverSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40"
              >
                {data.badge}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl"
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
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <Map className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-ui text-sm italic text-black/30"
            >
              {data.closing}
            </motion.p>
          </div>

          {/* Right: Premium Fabric Image Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto h-[500px] lg:h-[600px] w-full max-w-xl rounded-[3.5rem] bg-zinc-100 shadow-2xl overflow-hidden group"
            >
              {/* Actual Fabric Image */}
              <motion.div
                className="absolute inset-0 w-full h-full origin-center"
                style={{ backgroundImage: `url('/image/fabrics.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Sleek Overlay Gradient to ensure text contrast and premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Quality Badge */}
              <div className="absolute bottom-8 left-8 flex flex-col pointer-events-none">
                <span className="font-display text-[10px] font-bold tracking-widest text-white uppercase drop-shadow-md">Verified</span>
                <span className="font-display text-2xl font-medium text-white drop-shadow-md">Global Textiles</span>
              </div>

              {/* Center HUD Element */}
              <div className="absolute bottom-8 right-8 flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-white/20">
                <Share2 className="h-4 w-4 text-emerald-400 drop-shadow-md" />
                <span className="font-display text-[8px] font-bold uppercase tracking-widest text-white drop-shadow-md">Source Network Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
