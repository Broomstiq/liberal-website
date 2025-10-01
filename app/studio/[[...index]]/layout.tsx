export const metadata = {
  title: 'Sanity Studio - Libé Portfolio',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, backgroundColor: 'white' }}>
        {children}
      </body>
    </html>
  )
}
