"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function VendorEditorialHero() {
  const titleWords = "Turn Your Craft Into a Thriving Fashion Business.".split(" ");

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black text-white" data-theme="dark">
      
      {/* Immersive Photography Background */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
         <img 
            src="/image/bespoke-outfit-2.png" 
            alt="Fashion Craft"
            className="w-full h-full object-cover object-top opacity-70"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      <div className="w-full max-w-[94rem] mx-auto px-6 md:px-10 lg:px-10 relative z-10 pb-16 sm:pb-24 pt-32">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md"
        >
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white">
            Sell on Qlozet
          </span>
        </motion.div>

        {/* Hero Title */}
        <h1 className="max-w-6xl font-display text-5xl font-medium leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-[8.5rem] text-balance mb-12">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: i * 0.05 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
           {/* Supporting Copy */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
             className="lg:col-span-8 flex flex-col gap-6 font-ui text-lg leading-relaxed text-white/40 sm:text-2xl lg:text-3xl"
           >
             <p className="text-white max-w-3xl">
               Sell your designs, reach new customers, and grow your brand—all on one platform. No website. No complexity. Just results.
             </p>
             <p className="text-zinc-500 text-lg sm:text-xl">
               Whether you're a tailor, designer, or fabric vendor—Qlozet is built for you.
             </p>
           </motion.div>

           {/* CTA */}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 flex justify-start lg:justify-end"
           >
             <Link 
               href="/auth/vendor/register"
               className="group flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 bg-white text-[#3A3A3A] rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] transition-transform hover:scale-105 active:scale-95"
             >
               Start<br/>Selling
               <ArrowRight className="mt-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Link>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
