import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import hera1 from '../assets/hera/1000092736.JPG'
import hera2 from '../assets/hera/1000092737.JPG'
import hera3 from '../assets/hera/1000092756.JPG'
import hera4 from '../assets/hera/1000092757.JPG'
import hera5 from '../assets/hera/Ekran Resmi 2026-05-25 13.55.23.png'
import hera6 from '../assets/hera/Ekran Resmi 2026-05-25 13.56.56.png'

const IMG = {
  dashboard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB00sloWiE6ROgvQe_LDLgyI2ptBB_HVARJkxIEe_2iJKreI8Swfa83pbGNovUUROlHHJPioX7ebRiH_NC0S6vy8Dt5Ms_SIVUOIqqkm1h2mPWgSz6tmqpAMnggH4XKbMgxnm0xGRcnZPF8CJOJblp9dTk_USuqc34jLNOD5KFHdx1CpT2Ie5AgSzP3fx8Y_ZQWNzq1oQzy9UiFBSrvmSk39ettjV5pEJuGoyH1DK11gopTlb0tF4XPSK9uQ6u8jKxeCzj-w4o482o',
  skincare:  'https://lh3.googleusercontent.com/aida-public/AB6AXuC8EbFsvN1v2nKFkNFxL5xF66UXiLRMePieuPrGiDbwpCJf2j17pSAxVTw8SKr2vMPxozXoF7iXTboZKwBsTf6Zkd4B_hRYYvDU4804zotKCv5-SpZDgCdB71mqS5UBLJp1w0JwhUn0GJOBHYscAjBDjy70Rf9LATFHM399j52lWF0hXHpgtU7aF47so4rLXBLBZ6iwVNPE8mfDUZ4LenvhwaTQ_dZR7_bz2XyzINQUmNHVtgRqvjCma4CuQF35aZQzgpqhu5iFypo',
  arch:      'https://lh3.googleusercontent.com/aida-public/AB6AXuAU35V4CbR7iLN1vTlra6E3UmXBPfEyhzkjbgBsdmKq5m8YIB913_QJh9Gv7j5KzQzR6BSeKIfvBc9U2CylJWhFcdP6BKoGiTsXRASY6_XFC55mhPqSO7uUs177YWUtt_O3bgHfvdksk9Lb73IouoDw14DEPYrrHriaSTvbn6JOM1HgHK9_92SKXFyEoeLYK3j2RGyuTvjpeH4Ou90irZtkLIHrNFMhnCUVGBotAs-FIRCyrFqJfr8KybFJcInQMjhjkOU4MCu-3PQ',
  mobile:    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUd16MpKFKfw-g6R7u4-_RaFtlF6r9nUaCRBBzyMmmNOc0PGlCJ9h-o5Z439SwFn8IzXH0XXggLSikTZpZoGm3PxIZ_pBZZP4LVItuYiBdtGKfqJR3eJQxWx4hGtRVDSAO14PsZQwWRYqoGsElIpp_mMxqoTVOq_ys_hi-jyghubVnbTIktIzm7ScH0TDMwa3AihJqKkubvqEsH2kyKXo-WPv8fLkLBFjqbnTkWF5Hz-gNP92esjCcBbwrHoSeO8vezvSIacgC9_A',
}

const projects = [
  {
    title: 'HERA',
    description: 'Co-developed a full-stack standalone application for ALKÜ Tazelenme University to digitize and manage elderly students\' academic and health records. Implemented core functionalities including database architecture, UI/UX design, and seamless integration between frontend and backend systems. Presented the final product to the University Rector and Board of Directors.',
    tag: 'Software Development',
    tech: ['Python', 'PyQt6', 'Microsoft Access'],
    github: null,
    live: null,
    images: [hera1, hera2, hera3, hera4, hera5, hera6],
  },
  {
    title: 'Graduation Project : SignaTurk',
    description: 'SignaTurk aims to eliminate communication barriers between hearing and hearing-impaired individuals by acting as an AI-powered, real-time, and bidirectional digital translator between Turkish Sign Language (TSL) and Turkish. The first module detects movement in front of the camera, prints it to the screen, and vocalizes it using text-to-speech. The second detects spoken words and plays animations drawn with Unreal Engine Metahuman technology. Involved in model training, evaluation, and analysis.',
    tag: 'AI / ML',
    tech: ['Python', 'TensorFlow', 'Unreal Engine','BiLSTM', 'MediaPipe'],
    github: null,
    live: 'https://example.com',
    images: [IMG.skincare, IMG.mobile],
  },
  {
    title: 'Frontend Development Portfolio',
    description: 'Developed a collection of responsive web applications including a Movie Tracking App and a Weather App, focusing on REST API integration and asynchronous data fetching.  Built a dynamic Restaurant Page and a Task Management (Todo) System, implementing DOM manipulation, local storage, and complex UI layouts using Tailwind CSS. Focused on writing semantic HTML and clean, modular JavaScript code following modern web standards and accessibility principles. Managed project versions and deployment workflows using Git/GitHub and Netlify/Vercel for continuous integration.',
    tag: 'WEB',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    github: 'https://github.com/serhatcamadan',
    live: null,
    images: [IMG.arch, IMG.dashboard, IMG.mobile],
  },
]

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

