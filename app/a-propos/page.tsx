import { Header } from '@/components/Header'

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">A Propos</h1>
        <div className="prose prose-invert max-w-none">
          <p>Page a propos de Libe.</p>
        </div>
      </main>
    </>
  )
}
