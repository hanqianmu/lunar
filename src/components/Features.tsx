import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Features = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const features = [
    {
      iconPath:
        'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      title: 'TokenRouter API',
      description: 'One API to access every major AI model. Intelligent routing balances cost, speed, and throughput.',
      gradient: 'from-primary-500 to-primary-600',
      tileGradient: 'from-primary-500/30 to-primary-600/20',
      iconColor: 'text-primary-300',
    },
    {
      iconPath:
        'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: 'Real-Time Pricing',
      description: 'Live per-token pricing across models. Find the most cost-effective option for every workload.',
      gradient: 'from-cyan-500 to-cyan-600',
      tileGradient: 'from-cyan-500/30 to-cyan-600/20',
      iconColor: 'text-cyan-300',
    },
    {
      iconPath:
        'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Private Deployment',
      description: 'Secure, compliant infrastructure for sensitive workloads. Full control over your AI environment.',
      gradient: 'from-blue-500 to-blue-600',
      tileGradient: 'from-blue-500/30 to-blue-600/20',
      iconColor: 'text-blue-300',
    },
    {
      iconPath:
        'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      title: 'AI Cloud Agent',
      description: 'Dot-1.1 agent analyzes requirements and optimizes model routing for your needs.',
      gradient: 'from-violet-500 to-violet-600',
      tileGradient: 'from-violet-500/30 to-violet-600/20',
      iconColor: 'text-violet-300',
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-space-dark to-space-medium relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 lg:mb-20 reveal ${sectionVisible ? 'is-visible' : ''}`}>
          <div className="badge mb-8">
            Platform Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            <span className="bg-gradient-to-r from-primary-300 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient">Why Choose TokenRouter</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade <span className="bg-gradient-to-r from-cyan-300 to-primary-400 bg-clip-text text-transparent font-medium">AI infrastructure</span> with <span className="bg-gradient-to-r from-primary-300 to-blue-400 bg-clip-text text-transparent font-medium">intelligent routing</span> and <span className="bg-gradient-to-r from-blue-300 to-violet-400 bg-clip-text text-transparent font-medium">optimized token pricing</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card card-hover group p-8 reveal ${sectionVisible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${index * 120 + 150}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.tileGradient} ring-1 ring-white/10 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <svg className={`w-7 h-7 ${feature.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-4 transition-colors duration-300 group-hover:text-primary-300">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
