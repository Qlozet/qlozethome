import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";

export const metadata: Metadata = {
  title: "Privacy Policy | Qlozet",
  description:
    "How Qlozet collects, uses, stores and protects your data — including body measurements and photos used by our AI fitting tools.",
};

// The canonical privacy policy. Linked from the shop, the vendor console,
// app-store listings and the waitlist. Content reflects what the platform
// actually does today; changes to data practices must update this page
// (each revision is a git commit — that history is the version record).

const EFFECTIVE_DATE = "12 September 2026";

// Deployed shop URL — override with NEXT_PUBLIC_SHOP_URL when the custom
// domain is live.
const SHOP_URL =
  process.env.NEXT_PUBLIC_SHOP_URL ?? "https://qlozet-shop.vercel.app";

const sections = [
  { id: "what-we-collect", title: "1. What we collect" },
  { id: "measurements-and-photos", title: "2. Body measurements & photos" },
  { id: "how-we-use-data", title: "3. How we use your data" },
  { id: "sharing", title: "4. Who we share it with" },
  { id: "payments", title: "5. Payments" },
  { id: "storage-and-security", title: "6. Storage & security" },
  { id: "retention-and-deletion", title: "7. Retention & deletion" },
  { id: "your-rights", title: "8. Your rights" },
  { id: "cookies", title: "9. Cookies & local storage" },
  { id: "children", title: "10. Children" },
  { id: "changes", title: "11. Changes to this policy" },
  { id: "contact", title: "12. Contact us" },
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-brand-darker selection:text-white">
      <Header data={navbarData} />

      <main className="flex flex-col">
        {/* Hero */}
        <section className="bg-brand-light">
          <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-40 sm:pt-48">
            <p className="font-ui text-[10px] font-bold uppercase tracking-[0.4em] text-brand-button/60">
              Legal
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium tracking-tighter sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 font-ui text-sm text-[#111111]/50">
              Effective {EFFECTIVE_DATE} · Applies to the Qlozet shop, vendor
              platform and mobile apps.
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          {/* Table of contents */}
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
            <Section id="what-we-collect" title="1. What we collect">
              <p>
                Qlozet is a fashion marketplace connecting customers with
                independent vendors and tailors. To run it, we collect:
              </p>
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>
                  <strong className="text-[#111111]">Account details</strong> —
                  your name, email address, phone number and password (stored
                  hashed, never in plain text).
                </li>
                <li>
                  <strong className="text-[#111111]">Order information</strong>{" "}
                  — what you buy, delivery addresses, order history, returns
                  and support conversations.
                </li>
                <li>
                  <strong className="text-[#111111]">
                    Fit &amp; style data
                  </strong>{" "}
                  — body measurements you enter or generate with our AI tools,
                  saved measurement profiles, bespoke designs you create, and
                  style preferences.
                </li>
                <li>
                  <strong className="text-[#111111]">Vendor details</strong> —
                  if you sell on Qlozet: business name, contact details,
                  products, and payout account information.
                </li>
                <li>
                  <strong className="text-[#111111]">Usage data</strong> —
                  pages viewed, items browsed and device information, used to
                  personalise recommendations and keep the platform secure.
                </li>
              </ul>
            </Section>

            <Section
              id="measurements-and-photos"
              title="2. Body measurements & photos"
            >
              <p>
                Our AI measurement tool can estimate your body measurements
                from photos you choose to upload, together with your height,
                weight and gender. We treat this as sensitive data and handle
                it with extra care:
              </p>
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>
                  Photos are used <strong className="text-[#111111]">only</strong>{" "}
                  to run the measurement prediction you asked for. They are not
                  used for advertising and are not shared with vendors.
                </li>
                <li>
                  The resulting measurements are saved to your profile so you
                  can reuse them for tailored orders. You can view, edit or
                  delete any measurement profile at any time from your account.
                </li>
                <li>
                  When you place a tailored order, a snapshot of the
                  measurements you selected is shared with the vendor making
                  your garment — that is the point of the feature — but your
                  photos never are.
                </li>
              </ul>
            </Section>

            <Section id="how-we-use-data" title="3. How we use your data">
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>To create and secure your account and process orders.</li>
                <li>
                  To power fit features: measurement prediction, size guidance
                  and bespoke design tools.
                </li>
                <li>
                  To personalise your shopping feed and recommendations.
                </li>
                <li>
                  To send transactional notifications — order updates, support
                  replies, wallet credits (including automatic late-delivery
                  compensation).
                </li>
                <li>
                  To prevent fraud, resolve disputes between customers and
                  vendors, and meet our legal obligations.
                </li>
              </ul>
              <p>
                We do not sell your personal data to anyone.
              </p>
            </Section>

            <Section id="sharing" title="4. Who we share it with">
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>
                  <strong className="text-[#111111]">Vendors</strong> — the
                  vendor fulfilling your order sees what they need to fulfil
                  it: your order details, delivery information and, for
                  tailored orders, the measurement snapshot you attached.
                </li>
                <li>
                  <strong className="text-[#111111]">Service providers</strong>{" "}
                  — payment processors, cloud hosting and media storage, AI
                  processing infrastructure, and courier/logistics partners who
                  deliver your orders. Each receives only what its service
                  requires.
                </li>
                <li>
                  <strong className="text-[#111111]">Authorities</strong> —
                  when the law genuinely requires it.
                </li>
              </ul>
            </Section>

            <Section id="payments" title="5. Payments">
              <p>
                Card and bank payments are processed by our payment partners
                (currently Paystack, and Stripe for some international
                payments). Your full card details go directly to them and are
                never stored on Qlozet&apos;s servers. We keep transaction
                records — amounts, references and status — to run wallets,
                refunds and vendor payouts.
              </p>
            </Section>

            <Section id="storage-and-security" title="6. Storage & security">
              <p>
                Your data is stored in secured cloud databases; images are
                stored with our media hosting provider. Access inside Qlozet is
                role-restricted — support staff see only what their role needs.
                Data moves over encrypted connections (HTTPS), and passwords
                are stored hashed.
              </p>
              <p>
                No system is perfectly secure. If a breach affecting your
                personal data ever occurs, we will notify you and the relevant
                authorities as required by law.
              </p>
            </Section>

            <Section id="retention-and-deletion" title="7. Retention & deletion">
              <p>
                We keep your data while your account is active. Order and
                transaction records are kept as long as financial and tax law
                requires. Measurement profiles stay until you delete them or
                your account. When you delete your account, we remove or
                anonymise personal data that we are not legally required to
                keep.
              </p>
            </Section>

            <Section id="your-rights" title="8. Your rights">
              <p>
                Under the Nigeria Data Protection Act (NDPA) — and, where it
                applies, the UK/EU GDPR — you can:
              </p>
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>Ask for a copy of the personal data we hold about you.</li>
                <li>Correct inaccurate data.</li>
                <li>Delete your data or your whole account.</li>
                <li>Object to or restrict certain processing.</li>
                <li>Withdraw consent where processing is based on it.</li>
              </ul>
              <p>
                To exercise any of these, contact us through the support
                channel below. We respond within the timelines the law sets.
              </p>
            </Section>

            <Section id="cookies" title="9. Cookies & local storage">
              <p>
                We use cookies and browser storage to keep you signed in,
                remember preferences like your theme and region, and understand
                how the platform is used so we can improve it. We do not use
                third-party advertising cookies.
              </p>
            </Section>

            <Section id="children" title="10. Children">
              <p>
                Qlozet is not directed at children under 18. We do not
                knowingly collect their data; if you believe a child has
                created an account, contact us and we will remove it.
              </p>
            </Section>

            <Section id="changes" title="11. Changes to this policy">
              <p>
                When we change how we handle data, we update this page and its
                effective date, and for significant changes we notify you in
                the app or by email. Earlier versions are preserved in our
                records.
              </p>
            </Section>

            <Section id="contact" title="12. Contact us">
              <p>
                Questions or requests about your data? Reach our team through
                the{" "}
                <Link
                  href={`${SHOP_URL}/help/contact`}
                  className="font-medium text-brand-hover underline underline-offset-4"
                >
                  Qlozet Help Center
                </Link>{" "}
                — support tickets go straight to us and you can follow the
                conversation in your account.
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}
