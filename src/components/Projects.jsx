import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import hera1 from '../assets/hera/1000092736.webp'
import hera2 from '../assets/hera/1000092737.webp'
import hera3 from '../assets/hera/1000092756.webp'
import hera4 from '../assets/hera/1000092757.webp'
import hera5 from '../assets/hera/Ekran Resmi 2026-05-25 13.55.23.webp'
import hera6 from '../assets/hera/Ekran Resmi 2026-05-25 13.56.56.webp'
import githubLogo from '../assets/GitHub-Logo.wine.svg'
import signaturkRef from '../assets/Signaturk/reference.webp'

import signaturkPdf from '../assets/Signaturk/SignaTurk Al-Powered Real-Time Bidirectional Translation Between Turkish Sign Language and Turkish.pdf'


const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const SI  = 'https://cdn.simpleicons.org'

const techIcons = {
  'Python':           `${DEV}/python/python-original.svg`,
  'TensorFlow':       `${DEV}/tensorflow/tensorflow-original.svg`,
  'PyQt6':            `${SI}/qt/41cd52`,
  'Unreal Engine':    `${SI}/unrealengine/ffffff`,

  'React.js':         `${DEV}/react/react-original.svg`,
  'JavaScript':       `${DEV}/javascript/javascript-original.svg`,
  'Tailwind CSS':     `${DEV}/tailwindcss/tailwindcss-original.svg`,
  'HTML':             `${DEV}/html5/html5-original.svg`,
  'CSS':              `${DEV}/css3/css3-original.svg`,
  'TypeScript':       `${DEV}/typescript/typescript-original.svg`,
  'Next.js':          `${DEV}/nextjs/nextjs-original.svg`,
  'MediaPipe':        `${SI}/mediapipe/4285f4`,
}

const projects = [
  {
    title: 'HERA',
    description: "Co-developed a full-stack standalone application for ALKÜ Tazelenme University to digitize and manage elderly students' academic and health records. Implemented core functionalities including database architecture, UI/UX design, and seamless integration between frontend and backend systems. Presented the final product to the University Rector and Board of Directors.",
    tag: 'Software Development',
    tech: ['Python', 'PyQt6', 'Microsoft Access'],
    github: null,
    live: null,
    images: [hera1, hera2, hera3, hera4, hera5, hera6],
  },
  {
    title: 'Graduation Project : SignaTurk',
    description: 'SignaTurk aims to eliminate communication barriers between hearing and hearing-impaired individuals by acting as an AI-powered, real-time, and bidirectional digital translator between Turkish Sign Language (TSL) and Turkish. The first module detects movement in front of the camera, prints it to the screen, and vocalizes it using text-to-speech. The second detects spoken words and plays animations drawn with Unreal Engine Metahuman technology. Trained and evaluated the gesture-recognition pipeline (MediaPipe landmark extraction + BiLSTM word-level classifier) on a hybrid dataset combining public TSL sources with self-collected samples — achieving 99.4% accuracy on the CNN-based (MobileNetV2, fine-tuned) letter-recognition model and 92.1% on the BiLSTM word-level model.',
    tag: 'AI / ML',
    tech: ['Python', 'TensorFlow', 'Unreal Engine', 'BiLSTM', 'MediaPipe'],
    github: null,
    live: null,
    pdf: signaturkPdf,
    videoEmbed: 'https://drive.google.com/file/d/1wGTj6tKoi_xns15EMFpg5A55Ib7-Izx0/preview',
    images: [signaturkRef],
  },
  {
    title: 'Frontend Development Portfolio',
    description: 'Developed a collection of responsive web applications including a Movie Tracking App and a Weather App, focusing on REST API integration and asynchronous data fetching. Built a dynamic Restaurant Page and a Task Management (Todo) System, implementing DOM manipulation, local storage, and complex UI layouts using Tailwind CSS. Focused on writing semantic HTML and clean, modular JavaScript code following modern web standards and accessibility principles. Managed project versions and deployment workflows using Git/GitHub and Netlify/Vercel for continuous integration.',
    tag: 'WEB',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/serhatcamadan',
    live: null,
    images: [githubLogo],
  },
]

