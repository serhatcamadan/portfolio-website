import { useState, useEffect, useRef } from 'react'
import cvPdf from '../assets/serhat-camadan-cv.pdf'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [shadowed, setShadowed] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.pageYOffset
      if (current <= 0) {
        setHidden(false)
        setShadowed(false)
        lastScroll.current = current
        return
      }
      if (current > lastScroll.current) {
        setHidden(true)
      } else {
        setHidden(false)
        setShadowed(true)
      }
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
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [cvOpen])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${shadowed ? 'shadow-sm' : ''}`}
      >
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
          <a className="font-headline-sm text-headline-sm font-bold text-primary" href="#">
            Portfolio
          </a>

          <div className="hidden md:flex items-center gap-stack-md">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-button text-button text-on-surface-variant hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setCvOpen(true)}
            className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-button text-button flex items-center gap-2 hover:bg-secondary hover:text-on-secondary transition-all duration-300 active:scale-95"
          >
            <span className="material-symbols-outlined">download</span>
            View CV
          </button>
        </div>
      </nav>

      {cvOpen && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setCvOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-surface rounded-xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-outline-variant/30">
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
                <button
                  onClick={() => setCvOpen(false)}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
            <iframe
              src={cvPdf}
              title="Serhat Camadan CV"
              className="w-full flex-1"
            />
          </div>
        </div>
      )}
    </>
  )
}
