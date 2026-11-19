import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA/CTASection";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { AskCustomer, NeedsCheck, OrderMeasurements, ProductionSteps, QuoteForm } from "@/components/live/tailor";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/vendor/vendordropdown/customermeasurements/data.json";

export default function CustomerMeasurementsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-brand-darker selection:text-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<OrderMeasurements />} />
      <FeatureSection id="needs" copy={page.needs} visual={<NeedsCheck />} flip tint />
      <FeatureSection id="ask" copy={page.ask} visual={<AskCustomer />} />
      <FeatureSection id="production" copy={page.production} visual={<ProductionSteps />} flip tint />
      <FeatureSection id="quote" copy={page.quote} visual={<QuoteForm />} />
      <FAQSection data={faqData} />
      <VendorCTA data={page.conversion as any} />
      <Footer data={footerData} />
    </div>
  );
}
