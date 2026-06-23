import Image from "next/image";
import Link from "next/link";

type FooterData = typeof import("@/data/global/footer.json");

type FooterProps = {
  data: FooterData;
};

export function Footer({ data }: FooterProps) {
  return (
    <footer id={data.id} className="relative bg-white py-12 sm:py-24">
      <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-6 md:px-10 lg:px-10">
        {/* Main Footer Container */}
        <div className="overflow-hidden rounded-[3rem] bg-brand px-8 py-16 text-white sm:rounded-[4rem] sm:px-16 sm:py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Branding & Newsletter Column */}
            <div className="flex flex-col gap-12 lg:col-span-5">
              <div className="flex flex-col gap-6">
                <Link href="/" className="font-display text-4xl font-medium tracking-[0.3em] transition-opacity hover:opacity-80">
                  QLZT
                </Link>
                <p className="max-w-md font-ui text-base leading-relaxed text-white/50">
                  Designing the future of fashion-tech through seamless fit intelligence and curated designer experiences.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col gap-6">
                <h4 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                  Stay Ahead
                </h4>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:max-w-sm sm:overflow-hidden sm:rounded-full sm:border sm:border-white/10 sm:bg-white/5 sm:p-1 sm:backdrop-blur-sm transition-all sm:focus-within:border-white/20 sm:focus-within:bg-white/10">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-full border border-white/10 bg-white/5 px-6 md:px-10 lg:px-10 py-4 font-ui text-sm text-white placeholder-white/30 outline-none transition-all focus:border-white/20 sm:w-auto sm:flex-1 sm:border-none sm:bg-transparent sm:py-3 sm:focus:border-none"
                  />
                  <button className="w-full rounded-full bg-white px-6 md:px-10 lg:px-10 py-4 font-ui text-xs font-semibold uppercase tracking-widest text-brand transition-all hover:bg-brand-light active:scale-[0.98] sm:w-auto sm:py-3">
                    Join
                  </button>
                </div>
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
                          href={link.href}
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
                {data.bottomText}
              </span>
            </div>

            {/* Social & Legal Group */}
            <div className="flex flex-wrap items-center justify-center gap-8 font-ui text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              <Link href="#" className="transition hover:text-white">Instagram</Link>
              <Link href="#" className="transition hover:text-white">Twitter</Link>
              <Link href="#" className="transition hover:text-white">LinkedIn</Link>
              <div className="hidden h-px w-8 bg-white/10 sm:block"></div>
              <Link href="#" className="transition hover:text-white">Privacy</Link>
              <Link href="#" className="transition hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


