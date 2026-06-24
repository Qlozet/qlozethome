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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    try {
      const res = await fetch("/api/waitlist/vendor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          businessName: formData.businessName,
          businessEmail: formData.email,
          phoneNumber: formData.phone,
          businessType: formData.businessType
        }),
      });
      
      if (!res.ok) throw new Error("Failed to join waitlist");
      
      setStatus("success");
      setFormData({ name: "", businessName: "", email: "", businessType: "", phone: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

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
      onSubmit={handleSubmit}
    >
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {/* Full Name */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="name" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="border-b border-[#111111]/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-brand-darker"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={status === "loading" || status === "success"}
          />
        </motion.div>

        {/* Business Name */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="businessName" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            placeholder="Maison Qlozet"
            className="border-b border-[#111111]/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-brand-darker"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            required
            disabled={status === "loading" || status === "success"}
          />
        </motion.div>

        {/* Business Email */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="email" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">
            Business Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="hello@business.com"
            className="border-b border-[#111111]/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-brand-darker"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={status === "loading" || status === "success"}
          />
        </motion.div>

        {/* Phone Number */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <label htmlFor="phone" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+1 (555) 000-0000"
            className="border-b border-[#111111]/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-brand-darker"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            disabled={status === "loading" || status === "success"}
          />
        </motion.div>

        {/* Business Type */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:col-span-2">
          <label htmlFor="businessType" className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">
            Business Type
          </label>
          <select
            id="businessType"
            className="appearance-none border-b border-[#111111]/10 bg-transparent py-3 font-ui text-lg outline-none transition-colors focus:border-brand-darker cursor-pointer"
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            required
            disabled={status === "loading" || status === "success"}
          >
            <option value="" disabled>Select your industry</option>
            {businessTypes.map((type) => (
              <option key={type} value={type} className="bg-white text-[#111111] py-2">
                {type}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      <motion.button
        variants={itemVariants}
        whileHover={status !== "loading" && status !== "success" ? { x: 10 } : {}}
        disabled={status === "loading" || status === "success"}
        className="group mt-6 flex items-center gap-4 self-start font-display text-sm font-bold uppercase tracking-[0.3em] text-brand-button disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : status === "success" ? "Access Requested!" : "Request Early Access"}
        {status !== "loading" && status !== "success" && (
          <span className="h-[1px] w-12 bg-brand-button transition-all duration-500 group-hover:w-20" />
        )}
      </motion.button>

      {status === "success" && (
        <motion.p variants={itemVariants} className="font-ui text-sm text-green-600 mt-2">
          Thank you for requesting early access! We will review your application and be in touch soon.
        </motion.p>
      )}
      
      {status === "error" && (
        <motion.p variants={itemVariants} className="font-ui text-sm text-red-600 mt-2">
          {errorMessage}
        </motion.p>
      )}
    </motion.form>
  );
}
