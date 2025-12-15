import Image from "next/image";

type HowItWorksData = typeof import("@/data/vendor/vendorlanding/how-it-works.json");

type HowItWorksProps = {
  data: HowItWorksData;
};

export function VendorHowItWorks({ data }: HowItWorksProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6">
        <h2 className="text-left text-4xl font-bold text-[#1b1b1b] sm:text-5xl lg:text-6xl">
          {data.title}
        </h2>
        <div className="grid items-stretch gap-8 lg:grid-cols-[auto_1.2fr_1fr] lg:gap-12">
          <div className="relative flex items-start justify-center pt-6">
            <div className="relative h-full w-6">
              <Image
                src="/image/arrowlong.png"
                alt="Arrow pointing down"
                fill
                className="object-contain object-top"
                sizes="24px"
              />
            </div>
          </div>
          <div className="relative flex flex-col gap-4">
            {data.steps.map((step) => (
              <div
                key={step.title}
                className="flex items-start gap-4 rounded-xl bg-zinc-100 px-5 py-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="text-lg font-semibold text-[#1b1b1b]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-auto w-full overflow-hidden">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
