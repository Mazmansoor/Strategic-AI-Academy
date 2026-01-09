import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Strategic AI Academy',
  description: 'A discipline for leaders making irreversible decisions in the age of machine intelligence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
