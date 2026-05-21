import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Aksari Luxury Resort | Coastal Paradise',
  description: 'Aksari - A luxury coastal resort destination offering unparalleled experiences and timeless elegance⛱️',
  manifest: '/manifest.json',
  keywords: ['luxury resort', 'coastal', 'travel', 'vacation', 'boutique hotel'],
  authors: [{ name: 'Aksari Resorts' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aksari.com',
    title: 'Aksari Luxury Resort',
    description: 'Experience paradise at Aksari, where coastal beauty meets luxury hospitality.',
    images: [{
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/567d5316-cb5b-4c47-8296-d6fb390b3294.jpeg',
      width: 1200,
      height: 630,
    }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0D4D63',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`} style={{ scrollBehavior: 'smooth' }}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
