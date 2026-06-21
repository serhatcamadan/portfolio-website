import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef    = useRef(null)
  const canvasRef = useRef(null)
  const trail     = useRef([])
  const raf       = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const onMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
      trail.current.push({ x: e.clientX, y: e.clientY, t: performance.now() })
      if (trail.current.length > 80) trail.current.shift()
    }

    const animate = () => {
      const now    = performance.now()
      const maxAge = 550

      trail.current = trail.current.filter(p => now - p.t < maxAge)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of trail.current) {
        const life = 1 - (now - p.t) / maxAge
        ctx.beginPath()
        ctx.arc(p.x, p.y, life * 4.5, 0, Math.PI * 2)
        ctx.shadowBlur  = life * 18
        ctx.shadowColor = 'rgba(0, 200, 214, 1)'
        ctx.fillStyle   = `rgba(0, 200, 214, ${life * 0.55})`
        ctx.fill()
      }
      ctx.shadowBlur = 0

      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9997 }}
      />

      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ zIndex: 9999, willChange: 'transform', transform: 'translate(-200px, -200px)' }}
      >
        <div style={{
          width:           7,
          height:          7,
          marginLeft:      -3.5,
          marginTop:       -3.5,
          borderRadius:    '50%',
          backgroundColor: 'rgb(0, 200, 214)',
          boxShadow:       '0 0 10px rgba(0, 200, 214, 0.9)',
        }} />
      </div>
    </>
  )
}
