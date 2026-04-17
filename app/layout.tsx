import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Qlozet | Your Style, Your Way",
  description:
    "Experience bespoke fashion with intelligent fit, curated designer drops, and a personalized digital wardrobe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} antialiased font-ui bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
