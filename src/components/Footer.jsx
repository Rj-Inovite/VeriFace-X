import './Footer.css'

import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
  Lock,
  ScanFace,
  Cpu,
  ChevronRight,
  // Instagram/Twitter icons removed because they are not exported by lucide-react
  // in this project's lucide-react version.
} from 'lucide-react'

function Footer() {
  return (
    <footer className="footer-section">

      {/* TOP GRADIENT */}
      <div className="footer-top-gradient"></div>

      {/* PARTICLES */}
      <div className="footer-particle one"></div>
      <div className="footer-particle two"></div>
      <div className="footer-particle three"></div>

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-brand">

          {/* LOGO */}
          <div className="footer-logo">
            <ShieldCheck className="footer-logo-icon" />

            <h1>TruthLens AI</h1>
          </div>

          {/* DESCRIPTION */}
          <p className="footer-description">
            TruthLens AI is an advanced AI-powered digital forensic and
            cybersecurity intelligence platform capable of detecting
            manipulated images, deepfakes, GAN artifacts, facial
            modifications, metadata inconsistencies, and AI-generated
            content using enterprise-grade computer vision technologies.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">

            <a href="#">
              <ArrowUpRight size={18} />
            </a>

            {/* Instagram/Twitter icons removed (not available in lucide-react version) */}
            <a href="#">
              <ArrowUpRight size={18} />
            </a>

            <a href="#">
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="footer-links-wrapper">

          {/* PRODUCT */}
          <div className="footer-links">

            <h2>Product</h2>

            <a href="#">
              <ChevronRight size={16} />
              AI Detection
            </a>

            <a href="#">
              <ChevronRight size={16} />
              Deepfake Scanner
            </a>

            <a href="#">
              <ChevronRight size={16} />
              Heatmap Analysis
            </a>

            <a href="#">
              <ChevronRight size={16} />
              PDF Reports
            </a>

            <a href="#">
              <ChevronRight size={16} />
              Security Dashboard
            </a>

          </div>

          {/* TECHNOLOGY */}
          <div className="footer-links">

            <h2>Technology</h2>

            <a href="#">
              <Cpu size={16} />
              Artificial Intelligence
            </a>

            <a href="#">
              <ScanFace size={16} />
              Facial Analysis
            </a>

            <a href="#">
              <Globe size={16} />
              Computer Vision
            </a>

            <a href="#">
              <Lock size={16} />
              Cybersecurity AI
            </a>

            <a href="#">
              <ShieldCheck size={16} />
              Digital Forensics
            </a>

          </div>

          {/* CONTACT */}
          <div className="footer-links">

            <h2>Contact</h2>

            <a href="#">
              <Mail size={16} />
              support@truthlens.ai
            </a>

            <a href="#">
              <Mail size={16} />
              security@truthlens.ai
            </a>

            <a href="#">
              <Phone size={16} />
              +91 9876543210
            </a>

            <a href="#">
              <MapPin size={16} />
              Maharashtra, India
            </a>

          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-bottom-left">
          <p>
            © 2026 TruthLens AI. All Rights Reserved.
          </p>
        </div>

        <div className="footer-bottom-right">

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms & Conditions
          </a>

          <a href="#">
            Security
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer