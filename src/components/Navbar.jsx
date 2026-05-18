import { useState, useEffect } from "react";
import "./Navbar.css";
import { ShieldCheck } from "lucide-react"; // Swapped to a security shield icon to fit TruthLens

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left-aligned Logo */}
      <div className="navbar-logo">
        <ShieldCheck className="logo-icon" />
        <span className="logo-text">TruthLens <span className="logo-accent">AI</span></span>
      </div>

      {/* Centered Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" className="nav-item" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#report" className="nav-item" onClick={() => setMenuOpen(false)}>Report</a>
        </li>
      </ul>

      {/* Right Side Action Button & Mobile Burger */}
      <div className="nav-actions">
        <button className="btn start">Explore</button>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;