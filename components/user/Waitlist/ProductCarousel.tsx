"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const products = [
  {
    src: "/image/bespoke-outfit-1.webp",
    title: "Bespoke Tailoring",
    category: "Menswear"
  },
  {
    src: "/image/custom-outfit-1.png",
    title: "Custom Evening Wear",
    category: "Womenswear"
  },
  {
    src: "/image/agbada.png",
    title: "Traditional Craft",
    category: "Heritage"
  },
  {
    src: "/image/totebag.png",
    title: "Luxury Accessories",
    category: "Leather Goods"
  },
  {
    src: "/image/fabrics.png",
    title: "Exquisite Fabrics",
    category: "Materials"
  }
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-brand-light lg:aspect-auto lg:h-[700px]">
      {/* Image Layer - Animated */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={products[currentIndex].src}
            alt={products[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Fixed UI Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-white z-10 sm:bottom-12 sm:left-12 sm:right-12">
        <div className="flex flex-col gap-2">
          {/* Category - Fixed with subtle fade */}
          <motion.span
            key={`cat-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5 }}
            className="font-display text-[10px] font-bold uppercase tracking-[0.4em]"
          >
            {products[currentIndex].category}
          </motion.span>
          
          {/* Title - Fixed with subtle fade */}
          <motion.h3
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-medium tracking-tight"
          >
            {products[currentIndex].title}
          </motion.h3>
        </div>
        
        {/* Pagination - Fixed container */}
        <div className="flex gap-2 pb-1">
          {products.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-700 ease-[0.22,1,0.36,1] ${idx === currentIndex ? 'w-10 bg-white' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
