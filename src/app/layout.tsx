import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trainersim.com'),
  title: {
    default: 'TrainerSim — AI-Powered Training Simulations',
    template: '%s | TrainerSim',
  },
  description:
    '190 AI agents across 12 industries. Practice high-stakes conversations with video & audio AI simulations. Real-time scoring, team analytics, and certifications.',
  keywords: [
    'AI training simulation',
    'sales training AI',
    'healthcare simulation',
    'customer service training',
    'AI role play',
    'professional development',
    'training platform',
    'conversation practice',
    'AI avatar training',
    'team training analytics',
  ],
  authors: [{ name: 'Pacific Wave Digital' }],
  creator: 'TrainerSim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.trainersim.com',
    siteName: 'TrainerSim',
    title: 'TrainerSim — AI-Powered Training Simulations',
    description:
      '190 AI agents across 12 industries. Master high-stakes conversations with realistic AI simulations.',
    images: [
      {
        url: '/trainersim-color.jpg',
        width: 500,
        height: 500,
        alt: 'TrainerSim - AI Training Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrainerSim — AI-Powered Training Simulations',
    description:
      '190 AI agents across 12 industries. Master conversations with AI.',
    images: ['/trainersim-color.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: 'light' }}>
      <head>
        <link rel="icon" href="/trainersim-logo.png" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'TrainerSim',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'AI-powered training simulations with 190 agents across 12 industries',
              url: 'https://www.trainersim.com',
              author: {
                '@type': 'Organization',
                name: 'Pacific Wave Digital',
              },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '0',
                highPrice: '99',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
