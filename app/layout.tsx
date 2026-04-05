import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'KL Isada | Professional Tax and Accounting Services',
  description: 'KL Isada - Certified Public Accountant and Tax Accountant Office - Transform accounting into a driving force for your business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
