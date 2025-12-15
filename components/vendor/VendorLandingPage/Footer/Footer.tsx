import Link from "next/link";

type VendorFooterData = typeof import("@/data/vendor/vendorlanding/footer.json");

type VendorFooterProps = {
  data: VendorFooterData;
};

export function VendorFooter({ data }: VendorFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-3xl font-semibold tracking-[0.35em] uppercase">
            QLZT
          </p>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.4em] text-white/70">
            {data.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 text-sm text-white/70">
            {data.social.map((social) => (
              <Link key={social.href} href={social.href} className="hover:text-white">
                {social.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-white/50">
          {data.copyright.replace("{year}", String(year))}
        </div>
      </div>
    </footer>
  );
}

