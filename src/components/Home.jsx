import React, { useEffect, useState } from 'react';
import './Home.css';
import {
  Shield,
  ScanFace,
  Brain,
  FileWarning,
  Lock,
  Eye,
  Upload,
  Sparkles,
  Activity,
  Cpu,
  Database,
  Radar,
  FileText,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Layers3,
  Binary,
  Globe,
  ChevronRight,
  PlayCircle,
  ArrowRight,
  Star,
  MonitorSmartphone,
  Network,
  Bot,
  Search,
  Fingerprint,
  BellRing,
  Users,
  Clock3,
  Download,
  Zap,
  ImageIcon,
  Workflow,
  ShieldCheck,
  Sparkle,
  Flame,
  Menu,
  X,
} from 'lucide-react';

const features = [
  {
    icon: <ScanFace size={40} />,
    title: 'AI Facial Scan',
    desc: 'Detect facial manipulation, smile reconstruction, skin smoothing, eye modifications, and AI beauty filter traces using advanced landmark analysis.',
  },
  {
    icon: <Brain size={40} />,
    title: 'Deepfake Intelligence',
    desc: 'Analyze GAN-generated inconsistencies and neural reconstruction artifacts using deep learning models.',
  },
  {
    icon: <Shield size={40} />,
    title: 'Cybersecurity Grade Verification',
    desc: 'Enterprise-level digital forensic security engine for validating authenticity and manipulation risks.',
  },
  {
    icon: <Radar size={40} />,
    title: 'Heatmap Detection',
    desc: 'Visualize edited regions with forensic heatmaps and suspicious pixel-level overlays.',
  },
  {
    icon: <Database size={40} />,
    title: 'Metadata Analysis',
    desc: 'Verify metadata consistency, software traces, timestamps, and hidden editing patterns.',
  },
  {
    icon: <Lock size={40} />,
    title: 'Secure AI Reports',
    desc: 'Generate downloadable forensic PDF reports with confidence score and AI risk analysis.',
  },
];

const technologies = [
  'React.js',
  'Tailwind CSS',
  'Framer Motion',
  'Python',
  'Django',
  'TensorFlow',
  'PyTorch',
  'OpenCV',
  'Dlib',
  'PostgreSQL',
  'Computer Vision',
  'Cybersecurity AI',
];

const stats = [
  { value: '1M+', label: 'Images Scanned' },
  { value: '98%', label: 'Detection Accuracy' },
  { value: '250K+', label: 'Reports Generated' },
  { value: '24/7', label: 'AI Monitoring' },
];

const testimonials = [
  {
    name: 'Sophia Carter',
    role: 'Cybersecurity Analyst',
    quote:
      'TruthLens AI transformed our digital forensic investigation workflow with accurate AI manipulation detection.',
  },
  {
    name: 'Daniel Brooks',
    role: 'AI Research Engineer',
    quote:
      'The forensic heatmap and GAN detection engine are incredibly powerful and visually impressive.',
  },
  {
    name: 'Ava Martinez',
    role: 'Media Verification Expert',
    quote:
      'One of the most futuristic and professional AI forensic platforms I have seen.',
  },
];

