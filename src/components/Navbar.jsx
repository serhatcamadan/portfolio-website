import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [shadowed, setShadowed] = useState(false)
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

  return (
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

        <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-button text-button flex items-center gap-2 hover:bg-secondary hover:text-on-secondary transition-all duration-300 active:scale-95">
          <span className="material-symbols-outlined">download</span>
          View CV
        </button>
      </div>
    </nav>
  )
}
