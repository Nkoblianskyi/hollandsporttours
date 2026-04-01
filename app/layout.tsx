import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hollandsporttours.com'),
  title: {
    default: 'Holland Sport Tours - Sportreizen door Nederland, Europa en de Wereld',
    template: '%s | Holland Sport Tours'
  },
  description: 'Ontdek unieke sportreizen en sportevenementen in Nederland, Europa en wereldwijd. Van voetbal en fietsen tot marathons en meer. Boek uw onvergetelijke sportavontuur vandaag.',
  keywords: ['sportreizen', 'sportevenementen', 'Nederland', 'Europa', 'voetbalreizen', 'fietsreizen', 'marathons', 'sporttoerisme'],
  authors: [{ name: 'Holland Sport Tours' }],
  creator: 'Holland Sport Tours',
  publisher: 'Holland Sport Tours',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://hollandsporttours.com',
    siteName: 'Holland Sport Tours',
    title: 'Holland Sport Tours - Sportreizen door Nederland, Europa en de Wereld',
    description: 'Ontdek unieke sportreizen en sportevenementen in Nederland, Europa en wereldwijd.',
    images: [
      {
        url: '/about-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Holland Sport Tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holland Sport Tours - Sportreizen door Nederland, Europa en de Wereld',
    description: 'Ontdek unieke sportreizen en sportevenementen in Nederland, Europa en wereldwijd.',
    images: ['/about-team.jpg'],
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

}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
