import Image from "next/image";

type EarlyAccessData = typeof import("@/data/home/early-access.json");

type EarlyAccessSectionProps = {
  data: EarlyAccessData;
};

export function EarlyAccessSection({ data }: EarlyAccessSectionProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6">
        <div className="grid w-full items-stretch gap-8 rounded-4xl bg-[#ebeeee] p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.15)] lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-8">
          <div className="relative -m-6 h-full min-h-[400px] overflow-hidden lg:-m-8 lg:min-h-[550px]">
            <Image
              src="/image/ladycard.png"
              alt="Fashion model"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
          <div className="relative flex flex-col gap-6 py-6 lg:py-8">
            <div className="relative flex flex-col gap-6">
              <div className="relative self-end">
                <div className="relative rounded-2xl bg-white px-6 py-4 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)]">
                  <p className="text-sm font-medium text-[#1b1b1b]">
                    {data.speechBubble}
                  </p>
                  <div className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-bold leading-tight text-[#1b1b1b] sm:text-5xl lg:text-6xl">
                  {data.title}
                </h3>
                <p className="text-base leading-relaxed text-[#383838] sm:text-lg">
                  {data.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <form className="flex flex-1 flex-col gap-3 sm:flex-row sm:gap-4">
                  <label className="sr-only" htmlFor="early-access-email">
                    Email address
                  </label>
                  <input
                    id="early-access-email"
                    type="email"
                    placeholder={data.placeholder}
                    className="flex-1 rounded-xl border border-[#1b1b1b] bg-white px-5 py-4 text-sm text-[#1b1b1b] outline-none transition focus:border-[#8b4513] focus:ring-2 focus:ring-[#8b4513]/20"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-[#8b4513] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_4px_12px_-4px_rgba(139,69,19,0.4)] transition hover:bg-[#7a3d12] hover:shadow-[0_6px_16px_-4px_rgba(139,69,19,0.5)]"
                  >
                    {data.button}
                  </button>
                </form>
                <div className="relative h-24 w-24 opacity-20  sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                  <Image
                    src="/image/qlozettraced.png"
                    alt="Qlozet logo"
                    fill
                    className="object-contain object-right"
                    sizes="(min-width: 1024px) 128px, 112px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
