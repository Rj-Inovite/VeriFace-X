import './App.css'

/* COMPONENTS */
import './components/Report'
import Navbar from './components/Navbar'
import Home from './components/Home.jsx'
import Footer from './components/Footer'


function App() {
  return (
    <div className="app">

      {/* =========================
          ANIMATED BACKGROUND
      ========================== */}
      <div className="background-wrapper">

        {/* GRADIENT BLOBS */}
        <div className="bg-blob blue"></div>
        <div className="bg-blob purple"></div>
        <div className="bg-blob pink"></div>

        {/* FLOATING PARTICLES */}
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
        <div className="particle p5"></div>

      </div>

      {/* =========================
          NAVBAR
      ========================== */}
      <Navbar />

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main className="main-content">

        {/* HERO / HOME SECTION */}
        <Home />

      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />

    </div>
  )
}

export default App