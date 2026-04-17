"use client";

import { useRef } from "react";
import { LogIn, Scissors, CheckCircle, Package } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const iconMap = {
  Incoming: LogIn,
  Scissors,
  CheckCircle,
  Package
};

type Step = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

type WorkflowData = {
  badge: string;
  title: string;
  description: string;
  steps: Step[];
};

type WorkflowTrackingSectionProps = {
  data: WorkflowData;
};

export function WorkflowTrackingSection({ data }: WorkflowTrackingSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="workflow" ref={containerRef} className="relative z-20 h-[400vh] bg-[#0A0A0A]" data-theme="dark">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),#0A0A0A,#0A0A0A)]" />
        
        {/* Fixed Title Section on the Left */}
        <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 md:left-24 lg:left-32">
          <div className="flex flex-col gap-6">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
              {data.badge}
            </span>
            <h2 className="max-w-[200px] font-display text-4xl font-medium leading-tight tracking-tight text-white sm:max-w-xs sm:text-6xl md:max-w-sm lg:max-w-md lg:text-7xl">
              {data.title}
            </h2>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div 
          style={{ x }} 
          className="relative z-10 flex h-full w-[400vw] items-center"
        >
          {data.steps.map((step, index) => {
             const isFirst = index === 0;
             const paddingLeft = isFirst ? "pl-[30vw] md:pl-[40vw] lg:pl-[50vw]" : "pl-12 lg:pl-16";
             
             return (
               <div key={step.id} className={`flex h-full w-screen shrink-0 items-center justify-start ${paddingLeft}`}>
                 <div className="group relative flex w-full max-w-lg flex-col gap-10 rounded-[3rem] border border-white/5 bg-white/5 p-10 backdrop-blur-md transition-colors hover:bg-white/10 lg:max-w-xl lg:p-16">
                   <div className="flex items-center justify-between">
                     <span className="font-display text-6xl font-medium tracking-tighter text-white/10 transition-colors group-hover:text-white/20 lg:text-8xl">
                       0{index + 1}
                     </span>
                     <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110 lg:h-20 lg:w-20">
                       {(() => {
                         const Icon = iconMap[step.icon as keyof typeof iconMap] || Scissors;
                         return <Icon className="h-8 w-8 text-black opacity-80 transition-opacity group-hover:opacity-100 lg:h-10 lg:w-10" strokeWidth={1.5} />;
                       })()}
                     </div>
                   </div>
                   
                   <div className="flex flex-col gap-4">
                     <h3 className="font-display text-3xl font-medium tracking-tight text-white lg:text-4xl">
                       {step.title}
                     </h3>
                     <p className="font-ui text-lg leading-relaxed text-white/50 transition-colors group-hover:text-white/70 lg:text-xl">
                       {step.description}
                     </p>
                   </div>
                 </div>
               </div>
             )
          })}
        </motion.div>
      </div>
    </section>
  );
}
