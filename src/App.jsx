import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resources from './components/Resources'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Resources />
        <Achievements />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
