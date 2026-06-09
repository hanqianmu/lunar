import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Models = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })

  const models = [
    { name: 'OpenAI', logo: '/logos/openai.png' },
    { name: 'Anthropic', logo: '/logos/anthropic.png' },
    { name: 'NVIDIA', logo: '/logos/nvidia.png' },
    { name: 'Google', logo: '/logos/google.png' },
    { name: 'Moonshot AI', logo: '/logos/moonshot.svg' },
    { name: 'MiniMax', logo: '/logos/minimax.svg' },
    { name: 'Qwen', logo: '/logos/qwen.svg' },
    { name: 'DeepSeek', logo: '/logos/deepseek.svg' },
    { name: 'Zhipu AI', logo: '/logos/zhipu.png' },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 bg-space-dark relative overflow-hidden border-b border-gray-800/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6 animate-glow">
            🎯 Supported Models
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent animate-gradient">
            One API, All Models
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Access every major AI model through a single unified API endpoint
          </p>
        </div>

        <div className={`relative overflow-hidden transition-all duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="flex animate-scroll-left gap-3 py-3">
            {[...models, ...models, ...models, ...models].map((model, index) => (
              <div
                key={`model-${index}`}
                className="flex-shrink-0 flex items-center gap-3 rounded-2xl border border-gray-600 bg-gray-800/80 backdrop-blur-sm px-5 py-2.5 hover:border-primary-500/50 hover:bg-gray-700/80 transition-all duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-xl p-1.5 shadow-lg">
                  <img src={model.logo} alt={`${model.name} logo`} className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-100 font-medium text-sm whitespace-nowrap">{model.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`relative overflow-hidden mt-3 transition-all duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <div className="flex animate-scroll-right gap-3 py-3">
            {[...models, ...models, ...models, ...models].map((model, index) => (
              <div
                key={`model-row2-${index}`}
                className="flex-shrink-0 flex items-center gap-3 rounded-2xl border border-gray-600 bg-gray-800/80 backdrop-blur-sm px-5 py-2.5 hover:border-primary-500/50 hover:bg-gray-700/80 transition-all duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-xl p-1.5 shadow-lg">
                  <img src={model.logo} alt={`${model.name} logo`} className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-100 font-medium text-sm whitespace-nowrap">{model.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Models
