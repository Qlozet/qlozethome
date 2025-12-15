import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/common/SectionHeading";

type ProcessData = typeof import("@/data/home/process.json");

type ProcessSectionProps = {
  data: ProcessData;
};

export function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <section id={data.id} className="bg-white py-24 sm:py-32 scroll-mt-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          align="center"
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {data.steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center gap-6 text-center">
              <div className="relative h-[200px] w-[200px]">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="20 0px"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-zinc-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href={data.cta.href}
            className="rounded-[8px] border border-zinc-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
          >
            {data.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}


