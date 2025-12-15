import Image from "next/image";

type IntegrationsData = typeof import("@/data/vendor/vendorlanding/integrations.json");

type IntegrationsProps = {
  data: IntegrationsData;
};

export function VendorIntegrations({ data }: IntegrationsProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-[#3a3a3a] py-15 sm:py-15"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-0">
        <div className="flex flex-col items-center gap-4 text-center text-white">
          <h2 className="text-4xl font-bold sm:text-[20px] lg:text-[20px]">
            {data.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-[14px]">
            {data.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
