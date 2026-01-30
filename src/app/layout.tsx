import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "TrainerSim — AI-Powered Training Simulations",
    template: "%s | TrainerSim",
  },
  description: "Master high-stakes conversations with AI-powered training simulations. Video, audio, and text-based practice for sales, healthcare, customer service, and more.",
  keywords: ["AI training", "simulation training", "sales training", "conversation practice", "AI role play", "professional development", "training platform"],
  authors: [{ name: "Pacific Wave Digital" }],
  creator: "TrainerSim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.trainersim.com",
    siteName: "TrainerSim",
    title: "TrainerSim — AI-Powered Training Simulations",
    description: "Master high-stakes conversations with AI-powered training simulations. Video, audio, and text-based practice for professionals.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrainerSim - AI Training Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrainerSim — AI-Powered Training Simulations",
    description: "Master high-stakes conversations with AI-powered training simulations.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Analytics placeholder */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body className="bg-navy-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TrainerSim",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "AI-powered training simulations for professionals",
              url: "https://www.trainersim.com",
              author: {
                "@type": "Organization",
                name: "Pacific Wave Digital",
              },
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "49",
                highPrice: "99",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
