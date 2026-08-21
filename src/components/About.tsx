import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const stats = [
    {
      iconPath:
        'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
      title: 'Unified API',
      description: 'One endpoint to access every major frontier AI model',
      tileGradient: 'from-primary-500/30 to-primary-600/20',
      iconColor: 'text-primary-300',
    },
    {
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Token Factory',
      description: 'Stream inference tokens with transparent per-token pricing',
      tileGradient: 'from-blue-500/30 to-blue-600/20',
      iconColor: 'text-blue-300',
    },
    {
      iconPath:
        'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      title: 'AI Cloud Agent',
      description: 'Dot-1.1 analyzes requirements and optimizes your deployments',
      tileGradient: 'from-violet-500/30 to-violet-600/20',
      iconColor: 'text-violet-300',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-space-medium via-space-dark to-space-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 lg:mb-20 reveal ${sectionVisible ? 'is-visible' : ''}`}>
          <div className="badge mb-8">
            About EC Tensor
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            <span className="bg-gradient-to-r from-primary-300 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient">Powering the AI Revolution</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Based in <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent font-medium">Silicon Valley</span>, we're building the first <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-medium">AI Cloud Agent</span> platform connecting
            AI compute suppliers and customers. We help developers and enterprises scale <span className="bg-gradient-to-r from-primary-300 to-violet-400 bg-clip-text text-transparent font-medium">AI inference</span> efficiently.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card card-hover group text-center p-8 reveal ${sectionVisible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${index * 120 + 150}ms` }}
            >
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${stat.tileGradient} ring-1 ring-white/10 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                <svg className={`w-7 h-7 ${stat.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.iconPath} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4 transition-colors duration-300 group-hover:text-primary-300">{stat.title}</h3>
              <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 border border-primary-400/25 bg-gradient-to-br from-primary-500/15 to-primary-600/10 backdrop-blur-sm transition-colors duration-500 hover:border-primary-400/45 reveal ${sectionVisible ? 'is-visible' : ''}`}
          style={{ animationDelay: '300ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-violet-500/10" aria-hidden="true"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
              We believe in looking beyond our horizon
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're building the infrastructure that helps humanity
              push the boundaries of AI and explore new frontiers in intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
