import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Crespidia | Coffee and bakery in Crystal Palace",
    template: "%s | Crespidia",
  },
  description:
    "Neighbourhood coffee bakery on Anerley. Homemade cakes, breakfast, coffee, and a seat near the park.",
  openGraph: {
    title: "Crespidia",
    description: "Coffee, cakes and breakfast in Crystal Palace.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
