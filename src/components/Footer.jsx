export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/30 py-stack-lg">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-base">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
          PORTFOLIO
        </span>
        <p className="font-body-md text-body-md text-on-surface-variant">
          © 2024 Kinetic Minimalist. All rights reserved.
        </p>
        <div className="flex gap-stack-md">
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
