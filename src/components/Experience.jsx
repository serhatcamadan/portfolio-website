import { useRef, useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const jobs = [
  {
    title: 'Software Engineering Intern — HERA',
    company: 'ALKU UZEM',
    period: '2025',
    description:
      'Implemented core functionalities; and ensured seamless integration between the frontend interface and the backend database.',
    current: false,
  },
  {
    title: 'Software Engineer',
    company: 'Teknofest Altira Rocket Team',
    period: '2025 — 2026',
    description:
      'Contributing to technical documentation (Preliminary and Critical Design Reports) by detailing the software architecture, state machines, and fail-safe protocols.',
    current: false,
  },
  {
    title: 'Lead Instructor, Co-Organizer — Git/GitHub Bootcamp',
    company: 'NEXUS ALKU',
    period: '2025 — 2026',
    description:
      'Designed and delivered a comprehensive "Git/GitHub Bootcamp" focused on real-world scenarios for engineering students at Rafet Kayis Faculty of Engineering.',
    current: false,
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Perapole',
    period: '2026 — Present',
    description:
      'Contributed to a B2B web platform using React, Next.js, and TypeScript. Managed client-side state with Context API and Zustand. Built content automation pipelines with n8n for video and tutorial material delivery.',
    current: true,
  },
]

export default function Experience() {
  const { ref, visible } = useScrollReveal()
  const timelineRef = useRef(null)
  const dotRefs = useRef([])
  const [fillHeight, setFillHeight] = useState(0)
  const [activeDots, setActiveDots] = useState(jobs.map(() => false))

  useEffect(() => {
    const onScroll = () => {
      if (!timelineRef.current) return
      const rect = timelineRef.current.getBoundingClientRect()
      const mark = window.innerHeight * 0.65
      const filled = Math.min(rect.height, Math.max(0, mark - rect.top))
      setFillHeight(filled)
      setActiveDots(
        dotRefs.current.map(el => {
          if (!el) return false
          const dotRect = el.getBoundingClientRect()
          return dotRect.top + dotRect.height / 2 <= mark
        })
      )
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={ref}
      id="experience"
      className={`py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
        <div className="md:col-span-4">
          <span className="font-label-caps text-label-caps text-secondary mb-base block">
            EXPERIENCE
          </span>
          <h2 className="font-headline-md text-headline-md text-primary sticky top-16 md:top-28">
            Career Journey
          </h2>
        </div>

        <div className="md:col-span-8">
          <div ref={timelineRef} className="relative pl-6 md:pl-8 space-y-stack-lg">
            {/* Background line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant/50" />
            {/* Fill line */}
            <div
              className="absolute left-0 top-0 w-px bg-primary"
              style={{ height: `${fillHeight}px` }}
            />

            {jobs.map((job, i) => (
              <div key={job.title} className="relative">
                {job.current ? (
                  <div
                    ref={el => { dotRefs.current[i] = el }}
                    className={`absolute -left-[33px] md:-left-[41px] top-1 w-5 h-5 rounded-full ring-4 ring-secondary-fixed/30 flex items-center justify-center transition-colors duration-500 ${
                      activeDots[i] ? 'bg-primary' : 'bg-outline-variant'
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                  </div>
                ) : (
                  <div
                    ref={el => { dotRefs.current[i] = el }}
                    className={`absolute -left-[33px] md:-left-[41px] top-1 w-5 h-5 rounded-full transition-colors duration-500 ${
                      activeDots[i] ? 'bg-primary' : 'bg-outline-variant'
                    }`}
                  />
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary">{job.title}</h3>
                  <span
                    className={`font-label-caps text-label-caps text-on-surface-variant px-3 py-1 rounded ${
                      job.current ? 'bg-surface-variant/30' : ''
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <p className="font-label-caps text-label-caps text-secondary mb-stack-sm">
                  {job.company}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
