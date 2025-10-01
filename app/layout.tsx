import type { Metadata } from 'next'
import './globals.css'

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
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
