import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Models from './components/Models'
import TokenFactory from './components/TokenFactory'
import About from './components/About'
import Features from './components/Features'

import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-space-dark overflow-x-hidden relative">
      <div className="stars"></div>
      <div className="stars-2"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Models />
        <TokenFactory />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
