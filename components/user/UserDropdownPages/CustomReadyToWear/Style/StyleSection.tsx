"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Settings2, PenTool, LucideIcon, Palette, Scissors, Sparkles, Check } from "lucide-react";
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
    <section className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-10 lg:gap-24">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="flex flex-col gap-3">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || SlidersHorizontal;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A3A3A]/10"><Check className="h-3.5 w-3.5 text-[#3A3A3A]" /></span>
                    <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left: Dynamic Style Vault */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center py-10 lg:py-0 pointer-events-none">
             
             {/* Main Device Frame */}
             <div className="relative w-full max-w-[550px] aspect-[4/5] sm:aspect-square rounded-[3rem] bg-zinc-50 border border-[#3A3A3A]/5 shadow-2xl p-4 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
                
                {/* 1. Image Viewport (Left side on sm) */}
                <div className="relative w-full sm:w-1/2 h-[300px] sm:h-full rounded-[2rem] bg-white shadow-inner border border-[#3A3A3A]/5 overflow-hidden">
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
                      <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-[#3A3A3A]/5 shadow-sm">
                         <AnimatePresence mode="wait">
                            <motion.span
                               key={profile.name}
                               initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, y: -10 }}
                               className="block font-display text-[9px] font-bold text-[#3A3A3A] uppercase tracking-widest"
                            >
                               {profile.name}
                            </motion.span>
                         </AnimatePresence>
                      </div>
                   </div>
                </div>

                {/* 2. Live Configuration Checklist (Right side on sm) */}
                <div className="flex-1 w-full flex flex-col gap-6 w-full">
                   <div className="flex flex-col gap-1 border-b border-[#3A3A3A]/5 pb-4">
                      <span className="font-mono text-[9px] text-zinc-400 font-bold uppercase tracking-widest">Active Configuration</span>
                      <span className="font-display text-[14px] font-bold text-[#3A3A3A] uppercase tracking-tight">Your Rules Applied</span>
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
                                  <div className="h-4 w-[2px] rounded-full bg-[#3A3A3A]/10 overflow-hidden relative">
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
                                           className="block font-display text-[11px] sm:text-[13px] font-bold text-[#3A3A3A]"
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
                   <div className="mt-auto flex items-center justify-between bg-white border border-[#3A3A3A]/5 p-3 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-2">
                         <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-3 h-3 border-[1px] border-[#3A3A3A]/20 border-t-black rounded-full"
                         />
                         <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Iterating Style</span>
                      </div>
                      <span className="font-mono text-[8px] font-bold text-[#3A3A3A] uppercase">Auto-Cycle</span>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-1 h-1 rounded-full bg-[#3A3A3A]/20" />
      </div>
    </section>
  );
}
