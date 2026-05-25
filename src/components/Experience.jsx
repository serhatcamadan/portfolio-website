import { useScrollReveal } from '../hooks/useScrollReveal'

const jobs = [
  {
    title: 'Software Engineering Intern - HERA',
    company: 'ALKU UZEM',
    period: '2025',
    description:
      ' Implemented core functionalities; and ensured seamless integration between the frontend interface and the backend database.',
    current: false,
  },
  {
    title: 'Lead Instructor, Co-Organizer- Git/Github Bootcamp',
    company: 'NEXUS ALKU',
    period: '2025 — 2026',
    description:
      'Designed and delivered a comprehensive "Git/ GitHub Bootcamp" focused on real-world scenarios for engineering students at Rafet Kayis Faculty of Engineering.',
    current: true,
  },
  {
    title: 'Software Engineer',
    company: 'Teknofest Altira Rocket Team',
    period: '2025 — 2026',
    description:
      'Contributing to technical documentation (Preliminary and Critical Design Reports) by detailing the software architecture, state machines, and fail-safe protocols.',
    current: false,
  },
]

export default function Experience() {
  const { ref, visible } = useScrollReveal()

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
          <h2 className="font-headline-md text-headline-md text-primary sticky top-28">
            Career Journey
          </h2>
        </div>

        <div className="md:col-span-8">
          <div className="relative pl-8 border-l border-outline-variant/50 space-y-stack-lg">
            {jobs.map((job) => (
              <div key={job.title} className="relative">
                {job.current ? (
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-secondary-fixed/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                  </div>
                ) : (
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-outline-variant" />
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
