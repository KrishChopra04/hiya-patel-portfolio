import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Hiya Patel',
  description: 'Architecture Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: '120px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}