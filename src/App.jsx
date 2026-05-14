import React from 'react'
import './App.css'

/* COMPONENTS */
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">

      {/* BACKGROUND BLOBS */}
      <div className="background-wrapper">

        <div className="bg-blob blue"></div>
        <div className="bg-blob purple"></div>
        <div className="bg-blob pink"></div>

        {/* PARTICLES */}
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
        <div className="particle p5"></div>

      </div>

      {/* WEBSITE CONTENT */}
      <Navbar />

      <main className="main-content">
        <Home />
      </main>

      <Footer />

    </div>
  )
}

export default App