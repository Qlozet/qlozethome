import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { ChatAlerts, ChatOpens, CustomerChat, VendorChat } from "@/components/live/chat";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import page from "@/data/vendor/vendordropdown/chatwithcustomers/page.json";

export default function ChatWithCustomersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<VendorChat />} />
      <FeatureSection id="both-sides" copy={page.customer} visual={<CustomerChat />} flip tint />
      <FeatureSection id="opens" copy={page.opens} visual={<ChatOpens />} />
      <FeatureSection id="alerts" copy={page.alerts} visual={<ChatAlerts />} flip tint />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}
