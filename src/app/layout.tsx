import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from './components/Navbar'
import { lexend } from './fonts'

export const metadata: Metadata = {
  title: 'Diego Bez Zambiazzi - Porfolio',
  description: 'Diego Bez Zambiazzi - Porfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background min-h-screen font-cormorant antialiased',
          // cormorant.variable
          lexend.variable
        )}
      >
        <div className="grid grid-rows-layout h-svh">
          <Navbar />
          <div className="grid place-items-center overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
