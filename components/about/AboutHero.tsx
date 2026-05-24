"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AboutHeroProps = {
  data: {
    id: string;
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    scrollPrompt: {
      down: string;
    };
  };
};

export function AboutHero({ data }: AboutHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as any 
      }
    }
  };

  return (
    <section ref={ref} id={data.id} className="relative min-h-[80vh] w-full overflow-hidden bg-black sm:min-h-[90vh]" data-theme="dark">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          className="object-cover object-center grayscale-[0.3] brightness-[0.35]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[94rem] min-h-[80vh] sm:min-h-[90vh] flex-col justify-center gap-12 pb-32 pt-32 px-6 md:px-10 lg:px-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <span className="inline-flex h-px w-16 bg-white/40 sm:block hidden" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.5em] text-white/50">
                The Qlozet Registry
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="font-display max-w-5xl text-6xl font-medium leading-[0.9] tracking-tighter text-white sm:text-8xl lg:text-[10rem]"
            >
              {data.title}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="max-w-2xl font-ui text-lg leading-relaxed text-white/50 sm:text-xl lg:text-2xl"
            >
              {data.description}
            </motion.p>
          </motion.div>
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="flex flex-col items-center gap-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/30"
        >
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <span>{data.scrollPrompt.down}</span>
        </motion.div>
      </div>
    </section>
  );
}
