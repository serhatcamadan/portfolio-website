import { useScrollReveal } from '../hooks/useScrollReveal'
import fotoSrc from '../assets/foto.jpeg'

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
          <div className="aspect-[4/5] overflow-hidden border border-outline-variant/30 rounded-lg">
            <img
              alt="portfolio-photo"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src={fotoSrc}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-container rounded-full -z-10 opacity-50 blur-2xl" />
        </div>

        {/* Content */}
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-md">
            About Me 
          </h2>

          <div className="space-y-stack-sm font-body-md text-body-md text-on-surface-variant">
            <p>
              Hello, my name is Serhat, and I'm a 24 years old 
              computer engineering student in my final year of university.
              I have been developing my skills and working on projects in the 
              field of front-end development for some time now.
            </p>
            <p>
            Aside from front-end development, I previously developed SignaTurk, which is
            a real-time bidirectional Turkish Sign Language recognition system, 
            using image processing as my graduation project.
            </p>
          </div>

          <div className="mt-stack-lg grid grid-cols-2 gap-stack-md">
            <div>
              <span className="font-label-caps text-label-caps text-secondary block mb-2">
                USE AT WORK
              </span>
              <ul className="font-body-md text-body-md text-on-surface space-y-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
