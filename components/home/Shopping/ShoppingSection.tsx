import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/common/SectionHeading";

type ShoppingData = typeof import("@/data/home/shopping.json");

type ShoppingSectionProps = {
  data: ShoppingData;
};

export function ShoppingSection({ data }: ShoppingSectionProps) {
  return (
    <section id={data.id} className="bg-white -mt-[100px] rounded-t-[30px] sm:rounded-t-[5rem] py-24 sm:py-32 scroll-mt-32">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading
            title={data.title}
            description={data.description}
            align="left"
          />
          <Link
            href={data.cta.href}
            className="w-fit rounded-[8px] border border-zinc-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
          >
            {data.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}


