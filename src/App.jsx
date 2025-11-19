import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import PropertiesPage from './pages/PropertiesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

