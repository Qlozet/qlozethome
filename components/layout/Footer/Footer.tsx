import Image from "next/image";

type FooterData = typeof import("@/data/global/footer.json");

type FooterProps = {
  data: FooterData;
};

export function Footer({ data }: FooterProps) {
  return (
    <footer id={data.id} className="bg-white py-24">
      <div className="mx-auto w-full max-w-[95rem] px-6">
        <div className="rounded-[3rem] bg-[#3A3A3A] px-8 py-12 text-white shadow-[0_35px_80px_-40px_rgba(60,44,34,0.8)] sm:px-12 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col gap-4">
              <div className="relative h-10 w-32">
                <Image
                  src={data.logo.src}
                  alt={data.logo.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 128px, 112px"
                  priority
                />
              </div>
              <p className="text-sm text-white/70">
                Seamless fit intelligence, curated designer drops, and a personal stylist world built for you.
              </p>
            </div>
            {data.columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                  {column.title}
                </span>
                <ul className="flex flex-col gap-3 text-sm text-white/80">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.35em] text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <span>{data.bottomText}</span>
            <div className="flex gap-6">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


