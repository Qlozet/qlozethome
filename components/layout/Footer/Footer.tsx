import Image from "next/image";
import Link from "next/link";
import { HELP_URL } from "@/lib/links";

type FooterData = typeof import("@/data/global/footer.json");

type FooterProps = {
  data: FooterData;
};

export function Footer({ data }: FooterProps) {
  return (
    <footer id={data.id} className="relative bg-white py-12 sm:py-24">
      <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-6 md:px-10 lg:px-10">
        {/* Main Footer Container */}
        <div className="overflow-hidden rounded-[3rem] bg-brand-darker px-8 py-16 text-white sm:rounded-[4rem] sm:px-16 sm:py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Branding & Newsletter Column */}
            <div className="flex flex-col gap-12 lg:col-span-5">
              <div className="flex flex-col gap-6">
                <Link href="/" className="font-display text-4xl font-medium tracking-[0.3em] transition-opacity hover:opacity-80">
                  QLZT
                </Link>
                <p className="max-w-md font-ui text-base leading-relaxed text-white/50">
                  Made-to-measure and ready-to-wear fashion from independent tailors and designers.
                </p>
              </div>

              {/* Waitlist */}
              <div className="flex flex-col gap-6">
                <h4 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                  Stay Ahead
                </h4>
                <Link
                  href="/waitlist"
                  className="w-fit rounded-full bg-white px-8 py-4 font-ui text-xs font-semibold uppercase tracking-widest text-brand-darker transition-all hover:bg-brand-light active:scale-[0.98]"
                >
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 lg:col-span-7">
              {data.columns.map((column) => (
                <div key={column.title} className="flex flex-col gap-8">
                  <span className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                    {column.title}
                  </span>
                  <ul className="flex flex-col gap-5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href === "HELP_URL" ? HELP_URL : link.href}
                          className="font-ui text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-24 flex flex-col items-center gap-8 border-t border-white/5 pt-12 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-white/30">
                © {new Date().getFullYear()} {data.bottomText}
              </span>
            </div>

            {/* Social & Legal Group */}
            <div className="flex flex-wrap items-center justify-center gap-8 font-ui text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
              <Link href="/terms" className="transition hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


