"use client";

import { motion } from "framer-motion";
import { Workflow, ArrowDownToLine, MousePointer2, Check as CheckIcon } from "lucide-react";

type SeamlessData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type SeamlessSectionProps = {
  data: SeamlessData;
};

export function SeamlessSection({ data }: SeamlessSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-brand-light py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Right/Top: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
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
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
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

            <div className="flex flex-col gap-3 mt-2">
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-darker/10"><CheckIcon className="h-3.5 w-3.5 text-brand-darker" /></span>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-[#111111]/30"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Left/Bottom: Frictionless Flow Visual */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[500px] lg:h-[600px] w-full max-w-xl rounded-[3.5rem] bg-white border border-black/5 shadow-2xl overflow-hidden flex flex-col pt-12 items-center">
               
               {/* Input Terminal (Fabric Selected) */}
               <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-48 bg-[#EDEAEA] border border-brand-darker/10 rounded-2xl shadow-sm p-3 flex items-center justify-between z-20"
               >
                  <span className="font-display text-[9px] font-bold text-brand-darker uppercase tracking-widest">Fabric Picked</span>
                  <div className="h-4 w-4 rounded-full bg-brand-darker flex items-center justify-center">
                     <Check className="h-2 w-2 text-white" />
                  </div>
               </motion.div>

               {/* Connector Line */}
               <div className="w-px h-12 bg-black/10 relative">
                  <motion.div 
                     animate={{ y: [0, 48] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     className="absolute top-0 left-[-2px] w-[5px] h-[10px] bg-brand-darker rounded-full"
                  />
               </div>

               {/* Central Conversion Module */}
               <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-64 bg-brand-darker rounded-3xl shadow-2xl p-6 flex flex-col gap-4 z-20 relative overflow-hidden"
               >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48L3JlY3Q+Cjwvc3ZnPg==')] opacity-10" />
                  <div className="flex items-center justify-between">
                     <span className="font-mono text-[10px] text-zinc-400">STATE_TRANSFER</span>
                     <MousePointer2 className="h-3 w-3 text-white/50" />
                  </div>
                  <div className="h-12 w-full border border-white/10 border-dashed rounded-xl flex items-center justify-center bg-black/50">
                     <span className="font-display text-[8px] font-bold text-white uppercase tracking-widest">Awaiting Directives...</span>
                  </div>
                  
                  {/* Streaming Lines going to left and right */}
                  <div className="absolute -left-10 bottom-6 w-20 h-px bg-white/30 rotate-45 pointer-events-none" />
                  <div className="absolute -right-10 bottom-6 w-20 h-px bg-white/20 -rotate-45 pointer-events-none" />
               </motion.div>

               {/* Connector Lines Splitting */}
               <div className="w-48 h-16 relative">
                  <svg className="absolute inset-0 h-full w-full">
                     <path d="M 96,0 Q 96,30 20,64" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                     <path d="M 96,0 Q 96,30 172,64" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                     
                     {/* Animated dashed paths */}
                     <motion.path 
                        d="M 96,0 Q 96,30 20,64" fill="none" stroke="var(--color-brand-darker)" strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     />
                  </svg>
               </div>

               {/* Bottom Receiving Modules */}
               <div className="flex gap-8 z-20">
                  <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="w-32 bg-white rounded-2xl shadow-xl border border-black/5 p-4 flex flex-col items-center gap-2"
                  >
                     <div className="h-8 w-8 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center">
                        <ArrowDownToLine className="h-3 w-3 text-brand-darker" />
                     </div>
                     <span className="font-display text-[8px] font-bold text-black uppercase tracking-widest text-center">Design Studio</span>
                  </motion.div>

                  <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                     className="w-32 bg-white rounded-2xl shadow-xl border border-black/5 p-4 flex flex-col items-center gap-2"
                  >
                     <div className="h-8 w-8 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center">
                        <ArrowDownToLine className="h-3 w-3 text-black/50" />
                     </div>
                     <span className="font-display text-[8px] font-bold text-black uppercase tracking-widest text-center">Save for Later</span>
                  </motion.div>
               </div>

               {/* Flow Background Effect */}
               <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <motion.div 
                     animate={{ y: ["0%", "100%"] }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="w-full h-[200%] bg-[linear-gradient(to_bottom,transparent,rgba(30,16,8,0.03),transparent)]" 
                  />
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Need to import Check since it's used inside the component but wasn't in imports
function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
