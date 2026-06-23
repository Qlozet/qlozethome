"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type HeaderData = typeof import("@/data/global/navbar.json");

type HeaderProps = {
  data: HeaderData;
};

export function Header({ data }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isCustomizePage = pathname?.includes("/waitlist") || pathname?.includes("/whatwedo") || pathname?.includes("/measurement") || pathname?.includes("/designyouroutfit") || pathname?.includes("/explore") || pathname?.includes("/flexiblesellingoptions") || pathname?.includes("/instantstorefront") || pathname?.includes("/shipsmarter") || pathname?.includes("/clothinggenerator") || pathname?.includes("/chatwithcustomers") || pathname?.includes("/ordering-and-delivery") || pathname?.includes("/custom-ready-to-wear") || pathname?.includes("/fabric") || pathname?.includes("/customermeasurements") || pathname?.includes("/paymentsandgrowth") || pathname?.includes("/marketintelligence");

  // Determine if we are on a vendor-related page (where pricing should be visible)
  const isVendorPage = pathname?.includes("/vendor") || 
                       pathname?.includes("/flexiblesellingoptions") || 
                       pathname?.includes("/instantstorefront") || 
                       pathname?.includes("/shipsmarter") || 
                       pathname?.includes("/clothinggenerator") || 
                       pathname?.includes("/chatwithcustomers") || 

                       pathname?.includes("/customermeasurements") ||
                       pathname?.includes("/paymentsandgrowth") ||
                       pathname?.includes("/marketintelligence") ||
                       pathname?.includes("/pricing");

  // Filter out PRICING for customer pages, and always hide WHAT WE DO
  const filteredLinks = (isVendorPage 
    ? data.links 
    : data.links.filter(link => link.label !== "PRICING")
  ).filter(link => link.label !== "WHAT WE DO");

  const ctaHref = isVendorPage ? "/vendor/waitlist" : data.cta.href;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const [dynamicTheme, setDynamicTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Offset from the top to check (midpoint of the typical header height)
      const headerIntersection = 40; 
      const sections = document.querySelectorAll('[data-theme]');
      let currentTheme: 'light' | 'dark' | null = null;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the section encompasses the header intersection line
        if (rect.top <= headerIntersection && rect.bottom > headerIntersection) {
           currentTheme = section.getAttribute('data-theme') as 'light' | 'dark';
        }
      });

      if (currentTheme !== dynamicTheme) {
         setDynamicTheme(currentTheme);
      }
    };

    // Run on mount to grab initial load position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dynamicTheme]);

  // If a dynamic theme is found, we use it. Otherwise, fallback to the path-based legacy check.
  const effectiveTheme = dynamicTheme || (isCustomizePage ? 'light' : 'dark');
  const isLightSurface = effectiveTheme === 'light';

  const logoSrc = isLightSurface
    ? "/image/Qlozet Black 1 (Traced).png"
    : data.logo.src; // White default logo

  const navTheme = isLightSurface ? {
    headerBg: "bg-white/70 backdrop-blur-3xl border-gray-100/50",
    textBase: "text-zinc-600",
    textHover: "hover:text-brand",
    btnSecondary: "border-gray-200 text-gray-600 hover:border-brand hover:text-brand",
    btnPrimary: "bg-brand text-white hover:bg-brand-hover",
    hamburger: "text-gray-700",
    mobileBg: "bg-white/90 border-gray-100",
    mobileText: "text-gray-700 hover:text-brand",
    mobileBtnSec: "border-gray-200 text-gray-700 hover:bg-brand-light",
    mobileBtnPri: "bg-brand text-white hover:bg-brand-hover"
  } : {
    headerBg: "bg-black/10 backdrop-blur-3xl border-white/5",
    textBase: "text-white/70",
    textHover: "hover:text-white",
    btnSecondary: "border-white/10 text-white/90 hover:border-white/40 hover:text-white",
    btnPrimary: "bg-white text-black hover:bg-zinc-100",
    hamburger: "text-white",
    mobileBg: "bg-[#2A2A2A]/90 border-white/5",
    mobileText: "text-white/70 hover:text-white",
    mobileBtnSec: "border-white/10 text-white hover:bg-white/5",
    mobileBtnPri: "bg-white text-black hover:bg-zinc-100"
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 w-full ${navTheme.headerBg}`}
    >
      <div className="mx-auto flex max-w-[94rem] items-center justify-between gap-4 px-6 md:px-10 lg:px-10 py-4 w-full">
        <Link href={data.logo.href} className="flex items-center gap-2">
          <div className="relative h-8 w-28 sm:w-32">
            <Image
              src={logoSrc}
              alt={data.logo.alt}
              width={128}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`min-[1200px]:hidden p-2 ${navTheme.hamburger}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 12h18" />
              <path d="M3 6h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav
          className={`font-display hidden shrink-0 items-center gap-12 text-[11px] min-[1200px]:flex absolute left-1/2 -translate-x-1/2 ${navTheme.textBase}`}
        >
          {filteredLinks.map((link) => {
            const hasDropdown = "dropdown" in link && link.dropdown;
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 py-2 font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${navTheme.textHover}`}
                >
                  {link.label}
                  {hasDropdown && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-3 w-3 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
                <AnimatePresence>
                  {hasDropdown && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
                    >
                      <div className="relative w-[840px] overflow-hidden rounded-[2.5rem] bg-white shadow-[0_32px_128px_-16px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
                        <div className="relative grid grid-cols-[0.85fr_1.15fr]">
                          {/* Shoppers Column - Light Grey Background */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-8 bg-[#F5F5F7] p-8"
                          >
                            <div className="flex items-center gap-4 px-2">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0m-14.998 0A17.933 17.933 0 0112 21.75c2.476 0 4.791-.498 6.901-1.396" />
                                </svg>
                              </div>
                              <h3 className="font-display text-base font-bold tracking-tight text-zinc-900">
                                {link.dropdown.shoppers.title}
                              </h3>
                            </div>

                            <div className="flex flex-col gap-1">
                              {link.dropdown.shoppers.features.map((feature: any, idx: number) => {
                                const isSpecial = feature.title === "Shop with us";
                                return (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.05 }}
                                  >
                                    <Link
                                      href={feature.href}
                                      className="group flex flex-col gap-0.5 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-black/5"
                                    >
                                      <div className="flex items-center gap-2">
                                        <h4 className={`font-display text-sm font-semibold text-zinc-900 transition-colors ${isSpecial ? "underline decoration-zinc-300 underline-offset-4" : ""}`}>
                                          {feature.title}
                                        </h4>
                                        {isSpecial && (
                                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-1">
                                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 6.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                          </svg>
                                        )}
                                      </div>
                                      <p className="font-ui text-[11px] leading-snug text-zinc-400 group-hover:text-zinc-500">
                                        {feature.description}
                                      </p>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>

                          {/* Vendors Column - Natural White Background */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-8 bg-white p-8"
                          >
                            <div className="flex items-center gap-4 px-2">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h2a2 2 0 002-2V9.11a2 2 0 00-.46-1.303l-1.47-1.74A2 2 0 0016.574 5.27L12 10.252l-4.574-4.982a2 2 0 00-1.496-.697L4.46 6.312a2 2 0 00-.46 1.303V19a2 2 0 002 2h2" />
                                </svg>
                              </div>
                              <h3 className="font-display text-base font-bold tracking-tight text-zinc-900">
                                {link.dropdown.vendors.title}
                              </h3>
                            </div>

                            <div className="grid grid-cols-1 gap-1">
                              {link.dropdown.vendors.features.map((feature: any, idx: number) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + idx * 0.05 }}
                                >
                                  <Link
                                    href={feature.href}
                                    className="group flex flex-col gap-0.5 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-zinc-50"
                                  >
                                    <h4 className="font-display text-sm font-semibold text-zinc-900 transition-colors group-hover:text-black">
                                      {feature.title}
                                    </h4>
                                    <p className="font-ui text-[11px] leading-snug text-zinc-400 transition-colors group-hover:text-zinc-500">
                                      {feature.description}
                                    </p>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
        <div
          className={`font-display hidden shrink-0 items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] min-[1200px]:flex ${navTheme.textBase}`}
        >

          <Link
            href={ctaHref}
            className={`rounded-full px-8 py-3.5 shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 ${navTheme.btnPrimary}`}
          >
            {data.cta.label}
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-full z-50 min-[1200px]:hidden">
            <div className={`max-h-[calc(100vh-80px)] overflow-y-auto border-b transition-all duration-500 ${navTheme.mobileBg}`}
            >
              <nav className="flex flex-col px-8 py-10 gap-2">
                {filteredLinks.map((link) => {
                  const hasDropdown = "dropdown" in link && link.dropdown;
                  const isDropdownOpen = openDropdown === link.label;

                  return (
                    <div key={link.label} className="border-b border-black/5 last:border-b-0">
                      {hasDropdown ? (
                        <>
                          <button
                            onClick={() => setOpenDropdown(isDropdownOpen ? null : link.label)}
                            className={`flex w-full items-center justify-between py-5 text-left font-display text-[11px] font-bold uppercase tracking-[0.2em] transition ${navTheme.mobileText}`}
                          >
                            <span>{link.label}</span>
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-6 pb-8 pt-4">
                                  {/* Shoppers Section */}
                                  <div className="flex flex-col gap-4 rounded-3xl bg-[#F5F5F7] p-4 text-left">
                                    <div className="flex items-center gap-3 px-2">
                                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0m-14.998 0A17.933 17.933 0 0112 21.75c2.476 0 4.791-.498 6.901-1.396" />
                                        </svg>
                                      </div>
                                      <h3 className="font-display text-xs font-bold text-zinc-900 uppercase tracking-wider">
                                        {link.dropdown.shoppers.title}
                                      </h3>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      {link.dropdown.shoppers.features.map((feature: any, idx: number) => (
                                        <Link
                                          key={idx}
                                          href={feature.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="group flex flex-col gap-0.5 rounded-2xl p-4 transition-all duration-300 hover:bg-black/5"
                                        >
                                          <div className="flex items-center justify-between">
                                            <h4 className="font-display text-sm font-semibold text-zinc-900">
                                              {feature.title}
                                            </h4>
                                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-zinc-300">
                                              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 6.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                            </svg>
                                          </div>
                                          <p className="font-ui text-xs text-zinc-400">
                                            {feature.description}
                                          </p>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Vendors Section */}
                                  <div className="flex flex-col gap-4 rounded-3xl bg-white p-4 text-left ring-1 ring-black/5">
                                    <div className="flex items-center gap-3 px-2">
                                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-zinc-900">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h2a2 2 0 002-2V9.11a2 2 0 00-.46-1.303l-1.47-1.74A2 2 0 0016.574 5.27L12 10.252l-4.574-4.982a2 2 0 00-1.496-.697L4.46 6.312a2 2 0 00-.46 1.303V19a2 2 0 002 2h2" />
                                        </svg>
                                      </div>
                                      <h3 className="font-display text-xs font-bold text-zinc-900 uppercase tracking-wider">
                                        {link.dropdown.vendors.title}
                                      </h3>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      {link.dropdown.vendors.features.map((feature: any, idx: number) => (
                                        <Link
                                          key={idx}
                                          href={feature.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="group flex flex-col gap-0.5 rounded-2xl p-4 transition-all duration-300 hover:bg-zinc-50"
                                        >
                                          <div className="flex items-center justify-between">
                                            <h4 className="font-display text-sm font-semibold text-zinc-900">
                                              {feature.title}
                                            </h4>
                                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-zinc-300">
                                              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 6.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                            </svg>
                                          </div>
                                          <p className="font-ui text-xs text-zinc-400">
                                            {feature.description}
                                          </p>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] transition ${navTheme.mobileText}`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTA Buttons */}
                <div className="mt-8 flex flex-col gap-4 border-t border-black/5 pt-10">

                  <Link
                    href={ctaHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-full px-6 py-4 text-center font-display text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 shadow-xl active:scale-95 ${navTheme.mobileBtnPri}`}
                  >
                    {data.cta.label}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
