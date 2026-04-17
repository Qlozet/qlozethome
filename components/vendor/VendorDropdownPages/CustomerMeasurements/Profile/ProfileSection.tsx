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
    <section id={data.id} className="relative z-10 bg-zinc-50 py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
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
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl"
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Dashboard UI Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto min-h-[450px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-white border border-black/5 shadow-2xl p-6 lg:p-8 flex flex-col gap-6 overflow-hidden origin-right group hover:shadow-emerald-500/10 transition-shadow duration-500">
               
               {/* Search / Top Bar */}
               <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="h-12 w-full rounded-2xl bg-zinc-50 border border-black/5 flex items-center px-4 gap-3 shadow-inner"
               >
                  <Search className="h-4 w-4 text-black/30" strokeWidth={2} />
                  <span className="font-ui text-sm text-black/40 flex-1">Search customer profiles...</span>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-bold">M</div>
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
                        className="bg-zinc-50 rounded-2xl border border-black/5 p-4 flex flex-col items-center gap-3 relative overflow-hidden group-hover:bg-black group-hover:text-white transition-colors duration-500"
                     >
                        <div className="h-20 w-20 rounded-full bg-zinc-200 border-4 border-white overflow-hidden shadow-sm">
                           <div className="w-full h-full bg-[url('/image/seun.png')] bg-cover bg-center" />
                        </div>
                        <div className="flex flex-col items-center">
                           <span className="font-display font-bold text-sm text-black group-hover:text-white transition-colors">Michael Chen</span>
                           <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase tracking-widest mt-1">CUST-8820</span>
                        </div>
                     </motion.div>
                     
                     {/* Tags */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-zinc-50 rounded-2xl border border-black/5 p-4 flex flex-col gap-2"
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
                           className="flex-1 bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex flex-col justify-between h-24 relative overflow-hidden"
                        >
                           <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 font-bold">Total Orders</span>
                           <span className="font-display text-3xl font-bold text-emerald-900">12</span>
                           <div className="absolute right-0 bottom-0 w-16 h-16 bg-emerald-500/10 rounded-tl-full" />
                        </motion.div>
                        <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.5 }}
                           className="flex-1 bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex flex-col justify-between h-24 relative overflow-hidden"
                        >
                           <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 font-bold">Measurements</span>
                           <span className="font-display text-xl font-bold text-emerald-900 leading-none">Updated<br/><span className="text-[10px] font-normal opacity-60">2d ago</span></span>
                           <div className="absolute right-0 bottom-0 w-16 h-16 bg-emerald-500/10 rounded-tl-full" />
                        </motion.div>
                     </div>

                     {/* Recent Order List */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="flex-1 bg-zinc-50 rounded-2xl border border-black/5 p-4 flex flex-col gap-3 relative overflow-hidden"
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
                           <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white border border-black/5 group-hover:border-emerald-100 transition-colors relative z-10">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
                                    <History className="w-4 h-4 text-zinc-400" />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="font-display text-sm font-bold text-black">{history.order}</span>
                                    <span className="font-ui text-[10px] text-zinc-500">{history.item}</span>
                                 </div>
                              </div>
                              <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full ml-auto ${history.status === 'In Progress' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>{history.status}</span>
                           </div>
                        ))}
                        
                        {/* Overlay gradient to fade out bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none z-20" />
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
