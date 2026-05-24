import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const IMG = {
  dashboard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB00sloWiE6ROgvQe_LDLgyI2ptBB_HVARJkxIEe_2iJKreI8Swfa83pbGNovUUROlHHJPioX7ebRiH_NC0S6vy8Dt5Ms_SIVUOIqqkm1h2mPWgSz6tmqpAMnggH4XKbMgxnm0xGRcnZPF8CJOJblp9dTk_USuqc34jLNOD5KFHdx1CpT2Ie5AgSzP3fx8Y_ZQWNzq1oQzy9UiFBSrvmSk39ettjV5pEJuGoyH1DK11gopTlb0tF4XPSK9uQ6u8jKxeCzj-w4o482o',
  skincare:  'https://lh3.googleusercontent.com/aida-public/AB6AXuC8EbFsvN1v2nKFkNFxL5xF66UXiLRMePieuPrGiDbwpCJf2j17pSAxVTw8SKr2vMPxozXoF7iXTboZKwBsTf6Zkd4B_hRYYvDU4804zotKCv5-SpZDgCdB71mqS5UBLJp1w0JwhUn0GJOBHYscAjBDjy70Rf9LATFHM399j52lWF0hXHpgtU7aF47so4rLXBLBZ6iwVNPE8mfDUZ4LenvhwaTQ_dZR7_bz2XyzINQUmNHVtgRqvjCma4CuQF35aZQzgpqhu5iFypo',
  arch:      'https://lh3.googleusercontent.com/aida-public/AB6AXuAU35V4CbR7iLN1vTlra6E3UmXBPfEyhzkjbgBsdmKq5m8YIB913_QJh9Gv7j5KzQzR6BSeKIfvBc9U2CylJWhFcdP6BKoGiTsXRASY6_XFC55mhPqSO7uUs177YWUtt_O3bgHfvdksk9Lb73IouoDw14DEPYrrHriaSTvbn6JOM1HgHK9_92SKXFyEoeLYK3j2RGyuTvjpeH4Ou90irZtkLIHrNFMhnCUVGBotAs-FIRCyrFqJfr8KybFJcInQMjhjkOU4MCu-3PQ',
  mobile:    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUd16MpKFKfw-g6R7u4-_RaFtlF6r9nUaCRBBzyMmmNOc0PGlCJ9h-o5Z439SwFn8IzXH0XXggLSikTZpZoGm3PxIZ_pBZZP4LVItuYiBdtGKfqJR3eJQxWx4hGtRVDSAO14PsZQwWRYqoGsElIpp_mMxqoTVOq_ys_hi-jyghubVnbTIktIzm7ScH0TDMwa3AihJqKkubvqEsH2kyKXo-WPv8fLkLBFjqbnTkWF5Hz-gNP92esjCcBbwrHoSeO8vezvSIacgC9_A',
}

const projects = [
  {
    title: 'Aura Analytics',
    description: 'Data-driven interface design for a B2B SaaS platform. Focused on clarity and actionable insights through minimal UI patterns.',
    tag: 'UI/UX',
    images: [IMG.dashboard, IMG.skincare, IMG.arch],
  },
  {
    title: 'Lumina Skincare',
    description: 'Minimalist brand identity and e-commerce experience. Clean typography and soft tones to reflect the premium product positioning.',
    tag: 'BRANDING',
    images: [IMG.skincare, IMG.mobile],
  },
  {
    title: 'Vertex Architecture',
    description: 'Corporate web presence for a leading architecture firm. Grid-based layouts echoing their structural philosophy.',
    tag: 'WEB',
    images: [IMG.arch, IMG.dashboard, IMG.mobile],
  },
  {
    title: 'Nova Pay',
    description: 'Next-generation financial mobile application. Designed for speed and trust in everyday transactions.',
    tag: 'MOBILE',
    images: [IMG.mobile, IMG.arch],
  },
]

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
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-headline-md text-headline-md text-primary">{project.title}</h3>
            <span className="font-label-caps text-label-caps px-3 py-1.5 bg-secondary-container/30 text-secondary rounded-lg shrink-0 mt-1">
              {project.tag}
            </span>
          </div>
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
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <span className="font-label-caps text-label-caps px-3 py-1 bg-surface-variant rounded-lg shrink-0 ml-4">
                    {project.tag}
                  </span>
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