function FloatingParticle({ delay }) {
  return <div className="particle" style={{ animationDelay: `${delay}s` }}></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    let interval;

    if (scanning) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }

    return () => clearInterval(interval);
  }, [scanning]);

  return (
    <div className="home-wrapper">
      <div className="bg-gradient one"></div>
      <div className="bg-gradient two"></div>
      <div className="bg-gradient three"></div>

      {Array.from({ length: 30 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} />
      ))}

      <nav className="navbar">
        <div className="logo">
          <ShieldCheck className="logo-icon" />
          TruthLens AI
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#technology">Technology</a>
          <a href="#scanner">Scanner</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="detect-btn">Start Detection</button>
        </div>

        <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </div>
      </nav>

      <section className="hero-section" id="hero">
        <div className="hero-left">
          <div className="tag-badge">
            <Sparkles size={18} /> AI Forensic Intelligence Platform
          </div>

          <h1>
            Detect AI Manipulated Images With Advanced Digital Forensics
          </h1>

          <p>
            TruthLens AI combines deep learning, facial landmark analysis,
            GAN artifact detection, metadata verification, and cybersecurity
            intelligence to identify manipulated, forged, or AI-generated
            images with high forensic accuracy.
          </p>

          <div className="hero-tags">
            <span>Deepfake Detection</span>
            <span>Smile Analysis</span>
            <span>GAN Detection</span>
            <span>Metadata Intelligence</span>
            <span>Heatmap Verification</span>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">
              <Upload size={18} /> Upload Image
            </button>

            <button className="secondary-btn">
              <PlayCircle size={18} /> Watch Demo
            </button>
          </div>

          <div className="hero-users">
            <div className="user-stack">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <p>Trusted by cybersecurity researchers worldwide</p>
          </div>
        </div>

        <div className="hero-right">
          <div className="scanner-card">
            <div className="scanner-header">
              <div className="scanner-dot red"></div>
              <div className="scanner-dot yellow"></div>
              <div className="scanner-dot green"></div>
            </div>

            <div className="face-container">
              <div className="face-circle"></div>
              <div className="scan-line"></div>
              <div className="radar"></div>
              <div className="radar small"></div>

              <div className="landmark one"></div>
              <div className="landmark two"></div>
              <div className="landmark three"></div>
              <div className="landmark four"></div>
              <div className="landmark five"></div>
              <div className="landmark six"></div>

              <div className="analysis-box box1">GAN Artifact</div>
              <div className="analysis-box box2">Smile Detection</div>
              <div className="analysis-box box3">AI Confidence 97%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        {stats.map((item, index) => (
          <div className="stats-card" key={index}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="features-section" id="features">
        <div className="section-title">
          <span>Features</span>
          <h2>Advanced AI Forensic Capabilities</h2>
          <p>
            Enterprise-grade image verification platform powered by AI,
            computer vision, and cybersecurity intelligence.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <button>
                Learn More <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="section-title">
          <span>Workflow</span>
          <h2>How TruthLens AI Works</h2>
        </div>

        <div className="workflow-grid">
          <div className="workflow-card">
            <Upload />
            <h3>Upload Image</h3>
            <p>
              Upload any image from your device using our secure drag-and-drop
              forensic upload system.
            </p>
          </div>

          <div className="workflow-card">
            <Cpu />
            <h3>AI Processing</h3>
            <p>
              AI engine scans facial landmarks, metadata inconsistencies,
              GAN traces, and compression artifacts.
            </p>
          </div>

          <div className="workflow-card">
            <Radar />
            <h3>Heatmap Analysis</h3>
            <p>
              Manipulated regions are highlighted with intelligent heatmap
              overlays and forensic scan layers.
            </p>
          </div>

          <div className="workflow-card">
            <FileText />
            <h3>Generate Report</h3>
            <p>
              Receive downloadable forensic intelligence report with AI
              confidence percentages and analysis details.
            </p>
          </div>
        </div>
      </section>

      <section className="technology-section" id="technology">
        <div className="section-title">
          <span>Technology Stack</span>
          <h2>Powered By Advanced AI Technologies</h2>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-card" key={index}>
              <Binary />
              <h4>{tech}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="scanner-section" id="scanner">
        <div className="scanner-left">
          <div className="upload-card">
            <Upload className="upload-icon" />
            <h2>Upload Your Image</h2>
            <p>
              Drag and drop image here or browse your files to begin forensic
              AI analysis.
            </p>

            <div className="upload-box">
              <ImageIcon size={60} />
              <p>Drag & Drop Image</p>
              <span>Supports JPG, PNG, WEBP</span>
            </div>

            <button
              className="scan-btn"
              onClick={() => {
                setScanning(true);
                setProgress(0);
              }}
            >
              Start AI Detection
            </button>
          </div>
        </div>

        <div className="scanner-right">
          <div className="preview-card">
            <div className="preview-header">
              <div>
                <h3>Live AI Analysis</h3>
                <p>Real-time deepfake and manipulation detection</p>
              </div>
              <Activity className="pulse-icon" />
            </div>

            <div className="preview-image">
              <div className="preview-scan-line"></div>
              <div className="heatmap-overlay"></div>
            </div>

            <div className="analysis-metrics">
              <div className="metric">
                <span>AI Confidence</span>
                <strong>97%</strong>
              </div>
              <div className="metric">
                <span>Deepfake Risk</span>
                <strong>Low</strong>
              </div>
              <div className="metric">
                <span>Metadata Match</span>
                <strong>Verified</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {scanning && (
        <div className="scan-overlay">
          <div className="scan-box">
            <div className="loader-ring"></div>
            <h2>Scanning Image...</h2>
            <p>Analyzing facial landmarks and AI artifacts</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="scan-status">
              <span>GAN Artifact Detection</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      )}

      <section className="results-section" id="results">
        <div className="section-title">
          <span>Results Dashboard</span>
          <h2>Forensic Intelligence Report</h2>
        </div>

        <div className="results-grid">
          <div className="score-card">
            <div className="score-ring">
              <div className="score-inner">
                <h1>87%</h1>
                <p>AI Manipulated</p>
              </div>
            </div>
          </div>

          <div className="heatmap-card">
            <div className="heatmap-preview">
              <div className="hotspot one"></div>
              <div className="hotspot two"></div>
              <div className="hotspot three"></div>
            </div>
          </div>
        </div>

        <div className="analysis-cards">
          <div className="analysis-card">
            <Smile className="analysis-icon" />
            <h3>Smile Manipulation Detected</h3>
            <p>
              AI-assisted smile reconstruction artifacts found in lower facial
              geometry.
            </p>
          </div>

          <div className="analysis-card">
            <Eye className="analysis-icon" />
            <h3>Eye Symmetry Altered</h3>
            <p>
              Pixel inconsistencies and symmetry imbalance identified during
              forensic scan.
            </p>
          </div>

          <div className="analysis-card">
            <Sparkle className="analysis-icon" />
            <h3>Beauty Filter Traces</h3>
            <p>
              Synthetic smoothing and AI skin enhancement indicators detected.
            </p>
          </div>
        </div>
      </section>

      <section className="table-section">
        <div className="table-card">
          <div className="table-header">
            <h2>Technical AI Analysis</h2>
            <button>
              <Download size={16} /> Download Report
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Analysis Type</th>
                <th>Status</th>
                <th>Confidence</th>
                <th>Risk Level</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>GAN Artifact Detection</td>
                <td>
                  <span className="status danger">Detected</span>
                </td>
                <td>97%</td>
                <td>High</td>
              </tr>

              <tr>
                <td>Metadata Verification</td>
                <td>
                  <span className="status success">Verified</span>
                </td>
                <td>91%</td>
                <td>Low</td>
              </tr>

              <tr>
                <td>Facial Reconstruction</td>
                <td>
                  <span className="status warning">Possible</span>
                </td>
                <td>78%</td>
                <td>Medium</td>
              </tr>

              <tr>
                <td>Compression Artifacts</td>
                <td>
                  <span className="status success">Normal</span>
                </td>
                <td>89%</td>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-title">
          <span>Testimonials</span>
          <h2>Trusted By Researchers</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                <Star fill="gold" />
                <Star fill="gold" />
                <Star fill="gold" />
                <Star fill="gold" />
                <Star fill="gold" />
              </div>
              <p>{item.quote}</p>
              <div className="testimonial-user">
                <div className="avatar"></div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div>
            <span>Start AI Detection</span>
            <h2>Upload Your Image And Verify Authenticity</h2>
          </div>

          <button>
            Begin Scan <ArrowRight />
          </button>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div>
            <div className="logo footer-logo">
              <ShieldCheck className="logo-icon" /> TruthLens AI
            </div>
            <p>
              Advanced AI-powered digital forensic intelligence platform for
              deepfake and image manipulation detection.
            </p>
          </div>

          <div>
            <h4>Product</h4>
            <a href="#">Detection</a>
            <a href="#">Reports</a>
            <a href="#">Security</a>
          </div>

          <div>
            <h4>Technology</h4>
            <a href="#">Deep Learning</a>
            <a href="#">Computer Vision</a>
            <a href="#">Cybersecurity</a>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="#">support@truthlens.ai</a>
            <a href="#">security@truthlens.ai</a>
            <a href="#">+91 9876543210</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TruthLens AI. Powered By AI & Digital Forensics.</p>
        </div>
      </footer>
    </div>
  );
}