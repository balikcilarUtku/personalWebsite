import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Bio from './pages/Bio'

export default function App(){
  return (
    <>
      <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
    </>
  )
}

