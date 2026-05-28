import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const BASE_URL = 'https://www.jaecomedia.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Jaeco Real Estate Media — Real Estate Photography in Delaware, PA, MD & NJ',
    template: '%s | Jaeco Real Estate Media',
  },
  description:
    'Premium real estate photography, drone aerials, floor plans, virtual staging, and video tours serving Delaware, Pennsylvania, Maryland, and New Jersey. Fast turnaround. Professional results.',
  keywords: [
    'real estate photography',
    'real estate photographer Delaware',
    'real estate photographer Wilmington DE',
    'real estate photographer Philadelphia PA',
    'real estate photographer Baltimore MD',
    'drone real estate photography',
    'aerial real estate photography',
    'floor plans real estate',
    'virtual staging',
    'real estate video tour',
    'Matterport 3D tour',
    'twilight photography',
    'Jaeco Real Estate Media',
    'real estate media Bear DE',
  ],
  authors: [{ name: 'Jaeco Real Estate Media' }],
  creator: 'Jaeco Real Estate Media',
  publisher: 'Jaeco Real Estate Media',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Jaeco Real Estate Media',
    title: 'Jaeco Real Estate Media — Real Estate Photography',
    description:
      'Premium real estate photography, drone aerials, floor plans, and virtual staging. Serving Delaware, PA, MD & NJ.',
    images: [
      {
        url: '/images/portfolio/interior/interior-06.png',
        width: 1200,
        height: 630,
        alt: 'Jaeco Real Estate Media — Professional Real Estate Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaeco Real Estate Media — Real Estate Photography',
    description:
      'Premium real estate photography, drone aerials, floor plans, and virtual staging. Serving Delaware, PA, MD & NJ.',
    images: ['/images/portfolio/interior/interior-06.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
