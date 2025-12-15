import Image from "next/image";

type WhatWeDoData = typeof import("@/data/user/explore/what-we-do.json");

type WhatWeDoSectionProps = {
  data: WhatWeDoData;
};

export function WhatWeDoSection({ data }: WhatWeDoSectionProps) {
  return (
    <section className="bg-white relative z-10 rounded-t-[30px] sm:rounded-t-[5rem] mt-[-100px] px-6 py-16 sm:py-24 pb-[200px] sm:pb-[200px]">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-4 text-center text-3xl font-normal text-black sm:text-4xl lg:text-5xl">
          {data.title}
        </h2>

        {/* Subtitle */}
        <p className="mb-12 text-center text-base text-gray-600 sm:mb-16 sm:text-lg">
          {data.subtitle}
        </p>

        {/* Images Grid - Masonry Style */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-6 lg:grid-cols-4 lg:auto-rows-[200px]">
          {/* Image 1 - Agbada (starts at top, row 1, moves down on hover) */}
          <div className="relative row-span-3 row-start-1 overflow-hidden rounded-3xl bg-gray-200 transition-transform duration-500 ease-in-out hover:translate-y-[200px] lg:hover:translate-y-[220px]">
            <Image
              src={data.images[0].src}
              alt={data.images[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </div>

          {/* Image 2 - Seun (starts lower, row 2, moves up on hover) */}
          <div className="relative row-span-3 row-start-2 overflow-hidden rounded-3xl bg-gray-200 transition-transform duration-500 ease-in-out hover:-translate-y-[180px] lg:hover:-translate-y-[200px]">
            <Image
              src={data.images[1].src}
              alt={data.images[1].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </div>

          {/* Image 3 - Totebag (starts at top, row 1, moves down on hover) */}
          <div className="relative row-span-3 row-start-1 overflow-hidden rounded-3xl bg-gray-200 transition-transform duration-500 ease-in-out hover:translate-y-[200px] lg:hover:translate-y-[220px]">
            <Image
              src={data.images[2].src}
              alt={data.images[2].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </div>

          {/* Image 4 - Fabrics (starts lower, row 2, moves up on hover) */}
          <div className="relative row-span-3 row-start-2 overflow-hidden rounded-3xl bg-gray-200 transition-transform duration-500 ease-in-out hover:-translate-y-[180px] lg:hover:-translate-y-[200px]">
            <Image
              src={data.images[3].src}
              alt={data.images[3].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

