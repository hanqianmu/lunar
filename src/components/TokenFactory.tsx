import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TokenFactory = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="token-factory" ref={sectionRef} className="py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-space-dark via-space-medium to-space-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 lg:mb-20 reveal ${sectionVisible ? 'is-visible' : ''}`}>
          <div className="badge mb-8">
            Token Factory
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
            <span className="bg-gradient-to-r from-primary-300 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient">Token Factory</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our inference engine streams tokens in real time across every supported model.
            Route any model, pay per token, and scale output from prototype to production.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className={`card card-hover group p-8 reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '150ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 ring-1 ring-white/10 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <svg className="w-7 h-7 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-3 transition-colors duration-300 group-hover:text-cyan-300">Massive Throughput</h3>
            <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Stream tokens in real time. High-concurrency inference pipelines keep latency low even under peak load.</p>
          </div>

          <div className={`card card-hover group p-8 reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '270ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 ring-1 ring-white/10 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-3 transition-colors duration-300 group-hover:text-blue-300">Transparent Pricing</h3>
            <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Pay per token with real-time costs per model. Optimize spend by routing each request to the best-priced option.</p>
          </div>

          <div className={`card card-hover group p-8 reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '390ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 to-violet-600/20 ring-1 ring-white/10 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <svg className="w-7 h-7 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-3 transition-colors duration-300 group-hover:text-violet-300">Managed Inference</h3>
            <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">We handle routing, upgrades, and scaling. Your inference stays fast and available 24/7.</p>
          </div>
        </div>

        {/* Inference Capabilities */}
        <div className={`card rounded-3xl p-8 sm:p-12 mb-16 lg:mb-20 reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '200ms' }}>
          <h3 className="text-3xl font-bold tracking-tight text-white mb-10 text-center">
            <span className="bg-gradient-to-r from-primary-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Inference Capabilities</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-xs font-semibold mb-5 uppercase tracking-[0.18em] text-primary-300/90 flex items-center">
                <span className="w-8 h-px bg-gradient-to-r from-primary-400/80 to-transparent mr-3"></span>
                Text Generation
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Chat &amp; Completion
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Code Generation
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Translation
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold mb-5 uppercase tracking-[0.18em] text-primary-300/90 flex items-center">
                <span className="w-8 h-px bg-gradient-to-r from-primary-400/80 to-transparent mr-3"></span>
                Multimodal
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Vision Input
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Speech-to-Text
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Image Generation
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold mb-5 uppercase tracking-[0.18em] text-primary-300/90 flex items-center">
                <span className="w-8 h-px bg-gradient-to-r from-primary-400/80 to-transparent mr-3"></span>
                Advanced
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Long Context
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fine-tuned Models
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Batch Processing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16 lg:mb-20">
          <h3 className={`text-3xl font-bold tracking-tight text-white mb-10 text-center reveal ${sectionVisible ? 'is-visible' : ''}`}>
            <span className="bg-gradient-to-r from-primary-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Use Cases</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`card card-hover group p-8 bg-gradient-to-br from-primary-500/15 to-primary-600/5 border-primary-400/20 hover:border-primary-400/50 reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '150ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 ring-1 ring-white/10 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110">
                <svg className="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight text-white mb-3 transition-colors duration-300 group-hover:text-primary-300">Conversational AI</h4>
              <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Power chatbots, virtual assistants, and support agents with reliable, low-latency token streaming.</p>
            </div>

            <div className={`card card-hover group p-8 bg-gradient-to-br from-primary-500/15 to-primary-600/5 border-primary-400/20 hover:border-primary-400/50 reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '270ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 ring-1 ring-white/10 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110">
                <svg className="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight text-white mb-3 transition-colors duration-300 group-hover:text-primary-300">Code &amp; Copilots</h4>
              <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Generate, complete, and review code in real time with models tuned for developer workflows.</p>
            </div>

            <div className={`card card-hover group p-8 bg-gradient-to-br from-primary-500/15 to-primary-600/5 border-primary-400/20 hover:border-primary-400/50 sm:col-span-2 lg:col-span-1 reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '390ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 ring-1 ring-white/10 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110">
                <svg className="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight text-white mb-3 transition-colors duration-300 group-hover:text-primary-300">Enterprise Agents</h4>
              <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Build knowledge retrieval and RAG pipelines over your own data with governed, auditable output.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center reveal ${sectionVisible ? 'is-visible' : ''}`} style={{ animationDelay: '300ms' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary px-8 py-4 text-lg">
              Start Streaming Tokens
            </button>
            <button className="btn btn-ghost px-8 py-4 text-lg">
              See How It Works
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Built on EC Tensor's inference network — streaming tokens in real time
          </p>
        </div>
      </div>
    </section>
  )
}

export default TokenFactory
