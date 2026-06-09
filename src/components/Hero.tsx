import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.05 })
  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className={`inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6 transition-all duration-700 transform ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          🚀 Enterprise AI Infrastructure
        </div>
        
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-700 transform ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
          Power Your AI
          <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent mt-2 animate-gradient">
            With Global GPU Cloud
          </span>
        </h1>
        
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto transition-all duration-700 transform ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          Access 80+ GPU clusters worldwide. Deploy AI workloads at scale with 
          TokenRouter - one API, all models, optimized pricing.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 transform ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
          <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary-500/40 transition-all duration-300 transform hover:scale-105 animate-glow">
            Start Building
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <button className="px-8 py-4 border border-gray-600 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
            View GPU Clusters
          </button>
        </div>

        <div className={`grid grid-cols-3 gap-8 mt-20 transition-all duration-700 transform ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent group-hover:animate-glow">80+</div>
            <div className="text-sm sm:text-base text-gray-400">Global Clusters</div>
          </div>
          <div className="group hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent group-hover:animate-glow">$160M</div>
            <div className="text-sm sm:text-base text-gray-400">Total Funding</div>
          </div>
          <div className="group hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '0.2s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent group-hover:animate-glow">10x</div>
            <div className="text-sm sm:text-base text-gray-400">Revenue Growth</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${sectionVisible ? 'animate-bounce-slow opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
        <svg className="w-6 h-6 text-gray-400 hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
