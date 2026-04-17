"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Settings2, PenTool, LucideIcon, Palette, Scissors, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const iconMap: Record<string, LucideIcon> = {
  SlidersHorizontal: SlidersHorizontal,
  Settings2: Settings2,
  PenTool: PenTool
};

const STYLE_PROFILES = [
  {
    id: 1,
    name: "The Modern Tailored",
    image: "/image/product-6.png",
    accent: "bg-blue-500",
    rules: [
      { label: "Silhouette", value: "Sharp & Structured", icon: Scissors },
      { label: "Fabric", value: "Premium Charcoal Wool", icon: Palette },
      { label: "Signature", value: "Double Breasted Lapel", icon: Sparkles }
    ]
  },
  {
    id: 2,
    name: "African Avant-Garde",
    image: "/image/product-3.png",
    accent: "bg-orange-500",
    rules: [
      { label: "Silhouette", value: "Flowing & Dramatic", icon: Scissors },
      { label: "Fabric", value: "Vibrant Ankara Print", icon: Palette },
      { label: "Signature", value: "Asymmetrical Hem", icon: Sparkles }
    ]
  },
  {
    id: 3,
    name: "Minimalist Evening",
    image: "/image/product-2.png",
    accent: "bg-zinc-800",
    rules: [
      { label: "Silhouette", value: "Form-Fitting Curve", icon: Scissors },
      { label: "Fabric", value: "Ivory Silk Blend", icon: Palette },
      { label: "Signature", value: "Plunging Neckline", icon: Sparkles }
    ]
  }
];

type Feature = {
  title: string;
  icon: string;
};

type StyleData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type StyleSectionProps = {
  data: StyleData;
};

export function StyleSection({ data }: StyleSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % STYLE_PROFILES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const profile = STYLE_PROFILES[activeIndex];

  return (
    <section className="relative z-10 bg-white py-32 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex h-10 w-40 items-center justify-center border-2 border-black/10 bg-zinc-50 font-display text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 shadow-sm"
              >
                {data.badge}
              </motion.div>
              
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
                className="max-w-xl font-ui text-lg leading-relaxed text-black/50 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || SlidersHorizontal;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left: Dynamic Style Vault */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2 flex justify-center items-center py-10 lg:py-0 pointer-events-none">
             
             {/* Main Device Frame */}
             <div className="relative w-full max-w-[550px] aspect-[4/5] sm:aspect-square rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-4 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
                
                {/* 1. Image Viewport (Left side on sm) */}
                <div className="relative w-full sm:w-1/2 h-[300px] sm:h-full rounded-[2rem] bg-white shadow-inner border border-black/5 overflow-hidden">
                   <AnimatePresence mode="wait">
                      <motion.img
                        key={profile.id}
                        src={profile.image}
                        initial={{ opacity: 0, x: -30, scale: 1.05 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt={profile.name}
                      />
                   </AnimatePresence>
                   
                   {/* Overlay HUD */}
                   <div className="absolute top-4 left-4 z-10">
                      <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                         <AnimatePresence mode="wait">
                            <motion.span
                               key={profile.name}
                               initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, y: -10 }}
                               className="block font-display text-[9px] font-bold text-black uppercase tracking-widest"
                            >
                               {profile.name}
                            </motion.span>
                         </AnimatePresence>
                      </div>
                   </div>
                </div>

                {/* 2. Live Configuration Checklist (Right side on sm) */}
                <div className="flex-1 w-full flex flex-col gap-6 w-full">
                   <div className="flex flex-col gap-1 border-b border-black/5 pb-4">
                      <span className="font-mono text-[9px] text-zinc-400 font-bold uppercase tracking-widest">Active Configuration</span>
                      <span className="font-display text-[14px] font-bold text-black uppercase tracking-tight">Your Rules Applied</span>
                   </div>

                   <div className="flex flex-col gap-5">
                      {profile.rules.map((rule, idx) => {
                         const RuleIcon = rule.icon;
                         return (
                            <div key={idx} className="flex flex-col gap-2 relative">
                               <div className="flex items-center gap-2">
                                  <RuleIcon className="w-3 h-3 text-zinc-400" />
                                  <span className="font-mono text-[8px] sm:text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{rule.label}</span>
                               </div>
                               
                               <div className="flex items-center gap-3">
                                  {/* Dynamic line indicator */}
                                  <div className="h-4 w-[2px] rounded-full bg-black/10 overflow-hidden relative">
                                     <motion.div 
                                        key={profile.id}
                                        initial={{ height: "0%" }}
                                        animate={{ height: "100%" }}
                                        transition={{ duration: 3.5, ease: "linear" }}
                                        className={`absolute top-0 w-full ${profile.accent}`} 
                                     />
                                  </div>
                                  
                                  {/* Replacing Text */}
                                  <div className="overflow-hidden h-6 flex items-center">
                                     <AnimatePresence mode="wait">
                                        <motion.span 
                                           key={rule.value}
                                           initial={{ opacity: 0, y: 20 }}
                                           animate={{ opacity: 1, y: 0 }}
                                           exit={{ opacity: 0, y: -20 }}
                                           transition={{ duration: 0.3 }}
                                           className="block font-display text-[11px] sm:text-[13px] font-bold text-black"
                                        >
                                           {rule.value}
                                        </motion.span>
                                     </AnimatePresence>
                                  </div>
                               </div>
                            </div>
                         );
                      })}
                   </div>

                   {/* Footer Status */}
                   <div className="mt-auto flex items-center justify-between bg-white border border-black/5 p-3 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-2">
                         <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-3 h-3 border-[1px] border-black/20 border-t-black rounded-full"
                         />
                         <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Iterating Style</span>
                      </div>
                      <span className="font-mono text-[8px] font-bold text-black uppercase">Auto-Cycle</span>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-1 h-1 rounded-full bg-black/20" />
      </div>
    </section>
  );
}
