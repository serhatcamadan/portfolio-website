import { useScrollReveal } from '../hooks/useScrollReveal'


export default function Contact() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-section-padding-mobile md:py-section-padding-desktop bg-primary text-on-primary transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '
      }`}
    >
      <div className="max-w-container-max mx-auto px-gutter flex flex-col items-center text-center">
        <h2 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md mb-stack-md max-w-xl">
          Contact
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary-fixed-variant mb-stack-lg max-w-md">
          To get in touch, please contact me.        
          </p>

        <div className="space-y-stack-sm">
          <a
            href="mailto:serhatcamadan@gmail.com"
            className="flex items-center justify-center gap-stack-sm group hover:text-secondary-fixed transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">mail</span>
            <span className="font-headline-sm text-headline-sm">serhatcamadan@gmail.com</span>
          </a>

          <div className="flex justify-center gap-stack-md mt-stack-md">
            {[
              { label: 'LINKEDIN',  href: 'https://linkedin.com/in/serhatcamadan' },
              { label: 'GITHUB',    href: 'https://github.com/serhatcamadan' },
              { label: 'INSTAGRAM', href: 'https://instagram.com/serhatcamadan' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-label-caps text-label-caps hover:text-secondary-fixed transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
