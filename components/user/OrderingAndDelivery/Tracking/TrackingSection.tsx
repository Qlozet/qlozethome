"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Navigation, ArrowRight } from "lucide-react";
import Link from "next/link";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type TrackingSectionProps = {
  data: SectionData;
};

const WAYPOINTS = [
  { label: "Studio", x: "15%", y: "75%" },
  { label: "Hub A", x: "40%", y: "45%" },
  { label: "Hub B", x: "65%", y: "55%" },
  { label: "Destination", x: "85%", y: "25%" },
];

export function TrackingSection({ data }: TrackingSectionProps) {
  return (
    <section id="tracking" className="relative w-full bg-[#EDEAEA] py-24 lg:py-40 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-2xl text-black/40 font-ui font-normal tracking-normal">{data.subtitle}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-6">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                    <Navigation className="h-4 w-4" />
                  </div>
                  <span className="font-ui text-lg text-black/70">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-sm font-medium italic text-black/30"
            >
              {data.footer}
            </motion.p>
          </div>

          {/* Right: Route Map Console */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="relative rounded-[3rem] bg-white border border-black/5 p-8 shadow-2xl flex flex-col gap-6 overflow-hidden min-h-[500px] transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                {/* Search Header */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#EDEAEA] border border-black/5">
                  <Search className="h-4 w-4 text-black/20" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">QL-294-ZX</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#3E1C01] animate-pulse" />
                    <span className="font-display text-[8px] font-bold uppercase tracking-widest text-[#3E1C01] leading-none">Live</span>
                  </div>
                </div>

                {/* Route Map */}
                <div className="relative flex-1 rounded-[2rem] bg-[#EDEAEA] border border-black/5 overflow-hidden min-h-[260px]">
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 0.5px, transparent 0)', backgroundSize: '24px 24px' }} />

                  {/* Route Path SVG */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Background path */}
                    <path d="M 15,75 Q 28,45 40,45 Q 52,45 65,55 Q 78,65 85,25" fill="none" stroke="black" strokeWidth="0.3" strokeDasharray="2 2" opacity="0.1" />
                    {/* Animated path */}
                    <motion.path
                      d="M 15,75 Q 28,45 40,45 Q 52,45 65,55 Q 78,65 85,25"
                      fill="none"
                      stroke="#3E1C01"
                      strokeWidth="0.6"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </svg>

                  {/* Waypoint Markers */}
                  {WAYPOINTS.map((wp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.4, type: "spring", stiffness: 200 }}
                      className="absolute flex flex-col items-center gap-1.5"
                      style={{ left: wp.x, top: wp.y, transform: "translate(-50%, -50%)" }}
                    >
                      {i === WAYPOINTS.length - 1 ? (
                        <div className="flex h-8 w-8 items-center justify-center bg-white rounded-xl shadow-xl border border-black/5">
                          <MapPin className="h-4 w-4 text-[#3E1C01]" />
                        </div>
                      ) : (
                        <div className={`h-3.5 w-3.5 rounded-full shadow-lg border-2 border-white ${i === 0 ? 'bg-black' : 'bg-[#3E1C01]/40'}`} />
                      )}
                      <span className="font-mono text-[6px] font-bold uppercase tracking-widest text-black/40 whitespace-nowrap">{wp.label}</span>
                    </motion.div>
                  ))}

                  {/* Moving Package */}
                  <motion.div
                    animate={{
                      left: ["15%", "40%", "65%", "85%"],
                      top: ["75%", "45%", "55%", "25%"],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.35, 0.65, 1] }}
                    className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div className="h-full w-full rounded-full bg-black shadow-lg flex items-center justify-center">
                      <Navigation className="h-2.5 w-2.5 text-white rotate-45" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 bg-black/20 rounded-full blur-sm" />
                  </motion.div>
                </div>

                {/* ETA Footer */}
                <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-2xl text-white shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#EDEAEA] animate-pulse" />
                      <span className="font-display text-[9px] font-bold uppercase tracking-widest">En Route</span>
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <span className="font-ui text-[9px] text-white/50">ETA: 35 min</span>
                  </div>
                  <Link href="/waitlist">
                    <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Live Status Pill */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -right-4 z-20 flex flex-col gap-1 p-3 bg-white rounded-xl border border-black/5 shadow-xl lg:top-8 lg:-right-8"
              >
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#3E1C01]" />
                  <span className="font-display text-[8px] font-bold uppercase tracking-widest text-black/40">Hub Transfer</span>
                </div>
                <span className="font-mono text-[8px] font-bold text-black">In Progress</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
