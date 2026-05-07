import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Daily Number Match – Free Online Browser Game",
    template: "%s | Daily Number Match",
  },
  description:
    "Play Daily Number Match online free — Play Daily Number Match free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "Daily Number Match",
    "Daily Number Match online",
    "Daily Number Match free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "Daily Number Match Team" }],
  creator: "Daily Number Match",
  publisher: "Daily Number Match",
  metadataBase: new URL("https://dailynumbermatch.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Daily Number Match",
    title: "Daily Number Match – Free Online Browser Game",
    description:
      "Play Daily Number Match free in your browser — Play Daily Number Match free online — no download, no account needed.",
    url: "https://dailynumbermatch.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Number Match – Free Online Browser Game",
    description:
      "Play Daily Number Match free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Daily Number Match",
              url: "https://dailynumbermatch.online",
              description:
                "Play Daily Number Match free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://dailynumbermatch.online/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Daily Number Match",
              url: "https://dailynumbermatch.online",
              logo: {
                "@type": "ImageObject",
                url: "https://dailynumbermatch.online/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://dailynumbermatch.online/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
