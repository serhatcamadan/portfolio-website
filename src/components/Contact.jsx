import { useScrollReveal } from '../hooks/useScrollReveal'

const FloatingField = ({ id, label, type = 'text', rows }) => {
  const Tag = rows ? 'textarea' : 'input'
  return (
    <div className="relative group">
      <Tag
        id={id}
        type={type}
        placeholder=" "
        rows={rows}
        className="peer w-full bg-transparent border-b-2 border-outline focus:border-secondary outline-none py-3 font-body-md text-body-md transition-all placeholder-transparent resize-none"
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-on-surface-variant text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  )
}

export default function Contact() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-section-padding-mobile md:py-section-padding-desktop bg-primary text-on-primary transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
        {/* Left */}
        <div className="md:col-span-5">
          <h2 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md mb-stack-md">
            Let's Write a New Story Together.
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-fixed-variant mb-stack-lg">
            Do you have a project or just want to say hello? You can reach me anytime.
          </p>

          <div className="space-y-stack-sm">
            <a
              href="mailto:hello@sinan.design"
              className="flex items-center gap-stack-sm group hover:text-secondary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">mail</span>
              <span className="font-headline-sm text-headline-sm">hello@sinan.design</span>
            </a>

            <div className="flex gap-stack-md mt-stack-md">
              {['LINKEDIN', 'DRIBBBLE', 'BEHANCE'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-label-caps text-label-caps hover:text-secondary-fixed transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-6 md:col-start-7 bg-surface-container-lowest p-stack-md md:p-stack-lg rounded-lg text-on-primary">
          <form className="space-y-stack-md" onSubmit={(e) => e.preventDefault()}>
            <FloatingField id="name" label="Full Name" />
            <FloatingField id="email" label="Email Address" type="email" />
            <FloatingField id="message" label="Your Message" rows={4} />
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded font-button text-button hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all duration-300 active:scale-[0.98]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
