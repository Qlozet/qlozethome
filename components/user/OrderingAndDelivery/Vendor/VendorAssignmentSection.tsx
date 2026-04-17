"use client";

import { motion } from "framer-motion";
import { UserCheck, Star, Zap, Award } from "lucide-react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type VendorAssignmentSectionProps = {
  data: SectionData;
};

export function VendorAssignmentSection({ data }: VendorAssignmentSectionProps) {
  const skills = [
    { name: "Silk Tailoring", value: 98, color: "bg-emerald-500" },
    { name: "Modular Assembly", value: 92, color: "bg-zinc-900" },
    { name: "Precision Cutting", value: 95, color: "bg-emerald-500/40" },
  ];

  return (
    <section id="vendor" className="relative w-full bg-zinc-50 py-24 lg:py-40 overflow-hidden" data-theme="light">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
         {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute h-px w-full bg-black" style={{ top: `${i * 10}%` }} />
         ))}
      </div>

      <div className="mx-auto max-w-[94rem] px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Right: Content (Reversed layout for rhythm) */}
          <div className="flex flex-col gap-10 lg:w-1/2 order-2 lg:order-2">
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

            <div className="flex flex-col gap-8">
              {data.features.map((feature, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="flex items-center gap-6"
                >
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-sm">
                      <Star className="h-5 w-5 text-zinc-900" />
                   </div>
                   <div className="flex flex-col">
                      <span className="font-display text-lg font-bold text-black">{feature}</span>
                      <div className="h-0.5 w-12 bg-black/10 mt-1" />
                   </div>
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

          {/* Left: The Match-making Visual */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2 order-1 lg:order-1">
             <div className="relative mx-auto w-full max-w-md p-8 lg:p-12">
                {/* Background Card */}
                <div className="relative z-10 w-full rounded-[4rem] bg-white shadow-2xl border border-black/5 p-8 flex flex-col gap-10">
                   {/* Profile / Badge */}
                   <div className="flex items-center gap-6">
                      <div className="relative h-20 w-20 rounded-full bg-zinc-900 overflow-hidden flex items-center justify-center border-4 border-white shadow-xl">
                         <UserCheck className="h-10 w-10 text-white" />
                         <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-dashed border-white/20 rounded-full" 
                         />
                      </div>
                      <div className="flex flex-col gap-1">
                         <div className="flex items-center gap-2">
                            <span className="font-display text-xl font-bold text-black underline decoration-2 decoration-emerald-500 underline-offset-4 tracking-tighter italic lg:text-2xl">Atelier 08-D</span>
                            <Zap className="h-4 w-4 text-emerald-500 animate-pulse fill-emerald-500" />
                         </div>
                         <span className="font-ui text-[10px] uppercase tracking-widest text-black/40">Verified Expert Vendor</span>
                      </div>
                   </div>

                   {/* Skills Matrix */}
                   <div className="flex flex-col gap-6">
                      {skills.map((skill, i) => (
                        <div key={i} className="flex flex-col gap-3">
                           <div className="flex justify-between items-center px-1">
                              <span className="font-display text-[9px] font-bold uppercase tracking-widest text-black/40">{skill.name}</span>
                              <span className="font-mono text-[9px] font-bold text-black">{skill.value}%</span>
                           </div>
                           <div className="relative h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                              <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${skill.value}%` }}
                                 transition={{ delay: 0.5 + i * 0.2, duration: 1.5, ease: "easeOut" }}
                                 className={`h-full ${skill.color} rounded-full`}
                              />
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Load Status */}
                   <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-zinc-50">
                         <Award className="h-4 w-4 text-black/30" />
                         <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-black">Master Tailor Verified</span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                         <span className="font-ui text-[9px] text-black/40">Current Load</span>
                         <span className="font-display text-[10px] font-bold text-emerald-600 tracking-widest uppercase">High Efficiency</span>
                      </div>
                   </div>
                </div>

                {/* Floating "Matched" Callout */}
                <motion.div 
                   initial={{ scale: 0, rotate: -20, x: -20 }}
                   whileInView={{ scale: 1, rotate: -12, x: 0 }}
                   className="absolute -top-4 -left-4 z-20 h-16 w-32 bg-emerald-500 text-white rounded-2xl shadow-2xl flex items-center justify-center font-display text-[10px] font-bold uppercase tracking-widest border-4 border-white lg:h-20 lg:w-40 lg:text-xs"
                >
                   Hand-Selected
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
