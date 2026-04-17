import Image from "next/image";
import Link from "next/link";

type DownloadData = typeof import("@/data/home/download.json");

type DownloadSectionProps = {
  data: DownloadData;
  dark?: boolean;
};

export function DownloadSection({ data, dark = false }: DownloadSectionProps) {
  return (
    <section
      id={data.id}
      className={`scroll-mt-32 py-24 sm:py-32 ${dark ? "bg-[#3A3A3A]" : "bg-white"}`}
      data-theme={dark ? "dark" : "light"}
    >
      <div className="mx-auto flex w-full max-w-[94rem] flex-col gap-20 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className={`max-w-xl space-y-10 ${dark ? "text-white" : "text-[#3A3A3A]"}`}>
          <div className="flex flex-col gap-6">
            <span className={`font-display text-[10px] font-bold uppercase tracking-[0.4em] ${dark ? "text-white/40" : "text-[#3A3A3A]/40"}`}>
              Mobile Extension
            </span>
            <h2 className="font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
              {data.title}
            </h2>
            <p className={`font-ui text-base leading-relaxed sm:text-lg ${dark ? "text-white/60" : "text-[#3A3A3A]/60"}`}>
              {data.description}
            </p>
          </div>

          {data.storeLinks?.length ? (
            <div className="flex flex-wrap gap-4">
              {data.storeLinks.map((store) => {
                const isApple = store.label.toLowerCase().includes("apple") || store.label.toLowerCase().includes("app store");
                
                return (
                  <Link
                    key={store.label}
                    href={store.href}
                    className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border px-6 py-3 transition-all duration-500 hover:-translate-y-1 active:scale-[0.98] ${
                      dark 
                        ? "border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]" 
                        : "border-black/5 bg-gradient-to-b from-[#2A2A2A] to-black hover:from-[#3A3A3A] hover:to-[#111111] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                    }`}
                  >
                    {/* Vector Icon */}
                    <div className="relative z-10 text-white transition-transform duration-500 group-hover:scale-110">
                      {isApple ? (
                        <svg viewBox="0 0 384 512" className="h-7 w-auto fill-current">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 512 512" className="h-7 w-auto fill-current">
                          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 18-28.7 0-38.8zm-111.9 146.4L104.6 499l225.6-129.7-4.9-4.9z"/>
                        </svg>
                      )}
                    </div>

                    {/* Lettering */}
                    <div className="relative z-10 flex flex-col items-start leading-tight">
                      <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-white/40">
                        {isApple ? "Download on the" : "GET IT ON"}
                      </span>
                      <span className="font-display text-lg font-medium text-white">
                        {isApple ? "App Store" : "Google Play"}
                      </span>
                    </div>

                    {/* Premium Shine Effect */}
                    <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
        
        <div className="relative group flex w-full max-w-[640px] justify-center lg:justify-end">
          <div className="relative w-full overflow-hidden rounded-[3rem] border border-black/5 shadow-2xl shadow-black/5">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={960}
              height={520}
              className="h-full w-full object-contain transition-transform duration-1000 group-hover:scale-105"
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


