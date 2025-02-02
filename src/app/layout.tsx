import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SocialLinks from '@/components/SocialLinks'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '$ ./initialize occdoc.ai',
  description: 'cameron kiani, md_',
  metadataBase: new URL('https://occmed.ai'),
  openGraph: {
    title: '$ ./initialize occdoc.ai',
    description: 'cameron kiani, md_',
    url: 'https://occmed.ai',
    siteName: 'OccDoc',
    images: [
      {
        url: '/terminal.8.png',
        width: 1200,
        height: 630,
        alt: 'OccDoc - Terminal Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$ ./initialize occdoc.ai',
    description: 'cameron kiani, md_',
    images: ['/terminal.8.png'],
    creator: '@cameronkiani',
  },
  icons: {
    icon: [
      { url: '/terminal.2.svg' },
      { url: '/terminal.8.png', type: 'image/png' },
    ],
    apple: [
      { url: '/terminal.8.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SocialLinks />
      </body>
    </html>
  )
} 