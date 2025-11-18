import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Hero, Intro, Benefits, Packages, Batteries, Testimonials, CTA, ProductsPage, AboutPage, ContactPage } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Startsida */}
      <Hero />
      <Intro />
      <Benefits />
      <Packages />
      <Batteries />
      <Testimonials />
      <CTA />

      {/* Produkter som egen sektion på startsidan och separat sida-komponent finns ovan om vi vill routa */}
      <section className="py-4" id="om-oss">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-4">Kort om företaget</h3>
          <p className="text-slate-600">Vi är ett svenskt solenergiföretag som levererar kompletta lösningar inom solceller, batterier och installationstjänster. Fokus på kvalitet, estetik och hög avkastning över tid.</p>
        </div>
      </section>

      {/* Kontakt + bokning */}
      <ContactPage />

      <Footer />
    </div>
  )
}

export default App
