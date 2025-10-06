import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Libé Animation - Portfolio',
  description: 'Portfolio d\'animation et motion design de Libé',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        className={`text-white antialiased ${bebasNeue.variable}`}
        style={{
          fontFamily: 'var(--font-base)',
          backgroundImage: 'url(/ressources/black_textured_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {children}
      </body>
    </html>
  )
}
