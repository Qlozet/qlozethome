import Image from "next/image";

type PartnersData = typeof import("@/data/vendor/vendorlanding/partners.json");

type PartnersProps = {
  data: PartnersData;
};

export function VendorPartners({ data }: PartnersProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6">
        <h2 className="text-center text-4xl font-bold text-[#1b1b1b] sm:text-5xl lg:text-6xl">
          {data.title}
        </h2>
        <div className="grid grid-cols-2 items-center gap-12 sm:grid-cols-3 lg:grid-cols-5">
          {data.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale transition hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 transition hover:opacity-100"
              />
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-zinc-600">
          {data.note}
        </p>
      </div>
    </section>
  );
}
