
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Bio from './pages/Bio'
import './app.css'

export default function App() {
  return (
    <>
      {/* Navbar hala en üstte sabit kalacak */}
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
      </main>
    </>
  )
}