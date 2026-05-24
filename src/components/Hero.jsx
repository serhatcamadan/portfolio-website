import { useState, useEffect } from 'react'
import AnimatedTitle from './AnimatedTitle'

const techs = ['JavaScript', 'TypeScript', 'Tailwind CSS', 'React.js', 'Flask', 'Next.js']

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((i) => (i + 1) % techs.length)
        setVisible(true)
      }, 350)
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-20 px-gutter max-w-container-max mx-auto">
      <div className="w-full flex flex-col items-center text-center">
        {/* Greeting */}
        <span
          className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-stack-sm block"
          style={{ animation: 'fadeIn 0.8s ease-out forwards', opacity: 0 }}
        >
          hi there
        </span>

        {/* Animated name & role */}
        <AnimatedTitle
          className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-primary mb-stack-md max-w-3xl mx-auto text-center"
          style={{ animation: 'fadeInUp 1s ease-out 0.2s forwards', opacity: 0 }}
        />

        {/* Cycling tech */}
        <div
          className="flex items-center justify-center gap-3 mb-stack-lg"
          style={{ animation: 'fadeInUp 1s ease-out 0.4s forwards', opacity: 0 }}
        >
          <span className="font-body-lg text-body-lg text-on-surface-variant">
            I build things with
          </span>
          <span
            className="font-button text-button text-secondary border border-secondary/30 px-3 py-1 rounded-lg transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {techs[current]}
          </span>
        </div>

        {/* CTA */}
        <div
          className="flex gap-stack-sm"
          style={{ animation: 'fadeInUp 1s ease-out 0.6s forwards', opacity: 0 }}
        >
          <a
            href="#projects"
            className="bg-primary text-on-primary px-stack-md py-4 rounded-lg font-button text-button hover:bg-secondary hover:text-on-secondary transition-all duration-300 flex items-center gap-2 group"
          >
            View Projects
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
