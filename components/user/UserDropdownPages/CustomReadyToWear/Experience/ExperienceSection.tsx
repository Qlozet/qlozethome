"use client";

import { useRef } from "react";
import { LayoutGrid, Wand2, Store, CreditCard, Gem, LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  LayoutGrid: LayoutGrid,
  Wand2: Wand2,
  Store: Store,
  CreditCard: CreditCard
};

type Step = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type ExperienceData = {
  badge: string;
  title: string;
  description: string;
  steps: Step[];
};

type ExperienceSectionProps = {
  data: ExperienceData;
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id="experience" className="relative z-20 bg-white py-32 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        {/* Section Header */}
        <div className="mb-32 flex flex-col items-center gap-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
             {/* Section 'Label' Marker */}
             <div className="flex h-12 w-32 items-center justify-center border-2 border-black/10 bg-zinc-50 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 shadow-sm">
                {data.badge}
             </div>
             
             <h2 className="max-w-4xl font-display text-5xl font-medium leading-[1.1] tracking-tight text-black sm:text-7xl lg:text-8xl">
               {data.title}
             </h2>
             
             <p className="max-w-2xl font-ui text-lg text-black/50 sm:text-xl md:text-2xl">
               {data.description}
             </p>
          </motion.div>
        </div>

        {/* Alternating Experience Timeline */}
        <div className="flex flex-col gap-32 lg:gap-48">
          {data.steps.map((step, index) => {
             const Icon = iconMap[step.icon] || Gem;
             const isEven = index % 2 === 0;
             
             return (
               <div 
                 key={step.id} 
                 className={`flex flex-col lg:items-center lg:gap-32 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
               >
                 {/* Content Side */}
                 <div className="flex flex-col gap-10 lg:w-1/2">
                   <div className="flex flex-col gap-6">
                     <motion.div 
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-sm font-bold uppercase tracking-[0.4em] text-black/20"
                     >
                        Phase 0{index + 1}
                     </motion.div>
                     <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl font-medium tracking-tight text-black sm:text-6xl"
                     >
                        {step.title}
                     </motion.h3>
                     <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-xl font-ui text-lg leading-relaxed text-black/40 sm:text-xl"
                     >
                        {step.description}
                     </motion.p>
                   </div>
                 </div>

                 {/* Visual Side - Tech Mockup Aesthetic */}
                 <div className="mt-12 lg:mt-0 lg:w-1/2 flex items-center justify-center">
                    <motion.div 
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       className="relative h-96 w-96 rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl flex items-center justify-center group overflow-hidden"
                    >
                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02),transparent)]" />
                       <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl group-hover:scale-110 transition-transform duration-700">
                          <Icon className="h-10 w-10 text-black/40" strokeWidth={1.5} />
                       </div>
                       
                       {/* Decorative tech lines */}
                       <div className="absolute top-1/2 left-0 right-0 h-px bg-black opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" />
                       <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" />
                    </motion.div>
                 </div>
               </div>
             )
          })}
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-1 h-1 rounded-full bg-black/20" />
      </div>
    </section>
  );
}
