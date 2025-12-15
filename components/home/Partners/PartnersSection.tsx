"use client";

import Image from "next/image";

type PartnersData = typeof import("@/data/home/partners.json");

type PartnersSectionProps = {
  data: PartnersData;
};

export function PartnersSection({ data }: PartnersSectionProps) {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...data.brands, ...data.brands];

  return (
    <section id={data.id} className="scroll-mt-32 bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full flex-col gap-12">
        <h2 className="text-center text-4xl font-normal text-[#1b1b1b] sm:text-5xl">
          {data.title}
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.src}-${index}`}
                className="flex h-16 w-[180px] shrink-0 items-center justify-center grayscale transition hover:grayscale-0"
              >
                <Image
                  src={brand.src}
                  alt={brand.label}
                  width={180}
                  height={64}
                  className="h-auto max-h-16 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
