import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import MarqueeHeader from "@/components/layout/Header/Marquee";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: "Premium Golf Equipment & Luxury Golf Bags | VESSEL Golf Clone",
    template: "%s | VESSEL Golf Clone"
  },
  icons: {
    icon: './vessel-icon.webp'
  },
  description: "Discover premium golf equipment, luxury golf bags, and professional golf accessories. Shop the finest collection of golf gear designed for performance and style.",
  keywords: ["golf bags", "luxury golf equipment", "premium golf gear", "golf accessories", "professional golf", "golf cart bags", "stand bags", "golf headcovers"],
  authors: [{ name: "Your Name" }],
  creator: "Your Company",
  publisher: "Your Company",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Premium Golf Equipment & Luxury Golf Bags",
    description: "Discover premium golf equipment, luxury golf bags, and professional golf accessories.",
    siteName: "VESSEL Golf Clone",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Golf Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Golf Equipment & Luxury Golf Bags",
    description: "Discover premium golf equipment, luxury golf bags, and professional golf accessories.",
    images: ["/images/twitter-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Sports & Recreation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} 
          font-inter antialiased bg-white text-gray-900 overflow-x-hidden selection:bg-vessel-gold/20`}
      >
        {/* Skip to main content برای accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-vessel-black text-white px-4 py-2 rounded z-50 font-medium"
        >
          Skip to main content
        </a>

        <div className="min-h-screen flex flex-col">
          <MarqueeHeader />
          <header id="header" className="sticky top-0 z-40 bg-white">
            <Header />
          </header>

          {/* Main content */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          <footer id="footer">
            {/* Footer content */}
          </footer>
        </div>

        {/* Schema Markup برای SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VESSEL Golf Clone",
              "url": "https://your-domain.com",
              "logo": "https://your-domain.com/logo.png",
              "description": "Premium golf equipment and luxury golf bags",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/yourpage",
                "https://instagram.com/yourpage",
                "https://twitter.com/yourpage"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}