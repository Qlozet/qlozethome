"use client";

import { motion } from "framer-motion";
import { ListChecks, CheckCircle2, History, MapPin, Truck, Package } from "lucide-react";

type LogisticsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type RealTimeTrackingSectionProps = {
  data: LogisticsData;
};

export function RealTimeTrackingSection({ data }: RealTimeTrackingSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-32">
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
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <History className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Right: Live Map Tracker Mockup (Mobile: Second) */}
          <div className="relative lg:w-1/2">
             <div className="relative mx-auto h-[480px] lg:h-[580px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden transform items-center justify-center">
                
                {/* Minimalist Map Background */}
                <div className="absolute inset-0 bg-[#FAFAFA]">
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                   
                   {/* Abstract Street Lines */}
                   <svg className="absolute inset-0 h-full w-full opacity-5 pointer-events-none">
                      <path d="M -50,50 L 300,400 M 100,-50 L 400,250 M -50,300 L 450,150 M -50,150 L 250,-50 M 200,550 L 450,300" stroke="black" strokeWidth="20" fill="none" />
                   </svg>
                </div>

                {/* The Delivery Route Path */}
                <svg className="absolute inset-0 h-full w-full pointer-events-none z-10" preserveAspectRatio="none">
                   {/* Route Shadow/Glow */}
                   <path id="routePath" d="M 50,450 Q 80,300 150,250 T 250,150 T 350,50" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-[0.05]" />
                   {/* Active Route Line */}
                   <motion.path 
                      d="M 50,450 Q 80,300 150,250 T 250,150 T 350,50" 
                      stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" 
                      strokeDasharray="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 3, ease: "easeOut" }}
                   />
                </svg>

                {/* Map Pins */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                   {/* Origin Pin */}
                   <div className="absolute top-[450px] left-[50px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                      <div className="h-4 w-4 bg-white border-2 border-black rounded-full shadow-lg" />
                   </div>
                   
                   {/* Destination Pin */}
                   <div className="absolute top-[50px] left-[350px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                      <div className="h-6 w-6 bg-black rounded-full shadow-xl flex items-center justify-center">
                         <MapPin className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-white px-2 py-1 rounded-md shadow-md border border-black/5">
                         <span className="font-display text-[8px] font-bold text-black uppercase tracking-widest">Client Drop</span>
                      </div>
                   </div>

                   {/* Moving Vehicle */}
                   <motion.div
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "60%" }}
                      transition={{ duration: 4, ease: "easeOut", fillMode: "forwards" }}
                      style={{ 
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         offsetPath: 'path("M 50,450 Q 80,300 150,250 T 250,150 T 350,50")',
                         zIndex: 30
                      }}
                      className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                   >
                      <div className="absolute inset-0 bg-black/10 rounded-full blur-xl scale-150 animate-pulse" />
                      <div className="h-10 w-10 bg-white shadow-2xl rounded-2xl flex items-center justify-center border border-black/10 relative">
                         <div className="absolute -inset-2 border-2 border-black/10 rounded-[1.25rem] animate-ping opacity-20" />
                         <Truck className="h-5 w-5 text-black" fill="black" />
                      </div>
                   </motion.div>
                </div>

                {/* Live Floating ETA Widget (Top Left) */}
                <motion.div 
                   initial={{ opacity: 0, y: -20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 1 }}
                   className="absolute top-6 left-6 z-40 bg-white/90 backdrop-blur-xl border border-black/5 shadow-2xl p-4 rounded-3xl w-48"
                >
                   <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between">
                         <div className="flex flex-col">
                            <span className="font-display text-[8px] font-bold text-black/40 uppercase tracking-widest">Est. Delivery</span>
                            <span className="font-display text-xl font-bold text-black">14 Min</span>
                         </div>
                         <div className="flex items-center gap-1.5 bg-zinc-100 rounded-full px-2 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                            <span className="font-display text-[7px] font-bold uppercase tracking-wider text-black">Live</span>
                         </div>
                      </div>
                      
                      <div className="flex flex-col gap-1.5">
                         <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                            <motion.div 
                               initial={{ width: "0%" }}
                               animate={{ width: "60%" }}
                               transition={{ duration: 4, ease: "easeOut" }}
                               className="h-full bg-black"
                            />
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="font-ui text-[9px] text-black/40">1.2 mi</span>
                            <span className="font-ui text-[9px] text-black/40">Out for delivery</span>
                         </div>
                      </div>
                   </div>
                </motion.div>

                {/* Status Console (Bottom Slide-In) */}
                <motion.div 
                   initial={{ opacity: 0, y: 100 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                   className="absolute bottom-6 inset-x-6 z-40 bg-black text-white shadow-2xl p-5 rounded-[2rem] border border-white/10"
                >
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                            <Package className="h-5 w-5 text-white" />
                         </div>
                         <div className="flex flex-col">
                            <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Tracking ID</span>
                            <span className="font-mono text-sm tracking-widest text-white">#QL-882-991A</span>
                         </div>
                      </div>
                      <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center overflow-hidden relative">
                         <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                         >
                            <div className="h-full w-full border-2 border-white/10 border-t-white rounded-full" />
                         </motion.div>
                      </div>
                   </div>
                </motion.div>

             </div>
          </div>
        </div>
      </div>
      
      {/* Spine Marker */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}
