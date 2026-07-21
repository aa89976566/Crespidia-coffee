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
    default: "Crespidia — Coffee, Bakery & Bar | Crystal Palace",
    template: "%s · Crespidia",
  },
  description:
    "Neighbourhood coffee bakery in Crystal Palace and Anerley. Homemade cakes, breakfast, brunch, and a welcoming seat near the park.",
  openGraph: {
    title: "Crespidia — Coffee, Bakery & Bar",
    description:
      "A family neighbourhood coffee bakery by Crystal Palace Park.",
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
