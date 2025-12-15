import Image from "next/image";

type ToolsData = typeof import("@/data/vendor/vendorlanding/tools.json");

type ToolsProps = {
  data: ToolsData;
};

export function VendorTools({ data }: ToolsProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-white py-24 sm:py-32 pb-[200px] sm:pb-[200px]"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[20px] font-semibold text-[#1b1b1b] sm:text-5xl lg:text-[32px]">
                {data.title}
              </h2>
              <p className="text-base leading-relaxed text-zinc-600 sm:text-[14px]">
                {data.subtitle}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.items.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-zinc-100">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold text-[#1b1b1b]">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-tight text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-zinc-100 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
