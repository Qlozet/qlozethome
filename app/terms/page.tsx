import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";

export const metadata: Metadata = {
  title: "Terms of Service | Qlozet",
  description:
    "The terms that govern buying, selling and creating bespoke fashion on Qlozet.",
};

// Canonical terms of service. Like /privacy, every revision is a git
// commit — that history is the version record.

const EFFECTIVE_DATE = "12 September 2026";

// Deployed shop URL — override with NEXT_PUBLIC_SHOP_URL when the custom
// domain is live.
const SHOP_URL =
  process.env.NEXT_PUBLIC_SHOP_URL ?? "https://qlozet-shop.vercel.app";

const sections = [
  { id: "the-service", title: "1. What Qlozet is" },
  { id: "accounts", title: "2. Accounts" },
  { id: "buying", title: "3. Buying on Qlozet" },
  { id: "bespoke", title: "4. Bespoke & tailored orders" },
  { id: "returns", title: "5. Cancellations, returns & refunds" },
  { id: "wallet-and-tokens", title: "6. Wallet & tokens" },
  { id: "selling", title: "7. Selling on Qlozet" },
  { id: "content", title: "8. Your content & our AI tools" },
  { id: "acceptable-use", title: "9. Acceptable use" },
  { id: "liability", title: "10. Liability" },
  { id: "changes", title: "11. Changes & termination" },
  { id: "law", title: "12. Governing law & contact" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 flex flex-col gap-4">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
        {title}
      </h2>
      <div className="flex flex-col gap-4 font-ui text-base leading-relaxed text-[#111111]/70">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-brand-darker selection:text-white">
      <Header data={navbarData} />

      <main className="flex flex-col">
        <section className="bg-brand-light" data-theme="light">
          <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-40 sm:pt-48">
            <p className="font-ui text-[10px] font-bold uppercase tracking-[0.4em] text-brand-button/60">
              Legal
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium tracking-tighter sm:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-4 font-ui text-sm text-[#111111]/50">
              Effective {EFFECTIVE_DATE} · Applies to the Qlozet shop, vendor
              platform and mobile apps.
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-4xl px-6 py-16" data-theme="light">
          <nav className="mb-16 flex flex-col gap-2 border-l-2 border-brand-darker/10 pl-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="w-fit font-ui text-sm font-medium text-[#111111]/60 underline decoration-[#111111]/20 underline-offset-4 transition hover:text-brand-hover"
              >
                {s.title}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-14">
            <Section id="the-service" title="1. What Qlozet is">
              <p>
                Qlozet is a marketplace. Independent vendors and tailors list,
                sell and make the products; Qlozet provides the platform —
                discovery, fit tools, payments, delivery coordination and
                buyer protection. When you buy, your purchase contract for the
                item is with the vendor; these terms govern your use of the
                platform that connects you.
              </p>
            </Section>

            <Section id="accounts" title="2. Accounts">
              <p>
                You need an account to buy or sell. Keep your credentials
                private — activity on your account is your responsibility.
                You must be at least 18 and give accurate information. We may
                suspend accounts involved in fraud, abuse or breach of these
                terms.
              </p>
            </Section>

            <Section id="buying" title="3. Buying on Qlozet">
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>
                  Prices are shown in your selected currency; the amount you
                  confirm at checkout is the amount you pay.
                </li>
                <li>
                  Delivery estimates shown on product pages are honest
                  estimates, not guarantees — but late delivery has teeth: if a
                  vendor misses their promised window, our On-Time Promise
                  automatically credits compensation to your wallet.
                </li>
                <li>
                  Vendors may reject an order (or a single item) they cannot
                  fulfil; you are refunded for anything rejected.
                </li>
              </ul>
            </Section>

            <Section id="bespoke" title="4. Bespoke & tailored orders">
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>
                  Bespoke garments are made to your specification and
                  measurements. You are responsible for the accuracy of the
                  measurement profile you attach; our AI-generated measurements
                  are estimates and should be reviewed before ordering.
                </li>
                <li>
                  Quotes from tailors are offers; a quote you accept and pay
                  for becomes a binding order at that price.
                </li>
                <li>
                  Because they are made for you, bespoke items can only be
                  returned if they arrive damaged or materially different from
                  the approved design.
                </li>
              </ul>
            </Section>

            <Section id="returns" title="5. Cancellations, returns & refunds">
              <p>
                You can cancel an order before it ships. Delivered items can be
                returned within the return window stated in our Help Center,
                provided they are unworn and in original condition. Approved
                refunds are credited to your Qlozet wallet, from which you can
                spend or withdraw. Disputes you raise are reviewed by our team,
                and vendor payouts are held while a dispute is open.
              </p>
            </Section>

            <Section id="wallet-and-tokens" title="6. Wallet & tokens">
              <p>
                Your wallet holds refunds, compensation credits and funds you
                add; wallet money is yours and withdrawable. Tokens are a
                platform utility used to pay for AI features (measurement
                prediction, design generation and similar). Tokens are not
                money, are non-transferable and non-refundable except where
                the law requires.
              </p>
            </Section>

            <Section id="selling" title="7. Selling on Qlozet">
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>
                  Vendor accounts require approval. Listings must be accurate
                  and lawful; products may be moderated before going live.
                </li>
                <li>
                  Qlozet deducts the platform commission and applicable fees
                  from each sale; the schedule in force is shown in your vendor
                  dashboard. Earnings are released per the payout schedule,
                  with holds for open disputes.
                </li>
                <li>
                  Vendors commit to their stated turnaround times. Late
                  fulfilment incurs the compensation penalties described in the
                  vendor dashboard — the same money credited to the affected
                  customer.
                </li>
              </ul>
            </Section>

            <Section id="content" title="8. Your content & our AI tools">
              <p>
                You keep ownership of content you upload — photos, reviews,
                designs. You grant Qlozet a licence to host and display it as
                needed to run the marketplace (for example, showing your
                review, or sending your bespoke design to the tailors you
                request quotes from). AI outputs (generated designs, predicted
                measurements) are provided as-is for your use on the platform;
                review them before relying on them. Don&apos;t upload content
                you don&apos;t have rights to.
              </p>
            </Section>

            <Section id="acceptable-use" title="9. Acceptable use">
              <p>
                No fraud, no counterfeits, no scraping or attacking the
                platform, no harassment of vendors, customers or staff, no
                circumventing Qlozet&apos;s checkout to avoid fees. We may
                remove content or suspend accounts that break these rules.
              </p>
            </Section>

            <Section id="liability" title="10. Liability">
              <p>
                We work hard to keep Qlozet reliable, but the platform is
                provided &quot;as is&quot;. To the extent the law allows, our
                liability for any claim is limited to the amount you paid for
                the order the claim relates to. Nothing in these terms removes
                rights that consumer law gives you and that cannot be waived.
              </p>
            </Section>

            <Section id="changes" title="11. Changes & termination">
              <p>
                We may update these terms; significant changes are announced in
                the app or by email, and the effective date above always tells
                you which version applies. You can close your account at any
                time; obligations from orders already placed survive.
              </p>
            </Section>

            <Section id="law" title="12. Governing law & contact">
              <p>
                These terms are governed by the laws of the Federal Republic of
                Nigeria. Questions? Reach us through the{" "}
                <Link
                  href={`${SHOP_URL}/help/contact`}
                  className="font-medium text-brand-hover underline underline-offset-4"
                >
                  Qlozet Help Center
                </Link>
                . Our <Link href="/privacy" className="font-medium text-brand-hover underline underline-offset-4">Privacy Policy</Link>{" "}
                explains how we handle your data.
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}
