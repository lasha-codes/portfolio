import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const PoppinsFont = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Lasha-Giorgi | Portfolio',
  description:
    'On this protfolio you will be learning about me and what i can do.',
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
