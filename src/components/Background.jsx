import { useEffect, useRef } from 'react'

export default function Background() {
  const spotlightRef = useRef(null)
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const orb3Ref = useRef(null)

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const lerped = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let raf

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`
      }
    }

    const animate = (t) => {
      const sec = t / 1000

      lerped.x += (mouse.x - lerped.x) * 0.025
      lerped.y += (mouse.y - lerped.y) * 0.025

      const normX = (lerped.x / window.innerWidth - 0.5)
      const normY = (lerped.y / window.innerHeight - 0.5)

      if (orb1Ref.current) {
        const x = Math.sin(sec * 0.25) * 50 + normX * 40
        const y = Math.cos(sec * 0.18) * 40 + normY * 30
        orb1Ref.current.style.transform = `translate(${x}px, ${y}px)`
      }
      if (orb2Ref.current) {
        const x = Math.cos(sec * 0.2) * 60 + normX * 35
        const y = Math.sin(sec * 0.15) * 50 + normY * 25
        orb2Ref.current.style.transform = `translate(${x}px, ${y}px)`
      }
      if (orb3Ref.current) {
        const x = Math.sin(sec * 0.35 + 1) * 35 + normX * 50
        const y = Math.cos(sec * 0.28 + 2) * 30 + normY * 40
        orb3Ref.current.style.transform = `translate(${x}px, ${y}px)`
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Mouse spotlight */}
      <div
        ref={spotlightRef}
        className="absolute"
        style={{
          width: '800px',
          height: '800px',
          top: 0,
          left: 0,
          background: 'radial-gradient(circle, rgba(0,200,214,0.055) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Orb 1 — large teal, top-left */}
      <div
        ref={orb1Ref}
        className="absolute"
        style={{
          width: '600px',
          height: '600px',
          top: '-15%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(0,200,214,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      {/* Orb 2 — large, bottom-right */}
      <div
        ref={orb2Ref}
        className="absolute"
        style={{
          width: '700px',
          height: '700px',
          bottom: '-20%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(0,180,200,0.13) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
      />

      {/* Orb 3 — small accent, center */}
      <div
        ref={orb3Ref}
        className="absolute"
        style={{
          width: '320px',
          height: '320px',
          top: '35%',
          right: '25%',
          background: 'radial-gradient(circle, rgba(125,244,255,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
