import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Features = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const features = [
    {
      icon: '🌐',
      title: 'TokenRouter API',
      description: 'One API to access all major AI models. Route requests intelligently for optimal cost and performance.',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      icon: '💰',
      title: 'Real-Time Pricing',
      description: 'Daily updated GPU cluster pricing. Find the most cost-effective compute resources instantly.',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: '🔒',
      title: 'Private Deployment',
      description: 'Secure, compliant infrastructure for sensitive workloads. Full control over your AI environment.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: '⚙️',
      title: 'AI Cloud Agent',
      description: 'Dot-1.1 agent analyzes requirements and optimizes GPU deployment plans for your needs.',
      gradient: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="py-32 px-4 sm:px-6 bg-gradient-to-b from-space-dark to-space-medium relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full text-primary-300 text-sm font-semibold mb-8 border border-primary-500/30 animate-glow">
            Platform Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">Why Choose TokenRouter</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Enterprise-grade <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">AI infrastructure</span> with <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">intelligent routing</span> and <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">optimized pricing</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-space-light/30 to-space-light/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/10 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 filter drop-shadow-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
