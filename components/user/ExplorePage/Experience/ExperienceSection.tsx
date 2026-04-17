"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle2, Wand2, CreditCard, ArrowDown } from "lucide-react";

const JOURNEY_STEPS = [
  {
    step: "01",
    label: "Discover",
    description: "Find what you love",
    icon: ShoppingCart,
    image: "/image/product-1.png"
  },
  {
    step: "02",
    label: "Customize",
    description: "Make it yours",
    icon: Wand2,
    image: "/image/fabric-swatch-2.jpg"
  },
  {
    step: "03",
    label: "Checkout",
    description: "Secure & seamless",
    icon: CreditCard,
    image: null
  }
];

type ExperienceData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type ExperienceSectionProps = {
  data: ExperienceData;
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-32 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
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
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
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
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Left: Journey Pipeline */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                
                <div className="flex flex-col gap-0">
                   {JOURNEY_STEPS.map((step, i) => {
                      const Icon = step.icon;
                      const isLast = i === JOURNEY_STEPS.length - 1;
                      
                      return (
                         <div key={i}>
                            <motion.div
                               initial={{ opacity: 0, x: -20 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               whileHover={{ scale: 1.03, x: 8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                               viewport={{ once: true }}
                               transition={{ delay: 0.3 + i * 0.2, duration: 0.6, type: "spring" }}
                               className={`relative flex items-center gap-5 p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${isLast ? 'bg-black border-black/10 shadow-2xl hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.5)]' : 'bg-white border-black/5 shadow-md hover:shadow-xl hover:border-black/10'}`}
                            >
                               {/* Step Image/Icon */}
                               {step.image ? (
                                  <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 bg-zinc-100 border border-black/5 shadow-sm">
                                     <img src={step.image} alt={step.label} className="w-full h-full object-cover" />
                                  </div>
                               ) : (
                                  <div className="h-16 w-16 rounded-xl shrink-0 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                     <CheckCircle2 className="h-7 w-7 text-emerald-500" />
                                  </div>
                               )}
                               
                               {/* Step Info */}
                               <div className="flex-1 flex flex-col gap-1">
                                  <div className="flex items-center gap-2">
                                     <span className={`font-mono text-[9px] font-bold uppercase tracking-widest ${isLast ? 'text-white/40' : 'text-black/30'}`}>{step.step}</span>
                                  </div>
                                  <span className={`font-display text-sm font-bold uppercase tracking-wider ${isLast ? 'text-white' : 'text-black'}`}>{step.label}</span>
                                  <span className={`font-ui text-[10px] ${isLast ? 'text-white/50' : 'text-black/40'}`}>{step.description}</span>
                               </div>
                               
                               {/* Step Icon */}
                               <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${isLast ? 'bg-white/10' : 'bg-zinc-50 border border-black/5'}`}>
                                  <Icon className={`h-4 w-4 ${isLast ? 'text-white/60' : 'text-black/30'}`} />
                               </div>
                            </motion.div>
                            
                            {/* Connector */}
                            {!isLast && (
                               <motion.div 
                                  initial={{ opacity: 0, scaleY: 0 }}
                                  whileInView={{ opacity: 1, scaleY: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
                                  className="flex justify-center py-2 origin-top"
                               >
                                  <div className="flex flex-col items-center gap-1">
                                     <div className="w-px h-6 bg-black/10" />
                                     <ArrowDown className="h-3 w-3 text-black/20" />
                                  </div>
                               </motion.div>
                            )}
                         </div>
                      );
                   })}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-5 border-t border-black/5 flex items-center justify-center">
                   <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Frictionless Flow</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-px h-1 rounded-full bg-black/20" />
      </div>
    </section>
  );
}
