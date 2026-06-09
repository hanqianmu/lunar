import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TokenFactory = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="token-factory" ref={sectionRef} className="py-32 px-4 sm:px-6 bg-gradient-to-b from-space-dark via-space-medium to-space-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full text-primary-300 text-sm font-semibold mb-8 border border-primary-500/30 animate-glow">
            🏭 Token Factory
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">Token Factory</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deploy and manage digital assets at scale. 
            Our platform handles minting, governance, and lifecycle - you focus on your ecosystem.
          </p>
        </div>

        {/* Core Features - Platform Capabilities */}
        <div className={`grid sm:grid-cols-3 gap-8 mb-24 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="group bg-gradient-to-br from-space-light/30 to-space-light/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">Instant Deployment</h3>
            <p className="text-gray-400 leading-relaxed">Launch ERC-20, ERC-721, or ERC-1155 tokens in seconds. No smart contract expertise needed - our platform handles deployment.</p>
          </div>

          <div className="group bg-gradient-to-br from-space-light/30 to-space-light/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 transform hover:-translate-y-2 hover:scale-[1.02]" style={{ transitionDelay: '100ms' }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">Built-in Governance</h3>
            <p className="text-gray-400 leading-relaxed">Voting mechanisms, delegation, and treasury management come standard. Your community governs - we provide the infrastructure.</p>
          </div>

          <div className="group bg-gradient-to-br from-space-light/30 to-space-light/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 transform hover:-translate-y-2 hover:scale-[1.02]" style={{ transitionDelay: '200ms' }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/30 to-green-600/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">Managed Infrastructure</h3>
            <p className="text-gray-400 leading-relaxed">We run the nodes, handle upgrades, and ensure 99.9% uptime. Your tokens stay secure and accessible 24/7.</p>
          </div>
        </div>

        {/* Token Standards */}
        <div className={`bg-gradient-to-br from-space-light/40 to-space-light/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700/50 mb-24 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Supported Token Standards</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-primary-400 text-sm font-semibold mb-4 uppercase tracking-wider flex items-center">
                <span className="w-8 h-0.5 bg-primary-500 mr-3"></span>
                Fungible Tokens
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ERC-20 Utility Tokens
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Governance Tokens
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Stablecoins
                </li>
              </ul>
            </div>

            <div>
              <div className="text-primary-400 text-sm font-semibold mb-4 uppercase tracking-wider flex items-center">
                <span className="w-8 h-0.5 bg-primary-500 mr-3"></span>
                Non-Fungible Tokens
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ERC-721 NFTs
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ERC-1155 Multi-Tokens
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Soulbound Tokens
                </li>
              </ul>
            </div>

            <div>
              <div className="text-primary-400 text-sm font-semibold mb-4 uppercase tracking-wider flex items-center">
                <span className="w-8 h-0.5 bg-primary-500 mr-3"></span>
                Advanced Features
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Token Vesting Schedules
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Role-based Permissions
                </li>
                <li className="flex items-center text-gray-300 group">
                  <svg className="w-5 h-5 text-primary-500 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Upgradeable Contracts
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className={`mb-24 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Use Cases</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-500/15 to-primary-600/5 rounded-2xl p-8 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <svg className="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">DeFi Protocols</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Launch governance tokens, liquidity pool tokens, or yield-bearing assets for decentralized finance applications.</p>
            </div>

            <div className="bg-gradient-to-br from-primary-500/15 to-primary-600/5 rounded-2xl p-8 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <svg className="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">Digital Collectibles</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Create NFT collections for art, gaming items, membership passes, or digital identity with metadata management.</p>
            </div>

            <div className="bg-gradient-to-br from-primary-500/15 to-primary-600/5 rounded-2xl p-8 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 sm:col-span-2 lg:col-span-1" style={{ transitionDelay: '200ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <svg className="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">Enterprise Assets</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Tokenize real-world assets, supply chain items, or loyalty points with enterprise-grade compliance and control.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105 hover:from-primary-400 hover:to-primary-500">
              Launch Your Token
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300">
              See How It Works
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Powered by Lunar's global infrastructure - trusted by 500+ projects
          </p>
        </div>
      </div>
    </section>
  )
}

export default TokenFactory
