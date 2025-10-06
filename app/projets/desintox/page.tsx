import Link from 'next/link'
import { Header } from '@/components/Header'
import { VideoPlayer } from '@/components/VideoPlayer'

/**
 * Hardcoded Desintox Episodes Page
 */

const animateurEpisodes = [
  { number: 1557, url: 'https://www.dailymotion.com/video/x8akkls' },
  { number: 1559, url: 'https://www.dailymotion.com/video/x8ap18q' },
  { number: 1560, url: 'https://www.dailymotion.com/video/x8apzz8' },
  { number: 1565, url: 'https://www.dailymotion.com/video/x8ayhox' },
  { number: 1571, url: 'https://www.dailymotion.com/video/x8b8y2q' },
  { number: 1577, url: 'https://www.dailymotion.com/video/x8bn4m8' },
  { number: 1581, url: 'https://www.dailymotion.com/video/x8bu8y4' },
  { number: 1629, url: 'https://www.dailymotion.com/video/x8fblx9' },
  { number: 1633, url: 'https://www.dailymotion.com/video/x8fiqhw' },
  { number: 1635, url: 'https://www.dailymotion.com/video/x8fld0h' },
  { number: 1637, url: 'https://www.dailymotion.com/video/x8fqtld' },
  { number: 1639, url: 'https://www.dailymotion.com/video/x8fssu8' },
  { number: 1645, url: 'https://www.dailymotion.com/video/x8g41b4' },
  { number: 1670, url: 'https://www.dailymotion.com/video/x8gvmnn' },
  { number: 1682, url: 'https://www.dailymotion.com/video/x8hqtvm' },
  { number: 1684, url: 'https://www.dailymotion.com/video/x8hzgiq' },
  { number: 1685, url: 'https://www.dailymotion.com/video/x8jaabg' },
  { number: 1687, url: 'https://www.dailymotion.com/video/x8jcln3' },
  { number: 1688, url: 'https://www.dailymotion.com/video/x8ji5d2' },
  { number: 1690, url: 'https://www.dailymotion.com/video/x8jkb0a' },
  { number: 1697, url: 'https://www.dailymotion.com/video/x8k6cbw' },
  { number: 1701, url: 'https://www.dailymotion.com/video/x8kehn8' },
  { number: 1716, url: 'https://www.dailymotion.com/video/x8lei0y' },
  { number: 1722, url: 'https://www.dailymotion.com/video/x8lqhlz' },
  { number: 1748, url: 'https://www.dailymotion.com/video/x8nep7c' },
  { number: 1750, url: 'https://www.dailymotion.com/video/x8ngks3' },
  { number: 1754, url: 'https://www.dailymotion.com/video/x8npsmw' },
]

