"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type HeaderData = typeof import("@/data/global/navbar.json");

type HeaderProps = {
  data: HeaderData;
};

export function Header({ data }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isCustomizePage = pathname?.includes("/customize") || pathname?.includes("/whatwedo") || pathname?.includes("/measurement") || pathname?.includes("/designyouroutfit") || pathname?.includes("/explore") || pathname?.includes("/flexiblesellingoptions") || pathname?.includes("/instantstorefront") || pathname?.includes("/aimeasurement") || pathname?.includes("/shipsmarter") || pathname?.includes("/clothinggenerator") || pathname?.includes("/chatwithcustomers") || pathname?.includes("/managesteps");

  const logoSrc = isCustomizePage
    ? "/image/Qlozet Black 1 (Traced).png"
    : data.logo.src;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${isCustomizePage
        ? "border-gray-200 bg-white"
        : "border-white/10 bg-black/40 backdrop-blur"
        }`}
    >
      <div className="relative flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href={data.logo.href} className="flex items-center gap-2">
          <div className="relative h-8 w-28 sm:w-32">
            <Image
              src={logoSrc}
              alt={data.logo.alt}
              fill
              className="object-contain"
              sizes="(min-width: 640px) 128px, 112px"
              priority
            />
          </div>
        </Link>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 ${isCustomizePage ? "text-gray-700" : "text-white"}`}
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
          className={`hidden shrink-0items-center gap-10 text-[13px] font-extrabold md:flex ${isCustomizePage ? "text-gray-700" : "text-white/80"
            }`}
        >
          {data.links.map((link) => {
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
                  className={`block py-2 transition ${isCustomizePage ? "hover:text-gray-900" : "hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
                {hasDropdown && openDropdown === link.label && (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                    <div className="relative w-[900px] rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Shoppers Column */}
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5e9]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 text-[#4caf50]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1b1b1b]">
                              {link.dropdown.shoppers.title}
                            </h3>
                          </div>
                          <div className="flex flex-col gap-4">
                            {link.dropdown.shoppers.features.map((feature: any, idx: number) => (
                              <Link
                                key={idx}
                                href={feature.href}
                                className="group flex items-start justify-between gap-3 rounded-lg p-2 transition hover:bg-gray-50"
                              >
                                <div className="flex flex-col gap-1">
                                  <h4 className="text-base font-semibold text-[#1b1b1b]">
                                    {feature.title}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {feature.description}
                                  </p>
                                </div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="h-10 w-10 shrink-0 text-gray-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                        {/* Divider */}
                        <div className="hidden lg:absolute lg:bottom-8 lg:left-1/2 lg:top-8 lg:block lg:w-px lg:-translate-x-1/2 lg:bg-gray-200" />
                        {/* Vendors Column */}
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3f2fd]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 text-[#1976d2]"
                              >
                                <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                                <path
                                  fillRule="evenodd"
                                  d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1b1b1b]">
                              {link.dropdown.vendors.title}
                            </h3>
                          </div>
                          <div className="flex flex-col gap-4">
                            {link.dropdown.vendors.features.map((feature: any, idx: number) => (
                              <Link
                                key={idx}
                                href={feature.href}
                                className="group flex items-start justify-between gap-3 rounded-lg p-2 transition hover:bg-gray-50"
                              >

                                <div className="flex min-w-0 flex-1 flex-col gap-1">
                                  <h4 className="wrap-break-word text-base font-semibold text-[#1b1b1b]">
                                    {feature.title}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {feature.description}
                                  </p>
                                </div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="h-10 w-10 shrink-0 text-gray-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div
          className={`hidden shrink-0 items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.35em] md:flex ${isCustomizePage ? "text-gray-700" : "text-white"
            }`}
        >
          <Link
            href={data.secondary.href}
            className={`rounded-[8px] border px-5 py-2 transition ${isCustomizePage
              ? "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              : "border-white/40 hover:border-white hover:bg-white/10"
              }`}
          >
            {data.secondary.label}
          </Link>
          <Link
            href={data.cta.href}
            className={`rounded-[8px] px-5 py-2 transition ${isCustomizePage
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-white text-black hover:bg-neutral-200"
              }`}
          >
            {data.cta.label}
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-full z-50 md:hidden">
            <div className={`max-h-[calc(100vh-80px)] overflow-y-auto border-b ${isCustomizePage
              ? "border-gray-200 bg-white"
              : "border-white/10 bg-black/95 backdrop-blur"
              }`}
            >
              <nav className="flex flex-col px-6 py-6">
                {data.links.map((link) => {
                  const hasDropdown = "dropdown" in link && link.dropdown;
                  const isDropdownOpen = openDropdown === link.label;

                  return (
                    <div key={link.label} className="border-b border-gray-200/10 last:border-b-0">
                      {hasDropdown ? (
                        <>
                          <button
                            onClick={() => setOpenDropdown(isDropdownOpen ? null : link.label)}
                            className={`flex w-full items-center justify-between py-4 text-left text-[13px] font-extrabold transition ${isCustomizePage ? "text-gray-700" : "text-white/80"
                              }`}
                          >
                            <span>{link.label}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className={`h-5 w-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {isDropdownOpen && (
                            <div className="pb-4 pl-4">
                              {/* Shoppers Section */}
                              <div className="mb-6">
                                <h3 className={`mb-4 text-base font-bold ${isCustomizePage ? "text-gray-900" : "text-white"}`}>
                                  {link.dropdown.shoppers.title}
                                </h3>
                                <div className="flex flex-col gap-3">
                                  {link.dropdown.shoppers.features.map((feature: any, idx: number) => (
                                    <Link
                                      key={idx}
                                      href={feature.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex flex-col gap-1 rounded-lg p-3 transition hover:bg-gray-50/10"
                                    >
                                      <h4 className={`text-sm font-semibold ${isCustomizePage ? "text-gray-900" : "text-white"}`}>
                                        {feature.title}
                                      </h4>
                                      <p className={`text-xs ${isCustomizePage ? "text-gray-600" : "text-white/70"}`}>
                                        {feature.description}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              {/* Vendors Section */}
                              <div>
                                <h3 className={`mb-4 text-base font-bold ${isCustomizePage ? "text-gray-900" : "text-white"}`}>
                                  {link.dropdown.vendors.title}
                                </h3>
                                <div className="flex flex-col gap-3">
                                  {link.dropdown.vendors.features.map((feature: any, idx: number) => (
                                    <Link
                                      key={idx}
                                      href={feature.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex flex-col gap-1 rounded-lg p-3 transition hover:bg-gray-50/10"
                                    >
                                      <h4 className={`text-sm font-semibold ${isCustomizePage ? "text-gray-900" : "text-white"}`}>
                                        {feature.title}
                                      </h4>
                                      <p className={`text-xs ${isCustomizePage ? "text-gray-600" : "text-white/70"}`}>
                                        {feature.description}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-4 text-[13px] font-extrabold transition ${isCustomizePage ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                            }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTA Buttons */}
                <div className="mt-6 flex flex-col gap-3 border-t border-gray-200/10 pt-6">
                  <Link
                    href={data.secondary.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-[8px] border px-5 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] transition ${isCustomizePage
                      ? "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                      : "border-white/40 text-white hover:border-white hover:bg-white/10"
                      }`}
                  >
                    {data.secondary.label}
                  </Link>
                  <Link
                    href={data.cta.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-[8px] px-5 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] transition ${isCustomizePage
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-white text-black hover:bg-neutral-200"
                      }`}
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