// ── Mini image carousel inside each card ─────────────────────────────────────
function CardCarousel({ images, onCardClick }) {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)

  const navigate = (e, next) => {
    e.stopPropagation()
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setIdx(next)
      setFading(false)
    }, 180)
  }

  const prev = (e) => navigate(e, (idx - 1 + images.length) % images.length)
  const next = (e) => navigate(e, (idx + 1) % images.length)

  return (
    <div
      role="button"
      tabIndex={0}
      className="relative aspect-video overflow-hidden border border-outline-variant/30 mb-stack-sm rounded-lg group/card cursor-pointer"
      onClick={onCardClick}
      onKeyDown={(e) => e.key === 'Enter' && onCardClick()}
    >
      {/* Image */}
      <img
        src={images[idx]}
        alt=""
        className={`w-full h-full object-cover transition-all duration-500 group-hover/card:scale-105 ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Arrows — only if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-black/70"
          >
            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-black/70"
          >
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => navigate(e, i)}
              className={`rounded-full transition-all duration-300 ${
                i === idx ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      {/* "Open" hint on hover */}
      <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 text-white font-label-caps text-label-caps">
          <span className="material-symbols-outlined text-[14px]">open_in_full</span>
          details
        </div>
      </div>
    </div>
  )
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const navigate = (next) => {
    if (fading) return
    setFading(true)
    setTimeout(() => { setIdx(next); setFading(false) }, 180)
  }

  const prev = () => navigate((idx - 1 + project.images.length) % project.images.length)
  const next = () => navigate((idx + 1) % project.images.length)

  return (
    <div
      className="fixed inset-0 z-500 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        style={{ animation: 'fadeIn 0.2s ease-out forwards' }}
      />

      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface-container rounded-xl border border-outline-variant/20"
        style={{ animation: 'fadeInUp 0.3s ease-out forwards' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-container-highest transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Image carousel */}
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <img
            src={project.images[idx]}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-200 ${fading ? 'opacity-0' : 'opacity-100'}`}
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              {/* Counter */}
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white font-label-caps text-label-caps px-2.5 py-1 rounded-full">
                {idx + 1} / {project.images.length}
              </div>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === idx ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title + links */}
          <div className="flex items-center gap-3 mb-3">
            <h3 className="font-headline-md text-headline-md text-primary shrink-0">{project.title}</h3>
            <div className="flex-1 h-px bg-outline-variant/40" />
            <div className="flex items-center gap-3 shrink-0 text-on-surface-variant">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                   className="hover:text-primary transition-colors">
                  <GitHubIcon />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                   className="hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                </a>
              )}
            </div>
          </div>

          {/* Tech stack */}
          <p className="font-label-caps text-label-caps text-secondary mb-3">
           {project.tech.join(' - ')}
          </p>

          {/* Description */}
          <p className="font-body-lg text-body-lg text-on-surface-variant">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const { ref, visible } = useScrollReveal()
  const [modal, setModal] = useState(null)

  return (
    <>
      <section
        ref={ref}
        id="projects"
        className={`py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low px-gutter transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-container-max mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-stack-lg">
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-base block">
                SELECTED WORKS
              </span>
              <h2 className="font-headline-md text-headline-md text-primary">Projects</h2>
            </div>
            <span className="hidden md:block font-body-md text-body-md text-on-surface-variant italic">
              2025 — today
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter gap-y-stack-lg">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={i % 2 === 1 ? 'md:mt-stack-lg' : ''}
              >
                <CardCarousel
                  images={project.images}
                  onCardClick={() => setModal(project)}
                />
                <div className="mt-3">
                  {/* Title + separator + links */}
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary shrink-0">
                      {project.title}
                    </h3>
                    <div className="flex-1 h-px bg-outline-variant/40" />
                    <div className="flex items-center gap-2 shrink-0 text-on-surface-variant">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-primary transition-colors"
                        >
                          <GitHubIcon />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <p className="font-label-caps text-label-caps text-secondary mb-2">
                    {project.tech.join(' - ')}
                  </p>

                  {/* Description */}
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  {/* Learn more */}
                  <button
                    onClick={() => setModal(project)}
                    className="font-label-caps text-label-caps text-secondary flex items-center gap-1 group hover:gap-2 transition-all"
                  >
                    Learn more
                    <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </>
  )
}
