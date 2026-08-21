import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Models = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })

  const models = [
{ name: 'OpenAI', logo: 'logos/openai.png' },
   { name: 'Anthropic', logo: 'logos/anthropic.png' },
   { name: 'NVIDIA', logo: 'logos/nvidia.png' },
   { name: 'Google', logo: 'logos/google.png' },
   { name: 'Moonshot AI', logo: 'logos/moonshot.svg' },
   { name: 'MiniMax', logo: 'logos/minimax.svg' },
   { name: 'Qwen', logo: 'logos/qwen.svg' },
   { name: 'DeepSeek', logo: 'logos/deepseek.svg' },
   { name: 'Zhipu AI', logo: 'logos/zhipu.png' },
  ]

  const chipClasses =
    'flex-shrink-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/40 hover:bg-white/[0.08]'
  const logoTileClasses =
    'w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-xl p-1.5 shadow-lg'

  return (
    <section ref={sectionRef} className="py-20 md:py-24 px-4 sm:px-6 bg-space-dark relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 reveal ${sectionVisible ? 'is-visible' : ''}`}>
          <div className="badge mb-6">
            Supported Models
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent animate-gradient">
            One API, Every Model
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Route to any frontier model through one unified endpoint — optimized for cost, speed, and token throughput
          </p>
        </div>

        <div className={`fade-x relative overflow-hidden reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '200ms' }}>
          <div className="flex animate-scroll-left gap-3 py-2">
            {[...models, ...models, ...models, ...models].map((model, index) => (
              <div key={`model-${index}`} className={chipClasses}>
                <div className={logoTileClasses}>
                  <img src={model.logo} alt={`${model.name} logo`} className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-100 font-medium text-sm whitespace-nowrap">{model.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`fade-x relative overflow-hidden mt-3 reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '350ms' }}>
          <div className="flex animate-scroll-right gap-3 py-2">
            {[...models, ...models, ...models, ...models].map((model, index) => (
              <div key={`model-row2-${index}`} className={chipClasses}>
                <div className={logoTileClasses}>
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
