"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function VendorPartnershipCTA() {
  const points = [
    "Continuous platform improvements",
    "Tools built for long-term growth",
    "Support when you need it"
  ];

  return (
    <section className="relative py-32 sm:py-48 bg-black text-white overflow-hidden" data-theme="dark">
      
      {/* Background Image Subdued */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <img src="/image/woman.png" className="w-full h-full object-cover grayscale" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[94rem] px-6 relative z-10">
        
        {/* Section 7: Built for Your Success */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 lg:mb-48 border-b border-white/20 pb-24 lg:pb-32">
           <div className="flex-1">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-8 block">07 // The Partnership</span>
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="font-display max-w-4xl text-5xl sm:text-7xl font-medium tracking-tight text-white mb-8"
              >
                 We Grow<br/>When You Grow.
              </motion.h2>
              <p className="font-ui text-base leading-relaxed text-white/50 sm:text-lg max-w-md italic">
                 Qlozet is designed to support your journey—not just host your products.
              </p>
           </div>
           
           <div className="flex-1 flex flex-col justify-center">
              <ul className="space-y-8 mb-16">
                 {points.map((point, i) => (
                    <motion.li 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-center gap-4 text-2xl sm:text-3xl font-display text-white"
                    >
                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                          <Check className="h-4 w-4 text-white" />
                       </span>
                       {point}
                    </motion.li>
                 ))}
              </ul>
              <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="font-ui text-base leading-relaxed text-white/50 sm:text-lg"
              >
                 You're not just a vendor—<br/>you're a partner.
              </motion.p>
           </div>
        </div>

        {/* Closing CTA */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
           <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display max-w-4xl text-5xl sm:text-7xl font-medium leading-[1] tracking-tight text-white mb-12"
           >
              Your Next Level<br/>
              <span className="text-zinc-600 block mt-2">Starts Here.</span>
           </motion.h2>

           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-ui text-base leading-relaxed text-white/50 sm:text-lg mb-16 italic"
           >
              Join a platform built to help you succeed in modern fashion.
           </motion.p>

           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex max-sm:flex-col gap-6 sm:gap-12 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-24 border-b border-white/10 pb-12"
           >
              <span>More customers.</span>
              <span>More control.</span>
              <span>More growth.</span>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group inline-block"
           >
              <Link 
                 href="/auth/vendor/register"
                 className="relative flex items-center justify-between min-w-[280px] px-10 py-6 bg-white text-[#3A3A3A] rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] transform transition-transform hover:scale-[1.02] active:scale-95"
              >
                 Start Selling Today
                 <div className="w-10 h-10 rounded-full bg-[#3A3A3A] flex items-center justify-center -mr-2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-5 w-5 text-white" />
                 </div>
              </Link>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
