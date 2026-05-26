import { useScrollReveal } from '../hooks/useScrollReveal'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const socials = [
  { label: 'LINKEDIN',  href: 'https://linkedin.com/in/serhatcamadan',  Icon: LinkedInIcon },
  { label: 'GITHUB',    href: 'https://github.com/serhatcamadan',        Icon: GitHubIcon },
  { label: 'INSTAGRAM', href: 'https://instagram.com/serhatcamadan',     Icon: InstagramIcon },
]

export default function Contact() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto border-t border-outline-variant/20 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">

        {/* Left — label + heading */}
        <div className="md:col-span-4">
          <span className="font-label-caps text-label-caps text-secondary mb-base block">
            CONTACT
          </span>
          <h2 className="font-headline-md text-headline-md text-primary sticky top-28">
            Get In Touch
          </h2>
        </div>

        {/* Right — contact details */}
        <div className="md:col-span-8 flex flex-col gap-stack-lg">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Do you have a project or just want to say hello? You can reach me anytime.
          </p>

          <a
            href="mailto:serhatcamadan@gmail.com"
            className="flex items-center gap-stack-sm group w-fit"
          >
            <span className="w-12 h-12 rounded-full bg-surface-variant/30 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-secondary">mail</span>
            </span>
            <div>
              <span className="font-label-caps text-label-caps text-secondary block mb-1">EMAIL</span>
              <span className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                serhatcamadan@gmail.com
              </span>
            </div>
          </a>

          <div>
            <span className="font-label-caps text-label-caps text-secondary block mb-stack-sm">
              SOCIAL
            </span>
            <div className="flex gap-stack-md">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary border border-outline-variant/30 hover:border-primary/40 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
