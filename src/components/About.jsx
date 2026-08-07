import { useScrollReveal } from '../hooks/useScrollReveal'
import fotoSrc from '../assets/foto.webp'

const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const SI = 'https://cdn.simpleicons.org'

const skills = [
  { name: 'HTML',         icon: `${DEV}/html5/html5-original.svg` },
  { name: 'CSS',          icon: `${DEV}/css3/css3-original.svg` },
  { name: 'JavaScript',   icon: `${DEV}/javascript/javascript-original.svg` },
  { name: 'TypeScript',   icon: `${DEV}/typescript/typescript-original.svg` },
  { name: 'React.js',     icon: `${DEV}/react/react-original.svg` },
  { name: 'Next.js',      icon: `${DEV}/nextjs/nextjs-original.svg` },
  { name: 'TailwindCSS',  icon: `${DEV}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Zustand',      icon: `${DEV}/zustand/zustand-original.svg` },
  { name: 'shadcn/ui',    icon: `${SI}/shadcnui/ffffff` },
  { name: 'Radix UI',     icon: `${SI}/radixui/ffffff` },
  { name: 'Zod',          icon: `${SI}/zod/ffffff` },
  { name: 'Python',       icon: `${DEV}/python/python-original.svg` },
  { name: 'TensorFlow',   icon: `${DEV}/tensorflow/tensorflow-original.svg` },
  { name: 'Git',          icon: `${DEV}/git/git-original.svg` },
  { name: 'PostgreSQL',   icon: `${DEV}/postgresql/postgresql-original.svg` },
]

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="about"
      className={`py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto border-t border-outline-variant/20 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center">
        {/* Photo */}
        <div className="md:col-span-5 relative group">
          <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden border border-outline-variant/30 rounded-lg">
            <img
              alt="Serhat Camadan"
              loading="lazy"
              width={600}
              height={750}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src={fotoSrc}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-container rounded-full -z-10 opacity-50 blur-2xl hidden sm:block" />
        </div>

        {/* Content */}
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-md">
            About Me
          </h2>

          <div className="space-y-stack-sm font-body-md text-body-md text-on-surface-variant">
            <p>
              I'm Serhat, a Frontend Developer and Computer Engineering graduate
              from Alanya Alaaddin Keykubat University (June 2026). I build
              modern, type-safe web applications with React, Next.js, and TypeScript.
            </p>
            <p>
              Alongside web development, I co-developed SignaTurk — a real-time
              bidirectional Turkish Sign Language recognition system — using deep
              learning and image processing as my graduation project.
            </p>
          </div>

          <div className="mt-stack-lg">
            <div>
              <span className="font-label-caps text-label-caps text-secondary block mb-2">
                USE AT WORK
              </span>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-body-md text-body-md text-on-surface">
                {skills.map(({ name, icon }) => (
                  <li key={name} className="flex items-center gap-2">
                    {icon
                      ? <img src={icon} alt="" className="w-5 h-5 shrink-0" />
                      : <span className="w-5 h-5 shrink-0 flex items-center justify-center text-secondary text-[10px]">◆</span>
                    }
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
