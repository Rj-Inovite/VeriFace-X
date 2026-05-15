import React, { useEffect, useState, useRef, useMemo } from 'react';
import './Home.css';
import { Radar } from 'lucide-react';

const App = () => {
  return (
    <Radar />
  );
};
export default function Home() {
  // UI State
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');
  const [compareOffset, setCompareOffset] = useState(50);
  
  // Functional State
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [logs, setLogs] = useState([]);


// --- CONFIGURATION & ENHANCED DATA ---
const features = [
  {
    icon: <ScanFace size={40} />,
    title: 'AI Facial Scan',
    desc: 'Detect facial manipulation, smile reconstruction, skin smoothing, and AI beauty filter traces using landmark analysis.',
    color: '#3b82f6'
  },
  {
    icon: <Brain size={40} />,
    title: 'Deepfake Intelligence',
    desc: 'Analyze GAN-generated inconsistencies and neural reconstruction artifacts using deep learning models.',
    color: '#8b5cf6'
  },
  {
    icon: <Shield size={40} />,
    title: 'Forensic Grade Verification',
    desc: 'Enterprise-level digital forensic security engine for validating authenticity and manipulation risks.',
    color: '#06b6d4'
  },
  {
    icon: <Radar size={40} />,
    title: 'Heatmap Detection',
    desc: 'Visualize edited regions with forensic heatmaps and suspicious pixel-level overlays using ELA technology.',
    color: '#ec4899'
  },
  {
    icon: <Database size={40} />,
    title: 'Metadata Analysis',
    desc: 'Verify EXIF consistency, software traces, timestamps, and hidden editing patterns within the binary.',
    color: '#f59e0b'
  },
  {
    icon: <Lock size={40} />,
    title: 'Secure AI Reports',
    desc: 'Generate downloadable forensic PDF reports with confidence scores and cryptographic signatures.',
    color: '#10b981'
  },
];

const analysisSteps = [
  { id: 1, label: 'Initializing Forensic Engine', duration: 800 },
  { id: 2, label: 'Scanning EXIF Metadata', duration: 1200 },
  { id: 3, label: 'Mapping 68-Point Facial Landmarks', duration: 1500 },
  { id: 4, label: 'GAN Artifact Neural Processing', duration: 2000 },
  { id: 5, label: 'Error Level Analysis (ELA)', duration: 1200 },
  { id: 6, label: 'Generating Risk Confidence Score', duration: 1000 },
];

const technologies = [
  { name: 'TensorFlow', type: 'Core Model' },
  { name: 'PyTorch', type: 'Neural Engine' },
  { name: 'OpenCV', type: 'Computer Vision' },
  { name: 'Dlib', type: 'Face Analysis' },
  { name: 'Django', type: 'Secure API' },
  { name: 'React', type: 'Interface' },
  { name: 'PostgreSQL', type: 'Forensic DB' },
  { name: 'Nvidia CUDA', type: 'GPU Acceleration' }
];

const pricingPlans = [
  { name: 'Personal', price: 'Free', features: ['3 Scans / Day', 'Standard Accuracy', 'Basic Heatmap'], btn: 'Start Scanning' },
  { name: 'Investigator', price: '$49/mo', features: ['Unlimited Scans', 'Priority Neural Queue', 'PDF Reports', 'Metadata Decryptor'], btn: 'Get Professional', highlighted: true },
  { name: 'Enterprise', price: 'Custom', features: ['API Integration', 'White-label Reports', 'Dedicated AI Training', 'SLA Support'], btn: 'Contact Sales' }
];

// --- HELPER COMPONENTS ---

// FIXED: Using props to pass stable random values
const FloatingParticle = ({ delay, left, size }) => (
  <div 
    className="particle" 
    style={{ 
      animationDelay: `${delay}s`, 
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`
    }}
  />
);

const SectionTitle = ({ subtitle, title, description }) => (
  <div className="section-title">
    <div className="title-bracket-left"></div>
    <div className="title-content">
      <span className="top-title">{subtitle}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
    <div className="title-bracket-right"></div>
  </div>
);

// --- MAIN COMPONENT ---
  import function Home(){
  // UI State
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');
  const [compareOffset, setCompareOffset] = useState(50);
  
  // Functional State
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [logs, setLogs] = useState([]);

  // Refs
  const fileInputRef = useRef(null);
  const sliderRef = useRef(null);

  // FIXED: Generating stable random values for background particles using useMemo
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      delay: i * 0.5, // Instead of Math.random, use index for predictable delay
      left: (i * 3.3) % 100, // Predictable distribution
      size: (i % 5) + 2
    }));
  }, []);

  // Navbar Scroll Logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Analysis Sequence Logic
  const startAnalysis = () => {
    if (!uploadedImage) return;
    
    setScanning(true);
    setProgress(0);
    setLogs(["[SYSTEM]: Booting TruthLens Kernel..."]);
    
    let currentPhase = 0;
    
    const runPhase = () => {
      if (currentPhase < analysisSteps.length) {
        const step = analysisSteps[currentPhase];
        setCurrentStep(step.label);
        setLogs(prev => [...prev, `[INFO]: ${step.label} executing...`]);

        let start = 0;
        const interval = setInterval(() => {
          start += 10;
          if (start >= 100) {
            clearInterval(interval);
            currentPhase++;
            setProgress((currentPhase / analysisSteps.length) * 100);
            setTimeout(runPhase, 400); // Slight delay for realism
          }
        }, step.duration / 10);
      } else {
        setScanning(false);
        setShowResults(true);
        setLogs(prev => [...prev, "[SUCCESS]: Forensic Analysis Complete. Results ready."]);
      }
    };

    runPhase();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setUploadedImage(event.target.result);
      reader.readAsDataURL(file);
      setLogs(prev => [...prev, `[UPLINK]: File ${file.name} received.`]);
    }
  };

  const handleSliderMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setCompareOffset(Math.max(0, Math.min(100, x)));
  };

  return (
    <div className={`home-wrapper ${scanning ? 'scanning-active' : ''}`}>
      {/* FIXED PARTICLES: Using useMemo data */}
      {particles.map((p) => (
        <FloatingParticle key={p.id} delay={p.delay} left={p.left} size={p.size} />
      ))}

      <div className="bg-gradient one"></div>
      <div className="bg-gradient two"></div>
      <div className="grid-layer"></div>

      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="logo" onClick={() => window.scrollTo(0,0)}>
          <ShieldCheck className="logo-icon" />
          <span>TruthLens <span className="blue-text">AI</span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Technology</a>
          <a href="#scanner" onClick={() => setMenuOpen(false)}>Scanner</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>API</a>
        </div>

        <div className="nav-actions">
          <button className="secondary-btn-nav"><Terminal size={16}/> CLI Tools</button>
          <button className="primary-btn-nav">Access Console</button>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-left">
          <div className="hero-tag">
            <Sparkles size={16} className="sparkle-icon" />
            <span>v4.2 PRO Forensics Active</span>
          </div>
          <h1>Identify AI Fraud With <span className="gradient-text">Neural DNA</span> Mapping.</h1>
          <p>Every AI model leaves a mathematical signature. TruthLens AI uses multi-stage GAN artifact extraction to reveal manipulation invisible to human vision.</p>
          
          <div className="hero-btns">
            <button className="main-cta" onClick={() => document.getElementById('scanner').scrollIntoView({behavior: 'smooth'})}>
              <Zap size={18} /> Run Analysis
            </button>
            <button className="ghost-cta">
              <PlayCircle size={18} /> View Sample Case
            </button>
          </div>

          <div className="hero-social-proof">
             <div className="stat-pill"><CheckCircle2 size={14}/> ISO-27001</div>
             <div className="stat-pill"><Database size={14}/> 10M+ Datasets</div>
             <div className="stat-pill"><Lock size={14}/> Zero-Log Privacy</div>
          </div>
        </div>

        <div className="hero-right">
          <div className="forensic-visualizer">
            <div className="scanner-frame">
              <div className="scan-line-animation"></div>
              <div className="landmark-overlay">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className={`landmark-dot ld-${i}`} style={{ top: `${(i*5)%90}%`, left: `${(i*7)%90}%` }} />
                ))}
              </div>
              <div className="status-readout">
                <div className="readout-row"><span>VECTOR_ID:</span> <strong>#TRL-092</strong></div>
                <div className="readout-row"><span>DETECTED:</span> <strong className="text-red">DEEP_SMOOTH</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED: Using 'technologies' data here */}
      <section className="tech-marquee">
        <div className="marquee-content">
          {technologies.concat(technologies).map((tech, i) => (
            <div className="tech-tag-chip" key={i}>
              <Cpu size={14} />
              <span>{tech.name}</span>
              <small>{tech.type}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section" id="features">
        <SectionTitle 
          subtitle="Enterprise Suite" 
          title="Digital Forensics Redefined" 
          description="A comprehensive toolkit designed for media agencies, security firms, and digital investigators."
        />
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card-advanced" key={i}>
              <div className="f-icon" style={{ background: `${f.color}15`, color: f.color }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="f-footer">
                <div className="f-status"><div className="status-dot"></div> Active</div>
                <button className="f-more"><PlusIcon size={16}/></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Slider Section */}
      <section className="comparison-section">
        <div className="comparison-content">
           <div className="comp-text">
              <h2>Visualize Artifacts</h2>
              <p>Toggle between the original capture and our AI Heatmap layer to see exactly where pixels were reconstructed.</p>
              <ul className="comp-features">
                 <li><Eye size={16}/> Pixel Deviation Tracking</li>
                 <li><Layers size={16}/> Layer-by-Layer Decomposition</li>
              </ul>
           </div>
           <div className="slider-wrapper" ref={sliderRef} onMouseMove={handleSliderMove}>
              <div className="slider-img original"></div>
              <div className="slider-img heatmap" style={{ clipPath: `inset(0 0 0 ${compareOffset}%)` }}></div>
              <div className="slider-bar" style={{ left: `${compareOffset}%` }}>
                 <div className="slider-handle"><MousePointer2 size={14}/></div>
              </div>
              <div className="label-orig">Original</div>
              <div className="label-heat">AI Heatmap</div>
           </div>
        </div>
      </section>

      {/* Interactive Scanner */}
      <section className="scanner-section" id="scanner">
        <div className="scanner-layout">
          <div className="scanner-control">
            <div className="control-header">
              <Terminal size={20} />
              <h3>Forensic Terminal v4.2</h3>
            </div>
            
            <div className="upload-container">
              {!uploadedImage ? (
                <div className="drop-area" onClick={() => fileInputRef.current.click()}>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} hidden />
                  <div className="upload-circle">
                    <Upload size={32} />
                  </div>
                  <h4>Initialize Secure Uplink</h4>
                  <p>Drop file to begin neural verification</p>
                  <div className="file-badges">
                    <span>JPEG</span><span>PNG</span><span>WEBP</span>
                  </div>
                </div>
              ) : (
                <div className="preview-active">
                  <img src={uploadedImage} alt="Subject" />
                  <div className="preview-overlay">
                    <button className="btn-cancel" onClick={() => setUploadedImage(null)}>Abort</button>
                    <button className="btn-analyze" onClick={startAnalysis}><Search size={18} /> Execute Scan</button>
                  </div>
                </div>
              )}
            </div>

            <div className="terminal-logs">
              {logs.map((log, i) => <div key={i} className="log-line">{log}</div>)}
              {logs.length === 0 && <div className="log-placeholder">Ready for injection...</div>}
            </div>
          </div>

          <div className="scanner-monitor">
             <div className="monitor-screen">
                <div className="scan-grid-lines"></div>
                {scanning ? (
                  <div className="active-scan-ui">
                    <div className="scanning-radar"></div>
                    <Radar className="radar-icon-anim" size={50} />
                    <h3>{currentStep}</h3>
                    <div className="progress-value">{Math.round(progress)}%</div>
                    <div className="loading-bar-outer">
                       <div className="loading-bar-inner" style={{width: `${progress}%`}}></div>
                    </div>
                  </div>
                ) : showResults ? (
                  <div className="results-dashboard">
                    <div className="res-header">
                      <ShieldAlert className="text-red" />
                      <h3>AI Manipulation Detected</h3>
                    </div>
                    
                    <div className="res-tabs">
                       <button className={activeTab === 'summary' ? 'active' : ''} onClick={() => setActiveTab('summary')}>Summary</button>
                       <button className={activeTab === 'technical' ? 'active' : ''} onClick={() => setActiveTab('technical')}>Neural Data</button>
                    </div>

                    <div className="tab-pane">
                      {activeTab === 'summary' ? (
                        <div className="summary-view">
                          <div className="risk-score-circle">
                             <svg viewBox="0 0 36 36" className="circular-chart">
                                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="circle" strokeDasharray="87, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                             </svg>
                             <div className="percentage">87%</div>
                          </div>
                          <div className="findings">
                             <div className="finding-pill danger"><Smile size={14}/> Smile Reconstruction</div>
                             <div className="finding-pill warning"><Eye size={14}/> Eye Symmetry Altered</div>
                             <div className="finding-pill success"><Sparkle size={14}/> EXIF Consistent</div>
                          </div>
                        </div>
                      ) : (
                        <div className="technical-view">
                          <code className="code-block">
                            {`> NEURAL_SCAN: POSITIVE
> GAN_SIGNATURE: STYLEGAN_3_HD
> ELA_LEVEL: 0.92 (CRITICAL)
> FACE_SYNC: 0.12 (FAILED)
> TIMESTAMP: ${new Date().toISOString()}`}
                          </code>
                        </div>
                      )}
                    </div>
                    <button className="btn-download-report"><Download size={16} /> Export Forensic Report</button>
                  </div>
                ) : (
                  <div className="monitor-idle">
                    <Fingerprint size={60} className="idle-glow" />
                    <p>Awaiting Data Injection</p>
                  </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <SectionTitle subtitle="Licensing" title="Forensics for Everyone" />
        <div className="pricing-grid">
           {pricingPlans.map((plan, i) => (
             <div className={`pricing-card ${plan.highlighted ? 'featured' : ''}`} key={i}>
                {plan.highlighted && <div className="popular-tag">Most Accurate</div>}
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <ul className="plan-features">
                  {plan.features.map((f, j) => <li key={j}><CheckCircle2 size={16}/> {f}</li>)}
                </ul>
                <button className="plan-btn">{plan.btn}</button>
             </div>
           ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="method-section">
        <div className="method-card">
           <div className="method-info">
              <h2>Neural Methodology</h2>
              <p>TruthLens AI operates on a decentralized scanning infrastructure to ensure your sensitive data is never stored on a central server.</p>
              <div className="method-grid">
                 <div className="m-box"><HardDrive /> <h4>Local Decryption</h4></div>
                 <div className="m-box"><Share2 /> <h4>Node Verification</h4></div>
                 <div className="m-box"><Settings /> <h4>Custom Training</h4></div>
                 <div className="m-box"><HelpCircle /> <h4>Expert Review</h4></div>
              </div>
           </div>
           <div className="method-stat-card">
              <BarChart3 size={40} />
              <h3>98.2% Accuracy</h3>
              <p>Verified against 2026 Deepfake Benchmarks.</p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo"><ShieldCheck className="logo-icon"/> TruthLens AI</div>
            <p>Advancing digital forensic science for a world where seeing is no longer believing.</p>
            <div className="social-row">
               <div className="s-circle"><Globe size={18}/></div>
               <div className="s-circle"><Terminal size={18}/></div>
               <div className="s-circle"><Share2 size={18}/></div>
            </div>
          </div>
          <div className="footer-links-grid">
             <div className="link-col">
                <h4>System</h4>
                <a href="#hero">Scanner</a>
                <a href="#hero">Neural API</a>
                <a href="#hero">Heatmaps</a>
             </div>
             <div className="link-col">
                <h4>Support</h4>
                <a href="#hero">Documentation</a>
                <a href="#hero">Privacy Protocol</a>
                <a href="#hero">Whitepaper</a>
             </div>
             <div className="link-col">
                <h4>Contact</h4>
                <p><UserCheck size={14}/> Verified Partners</p>
                <p><ShieldAlert size={14}/> Security Team</p>
             </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TruthLens AI. All Neural Rights Reserved.</p>
          <div className="uptime"><div className="u-dot"></div> 100% System Uptime</div>
        </div>
      </footer>

      {/* Global Scan UI */}
      {scanning && (
        <div className="global-neural-overlay">
           <div className="brain-container">
              <div className="brain-core">
                <Brain size={60} />
              </div>
              <div className="wave w1"></div>
              <div className="wave w2"></div>
           </div>
           <h2>{currentStep}</h2>
           <div className="phase-text">Phase {Math.ceil((progress/100)*6)} / 6</div>
        </div>
      )}
    </div>
  );
}

// Simple internal icon
function PlusIcon({size}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
}}