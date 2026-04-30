"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Fingerprint, Check } from "lucide-react";

type PersonalizedData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type PersonalizedSectionProps = {
  data: PersonalizedData;
};

export function PersonalizedSection({ data }: PersonalizedSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex flex-col gap-6">
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

            <div className="flex flex-col gap-3 mt-2">
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A3A3A]/10"><Check className="h-3.5 w-3.5 text-[#3A3A3A]" /></span>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-[#3A3A3A]/30"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Right: AI Selection Matrix Visual */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto min-h-[450px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-900 shadow-2xl overflow-hidden p-6 sm:p-10 flex flex-col justify-center">
               
               {/* Background AI Mesh */}
               <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, transparent 70%)' }} />

               {/* Profile identifier */}
               <div className="absolute top-10 right-10 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-30">
                  <Fingerprint className="h-4 w-4 text-white" />
                  <span className="font-mono text-[9px] text-white">USER_PREF_MODEL_89X</span>
               </div>

               {/* Scaled Play Area for Mobile */}
               <div className="absolute inset-0 transform scale-[0.65] sm:scale-100 origin-center">
                  {/* Algorithmic Core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5 blur-xl animate-pulse z-0" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-[pulse_3s_ease-in-out_infinite]" />
                  </div>

                  {/* Scattered AI Nodes */}
                  <div className="absolute inset-0 pointer-events-none">
                     {[
                        // Matches (Brought to front, large)
                        { src: '/image/fabric-1.jpg', match: true, x: -70, y: -60, rotate: -8, w: '8rem', h: '9rem', delay: 0 },
                        { src: '/image/fabric-swatch-2.jpg', match: true, x: -60, y: 80, rotate: 6, w: '9rem', h: '10rem', delay: 0.1 },
                        { src: '/image/fabric-swatch-3.jpg', match: true, x: 80, y: -30, rotate: 12, w: '9rem', h: '11rem', delay: 0.2 },
                        
                        // Rejects (Pushed to back, small, grayscale)
                        { src: '/image/ankara.png', match: false, x: 10, y: -130, rotate: 20, w: '5rem', h: '6rem', delay: 0.3 },
                        { src: '/image/cotton.jpeg', match: false, x: 120, y: 110, rotate: -15, w: '6rem', h: '6rem', delay: 0.4 },
                        { src: '/image/Striped.jpeg', match: false, x: -140, y: 10, rotate: -25, w: '4rem', h: '5rem', delay: 0.5 },
                        { src: '/image/agbada.png', match: false, x: 40, y: 130, rotate: 10, w: '6rem', h: '7rem', delay: 0.6 },
                        { src: '/image/fabrics.png', match: false, x: -120, y: -140, rotate: 5, w: '5rem', h: '5rem', delay: 0.7 },
                        { src: '/image/fabric-swatch-1.jpg', match: false, x: 140, y: -100, rotate: -5, w: '5rem', h: '6rem', delay: 0.8 },
                     ].map((node, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: '-50%', y: '-50%', scale: 0 }}
                           whileInView={{ opacity: 1, x: `calc(-50% + ${node.x}px)`, y: `calc(-50% + ${node.y}px)`, scale: 1, rotate: node.rotate }}
                           viewport={{ once: true }}
                           transition={{ 
                              type: "spring", 
                              stiffness: 50, 
                              damping: 15, 
                              delay: node.delay 
                           }}
                           className={`absolute top-1/2 left-1/2 rounded-[1.5rem] overflow-hidden border pointer-events-auto transition-transform hover:scale-105 duration-300 ${
                              node.match 
                              ? 'border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] z-20' 
                              : 'border-white/5 shadow-2xl z-0 opacity-40 grayscale blur-[1px]'
                           } flex flex-col`}
                           style={{ width: node.w, height: node.h }}
                        >
                           <div className="flex-1 w-full relative overflow-hidden">
                              <div className="absolute inset-0" style={{ backgroundImage: `url('${node.src}')`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                              {node.match && (
                                 <motion.div 
                                    animate={{ opacity: [0, 0.4, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }}
                                    className="absolute inset-0 bg-white/20 mix-blend-overlay"
                                 />
                              )}
                           </div>
                           {node.match && (
                              <div className="h-6 bg-white/95 backdrop-blur px-2 text-black flex items-center justify-between">
                                  <span className="font-mono text-[8px] tracking-widest font-bold">MATCH</span>
                                  <span className="font-mono text-[8px] font-bold opacity-80">98%</span>
                              </div>
                           )}
                        </motion.div>
                     ))}
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
