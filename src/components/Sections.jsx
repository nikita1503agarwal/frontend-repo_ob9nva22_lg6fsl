import { useState } from 'react'

export function Hero(){
  return (
    <section id="startsida" className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-50 to-white"/>
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-emerald-200/30 rounded-full blur-3xl"/>
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-3xl"/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow text-emerald-700 text-sm font-semibold mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"/> Premium solenergi för villa & företag
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sänk elkostnaden med solceller – trygg installation, maximal effekt
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Vi levererar nyckelfärdiga solcellslösningar med certifierade installatörer, generösa garantier och snabb leverans. Kombinera med batteri och spara ännu mer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#kontakt" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition-colors">Få offert</a>
            <a href="#kontakt" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold shadow hover:bg-emerald-50 transition-colors">Kontakt</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2"><div className="w-10 h-6 bg-slate-200 rounded"/> Tryggt val</div>
            <div className="flex items-center gap-2"><div className="w-10 h-6 bg-slate-200 rounded"/> Trustpilot 4.8</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" alt="Solpaneler på villatak" className="w-full h-[420px] object-cover"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-emerald-100"/>
            <div>
              <p className="text-slate-900 font-semibold">Besiktad installation</p>
              <p className="text-slate-500 text-sm">Alltid kvalitetssäkrat utförande</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Intro(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Vi är experter på solenergi</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Med hundratals genomförda installationer hjälper vi hushåll och företag att bli mer självförsörjande. Vi tar hand om hela resan – från projektering och tillstånd till montage, driftsättning och support.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-emerald-500"/> Certifierade installatörer</li>
            <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-emerald-500"/> Snabb leverans</li>
            <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-emerald-500"/> Trygga garantier</li>
            <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-emerald-500"/> Premiumkomponenter</li>
          </ul>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1650530224492-f5a8b6e77fae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnN0YWxsYXQlQzMlQjZyJTIwYXJiZXRhciUyMG1lZCUyMHNvbGNlbGxzc3lzdGVtfGVufDB8MHx8fDE3NjM0OTczMjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Installatör arbetar med solcellssystem" className="rounded-2xl shadow-lg w-full h-[360px] object-cover"/>
        </div>
      </div>
    </section>
  )
}

export function Benefits(){
  const items = [
    { title: 'Besiktad installation', desc: 'Varje anläggning kontrolleras noggrant för topprestanda.' },
    { title: 'Snabb leverans & montage', desc: 'Effektiv process ger korta ledtider från beställning till drift.' },
    { title: 'Certifierade installatörer', desc: 'Våra team är auktoriserade och utbildade på ledande fabrikat.' },
    { title: 'Trygga garantier', desc: 'Generösa produkt- och effektgarantier för långsiktig trygghet.' },
    { title: 'Möjlighet till batterilagring', desc: 'Maximera egenanvändningen och spara mer med batteri.' },
  ]
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Fördelar</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it)=> (
            <div key={it.title} className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 mb-4"/>
              <h4 className="font-semibold text-slate-900 mb-1">{it.title}</h4>
              <p className="text-slate-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Packages(){
  const pkgs = [
    { name: 'Litet paket', power: '4–6 kW', desc: 'Passar mindre villor och fritidshus. Effektiva paneler och snygg design.' },
    { name: 'Mellanpaket', power: '8–12 kW', desc: 'Vårt populäraste paket för normalvillor. Balanserad prestanda och pris.' },
    { name: 'Stort paket', power: '14–20 kW', desc: 'För större tak eller högre förbrukning. Maximal produktion.' },
  ]
  return (
    <section className="py-16" id="produkter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Solcellspaket</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {pkgs.map(p => (
            <div key={p.name} className="bg-white rounded-2xl border border-slate-100 p-6 shadow hover:shadow-xl transition">
              <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop" alt="Solcellspaket" className="rounded-xl mb-4 h-44 w-full object-cover"/>
              <h4 className="text-xl font-bold text-slate-900">{p.name}</h4>
              <p className="text-emerald-700 font-semibold">{p.power}</p>
              <p className="text-slate-600 mt-2 mb-4">{p.desc}</p>
              <a href="#kontakt" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Få offert</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Batteries(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Batterilösningar</h3>
          <p className="text-slate-600 mb-4">Med batteri lagrar du överskottsel för att använda kvällstid eller vid högre priser. Det ökar egenanvändningen, minskar effekttoppar och skyddar mot strömavbrott.</p>
          <ul className="space-y-2 text-slate-700">
            <li>• 5–20 kWh kapacitet</li>
            <li>• Smart styrning med app</li>
            <li>• Förberett för lastbalansering</li>
          </ul>
          <a href="#kontakt" className="mt-6 inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Få offert</a>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1600&auto=format&fit=crop" alt="Solcellsbatteri" className="rounded-2xl shadow-lg w-full h-[360px] object-cover"/>
        </div>
      </div>
    </section>
  )
}

export function Testimonials(){
  const items = [
    { name: 'Anna, Västerås', text: 'Snabbt, proffsigt och väldigt tydlig kommunikation. Produktion över förväntan.' },
    { name: 'Johan, Malmö', text: 'Smidig process från offert till driftsättning. Rekommenderas varmt.' },
    { name: 'Sara, Uppsala', text: 'Vi valde även batteri – sparar mer och känner oss trygga vid avbrott.' },
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Kundomdömen</h3>
          <div className="w-32 h-8 rounded bg-emerald-600/10 text-emerald-700 flex items-center justify-center text-xs font-semibold">Trustpilot</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it)=> (
            <div key={it.name} className="bg-white rounded-xl p-6 shadow border border-slate-100">
              <div className="flex gap-1 text-amber-400 mb-3">{'★★★★★'}</div>
              <p className="text-slate-700 mb-4">“{it.text}”</p>
              <p className="text-slate-500 text-sm">{it.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA(){
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">Få kostnadsfri offert</h3>
            <p className="text-white/80">Berätta om ditt tak – vi återkommer med rekommendation och prisförslag.</p>
          </div>
          <a href="#kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50">Till formuläret</a>
        </div>
      </div>
    </section>
  )
}

export function ProductsPage(){
  const panels = [
    { name: 'Nova 410W Black', effect: '410 W', eff: '21.2%', warranty: '25 år produkt / 30 år effekt', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Helios 430W Full Black', effect: '430 W', eff: '21.8%', warranty: '25/30 år', img: 'https://images.unsplash.com/photo-1584276433295-4b83f2917a62?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Astra 455W N-Type', effect: '455 W', eff: '22.3%', warranty: '25/30 år', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop' },
  ]
  const batteries = [
    { name: 'Volt 5 kWh', cap: '5 kWh', features: 'Modulär, appstyrning, backup', img: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Volt 10 kWh', cap: '10 kWh', features: 'Hög effekt, lastbalansering, utökbar', img: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <main className="pt-28">
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Produkter</h1>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Solpaneler</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {panels.map(p => (
              <div key={p.name} className="bg-white rounded-xl border border-slate-100 shadow overflow-hidden">
                <img src={p.img} alt={p.name} className="h-40 w-full object-cover"/>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-slate-600 text-sm">Effekt: {p.effect} • Verkningsgrad: {p.eff}</p>
                  <p className="text-slate-500 text-xs mb-3">Garantier: {p.warranty}</p>
                  <a href="#kontakt" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Få offert</a>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Solcellsbatterier</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {batteries.map(b => (
              <div key={b.name} className="bg-white rounded-xl border border-slate-100 shadow overflow-hidden">
                <img src={b.img} alt={b.name} className="h-40 w-full object-cover"/>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{b.name}</h3>
                  <p className="text-slate-600 text-sm">Kapacitet: {b.cap}</p>
                  <p className="text-slate-500 text-sm mb-3">{b.features}</p>
                  <a href="#kontakt" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Få offert</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export function AboutPage(){
  const team = [
    { name: 'Elin Berg', role: 'Projektledare', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Mikael Sund', role: 'Chefsmontör', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
    { name: 'Sara Holm', role: 'Energirådgivare', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  ]
  return (
    <main className="pt-28">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Om oss</h1>
            <p className="text-slate-600 mb-4">Vi startade med en tydlig vision: att göra solenergi enkelt, lönsamt och tryggt för alla. Idag installerar vi högkvalitativa solcellssystem över hela landet med fokus på långsiktiga kundrelationer.</p>
            <h3 className="font-semibold text-slate-900 mb-2">Varför välja oss?</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1 mb-4">
              <li>Transparenta offerter och tydlig projektledning</li>
              <li>Egna, certifierade montageteam</li>
              <li>Support och uppföljning efter driftsättning</li>
            </ul>
            <h3 className="font-semibold text-slate-900 mb-2">Process</h3>
            <ol className="list-decimal pl-5 text-slate-700 space-y-1">
              <li>Offert: Vi analyserar ditt tak och förbrukning</li>
              <li>Installation: Certifierad montering och driftsättning</li>
              <li>Support: Övervakning, service och garantiärenden</li>
            </ol>
          </div>
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {team.map(t => (
                <div key={t.name} className="bg-white rounded-xl shadow border border-slate-100 p-4 text-center">
                  <img src={t.img} alt={t.name} className="w-full h-44 object-cover rounded-lg mb-3"/>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-slate-200"/>
              <div className="w-10 h-10 rounded bg-slate-200"/>
              <div className="w-10 h-10 rounded bg-slate-200"/>
              <span className="text-slate-500 text-sm">Certifikat & partners</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function ContactPage(){
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <main className="pt-28" id="kontakt">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Kontakta oss</h1>
            <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow border border-slate-100 p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Namn</label>
                  <input required className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Telefon</label>
                  <input required className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">E-post</label>
                  <input type="email" required className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Adress</label>
                  <input className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-600 mb-1">Typ av installation</label>
                  <select className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Solceller</option>
                    <option>Batteri</option>
                    <option>Båda</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-600 mb-1">Meddelande</label>
                  <textarea rows="4" className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                </div>
              </div>
              <button className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Skicka</button>
              {sent && <p className="text-emerald-700 font-semibold">Tack! Vi kontaktar dig så snart som möjligt.</p>}
            </form>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden h-64 w-full bg-slate-200 flex items-center justify-center text-slate-500 mb-4">Google Maps</div>
            <div className="bg-white rounded-2xl shadow border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Kontaktinfo</h3>
              <p className="text-slate-600 text-sm">Telefon: 010-123 45 67<br/>E-post: hej@nordicsolarpro.se<br/>Adress: Solgatan 12, 111 22 Stockholm</p>
              <p className="text-slate-500 text-sm mt-3">Öppettider: Mån–Fre 08:00–17:00</p>
            </div>
          </div>
        </div>
      </section>
      <BookingSection />
    </main>
  )
}

export function BookingSection(){
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <section id="bokning" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow border border-slate-100 p-6">
          <h2 className="text-2xl font-bold text-slate-900">Boka genomgång</h2>
          <p className="text-slate-600 mb-4">Skicka din bokningsförfrågan så bekräftar vi manuellt.</p>
          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Namn</label>
              <input required className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Telefon</label>
              <input required className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">E-post</label>
              <input type="email" required className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Önskad dag/tid</label>
              <input type="datetime-local" className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Vad vill du gå igenom?</label>
              <select className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Solceller</option>
                <option>Batteri</option>
                <option>Båda</option>
              </select>
            </div>
            <div className="sm:col-span-2 flex items-center gap-3">
              <button className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Skicka förfrågan</button>
              {sent && <span className="text-emerald-700 font-semibold">Tack! Vi kontaktar dig så snart som möjligt.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
