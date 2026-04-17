"use client";

import { motion } from "framer-motion";

export function CustomerWaitlistForm() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col gap-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-10">
        {/* Name */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="name" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Jane Doe"
            className="border-b border-black/10 bg-transparent py-4 font-ui text-xl outline-none transition-colors focus:border-black"
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="email" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="jane@example.com"
            className="border-b border-black/10 bg-transparent py-4 font-ui text-xl outline-none transition-colors focus:border-black"
            required
          />
        </motion.div>
      </div>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-full bg-black text-white"
      >
        <span className="relative z-10 font-display text-sm font-bold uppercase tracking-[0.3em]">
          Get Early Access
        </span>
        <div className="absolute inset-0 -translate-x-full bg-zinc-800 transition-transform duration-500 group-hover:translate-x-0" />
      </motion.button>

      <motion.p variants={itemVariants} className="text-center font-ui text-xs text-black/30">
        By joining, you agree to our privacy policy and will receive exclusive updates.
      </motion.p>
    </motion.form>
  );
}
