"use client";

import { motion } from "framer-motion";
import { UserCircle, History, BookOpen, Search } from "lucide-react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type ProfileSectionProps = {
  data: SectionData;
};

export function ProfileSection({ data }: ProfileSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-brand-light py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const icons = [UserCircle, History, BookOpen];
                const Icon = icons[i % icons.length];
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-brand-light transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Dashboard UI Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto min-h-[420px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-white border border-black/5 shadow-2xl p-5 sm:p-6 lg:p-8 flex flex-col gap-5 sm:gap-6 overflow-hidden origin-right group hover:shadow-brand-darker/5 transition-shadow duration-500">
               
               {/* Search / Top Bar */}
               <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="h-12 w-full rounded-2xl bg-brand-light/50 border border-brand-darker/5 flex items-center px-4 gap-3 shadow-inner"
               >
                  <Search className="h-4 w-4 text-[#111111]/30" strokeWidth={2} />
                  <span className="font-ui text-sm text-[#111111]/40 flex-1">Search customer profiles...</span>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-brand-light border border-brand-darker/10 text-brand-darker text-[10px] font-bold">M</div>
               </motion.div>

               {/* Core Content Grid */}
               <div className="flex flex-col sm:flex-row gap-6 flex-1">
                  
                  {/* Left Column: Avatar & Basic Info */}
                  <div className="flex flex-col flex-shrink-0 w-full sm:w-1/3 gap-4">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-brand-light rounded-2xl border border-brand-darker/5 p-4 flex flex-col items-center gap-3 relative overflow-hidden group-hover:bg-brand-darker group-hover:text-brand-light transition-colors duration-500"
                     >
                        <div className="h-20 w-20 rounded-full bg-zinc-200 border-4 border-white overflow-hidden shadow-sm">
                           <div className="w-full h-full bg-[url('/image/seun.png')] bg-cover bg-center" />
                        </div>
                        <div className="flex flex-col items-center">
                           <span className="font-display font-bold text-sm text-brand-darker group-hover:text-white transition-colors">Michael Chen</span>
                           <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase tracking-widest mt-1">CUST-8820</span>
                        </div>
                     </motion.div>
                     
                     {/* Tags */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-brand-light rounded-2xl border border-brand-darker/5 p-4 flex flex-col gap-2"
                     >
                        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Preferences</span>
                        <div className="flex gap-2 flex-wrap">
                           <span className="px-2 py-1 bg-white border border-black/5 rounded font-mono text-[10px] text-zinc-600">Slim Fit</span>
                           <span className="px-2 py-1 bg-white border border-black/5 rounded font-mono text-[10px] text-zinc-600">Cotton</span>
                           <span className="px-2 py-1 bg-white border border-black/5 rounded font-mono text-[10px] text-zinc-600">French Cuff</span>
                        </div>
                     </motion.div>
                  </div>

                  {/* Right Column: History & Stats */}
                  <div className="flex flex-col flex-1 gap-4">
                     {/* Stats Row */}
                     <div className="flex gap-4">
                        <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.4 }}
                           className="flex-1 bg-brand-light border border-brand-darker/10 rounded-2xl p-4 flex flex-col justify-between h-24 relative overflow-hidden"
                        >
                           <span className="font-mono text-[9px] uppercase tracking-widest text-brand-darker font-bold">Total Orders</span>
                           <span className="font-display text-3xl font-bold text-brand-darker">12</span>
                           <div className="absolute right-0 bottom-0 w-16 h-16 bg-brand-light/10 rounded-tl-full" />
                        </motion.div>
                        <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.5 }}
                           className="flex-1 bg-brand-light border border-brand-darker/10 rounded-2xl p-4 flex flex-col justify-between h-24 relative overflow-hidden"
                        >
                           <span className="font-mono text-[9px] uppercase tracking-widest text-brand-darker font-bold">Measurements</span>
                           <span className="font-display text-xl font-bold text-brand-darker leading-none">Updated<br/><span className="text-[10px] font-normal opacity-60">2d ago</span></span>
                           <div className="absolute right-0 bottom-0 w-16 h-16 bg-brand-light/10 rounded-tl-full" />
                        </motion.div>
                     </div>

                     {/* Recent Order List */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="flex-1 bg-brand-light rounded-2xl border border-brand-darker/5 p-4 flex flex-col gap-3 relative overflow-hidden"
                     >
                        <div className="flex justify-between items-center mb-1">
                           <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Recent History</span>
                           <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400">See All</span>
                        </div>
                        
                        {[
                           { order: "ORD-9912", item: "Navy Blazer", status: "Delivered" },
                           { order: "ORD-8821", item: "Linen Trousers", status: "Completed" },
                           { order: "ORD-7501", item: "Draft Profile", status: "In Progress" }
                        ].map((history, i) => (
                           <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white border border-black/5 group-hover:border-brand-darker/10 transition-colors relative z-10">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
                                    <History className="w-4 h-4 text-zinc-400" />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="font-display text-sm font-bold text-brand-darker">{history.order}</span>
                                    <span className="font-ui text-[10px] text-zinc-500">{history.item}</span>
                                 </div>
                              </div>
                              <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full ml-auto ${history.status === 'In Progress' ? 'bg-amber-50 text-amber-600' : 'bg-brand-light text-brand-darker'}`}>{history.status}</span>
                           </div>
                        ))}
                        
                        {/* Overlay gradient to fade out bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
                     </motion.div>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
