import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/pricing";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import pricingData from "@/data/pricing/pricing.json";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#3A3A3A] text-white selection:bg-white selection:text-[#3A3A3A]">
      <Header data={navbarData} />
      
      <main className="flex flex-col">
        {/* Pricing Hero */}
        <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-24 px-6" data-theme="dark">
          <div className="mx-auto w-full max-w-[94rem] flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-px w-12 bg-white/40" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/60">
                Atelier Access
              </span>
            </div>
            
            <h1 className="font-display max-w-5xl text-6xl font-medium leading-[1] tracking-tighter text-white sm:text-8xl lg:text-9xl">
              Pricing <br />
              <span className="text-white/40">Standards</span>
            </h1>
            
            <p className="max-w-2xl font-ui text-lg leading-relaxed text-white/50">
              Select the tier that aligns with your creative volume. From independent designers to global ateliers, we provide the architecture for growth.
            </p>
          </div>
        </section>

        <PricingSection data={pricingData} />
      </main>

      <Footer data={footerData} />
    </div>
  );
}
