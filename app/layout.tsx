import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn Angular & JavaScript ES6 | Interactive Tutorial',
  description: 'Master Angular and JavaScript ES6 with fun, practical examples',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
