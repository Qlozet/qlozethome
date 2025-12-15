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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
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
      <div className="flex items-center justify-between pl-0 pr-6 py-4">
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
        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 ${isCustomizePage ? "text-gray-700" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            } ${isCustomizePage ? "bg-gray-700" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              mobileMenuOpen ? "opacity-0" : ""
            } ${isCustomizePage ? "bg-gray-700" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            } ${isCustomizePage ? "bg-gray-700" : "bg-white"}`}
          />
        </button>
        <nav
          className={`hidden items-center gap-10 text-[13px] font-extrabold md:flex ${isCustomizePage ? "text-gray-700" : "text-white/80"
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
                        <div className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-gray-200" />
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
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div
          className={`hidden md:flex items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.35em] ${isCustomizePage ? "text-gray-700" : "text-white"
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t ${isCustomizePage ? "border-gray-200 bg-white" : "border-white/10 bg-black/95 backdrop-blur"}`}>
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {data.links.map((link) => {
              const hasDropdown = "dropdown" in link && link.dropdown;
              const isMobileDropdownOpen = mobileDropdownOpen === link.label;
              return (
                <div key={link.label} className="flex flex-col">
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => setMobileDropdownOpen(isMobileDropdownOpen ? null : link.label)}
                      className={`flex items-center justify-between text-base font-semibold py-2 ${isCustomizePage ? "text-gray-900" : "text-white"}`}
                    >
                      <span>{link.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-5 w-5 transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-base font-semibold py-2 ${isCustomizePage ? "text-gray-900" : "text-white"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                  {hasDropdown && isMobileDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-4">
                      {/* Shoppers Section */}
                      <div className="flex flex-col gap-3">
                        <h4 className={`text-sm font-bold ${isCustomizePage ? "text-gray-900" : "text-white"}`}>
                          {link.dropdown.shoppers.title}
                        </h4>
                        {link.dropdown.shoppers.features.map((feature: any, idx: number) => (
                          <Link
                            key={idx}
                            href={feature.href}
                            className={`text-sm py-1 ${isCustomizePage ? "text-gray-600" : "text-white/80"}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {feature.title}
                          </Link>
                        ))}
                      </div>
                      {/* Vendors Section */}
                      <div className={`flex flex-col gap-3 pt-2 border-t ${isCustomizePage ? "border-gray-200" : "border-white/10"}`}>
                        <h4 className={`text-sm font-bold ${isCustomizePage ? "text-gray-900" : "text-white"}`}>
                          {link.dropdown.vendors.title}
                        </h4>
                        {link.dropdown.vendors.features.map((feature: any, idx: number) => (
                          <Link
                            key={idx}
                            href={feature.href}
                            className={`text-sm py-1 ${isCustomizePage ? "text-gray-600" : "text-white/80"}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {feature.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {/* Mobile CTA Buttons */}
            <div className={`flex flex-col gap-3 pt-4 border-t ${isCustomizePage ? "border-gray-200" : "border-white/10"}`}>
              <Link
                href={data.secondary.href}
                className={`rounded-[8px] border px-5 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] transition ${isCustomizePage
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "border-white/40 text-white hover:bg-white/10"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {data.secondary.label}
              </Link>
              <Link
                href={data.cta.href}
                className={`rounded-[8px] px-5 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] transition ${isCustomizePage
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-neutral-200"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {data.cta.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