const realisateurEpisodes = [
  { number: 1627, url: 'https://www.dailymotion.com/video/x8f6m2h' },
  { number: 1631, url: 'https://www.dailymotion.com/video/x8fe0qr' },
  { number: 1647, url: 'https://www.dailymotion.com/video/x8g66bf' },
  { number: 1649, url: 'https://www.dailymotion.com/video/x8gavq9' },
  { number: 1693, url: 'https://www.dailymotion.com/video/x8jswh5' },
  { number: 1696, url: 'https://www.dailymotion.com/video/x8k26kk' },
  { number: 1705, url: 'https://www.dailymotion.com/video/x8kozqx' },
  { number: 1707, url: 'https://www.dailymotion.com/video/x8ktn5z' },
  { number: 1711, url: 'https://www.dailymotion.com/video/x8l1h5w' },
  { number: 1720, url: 'https://www.dailymotion.com/video/x8ll8re' },
  { number: 1726, url: 'https://www.dailymotion.com/video/x8lxvt7' },
  { number: 1728, url: 'https://www.dailymotion.com/video/x8m37oc' },
  { number: 1739, url: 'https://www.dailymotion.com/video/x8mqvrk' },
  { number: 1741, url: 'https://www.dailymotion.com/video/x8mssam' },
  { number: 1743, url: 'https://www.dailymotion.com/video/x8mxcpb' },
  { number: 1747, url: 'https://www.dailymotion.com/video/x8n44js' },
  { number: 1751, url: 'https://www.dailymotion.com/video/x8ngks3' },
  { number: 1753, url: 'https://www.dailymotion.com/video/x8nkxub' },
  { number: 1755, url: 'https://www.dailymotion.com/video/x8ntnkg' },
  { number: 1756, url: 'https://www.dailymotion.com/video/x8nw2ym' },
  { number: 1758, url: 'https://www.dailymotion.com/video/x8o0y74' },
  { number: 1761, url: 'https://www.dailymotion.com/video/x8o6h23' },
  { number: 1764, url: 'https://www.dailymotion.com/video/x8oc3j3' },
  { number: 1766, url: 'https://www.instagram.com/reel/CyBllkLvrsp/' },
  { number: 1767, url: 'https://www.instagram.com/reel/CyEIb5nNo19/' },
  { number: 1768, url: 'https://www.instagram.com/reel/CyORk1joqTW/' },
  { number: 1769, url: 'https://www.instagram.com/reel/CyOg2EKSWwo/' },
  { number: 1770, url: 'https://www.instagram.com/reel/CyTtPe9qlTH/' },
  { number: 1771, url: 'https://www.instagram.com/reel/CyWUIzMPWPr/' },
  { number: 1772, url: 'https://www.instagram.com/reel/CygfCAnPUVo/' },
  { number: 1773, url: 'https://www.instagram.com/reel/Cyl1l1ZroHT/' },
  { number: 1774, url: 'https://www.instagram.com/reel/CyoNZDYiRyv/' },
  { number: 1775, url: 'https://www.instagram.com/reel/CyysD1friQz/' },
  { number: 1776, url: 'https://www.instagram.com/reel/Cy3qP94L5da/' },
  { number: 1777, url: 'https://www.instagram.com/reel/Cy6UuZaKO1G/' },
  { number: 1778, url: 'https://www.instagram.com/reel/CzEvxIwBI5S/' },
  { number: 1779, url: 'https://www.instagram.com/reel/CzJ_ldQrsmj/' },
  { number: 1780, url: 'https://www.instagram.com/reel/CzMaq7QLu2d/' },
]

export default function DesintoxPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 pb-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Travaux
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span>Désintox</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Épisodes Désintox</h1>

          {/* Context Text */}
          <div className="max-w-3xl mb-12">
            <p className="text-lg text-white/80 mb-4">
              Série d&apos;épisodes pour l&apos;émission Désintox diffusée sur Arte et Libération.
            </p>
          </div>

          {/* Animateur Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Animateur</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {animateurEpisodes.map((episode) => (
                <div key={episode.number} className="space-y-2">
                  <h3 className="text-xl font-semibold mb-4">Épisode {episode.number}</h3>
                  <VideoPlayer
                    dailymotionUrl={episode.url}
                    title={`Désintox Épisode ${episode.number}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Réalisateur Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Réalisateur</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {realisateurEpisodes.map((episode) => (
                <div key={episode.number} className="space-y-2">
                  <h3 className="text-xl font-semibold mb-4">Épisode {episode.number}</h3>
                  <VideoPlayer
                    dailymotionUrl={episode.url.includes('dailymotion') ? episode.url : undefined}
                    instagramUrl={episode.url.includes('instagram') ? episode.url : undefined}
                    title={`Désintox Épisode ${episode.number}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div>
              <h3 className="text-sm text-white/60 mb-1">Client / Studio</h3>
              <p className="text-lg">Arte / Libération</p>
            </div>

            <div>
              <h3 className="text-sm text-white/60 mb-1">Rôle</h3>
              <p className="text-lg">Animateur & Réalisateur</p>
            </div>

            <div>
              <h3 className="text-sm text-white/60 mb-1">Catégories</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-white/30 rounded-full text-sm">
                  Animation
                </span>
                <span className="px-3 py-1 border border-white/30 rounded-full text-sm">
                  Réalisation
                </span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-block px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              ← Retour aux travaux
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
