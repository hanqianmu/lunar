import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Team = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', initials: 'AC' },
    { name: 'Sarah Park', role: 'CTO', initials: 'SP' },
    { name: 'Marcus Johnson', role: 'Head of Design', initials: 'MJ' },
    { name: 'Emily Rodriguez', role: 'Lead Engineer', initials: 'ER' },
  ]

  return (
    <section id="team" ref={sectionRef} className="py-32 px-4 sm:px-6 bg-gradient-to-b from-space-dark via-space-medium to-space-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full text-primary-300 text-sm font-semibold mb-8 animate-glow border border-primary-500/30">
            Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Meet the Minds Behind Lunar</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            A diverse group of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">thinkers</span>, <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">builders</span>, and <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">dreamers</span> working together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className={`text-center group transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 p-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-500/50">
                  <div className="w-full h-full rounded-full bg-space-dark flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl font-bold text-white group-hover:animate-pulse">{member.initials}</span>
                  </div>
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-primary-500/20 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">{member.name}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
