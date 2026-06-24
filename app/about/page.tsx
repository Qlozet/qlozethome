import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import Link from "next/link";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import aboutData from "@/data/about/about.json";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-brand-darker selection:text-white">
      <Header data={navbarData} />
      
      <main className="flex flex-col">
        <AboutHero data={aboutData.hero} />
        
        <StorySection data={aboutData.story} />
        
        <ValuesSection data={aboutData.values} />

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-brand-darker py-24 sm:py-32" data-theme="dark">
          <div className="mx-auto w-full max-w-[94rem] flex flex-col gap-12 px-6">
            <div className="flex flex-col items-center text-center gap-10">
              <h2 className="font-display text-5xl font-medium tracking-tighter text-white sm:text-7xl lg:text-8xl">
                {aboutData.cta.title}
              </h2>
              <p className="max-w-2xl font-ui text-lg text-white/50 sm:text-xl">
                {aboutData.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link
                  href={aboutData.cta.primaryAction.href}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-button transition-all hover:bg-brand-light hover:scale-105 active:scale-[0.98]"
                >
                  <span className="relative z-10">{aboutData.cta.primaryAction.label}</span>
                </Link>
                <Link
                  href={aboutData.cta.secondaryAction.href}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-[0.98]"
                >
                  {aboutData.cta.secondaryAction.label}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 h-full w-full pointer-events-none opacity-10">
            <div className="absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute top-1/3 right-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          </div>
        </section>
      </main>

      <Footer data={footerData} />
    </div>
  );
}
