"use client";

import { motion } from "framer-motion";
import { Store, Wand2, Workflow, Settings } from "lucide-react";

const iconMap = {
  Store,
  Wand2,
  Workflow
};

type Feature = {
  title: string;
  icon: keyof typeof iconMap;
};

type SupportData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type SupportSectionProps = {
  data: SupportData;
};

export function WorkflowSupportSection({ data }: SupportSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section className="relative z-10 bg-white px-6 py-24 lg:py-40 border-t border-black/5" data-theme="light">
      <div className="mx-auto max-w-[94rem]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left Column: Typography */}
          <div className="flex flex-col gap-8 lg:w-1/2">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex h-12 w-12 items-center justify-center rounded-xl bg-black shadow-2xl"
             >
               <Settings className="h-6 w-6 text-white" strokeWidth={1.5} />
             </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-7xl lg:text-[5rem]"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl font-ui text-lg text-black/50 sm:text-xl md:text-2xl"
            >
              {data.description}
            </motion.p>
          </div>

          {/* Right Column: Cards List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 flex flex-col gap-4 lg:mt-0 lg:w-1/2"
          >
            {data.features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap] || Workflow;
              
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group relative flex items-center gap-8 overflow-hidden rounded-[2.5rem] bg-[#FAFAFA] p-8 transition-all duration-700 hover:bg-black hover:scale-[1.02]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-110 group-hover:bg-white/10 group-hover:ring-white/20">
                    <Icon className="h-6 w-6 text-black/40 transition-colors duration-700 group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-black transition-colors duration-700 group-hover:text-white sm:text-3xl">
                    {feature.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
