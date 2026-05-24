import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const raf = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(true)
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(false)
    }

    const animate = () => {
      const ease = 0.1
      ring.current.x += (pos.current.x - ring.current.x) * ease
      ring.current.y += (pos.current.y - ring.current.y) * ease
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          willChange: 'transform',
          transform: 'translate(-100px, -100px)',
        }}
      >
        <div
          className="rounded-full bg-secondary transition-all duration-150"
          style={{
            width: hovering ? '10px' : '6px',
            height: hovering ? '10px' : '6px',
            marginLeft: hovering ? '-5px' : '-3px',
            marginTop: hovering ? '-5px' : '-3px',
            opacity: hovering ? 0 : 1,
          }}
        />
      </div>

      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          willChange: 'transform',
          transform: 'translate(-100px, -100px)',
        }}
      >
        <div
          className="rounded-full border transition-all duration-200"
          style={{
            width: hovering ? '52px' : '32px',
            height: hovering ? '52px' : '32px',
            marginLeft: hovering ? '-26px' : '-16px',
            marginTop: hovering ? '-26px' : '-16px',
            borderColor: hovering
              ? 'rgba(0, 200, 214, 0.8)'
              : 'rgba(0, 200, 214, 0.45)',
            backgroundColor: hovering ? 'rgba(0, 200, 214, 0.08)' : 'transparent',
          }}
        />
      </div>
    </>
  )
}
