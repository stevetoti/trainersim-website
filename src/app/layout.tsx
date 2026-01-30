import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "TrainerSim — AI-Powered Training Simulations",
    template: "%s | TrainerSim",
  },
  description:
    "380 AI agents across 12 industries. Practice high-stakes conversations with video & audio AI simulations. Real-time scoring, team analytics, and certifications.",
  keywords: [
    "AI training simulation",
    "sales training AI",
    "healthcare simulation",
    "customer service training",
    "AI role play",
    "professional development",
    "training platform",
    "conversation practice",
    "AI avatar training",
    "team training analytics",
  ],
  authors: [{ name: "Pacific Wave Digital" }],
  creator: "TrainerSim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.trainersim.com",
    siteName: "TrainerSim",
    title: "TrainerSim — AI-Powered Training Simulations",
    description:
      "380 AI agents across 12 industries. Master high-stakes conversations with realistic AI simulations.",
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
    description:
      "380 AI agents across 12 industries. Master conversations with AI.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
      </head>
      <body className="bg-dark-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TrainerSim",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "AI-powered training simulations with 380 agents across 12 industries",
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
