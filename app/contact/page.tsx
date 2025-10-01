import { Header } from '@/components/Header'
import { ContactForm } from '@/components/ContactForm'

export const metadata = {
  title: 'Contact - Libé Animation',
  description: 'Contactez Libé pour vos projets d\'animation et motion design',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-lg text-white/70">
              Une question ? Un projet ? N'hésitez pas à me contacter.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
    </>
  )
}
