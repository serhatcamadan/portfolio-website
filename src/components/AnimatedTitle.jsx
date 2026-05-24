import { useRef, useEffect } from 'react'

const LINE1 = 'SERHAT CAMADAN'
const LINE2 = 'JUNIOR FRONT-END DEVELOPER'

// Pre-compute render items with stable ref indices
const buildItems = () => {
  const items = []
  let refIdx = 0
  for (const char of LINE1) {
    items.push({ char, isSpace: char === ' ', line: 1, refIdx: char === ' ' ? -1 : refIdx++ })
  }
  items.push({ char: '|', isSpace: false, isSep: true, refIdx: -1 })
  for (const char of LINE2) {
    items.push({ char, isSpace: char === ' ', line: 2, refIdx: char === ' ' ? -1 : refIdx++ })
  }
  return { items, totalLetters: refIdx }
}

const { items, totalLetters } = buildItems()

const RADIUS = 140
const MAX_SCALE = 0.32
const MAX_LIFT = 18
const EASE = 0.12

export default function AnimatedTitle({ className, style }) {
  const letterRefs = useRef(new Array(totalLetters).fill(null))
  const scales = useRef(new Array(totalLetters).fill(1))
  const lifts = useRef(new Array(totalLetters).fill(0))

  useEffect(() => {
    const mouse = { x: -9999, y: -9999 }
    let raf

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const animate = () => {
      const refs = letterRefs.current
      const n = refs.length

      // Batch reads
      const rects = new Array(n)
      for (let i = 0; i < n; i++) {
        rects[i] = refs[i]?.getBoundingClientRect() ?? null
      }

      // Batch writes
      for (let i = 0; i < n; i++) {
        const el = refs[i]
        const rect = rects[i]
        if (!el || !rect) continue

        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = mouse.x - cx
        const dy = mouse.y - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const influence = Math.max(0, 1 - dist / RADIUS)

        scales.current[i] += (1 + MAX_SCALE * influence - scales.current[i]) * EASE
        lifts.current[i] += (-MAX_LIFT * influence - lifts.current[i]) * EASE

        const s = scales.current[i]
        const y = lifts.current[i]
        const atRest = Math.abs(s - 1) < 0.003 && Math.abs(y) < 0.3

        if (atRest) {
          el.style.transform = ''
          el.style.color = ''
          el.style.textShadow = ''
        } else {
          el.style.transform = `scale(${s.toFixed(4)}) translateY(${y.toFixed(2)}px)`

          // Interpolate primary(240,240,248) → secondary(0,200,214)
          const t = influence
          const r = Math.round(240 * (1 - t))
          const g = Math.round(240 - 40 * t)
          const b = Math.round(248 - 34 * t)
          el.style.color = `rgb(${r},${g},${b})`

          // Teal glow that grows with proximity
          el.style.textShadow = `0 0 ${Math.round(t * 28)}px rgba(0,200,214,${(t * 0.55).toFixed(2)})`
        }
      }

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <h1 className={className} style={style}>
      {items.map((item, i) => {
        if (item.isSep) {
          return (
            <span key={`sep-${i}`} className="text-secondary mx-3 md:mx-4 inline-block">
              |
            </span>
          )
        }
        if (item.isSpace) {
          return (
            <span key={`sp-${i}`} className="inline-block" style={{ width: '0.28em' }}>
              {' '}
            </span>
          )
        }
        return (
          <span
            key={`${item.line}-${i}`}
            ref={(el) => { letterRefs.current[item.refIdx] = el }}
            className="inline-block"
            style={{ willChange: 'transform, color' }}
          >
            {item.char}
          </span>
        )
      })}
    </h1>
  )
}
