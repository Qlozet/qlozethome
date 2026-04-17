import Link from "next/link";

type VendorFooterData = typeof import("@/data/vendor/vendorlanding/footer.json");

type VendorFooterProps = {
  data: VendorFooterData;
};

export function VendorFooter({ data }: VendorFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#3A3A3A] py-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="font-display text-4xl font-medium tracking-[0.3em] transition-opacity hover:opacity-80">
            QLZT
          </Link>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
            {data.links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            {data.social.map((social) => (
              <Link key={social.href} href={social.href} className="transition hover:text-white">
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/5 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-ui text-[10px] uppercase tracking-[0.25em] text-white/20">
            {data.copyright.replace("{year}", String(year))}
          </div>
          <div className="flex gap-8 font-ui text-[10px] uppercase tracking-[0.2em] text-white/30">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

