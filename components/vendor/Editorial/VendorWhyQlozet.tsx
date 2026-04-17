"use client";

import { motion } from "framer-motion";

export function VendorWhyQlozet() {
  const features = [
    "Built specifically for fashion vendors",
    "Access to ready-to-buy customers",
    "Tools to manage, grow, and optimize your business"
  ];

  return (
    <section className="relative py-24 sm:py-32 lg:py-48 bg-white overflow-hidden text-black border-b border-black/5" data-theme="light">
      <div className="mx-auto w-full max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left: Vintage Photo Collage */}
          <div className="flex-1 w-full relative h-[400px] lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-0 w-2/3 h-4/5 bg-zinc-100 rounded-lg shadow-2xl overflow-hidden"
            >
              <img src="/image/fabric-swatch-1.jpg" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-3/5 h-2/3 bg-zinc-100 rounded-lg shadow-2xl overflow-hidden border-8 border-white"
            >
              <img src="/image/custom-outfit-4.webp" className="w-full h-full object-cover" />
            </motion.div>

            {/* Small accent label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-black/5"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-black">
                The Qlozet Studio
              </span>
            </motion.div>
          </div>

          {/* Right: Statement */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white mb-8"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                Why Qlozet?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tighter text-black mb-6"
            >
              More Than a Marketplace—<br />
              <span className="text-zinc-400 font-ui italic text-3xl sm:text-4xl lg:text-6xl tracking-normal">A Growth Platform.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-zinc-600 font-ui max-w-xl mb-12"
            >
              Qlozet gives you everything you need to run and scale your fashion business.
            </motion.p>

            <div className="space-y-6 lg:space-y-8 pl-4 lg:pl-8 border-l border-black/10">
              {features.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-lg sm:text-xl font-display font-medium text-black">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 mt-16"
            >
              You focus on creating. <span className="text-black inline-block ml-2 border-b border-black">We handle the rest.</span>
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
