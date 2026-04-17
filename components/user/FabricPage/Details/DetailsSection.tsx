"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Eye } from "lucide-react";

type DetailsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type DetailsSectionProps = {
  data: DetailsData;
};

export function DetailsSection({ data }: DetailsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(250);
  const mouseY = useMotionValue(250);
  
  const springX = useSpring(mouseX, { stiffness: 400, damping: 40, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40, mass: 0.8 });
  
  const maskImage = useMotionTemplate`radial-gradient(circle 120px at ${springX}px ${springY}px, black 100%, transparent 100%)`;

  useEffect(() => {
    // Initial center position once mounted
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  };

  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
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
                    <Eye className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Right: Interactive Magnifying Lens Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div 
               ref={containerRef}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               className="relative mx-auto h-[500px] lg:h-[600px] w-full max-w-xl rounded-[3.5rem] bg-zinc-900 shadow-2xl overflow-hidden flex items-center justify-center cursor-crosshair"
            >
               
               {/* True fabric texture (Base) */}
               <div className="absolute inset-0 opacity-50 grayscale" style={{ backgroundImage: `url('/image/fabric-swatch-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

               {/* Full-Color, Magnified Texture (Masked Layer) */}
               <motion.div 
                 className="absolute inset-0 z-10 pointer-events-none"
                 style={{ 
                   WebkitMaskImage: maskImage,
                   maskImage: maskImage,
                 }}
               >
                  {/* The magnified image */}
                  <div 
                     className="absolute inset-0 scale-[2.5]" 
                     style={{ backgroundImage: `url('/image/fabric-swatch-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                  />
                  {/* Subtle emerald tint */}
                  <div className="absolute inset-x-0 inset-y-0 opacity-20 bg-emerald-500 mix-blend-color" />
               </motion.div>

               {/* The Lens Border Ring that follows mouse */}
               <motion.div
                 className="absolute top-0 left-0 w-[240px] h-[240px] rounded-full border-[1.5px] border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.15)_inset,0_20px_40px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                 style={{
                   x: useMotionTemplate`calc(${springX}px - 120px)`,
                   y: useMotionTemplate`calc(${springY}px - 120px)`,
                   backdropFilter: 'brightness(110%)'
                 }}
               />

               {/* Orbital scanning ring - keeps some technical movement */}
               <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute h-80 w-80 rounded-full border border-dashed border-white/10 pointer-events-none z-[5]"
               />

               <div className="absolute bottom-8 left-8 flex items-center gap-3 z-30 pointer-events-none">
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                     <span className="font-mono text-[10px] text-emerald-400">40X</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="font-display text-[7px] font-bold text-white/40 uppercase tracking-widest">Texture Analysis</span>
                     <span className="font-mono text-[10px] text-white">INTERACTIVE_MACRO</span>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
