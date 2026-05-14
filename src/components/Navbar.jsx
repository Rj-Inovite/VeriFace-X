import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <FaHome className="logo-icon" />
        <span className="logo-text">TruthLens AI</span>
      </div>

      {/* Center Home Link */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" className="nav-item">Home</a>
        </li>
      </ul>

      {/* Right Side Actions */}
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
