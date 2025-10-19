import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const PoppinsFont = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Lasha Giorgi | Full-Stack Web Developer Portfolio',
  description:
    'Explore the portfolio of Lasha Giorgi — a full-stack web developer specializing in building responsive user interfaces and modern web applications.',
  keywords: [
    'Lasha Giorgi',
    'Web Developer',
    'Full-Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Portfolio',
  ],
  openGraph: {
    title: 'Lasha Giorgi | Full-Stack Web Developer Portfolio',
    description:
      'Discover Lasha Giorgi’s projects and expertise in developing responsive, full-stack web applications.',
    url: 'https://portfolio-lasha-giorgi.vercel.app',
    siteName: 'Lasha Giorgi Portfolio',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Lasha Giorgi Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lasha Giorgi | Full-Stack Web Developer Portfolio',
    description:
      'Check out Lasha Giorgi’s portfolio showcasing responsive UI design and full-stack development.',
    images: ['/preview.png'],
    creator: '@lasha_giorgi',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${PoppinsFont.className} antialiased`}>{children}</body>
    </html>
  )
}
