import type { Metadata, Viewport } from "next";
import { Inter, Pinyon_Script, Playfair_Display } from "next/font/google";
import { brand } from "@/content/site";
import { Providers } from "@/components/layout/Providers";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: brand.siteTitle,
    template: `%s - ${brand.name}`,
  },
  description: brand.metaDescription,
  openGraph: {
    title: brand.shareTitle,
    description: brand.shareDescription,
    siteName: brand.name,
    type: "website",
    images: [{ url: "/images/hero-living-room.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a130f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${pinyon.variable} ${inter.variable}`}>
      <body>
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
