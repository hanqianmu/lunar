import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Footer = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const footerLinks = [
    {
      title: 'Products',
      links: ['TokenRouter', 'Token Factory', 'GPU Clusters', 'Dot-1.1 Agent'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Status', 'Blog'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Security'],
    },
  ]

  const socialLinks = [
    { name: 'Twitter', icon: '🐦' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Discord', icon: '💬' },
  ]

  return (
    <footer ref={sectionRef} className="py-12 px-4 sm:px-6 bg-space-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <span className="text-white text-xl font-semibold">Lunar</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              The first AI Cloud Agent platform. Connecting AI cloud resource suppliers 
              and customers globally.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-space-light hover:bg-primary-500/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className={`transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${(index + 4) * 100}ms` }}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 inline-block text-sm group">
                      <span className="group-hover:animate-shimmer">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-gray-400 text-sm">
            © 2026 Lunar. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-105 inline-block text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-105 inline-block text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-105 inline-block text-sm">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
