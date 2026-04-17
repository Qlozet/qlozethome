"use client";

import { motion } from "framer-motion";
import { Users, UserPlus, Layers, Handshake } from "lucide-react";

const iconMap = {
  Users,
  UserPlus,
  Layers
};

type Feature = {
  title: string;
  icon: keyof typeof iconMap;
};

type CollaborationData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type CollaborationSectionProps = {
  data: CollaborationData;
};

export function CollaborationSection({ data }: CollaborationSectionProps) {
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
    hidden: { opacity: 0, x: 20 },
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
    <section className="relative z-20 bg-[#050505] px-6 py-32 lg:py-48" data-theme="dark">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex max-w-[94rem] flex-col gap-20 lg:flex-row lg:items-start lg:gap-32"
      >
        {/* Left Typography Sticky Header */}
        <div className="lg:sticky lg:top-40 lg:w-5/12">
          <div className="flex flex-col gap-8">
             <motion.div 
               variants={itemVariants}
               className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 shadow-2xl backdrop-blur-md border border-white/10"
             >
               <Handshake className="h-8 w-8 text-white/40" strokeWidth={1} />
             </motion.div>
            <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
              {data.badge}
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-[5rem]">
              {data.title}
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-md font-ui text-lg text-white/40 sm:text-xl">
              {data.description}
            </motion.p>
          </div>
        </div>

        {/* Right Minimalist List */}
        <div className="flex flex-col lg:w-7/12 lg:pt-32">
          {data.features.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Users;
            
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`group flex flex-col gap-8 border-t border-white/10 py-12 transition-colors hover:border-white/30 sm:flex-row sm:items-start sm:gap-16 sm:py-16 ${index === data.features.length - 1 ? "border-b" : ""}`}
              >
                {/* Graphic Icon Container */}
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-110 sm:h-24 sm:w-24">
                  <Icon className="h-8 w-8 text-white/20 transition-colors duration-700 group-hover:text-white" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4 sm:pt-4">
                  <h3 className="font-display text-3xl font-medium text-white sm:text-4xl">
                    {item.title}
                  </h3>
                  <div className="h-px w-24 bg-white/10 transition-all duration-500 group-hover:w-32 group-hover:bg-white/30" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
