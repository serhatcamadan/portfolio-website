import { useState, useEffect, useRef } from 'react'
import cvPdf from '../assets/serhat-camadan-cv.pdf'

const NAV_LINKS = ['About', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [hidden, setHidden]     = useState(false)
  const [shadowed, setShadowed] = useState(false)
  const [cvOpen, setCvOpen]     = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.pageYOffset
      if (current <= 0) { setHidden(false); setShadowed(false); lastScroll.current = current; return }
      if (current > lastScroll.current) { setHidden(true) } else { setHidden(false); setShadowed(true) }
      lastScroll.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!cvOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setCvOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [cvOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${shadowed ? 'shadow-sm' : ''}`}
      >
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-16 md:h-20">
          <a className="font-headline-sm text-headline-sm font-bold text-primary" href="#" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-stack-md">
            {NAV_LINKS.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-button text-button text-on-surface-variant hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* CV button */}
            <button
              onClick={() => setCvOpen(true)}
              className="bg-secondary-container text-on-secondary-container px-4 py-2 md:px-6 md:py-3 rounded-full font-button text-button flex items-center gap-2 hover:bg-secondary hover:text-on-secondary transition-all duration-300 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span className="hidden sm:inline">View CV</span>
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-primary origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-surface border-b border-outline-variant/30 shadow-lg transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-2'
          }`}
        >
          {NAV_LINKS.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-gutter py-4 font-button text-button text-on-surface-variant hover:text-primary hover:bg-surface-variant/20 border-b border-outline-variant/20 last:border-0 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* CV Modal */}
      {cvOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setCvOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-surface rounded-xl overflow-hidden shadow-2xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-outline-variant/30 shrink-0">
              <span className="font-label-caps text-label-caps text-secondary">CV — Serhat Camadan</span>
              <div className="flex items-center gap-3">
                <a
                  href={cvPdf}
                  download="serhat-camadan-cv.pdf"
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  İndir
                </a>
                <button onClick={() => setCvOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
            <iframe src={cvPdf} title="Serhat Camadan CV" className="w-full flex-1 min-h-0" />
          </div>
        </div>
      )}
    </>
  )
}
