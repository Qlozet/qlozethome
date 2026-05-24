"use client";

import { motion } from "framer-motion";

export function VendorProcessTimeline() {
  const steps = [
    { num: "01", text: "Create your vendor account", img: "/image/seun.png" },
    { num: "02", text: "Set up your storefront", img: "/image/storefront.png" },
    { num: "03", text: "Upload your products or services", img: "/image/custom-outfit-2.png" },
    { num: "04", text: "Start receiving orders", img: "/image/buygroup.png" }
  ];

  return (
    <section className="relative py-32 sm:py-48 bg-[#F9F9F8] overflow-hidden" data-theme="light">
      <div className="mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
           
           {/* Left */}
           <div className="flex-[0.8]">
              <div className="sticky top-40">
                 <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A3A3A]/40 block mb-8">06 // How It Works</span>
                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display max-w-4xl text-5xl sm:text-7xl font-medium tracking-tight text-[#3A3A3A] mb-12 leading-[1.05]"
                 >
                    Start Selling in 4 Simple Steps.
                 </motion.h2>

                 <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-ui text-base leading-relaxed text-[#3A3A3A]/50 sm:text-lg hidden lg:block"
                 >
                    It's that simple.
                 </motion.p>
              </div>
           </div>

           {/* Right: Steps */}
           <div className="flex-1 w-full lg:pt-32">
              <div className="space-y-16 sm:space-y-24 max-w-2xl ml-auto">

                 {steps.map((step, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 0.8, ease: "easeOut" }}
                       className="relative flex flex-col sm:flex-row items-start sm:items-center gap-8 group"
                    >
                       <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-[#3A3A3A]/5 flex-shrink-0 relative bg-zinc-200">
                          <img src={step.img} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                          <div className="absolute inset-0 flex items-center justify-center bg-[#3A3A3A]/20 group-hover:bg-transparent transition-colors">
                             <span className="font-mono text-xl sm:text-2xl text-white font-bold tracking-widest">{step.num}</span>
                          </div>
                       </div>

                       <div className="flex flex-col gap-2 border-l border-[#3A3A3A]/10 pl-6 sm:pl-8 py-2">
                          <p className="font-display text-2xl sm:text-3xl font-medium text-[#3A3A3A]">
                             {step.text}
                          </p>
                       </div>
                    </motion.div>
                 ))}

              </div>
              
              <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6 }}
                 className="font-ui text-base leading-relaxed text-[#3A3A3A]/50 sm:text-lg mt-24 block lg:hidden"
              >
                 It's that simple.
              </motion.p>
           </div>
           
        </div>

      </div>
    </section>
  );
}