function TechList({ techs, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 ${className}`}>
      {techs.map(t => (
        <span key={t} className="flex items-center gap-1.5 font-label-caps text-label-caps text-secondary">
          {techIcons[t] && <img src={techIcons[t]} alt="" className="w-4 h-4 shrink-0" />}
          {t}
        </span>
      ))}
    </div>
  )
}

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

// ── Mini image carousel inside each card ─────────────────────────────────────
function CardCarousel({ images, videoEmbed, onCardClick }) {
  const media = [
    ...(videoEmbed ? [{ type: 'embed', src: videoEmbed }] : []),
    ...images.map(src => ({ type: 'image', src })),
  ]
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)

  const navigate = (e, next) => {
    e.stopPropagation()
    if (fading) return
    setFading(true)
    setTimeout(() => { setIdx(next); setFading(false) }, 180)
  }

  const prev = (e) => navigate(e, (idx - 1 + media.length) % media.length)
  const next = (e) => navigate(e, (idx + 1) % media.length)
  const current = media[idx]

  return (
    <div
      role="button"
      tabIndex={0}
      className="relative aspect-video overflow-hidden border border-outline-variant/30 mb-stack-sm rounded-lg group/card cursor-pointer"
      onClick={onCardClick}
      onKeyDown={(e) => e.key === 'Enter' && onCardClick()}
    >
      {/* Media */}
      {current.type === 'embed' ? (
        <div className={`relative w-full h-full transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
          <iframe
            src={current.src}
            className="w-full h-full pointer-events-none"
            allow="autoplay"
            title="Demo video"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/card:bg-black/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-80 group-hover/card:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[36px]">play_arrow</span>
            </div>
          </div>
        </div>
      ) : (
        <img
          src={current.src}
          alt=""
          loading="lazy"
          width={800}
          height={450}
          className={`w-full h-full object-cover transition-all duration-500 group-hover/card:scale-105 ${
            fading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Arrows — only if multiple items */}
      {media.length > 1 && (
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
      {media.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {media.map((_, i) => (
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
            loading="lazy"
            width={800}
            height={450}
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
        <div className="p-4 sm:p-6 md:p-8">
          {/* Title + links */}
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-primary">{project.title}</h3>
            <div className="flex-1 h-px bg-outline-variant/40" />
            <div className="flex items-center gap-3 shrink-0 text-on-surface-variant">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                   className="hover:text-primary transition-colors">
                  <GitHubIcon />
                </a>
              )}
              {project.pdf && (
                <a href={project.pdf} target="_blank" rel="noopener noreferrer"
                   className="hover:text-primary transition-colors" title="View PDF">
                  <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
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
          <TechList techs={project.tech} className="mb-3" />

          {/* Description */}
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">{project.description}</p>

          {/* Demo video — Google Drive embed */}
          {project.videoEmbed && (
            <div className={project.pdf ? 'mb-6' : ''}>
              <span className="font-label-caps text-label-caps text-secondary block mb-2">DEMO VIDEO</span>
              <div className="relative w-full rounded-lg overflow-hidden border border-outline-variant/20" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={project.videoEmbed}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="Demo video"
                />
              </div>
            </div>
          )}

          {/* PDF embed */}
          {project.pdf && (
            <div>
              <span className="font-label-caps text-label-caps text-secondary block mb-2">PROJECT REPORT</span>
              <div className="relative rounded-lg overflow-hidden border border-outline-variant/20 h-64 md:h-120">
                <iframe
                  src={project.pdf}
                  className="w-full h-full"
                  title="Project PDF"
                />
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Open PDF in new tab"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Reusable project card content ─────────────────────────────────────────────
function ProjectCardContent({ project, onLearnMore }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <h3 className="font-headline-sm text-headline-sm text-primary shrink-0">
          {project.title}
        </h3>
        <div className="flex-1 h-px bg-outline-variant/40" />
        <div className="flex items-center gap-2 shrink-0 text-on-surface-variant">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               onClick={(e) => e.stopPropagation()}
               className="hover:text-primary transition-colors">
              <GitHubIcon />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
               onClick={(e) => e.stopPropagation()}
               className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
          )}
        </div>
      </div>
      <TechList techs={project.tech} className="mb-2" />
      <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-3">
        {project.description}
      </p>
      <button
        onClick={onLearnMore}
        className="font-label-caps text-label-caps text-secondary flex items-center gap-1 group hover:gap-2 transition-all"
      >
        Learn more
        <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
          chevron_right
        </span>
      </button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter gap-y-stack-lg">
            {projects.map((project, i) => (
              <div key={project.title} className={i % 2 === 1 ? 'md:mt-stack-lg' : ''}>
                <CardCarousel
                  images={project.images}
                  videoEmbed={project.videoEmbed}
                  onCardClick={() => setModal(project)}
                />
                <div className="mt-3">
                  <ProjectCardContent project={project} onLearnMore={() => setModal(project)} />
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
