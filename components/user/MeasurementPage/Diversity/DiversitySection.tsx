"use client";

import { motion } from "framer-motion";
import { Users, Heart, Globe } from "lucide-react";

type DiversityData = {
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type DiversitySectionProps = {
  data: DiversityData;
};

const iconMap: any = {
  "Inclusive sizing and styling": Users,
  "African fashion support": Globe,
  "Unique identity focus": Heart,
};

export function DiversitySection({ data }: DiversitySectionProps) {
  return (
    <section className="relative w-full bg-[#F9F9F8] py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* Left Column: Visual Grid of Styles */}
          <div className="lg:w-1/2">
             <div className="grid grid-cols-2 gap-4 sm:gap-6 group">
                <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="aspect-[4/5] bg-zinc-100 rounded-[2rem] sm:rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 hover:!grayscale-0 transition-all duration-1000 relative"
                >
                    <img src="/image/woman.png" alt="Diversity Model 1" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000" />
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                   className="aspect-[4/5] bg-zinc-200 rounded-[2rem] sm:rounded-[3rem] overflow-hidden translate-y-8 sm:translate-y-12 grayscale group-hover:grayscale-0 hover:!grayscale-0 transition-all duration-1000 delay-100 relative"
                >
                    <img src="/image/slim-girl-1.jpg" alt="Diversity Model 2" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000" />
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                   className="aspect-[4/5] bg-zinc-300 rounded-[2rem] sm:rounded-[3rem] overflow-hidden -translate-y-8 sm:-translate-y-12 grayscale group-hover:grayscale-0 hover:!grayscale-0 transition-all duration-1000 delay-200 relative"
                >
                    <img src="/image/slim-man-2.jpg" alt="Diversity Model 3" className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-1000" />
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                   className="aspect-[4/5] bg-zinc-400 rounded-[2rem] sm:rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 hover:!grayscale-0 transition-all duration-1000 delay-300 relative"
                >
                    <img src="/image/slim-man.jpg" alt="Diversity Model 4" className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-1000" />
                </motion.div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-12 lg:w-1/2 lg:pl-16">
            <div className="flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
               {data.features.map((feature, index) => {
                 const Icon = iconMap[feature] || Heart;
                 return (
                   <motion.div
                     key={feature}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 + index * 0.1 }}
                     className="flex items-center gap-4 p-6 bg-white border border-black/5 rounded-2xl"
                   >
                     <div className="h-10 w-10 flex items-center justify-center bg-[#F9F9F8] border border-[#3A3A3A]/5 rounded-xl">
                        <Icon className="h-5 w-5 text-black opacity-40" />
                     </div>
                     <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/60">{feature}</span>
                   </motion.div>
                 );
               })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
