import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const stats = [
    {
      icon: '🏢',
      title: 'Series B Funded',
      description: '$160M raised to build the future of AI infrastructure',
    },
    {
      icon: '🌍',
      title: 'Global Network',
      description: '80+ GPU clusters worldwide for low-latency access',
    },
    {
      icon: '📈',
      title: '10x Growth',
      description: 'Rapid revenue growth as enterprises scale AI workloads',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-32 px-4 sm:px-6 bg-gradient-to-b from-space-medium via-space-dark to-space-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full text-primary-300 text-sm font-semibold mb-8 animate-glow border border-primary-500/30">
            About Lunar
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">Powering the AI Revolution</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Based in <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Silicon Valley</span>, we're the first <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Cloud Agent</span> platform connecting AI cloud 
            resource suppliers and customers. We help developers and enterprises scale <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">AI infrastructure</span> efficiently.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-space-light/30 to-space-light/20 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 hover:from-space-light/40 hover:to-space-light/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/10 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-bounce-slow filter drop-shadow-lg">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">{stat.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className={`relative bg-gradient-to-br from-primary-500/15 to-primary-600/10 rounded-3xl p-8 sm:p-12 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10 backdrop-blur-sm animate-glow transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
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
