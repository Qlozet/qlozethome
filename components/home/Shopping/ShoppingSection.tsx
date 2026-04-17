import Image from "next/image";
import Link from "next/link";


type ShoppingData = typeof import("@/data/home/shopping.json");

type ShoppingSectionProps = {
  data: ShoppingData;
  dark?: boolean;
};

export function ShoppingSection({ data, dark = false }: ShoppingSectionProps) {
  return (
    <section id={data.id} className="scroll-mt-32 bg-[#3A3A3A] py-24 sm:py-32" data-theme="dark">
      <div className="mx-auto grid w-full max-w-[94rem] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative group aspect-[4/3] w-full overflow-hidden rounded-[3rem] border border-white/5 bg-white/5 shadow-2xl transition-all duration-700">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-contain p-4 grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 sm:p-8"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="flex flex-col gap-6">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
              Commerce Engine
            </span>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {data.title}
            </h2>
            <p className="max-w-xl font-ui text-base leading-relaxed text-white/50 sm:text-lg">
              {data.description}
            </p>
          </div>

          <Link
            href={data.cta.href}
            className="inline-flex w-fit items-center justify-center rounded-full bg-white px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] text-black shadow-2xl transition-all hover:scale-105 active:scale-[0.98]"
          >
            {data.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}


