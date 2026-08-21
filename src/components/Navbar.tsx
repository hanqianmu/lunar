import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { name: 'Token Factory', href: '#token-factory' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      let current = ''
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.href.slice(1))
        if (el && el.getBoundingClientRect().top <= 160) {
          current = link.href
        }
      }
      setActiveHref(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out-quart ${
        isScrolled
          ? 'border-white/10 bg-space-dark/85 shadow-[0_8px_30px_-12px_rgba(2,6,23,0.8)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5 rounded-full">
            <img
              src="ec-tensor-logo.png"
              alt="EC Tensor"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 bottom-0.5 h-px rounded-full bg-gradient-to-r from-primary-400 to-violet-400 transition-all duration-300 ease-out-quart ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </a>
              )
            })}
            <button className="btn btn-primary ml-3 px-4 py-2 text-sm">
              Request Access
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="md:hidden rounded-lg p-2 text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden animate-fade-down border-t border-white/5 bg-space-dark/90 backdrop-blur-xl">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block rounded-lg px-4 py-2.5 text-base font-medium transition-colors duration-200 ${
                    isActive ? 'bg-primary-500/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            })}
            <button className="btn btn-primary w-full mt-3 px-4 py-2.5 text-sm">
              Request Access
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
