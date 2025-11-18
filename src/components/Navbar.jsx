import { useEffect, useState } from 'react'

const links = [
  { href: '#startsida', label: 'Startsida' },
  { href: '#produkter', label: 'Produkter' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '#kontakt', label: 'Kontakt' },
  { href: '#bokning', label: 'Bokningsförfrågan' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#','')
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/80 shadow' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#startsida" onClick={(e)=>handleClick(e,'#startsida')} className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Solenergi" className="w-9 h-9" />
            <div className="flex flex-col leading-tight">
              <span className="text-slate-900 font-bold text-lg">Nordic Solar Pro</span>
              <span className="text-emerald-600 text-xs">Solceller • Batteri • Installation</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={(e)=>handleClick(e,l.href)} className="text-slate-700 hover:text-emerald-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={(e)=>handleClick(e,'#kontakt')} className="inline-flex items-center rounded-lg bg-emerald-600 text-white px-4 py-2 font-semibold shadow hover:bg-emerald-700 transition-colors">
              Få offert
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700" onClick={()=>setOpen(o=>!o)} aria-label="Meny">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={(e)=>handleClick(e,l.href)} className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
                  {l.label}
                </a>
              ))}
              <a href="#kontakt" onClick={(e)=>handleClick(e,'#kontakt')} className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-center font-semibold">
                Få offert
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
