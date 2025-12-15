import Image from "next/image";
import Link from "next/link";

type CTAData = typeof import("@/data/vendor/vendorlanding/cta.json");

type CTAProps = {
  data: CTAData;
};

export function VendorCTA({ data }: CTAProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[95rem] px-6">
        <div className="grid w-full items-center gap-0 overflow-hidden rounded-4xl bg-[#e8e6e3] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] lg:grid-cols-2">
          <div className="flex flex-col gap-8 p-8 sm:p-12 lg:p-16">
            <h2 className="text-4xl font-bold leading-tight text-[#1b1b1b] sm:text-5xl lg:text-[40px]">
              {data.title}
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
              {data.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href={data.primaryAction.href}
                className="inline-flex items-center justify-center rounded-xl bg-[#3d2817] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_24px_-8px_rgba(61,40,23,0.3)] transition hover:bg-[#2d1f11]"
              >
                {data.primaryAction.label}
              </Link>
              <Link
                href={data.secondaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1b1b1b] bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b1b1b] transition hover:bg-[#1b1b1b] hover:text-white"
              >
                {data.secondaryAction.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
