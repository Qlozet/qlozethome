"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function VendorCapabilitiesGrid() {
   const cards = [
      {
         title: "Digital Storefront & Sales",
         desc: "Launch your online store instantly and start selling.",
         bullets: ["No website required", "Manage products easily", "Reach customers globally"],
         link: "/instantstorefront",
         delay: 0.1,
         colSpan: "lg:col-span-8",
         bgImage: "/image/storefront.png"
      },
      {
         title: "Customer & Measurement",
         desc: "Manage profiles, specifications, and precision data.",
         bullets: ["Client profiles", "Measurement history"],
         link: "/customermeasurements",
         delay: 0.2,
         colSpan: "lg:col-span-4",
         bgImage: "/image/leather.jpg"
      },

      {
         title: "AI Business Insights",
         desc: "Make smarter decisions with AI-powered analytics.",
         bullets: ["Sales performance", "AI recommendations"],
         link: "/marketintelligence",
         delay: 0.3,
         colSpan: "lg:col-span-4",
         bgImage: "/image/floral-pattern.png"
      },
      {
         title: "Payments & Growth",
         desc: "Get paid securely and scale your business.",
         bullets: ["Transparent payouts", "Secure processing"],
         link: "/paymentsandgrowth",
         delay: 0.4,
         colSpan: "lg:col-span-8",
         bgImage: "/image/cotton.jpeg"
      },
      {
         title: "Flexible Selling",
         desc: "Sell your way—with full control.",
         bullets: ["Custom or ready-to-wear", "Set your own pricing"],
         link: "/flexiblesellingoptions",
         delay: 0.5,
         colSpan: "lg:col-span-6",
         bgImage: "/image/agbada.png"
      },
      {
         title: "Logistics & Delivery",
         desc: "Deliver seamlessly without the stress.",
         bullets: ["End-to-end support", "Real-time tracking"],
         link: "/shipsmarter",
         delay: 0.6,
         colSpan: "lg:col-span-6",
         bgImage: "/image/qlozet-bag.png"
      }
   ];

   return (
      <section className="relative py-24 sm:py-40 bg-[#F9F9F8] overflow-hidden" data-theme="light">
         <div className="mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10">

            {/* Header */}
            <div className="mb-16 sm:mb-24 flex flex-col lg:flex-row justify-between items-end gap-8">
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-display max-w-4xl text-5xl sm:text-7xl font-medium tracking-tight text-[#3A3A3A] max-w-3xl leading-[1]"
               >
                  Everything You Need to Succeed.
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40 pb-2"
               >
                  02 // The Capabilities
               </motion.p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
               {cards.map((card, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: card.delay, duration: 0.6 }}
                     className={`group relative rounded-[2rem] lg:rounded-[3rem] bg-zinc-900 overflow-hidden flex flex-col min-h-[400px] ${card.colSpan}`}
                  >
                     {/* Immersive Background */}
                     <div className="absolute inset-0 z-0">
                        <img src={card.bgImage} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                     </div>

                     <div className="relative z-10 p-8 sm:p-12 flex flex-col h-full text-white">
                        <h3 className="font-display text-3xl sm:text-4xl font-medium mb-4">
                           {card.title}
                        </h3>

                        <p className="text-zinc-300 font-ui text-lg mb-8 max-w-md">
                           {card.desc}
                        </p>

                        <ul className="space-y-4 mb-12">
                           {card.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                 <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                                    <Check className="h-3.5 w-3.5 text-white" />
                                 </span>
                                 <span className="font-ui text-sm font-medium text-white/70 sm:text-base">{bullet}</span>
                              </li>
                           ))}
                        </ul>

                        <div className="mt-auto pt-8 flex border-t border-white/20">
                           <Link href={card.link} className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white hover:text-zinc-300 transition-colors">
                              Explore <ArrowRight className="h-4 w-4" />
                           </Link>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

         </div>
      </section>
   );
}
