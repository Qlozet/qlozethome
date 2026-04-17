"use client";

import { motion } from "framer-motion";

export function VendorGlobalScale() {
  const globalPoints = [
    "Sell locally and internationally",
    "Expand your brand reach",
    "Access new markets effortlessly"
  ];

  const scalePoints = [
    "No technical setup required",
    "No need for your own website",
    "Start small and grow at your own pace"
  ];

  return (
    <section className="relative py-32 sm:py-48 bg-white overflow-hidden border-b border-black/10" data-theme="light">
      <div className="mx-auto w-full max-w-[94rem] px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
           
           {/* Section 4: Global Reach */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col"
           >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-8 block border-l-2 border-black pl-4">04 // Grow Beyond Your Location</span>
              
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-[1.1] tracking-tighter">
                 Reach Customers<br/>Everywhere.
              </h3>
              
              <p className="text-zinc-500 font-ui text-xl mb-12 max-w-sm">
                 Qlozet connects you to a global audience—so your business isn’t limited by location.
              </p>

              <ul className="space-y-6 mb-16 flex-1">
                 {globalPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-4">
                       <div className="w-8 h-[1px] bg-black/20" />
                       <span className="text-black font-display text-lg sm:text-xl font-medium">{point}</span>
                    </li>
                 ))}
              </ul>

              <p className="font-display text-2xl sm:text-3xl text-zinc-400 italic">
                 Your growth has no boundaries.
              </p>
           </motion.div>

           {/* Section 5: Start Simple */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col"
           >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-8 block border-l-2 border-black pl-4">05 // Scaling Made Easy</span>
              
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-[1.1] tracking-tighter">
                 Start Simple.<br/>Scale Fast.
              </h3>

              <div className="space-y-8 mb-16 flex-1 pt-4">
                 {scalePoints.map((point, i) => (
                    <div key={i} className="flex flex-col gap-2">
                       <span className="text-black font-display text-2xl sm:text-3xl font-medium">{point}</span>
                    </div>
                 ))}
              </div>

              <p className="font-display text-2xl sm:text-3xl text-zinc-400 italic">
                 We remove the friction—<br/>
                 so you can move faster.
              </p>
           </motion.div>

        </div>

      </div>
    </section>
  );
}
