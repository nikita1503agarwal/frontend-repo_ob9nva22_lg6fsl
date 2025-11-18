export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-bold">Nordic Solar Pro</span>
          </div>
          <p className="text-slate-400 text-sm mb-4">Premium solcellsinstallationer med fokus på trygghet, prestanda och service i toppklass.</p>
          <div className="flex items-center gap-3">
            <div className="w-28 h-8 bg-slate-800 rounded flex items-center justify-center text-xs text-slate-400">Trustpilot</div>
            <div className="w-7 h-7 rounded bg-slate-800"/>
            <div className="w-7 h-7 rounded bg-slate-800"/>
            <div className="w-7 h-7 rounded bg-slate-800"/>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Snabbmeny</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#startsida" className="hover:text-white">Startsida</a></li>
            <li><a href="#produkter" className="hover:text-white">Produkter</a></li>
            <li><a href="#om-oss" className="hover:text-white">Om oss</a></li>
            <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
            <li><a href="#bokning" className="hover:text-white">Bokningsförfrågan</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Kontakt</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>Telefon: 010-123 45 67</li>
            <li>E-post: hej@nordicsolarpro.se</li>
            <li>Adress: Solgatan 12, 111 22 Stockholm</li>
            <li>Öppettider: Mån–Fre 08:00–17:00</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Nyhetsbrev</h4>
          <p className="text-slate-400 text-sm mb-3">Få tips, guider och kampanjer direkt till inkorgen.</p>
          <form onSubmit={(e)=>e.preventDefault()} className="flex gap-2">
            <input type="email" required placeholder="Din e-post" className="flex-1 px-3 py-2 rounded bg-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded text-white font-semibold">Skicka</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-slate-800 text-slate-500 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Nordic Solar Pro. Alla rättigheter förbehållna.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">Integritetspolicy</a>
          <a href="#" className="hover:text-slate-300">Cookies</a>
          <a href="#" className="hover:text-slate-300">Villkor</a>
        </div>
      </div>
    </footer>
  )
}
