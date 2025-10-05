
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Bio from './pages/Bio'
import Iletisim from './pages/iletisim'
import './app.css'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="section-container">
          <Home />
        </section>
        <section id="projects" className="section-container">
          <Projects />
        </section>
        <section id="bio" className="section-container">
          <Bio />
        </section>
        <section id="iletisim" className="section-container">
          <Iletisim />
        </section>
      </main>
    </>
  )
}