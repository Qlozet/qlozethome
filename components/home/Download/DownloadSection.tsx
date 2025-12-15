import Image from "next/image";
import Link from "next/link";

type DownloadData = typeof import("@/data/home/download.json");

type DownloadSectionProps = {
  data: DownloadData;
};

export function DownloadSection({ data }: DownloadSectionProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-6 text-[#1b1b1b]">
          <h2 className="text-4xl font-semibold leading-tight sm:text-[46px]">
            {data.title}
          </h2>
          <p className="text-base leading-relaxed text-[#383838]">
            {data.description}
          </p>
          {data.storeLinks?.length ? (
            <div className="flex flex-wrap gap-4">
              {data.storeLinks.map((store) => (
                <Link
                  key={store.label}
                  href={store.href}
                  className="inline-flex overflow-hidden rounded-xl shadow-[0_20px_45px_-28px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]"
                >
                  <Image
                    src={store.icon}
                    alt={store.label}
                    width={180}
                    height={56}
                    className="h-14 w-[180px] object-contain"
                    sizes="(min-width: 768px) 180px, 45vw"
                  />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative flex w-full max-w-[540px] justify-center lg:justify-end">
          <div className="relative w-full">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={960}
              height={520}
              className="h-full w-full object-contain"
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


