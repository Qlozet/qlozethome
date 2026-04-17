"use client";

import { motion } from "framer-motion";
import { Inbox, Split, Eye, LayoutDashboard } from "lucide-react";

const iconMap = {
  Inbox,
  Split,
  Eye
};

type Feature = {
  title: string;
  icon: keyof typeof iconMap;
};

type OrderManagementData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type OrderManagementSectionProps = {
  data: OrderManagementData;
};

export function OrderManagementSection({ data }: OrderManagementSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section id={data.id} className="relative z-10 bg-white px-6 py-24 lg:py-40 border-t border-black/5" data-theme="light">
      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-8 text-center lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-black shadow-2xl"
          >
            <LayoutDashboard className="h-6 w-6 text-white" strokeWidth={1.5} />
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
            className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-7xl lg:text-[5.5rem]"
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl font-ui text-lg text-black/50 sm:text-xl md:text-2xl"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Inbox;
            
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative flex flex-col gap-10 overflow-hidden rounded-[3rem] bg-[#FAFAFA] p-10 transition-all duration-700 hover:bg-zinc-50 hover:shadow-2xl hover:shadow-black/5"
              >
                {/* Icon Container */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-black/40 transition-colors duration-700 group-hover:text-black" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
                    {feature.title}
                  </h3>
                  <div className="h-px w-16 bg-black/5 group-hover:w-24 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Abstract Visual Detail */}
                <div className="mt-auto h-32 w-full rounded-2xl bg-white/50 border border-black/5 flex items-center justify-center">
                  <div className="flex flex-col gap-2 w-full px-6">
                    <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: index === 1 ? "65%" : "100%" }}
                         transition={{ delay: 0.5, duration: 1 }}
                         className="h-full bg-black/10"
                       />
                    </div>
                    <div className="h-2 w-[70%] bg-black/5 rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
