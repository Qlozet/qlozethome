"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const businessTypes = [
  "Fashion Labels",
  "Jewelry & Accessories",
  "Beauty & Wellness",
  "Footwear",
  "Bag & Leather Goods",
  "Other"
];

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    businessType: "",
    phone: ""
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
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
      className="flex w-full flex-col gap-10"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {/* Full Name */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="name" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="border-b border-black/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-black"
            required
          />
        </motion.div>

        {/* Business Name */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="businessName" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            placeholder="Maison Qlozet"
            className="border-b border-black/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-black"
            required
          />
        </motion.div>

        {/* Business Email */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="email" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Business Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="hello@business.com"
            className="border-b border-black/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-black"
            required
          />
        </motion.div>

        {/* Phone Number */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="phone" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+1 (555) 000-0000"
            className="border-b border-black/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-black"
            required
          />
        </motion.div>

        {/* Business Type */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:col-span-2">
          <label htmlFor="businessType" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Business Type
          </label>
          <select
            id="businessType"
            className="appearance-none border-b border-black/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-black cursor-pointer"
            defaultValue=""
            required
          >
            <option value="" disabled>Select your industry</option>
            {businessTypes.map((type) => (
              <option key={type} value={type} className="bg-white text-black py-2">
                {type}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      <motion.button
        variants={itemVariants}
        whileHover={{ x: 10 }}
        className="group mt-6 flex items-center gap-4 self-start font-display text-sm font-bold uppercase tracking-[0.3em] text-black"
      >
        Request Early Access
        <span className="h-[1px] w-12 bg-black transition-all duration-500 group-hover:w-20" />
      </motion.button>
    </motion.form>
  );
}
