import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.05 })
  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className={`badge mb-6 px-5 py-2 text-sm font-medium normal-case tracking-[0.08em] reveal ${sectionVisible ? 'is-visible' : ''}`}>
          Enterprise AI Inference Infrastructure
        </div>

        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05] reveal ${sectionVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '100ms' }}
        >
          Power Your AI.
          <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent mt-2 animate-gradient">
            At Token Scale.
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto reveal ${sectionVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '200ms' }}
        >
          Route any AI model through one API and stream inference tokens —
          with per-token pricing optimized for cost and speed.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center reveal ${sectionVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '300ms' }}
        >
          <button className="btn btn-primary group px-8 py-4 text-lg">
            Start Building
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <button className="btn btn-ghost px-8 py-4 text-lg">
            Explore the Platform
          </button>
        </div>

        <div
          className={`grid grid-cols-3 gap-8 mt-20 reveal ${sectionVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '450ms' }}
        >
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent transition duration-300 group-hover:brightness-125">1 API</div>
            <div className="text-sm sm:text-base text-gray-400">All AI Models</div>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition duration-300 group-hover:brightness-125">Per Token</div>
            <div className="text-sm sm:text-base text-gray-400">Transparent Pricing</div>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent transition duration-300 group-hover:brightness-125">Scale</div>
            <div className="text-sm sm:text-base text-gray-400">Token Throughput</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${sectionVisible ? 'animate-bounce-slow opacity-100' : 'opacity-0'}`}
      >
        <svg className="w-6 h-6 text-gray-500 hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
