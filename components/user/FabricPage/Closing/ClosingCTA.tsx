"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ConversionData = {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
};

type ClosingCTAProps = {
  data: ConversionData;
};

export function ClosingCTA({ data }: ClosingCTAProps) {
  return (
    <section className="relative z-10 bg-[#3A3A3A] py-32 overflow-hidden text-white" data-theme="dark">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#3A3A3A]/40 via-[#2A2A2A] to-[#3A3A3A]" />
        <div 
           className="absolute inset-0 opacity-[0.05]"
           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '100px 100px'}}
        />
        {/* Subtle fabric wave */}
        <svg className="absolute w-full h-[150%] top-0 left-0 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
           <motion.path
             d="M -20,50 Q 30,20 80,50 T 120,50"
             fill="none"
             stroke="white"
             strokeWidth="0.5"
             animate={{ d: ["M -20,50 Q 30,20 80,50 T 120,50", "M -20,50 Q 30,80 80,50 T 120,50", "M -20,50 Q 30,20 80,50 T 120,50"]}}
             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-6 relative z-10 text-center flex flex-col items-center">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl mb-8"
         >
            {data.title}
         </motion.h2>
         
         <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-ui text-xl text-white/50 max-w-2xl mb-12"
         >
            {data.description}
         </motion.p>
         
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
         >
            <Link 
               href={data.primaryAction.href}
               className="group flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full font-display text-[12px] font-bold uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
            >
               <span>{data.primaryAction.label}</span>
               <div className="h-8 w-8 rounded-full bg-[#3A3A3A] flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="h-4 w-4 text-white" />
               </div>
            </Link>
         </motion.div>
      </div>
    </section>
  );
}
