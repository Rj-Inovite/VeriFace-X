import { useEffect, useState, useRef, useMemo } from 'react';

// eslint-disable-next-line no-unused-vars
// (kept for future UI telemetry expansions)
import { 
  Radar, 
  ScanFace, 
  Brain, 
  Shield, 
  Database, 
  Lock, 
  ShieldCheck, 
  Terminal, 
  X, 
  Menu, 
  Sparkles, 
  Zap, 
  PlayCircle, 
  CheckCircle2, 
  Cpu, 
  Plus as PlusIcon,
  Layers,
  Eye,
  Fingerprint,
  MousePointer2,
  Upload,
  Search,
  ShieldAlert,
  Smile,
  Sparkle,
  Download,
  HardDrive,
  Share2,
  Settings,
  HelpCircle,
  BarChart3,
  Globe,
  UserCheck,
  Server,
  Activity,
  RefreshCw,
  FileText,
  Key,
  Binary
} from 'lucide-react';
import './Home.css';

// --- CONFIGURATION & ENHANCED FORENSIC DATA DATASETS ---
const features = [
  {
    icon: <ScanFace size={40} />,
    title: 'AI Facial Scan & Landmark Vectors',
    desc: 'Detect deep-level facial manipulation, automated smile reconstruction, complex skin smoothing layers, and tracking spatial AI beauty filter traces via high-density 68-point spatial mapping matrices.',
    color: '#3b82f6',
    detailedMetrics: ['Geometric deviation anomaly checking', 'Sub-surface pixel smoothing isolation', 'Asymmetric mesh matching tracking']
  },
  {
    icon: <Brain size={40} />,
    title: 'Deepfake Intelligence Unit',
    desc: 'Analyze structural GAN-generated pixel inconsistencies, frequency spectrum distribution errors, and deep neural reconstruction artifacts using state-of-the-art vision transformer models.',
    color: '#8b5cf6',
    detailedMetrics: ['Generative Adversarial Network fingerprinting', 'Diffusion model frequency mismatch markers', 'Latent space artifact extraction arrays']
  },
  {
    icon: <Shield size={40} />,
    title: 'Forensic Grade Verification Engine',
    desc: 'Enterprise-level digital forensic security processing engine engineered for strict chain-of-custody data validation, media origin confirmation, and localized digital manipulation risk alerts.',
    color: '#06b6d4',
    detailedMetrics: ['Cryptographic media lineage validation', 'Metadata authenticity chain ledger', 'Tamper-evident frame hashing parameters']
  },
  {
    icon: <Radar size={40} />,
    title: 'Hyper-Spectral Heatmap Detection',
    desc: 'Visualize edited image regions with high-fidelity forensic heatmaps, localized delta compression differences, and anomalous pixel-level overlays utilizing localized Error Level Analysis (ELA).',
    color: '#ec4899',
    detailedMetrics: ['Quantization matrix inequality indexing', 'High-frequency edge compression maps', 'Localized signal-to-noise ratio delta']
  },
  {
    icon: <Database size={40} />,
    title: 'Cryptographic Metadata Audit',
    desc: 'Instantly reverse and verify EXIF consistency parameters, nested ICC profile software traces, camera sensor profile noise, timestamps, and deep-seated compression signatures inside raw binaries.',
    color: '#f59e0b',
    detailedMetrics: ['ICC profile software fingerprint validation', 'Camera model native sensor noise evaluation', 'Binary payload structural anomaly search']
  },
  {
    icon: <Lock size={40} />,
    title: 'Secure Cryptographic AI Reports',
    desc: 'Generate complete, tamper-proof forensic PDF analysis logs with model confidence percentages, localized artifact callouts, and unique sha-256 cryptographic compliance signatures.',
    color: '#10b981',
    detailedMetrics: ['Automated judicial chain-of-custody outputs', 'SHA-256 validation seals signature block', 'Localized anomaly callout coordinate arrays']
  },
];

const analysisSteps = [
  { id: 1, label: 'Initializing High-Performance Forensic Kernel Engine...', duration: 900 },
  { id: 2, label: 'Extracting Binary Structural Streams & Re-indexing EXIF Metadata...', duration: 1100 },
  { id: 3, label: 'Mapping 68-Point Spatial Facial Geometric Landmarks Structural Mesh...', duration: 1400 },
  { id: 4, label: 'Processing GAN Artifact Frequency Domains via Multilayer Neural Models...', duration: 1800 },
  { id: 5, label: 'Calculating Localized Error Level Analysis (ELA) Compression Vectors...', duration: 1300 },
  { id: 6, label: 'Evaluating Spatial Deviations & Synthesizing Risk Confidence Metrics...', duration: 1000 },
];

const technologies = [
  { name: 'TensorFlow 2.15', type: 'Core Model Inference Engine' },
  { name: 'PyTorch 2.2', type: 'Neural Weight Pipeline Matrix' },
  { name: 'OpenCV Pro', type: 'Advanced Computer Vision Layer' },
  { name: 'Dlib Library', type: 'Geometric Facial Mapping Vectors' },
  { name: 'Django Security', type: 'Encrypted REST API Tunneling' },
  { name: 'React 19 Core', type: 'Dynamic Analytical Dashboard System' },
  { name: 'PostgreSQL Vector', type: 'Forensic Footprint Storage Arrays' },
  { name: 'Nvidia CUDA 12', type: 'Real-Time GPU Hardware Acceleration' }
];

const pricingPlans = [
  { 
    name: 'Personal Core', 
    price: 'Free', 
    period: 'Forever',
    desc: 'Essential verification tool configuration designed for individual users auditing online profile media footprints.',
    features: ['3 High-Res Scans / Day Matrix', 'Standard Accuracy Algorithmic Pass', 'Basic Static ELA Heatmap Panel', 'Community Portal Open Access Protocol'], 
    btn: 'Start Free Scanning Engine',
    highlighted: false
  },
  { 
    name: 'Investigator Pro', 
    price: '$49', 
    period: 'per month',
    desc: 'Advanced architectural suite designed specifically for independent journalists, legal professionals, and security experts.',
    features: ['Unlimited Batch Scanning Priority Queue', 'Priority Neural Model Weight Inference', 'Cryptographic Automated PDF Report Prints', 'Advanced Metadata Decryptor Structural Parsing', 'API Access Client Token (Tier 1 Integration)'], 
    btn: 'Get Professional Access Tunnel', 
    highlighted: true 
  },
  { 
    name: 'Enterprise Elite', 
    price: 'Custom', 
    period: 'Tailored Billing',
    desc: 'Complete defense mechanism built to handle high-volume institutional media verification and automated enterprise pipelines.',
    features: ['Unlimited Scale Core API Core Integration', 'White-label Custom System Reporting Logs', 'Dedicated On-Premise AI Model Vector Training', '24/7/365 Tier-3 SLA Dedicated Engineer Support', 'Custom Model Tuning Framework Deployments'], 
    btn: 'Contact System Architects',
    highlighted: false
  }
];

const comprehensiveFaq = [
  { q: "How does Error Level Analysis (ELA) identify synthetic imagery?", a: "Error Level Analysis saves the targeted image at a specific uniform compression rate, evaluating the differences in error levels across different regions. Authentic captures show a standard rate of degradation across matching planes, while deepfakes or edited objects show distinct anomalous pixel brightness spikes." },
  { q: "Can TruthLens discover deepfakes that have had their EXIF data completely stripped?", a: "Yes. While metadata parameters offer high-value forensic hints, our core model works downstream directly on deep spatial pixel layers, tracking mathematical artifacts left by GAN generators and diffusion neural networks that cannot be removed by simple file conversions." },
  { q: "Is the uploaded imagery exposed to external networks or servers?", a: "Security is foundational. TruthLens structures operation through encrypted isolated runtimes. Under our zero-log architecture protocols, media inputs are fully parsed inside sandboxed volatile memory buffers and destroyed immediately upon generation of your cryptographic hash analysis reports." }
];

// --- STABLE SUB-COMPONENTS ---
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

// --- MAIN EXPORTED DASHBOARD INTERFACE ---
export default function Home() {
  // UI Layout State Controls
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');
  const [compareOffset, setCompareOffset] = useState(50);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // High-End Functional Deepfake Scanner Functional State Engine
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [logs, setLogs] = useState([]);
  const systemUptime = "99.998%";
  // Future use: selectedCaseStudy / setSelectedCaseStudy
  // (intentionally not stored yet to avoid unused-var lint errors)


  // System Element Ref Attachments
  const fileInputRef = useRef(null);
  const sliderRef = useRef(null);
  const terminalEndRef = useRef(null);

  // Dynamic Telemetry State Variables
  const [scannedCount, setScannedCount] = useState(1482093);
  const [threatLevel] = useState("ELEVATED");

  // Memoizing Background Particle System to Avoid React Frame-rate Drops
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      delay: i * 0.35, 
      left: (i * 2.65) % 100, 
      size: (i % 5) + 2
    }));
  }, []);

  // Increment Live Counter Statistics for System Authenticity Visualizer
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setScannedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(counterInterval);
  }, []);

  // Auto Scroll Terminal to Base Coordinates on Log Stream Ingestion
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Sticky Navigation Bar Backdrop Scroll Trigger Logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multi-Phase Analysis Execution Logic Loop Simulation
  const startAnalysis = () => {
    if (!uploadedImage) return;
    
    setScanning(true);
    setShowResults(false);
    setProgress(0);
    setLogs([
      "[SYSTEM_BOOT]: Initializing TruthLens Cryptographic Forensic Kernel Environment...", 
      "[HARDWARE]: Establishing handshakes with primary Tesla GPU core clusters...",
      "[INGESTION]: Loading binary stream payload buffer into zero-log sandboxed address..."
    ]);
    
    let currentPhase = 0;
    
    const runPhase = () => {
      if (currentPhase < analysisSteps.length) {
        const step = analysisSteps[currentPhase];
        setCurrentStep(step.label);
        
        setLogs(prev => [
          ...prev, 
          `[OK] Kernel Allocation Success for Pipeline Module: ${step.id}`,
          `[PROCESSING]: Launching operational sequence subroutines for [${step.label}]...`
        ]);

        let start = 0;
        const interval = setInterval(() => {
          start += 20;
          if (start >= 100) {
            clearInterval(interval);
            currentPhase++;
            setProgress((currentPhase / analysisSteps.length) * 100);
            setTimeout(runPhase, 500); 
          }
        }, step.duration / 5);
      } else {
        setScanning(false);
        setShowResults(true);
        setLogs(prev => [
          ...prev, 
          "[SUCCESS]: Comprehensive Deep-Layer Image Forensic Analysis Completed.", 
          "[TELEMETRY]: GAN artifact structural signature matching algorithm successfully halted.",
          `[REPORT]: Final Analysis Matrix compiled. Confidence Score: 87.42% POSITIVE MODIFICATION.`
        ]);
      }
    };

    setTimeout(runPhase, 600);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setShowResults(false);
      };
      reader.readAsDataURL(file);
      setLogs(prev => [
        ...prev, 
        `[UPLINK_ESTABLISHED]: Core payload accepted from local file link system data.`,
        `[METADATA]: Target Identity String: [${file.name}]`,
        `[METADATA]: Structural Size Footprint: ${(file.size / 1024).toFixed(2)} Kilobytes`,
        `[METADATA]: Content Mime Type Blueprint: ${file.type}`
      ]);
    }
  };

  const handleSliderMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let x;
    if (e.touches && e.touches[0]) {
      x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    } else {
      x = ((e.clientX - rect.left) / rect.width) * 100;
    }
    setCompareOffset(Math.max(0, Math.min(100, x)));
  };

  const loadSampleCaseStudy = () => {
    setUploadedImage("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='100%' height='100%' fill='%230f172a'/><circle cx='400' cy='250' r='120' fill='%231e293b' stroke='%233b82f6' stroke-width='4'/><path d='M320 450 Q 400 370 480 450' fill='none' stroke='%233b82f6' stroke-width='4'/><text x='50%' y='90%' dominant-baseline='middle' text-anchor='middle' fill='%2364748b' font-family='monospace' font-size='16'>[TRUTHLENS FORENSIC SIMULATED SUBJECT IMAGE]</text></svg>");
    setShowResults(false);
    setLogs(prev => [
      ...prev,
      "[SANDBOX]: Loaded pre-compiled neural fingerprint sample case study template.",
      "[SANDBOX]: Hardware testing overrides active. Ready for analysis execution pass."
    ]);
    document.getElementById('scanner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`home-wrapper ${scanning ? 'scanning-active' : ''}`}>
      {/* Background Micro Particle Ambient Environment */}
      {particles.map((p) => (
        <FloatingParticle key={p.id} delay={p.delay} left={p.left} size={p.size} />
      ))}

      {/* Cyberpunk Glassmorphic Backdrops */}
      <div className="bg-gradient one"></div>
      <div className="bg-gradient two"></div>
      <div className="grid-layer"></div>

      {/* Primary Shell Navigation System */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ShieldCheck className="logo-icon" />
          <span>TruthLens <span className="blue-text">AI</span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Core Shell</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Analytical Tech</a>
          <a href="#visualize" onClick={() => setMenuOpen(false)}>Artifact Vis</a>
          <a href="#scanner" onClick={() => setMenuOpen(false)}>Forensic Matrix</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Access Licensing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Knowledge Base</a>
        </div>

        <div className="nav-actions">
          <button className="secondary-btn-nav" onClick={() => alert("TruthLens CLI Tool Bindings v4.2-Prod\nUsage: $ truthlens --scan <image_path>")}>
            <Terminal size={14}/> TruthLens CLI
          </button>
          <button className="primary-btn-nav">System Console</button>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Navigation Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-left">
          <div className="hero-tag">
            <Sparkles size={14} className="sparkle-icon" />
            <span>v4.2 PRO Forensics Active Platform</span>
          </div>
          <h1>Deconstruct AI Media via <span className="gradient-text">Neural Signatures</span> & DNA Mapping.</h1>
          <p>Every commercial generative AI framework imprints unique spatial distributions. TruthLens AI processes targeted pixel variances and deep multi-stage GAN layer artifact configurations to uncover forensic evidence invisible to human sight.</p>
          
          <div className="hero-btns">
            <button className="main-cta" onClick={() => document.getElementById('scanner')?.scrollIntoView({ behavior: 'smooth' })}>
              <Zap size={18} /> Deploy Scanning Engine
            </button>
            <button className="ghost-cta" onClick={loadSampleCaseStudy}>
              <PlayCircle size={18} /> Load Sample Template
            </button>
          </div>

          <div className="hero-social-proof">
             <div className="stat-pill"><CheckCircle2 size={14}/> SecOps ISO-27001 Certified</div>
             <div className="stat-pill"><Database size={14}/> {scannedCount.toLocaleString()} Audits Logged</div>
             <div className="stat-pill"><Lock size={14}/> Compliant Zero-Log Architecture</div>
          </div>
        </div>

        <div className="hero-right">
          <div className="forensic-visualizer">
            <div className="scanner-frame">
              <div className="scan-line-animation"></div>
              <div className="landmark-overlay">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className={`landmark-dot ld-${i}`} style={{ top: `${(i * 4.2) % 88}%`, left: `${(i * 6.4) % 88}%` }} />
                ))}
              </div>
              <div className="status-readout">
                <div className="readout-row"><span>CORE_VECTOR_NODE:</span> <strong>#TRL-092_SECURE</strong></div>
                <div className="readout-row"><span>CURRENT_THREAT:</span> <strong className="text-red">{threatLevel}</strong></div>
                <div className="readout-row"><span>ENGINE_STATUS:</span> <strong style={{color: '#10b981'}}>OPTIMIZED</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware / Engine Marquee Banner */}
      <section className="tech-marquee">
        <div className="marquee-content">
          {technologies.concat(technologies).map((tech, i) => (
            <div className="tech-tag-chip" key={i}>
              <Cpu size={13} />
              <span>{tech.name}</span>
              <small>{tech.type}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Core Features Section */}
      <section className="features-section" id="features">
        <SectionTitle 
          subtitle="Advanced Forensic Engine Suite" 
          title="Digital Verification Re-Engineered" 
          description="An enterprise analytical matrix meticulously constructed for cybersecurity squads, global media channels, and digital crime analysts."
        />
        <div className="features-grid">
          {features.map((f, i) => (
            <div 
              className={`feature-card-advanced ${expandedFeature === i ? 'expanded' : ''}`} 
              key={i}
              onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
            >
              <div className="f-icon" style={{ background: `${f.color}18`, color: f.color }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              
              {expandedFeature === i && (
                <div className="expanded-metrics-block">
                  <h4>Core Operational Subroutines:</h4>
                  <ul>
                    {f.detailedMetrics.map((metric, idx) => (
                      <li key={idx}><Binary size={12} style={{color: f.color, marginRight: '6px'}}/> {metric}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="f-footer">
                <div className="f-status"><div className="status-dot"></div> Operational Pipeline</div>
                <button className="f-more" aria-label="Expand Feature Technical Metrics">
                  <PlusIcon size={14} style={{ transform: expandedFeature === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Slider Section */}
      <section className="comparison-section" id="visualize">
        <div className="comparison-content">
           <div className="comp-text">
              <div className="mini-tag"><Layers size={12} /> Spatial Deconstruction</div>
              <h2>Visualize Reconstructed Core Artifacts</h2>
              <p>Toggle between the baseline optical raw asset capture and our specialized deep neural heatmap overlay. Observe exactly where individual pixel clusters were mathematically hallucinated or smoothed by deep synthesis networks.</p>
              <ul className="comp-features">
                 <li><Eye size={16} className="blue-icon"/> <span><strong>Pixel Deviation Tracking:</strong> Isolate anomalies down to the sub-pixel high-frequency channel layers.</span></li>
                 <li><Layers size={16} className="purple-icon"/> <span><strong>Layer-by-Layer Decomposition:</strong> Peel back post-processing filter signatures to discover historical generation nodes.</span></li>
                 <li><Activity size={16} className="cyan-icon"/> <span><strong>Error Discrepancy Indexing:</strong> Cross-reference compression artifacts to reveal image manipulation borders.</span></li>
              </ul>
           </div>
           <div 
              className="slider-wrapper" 
              ref={sliderRef} 
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
           >
              {/* Fallback procedural backgrounds simulated using CSS gradients if external imagery missing */}
              <div className="slider-img original">
                <div className="fallback-slider-visual base-optics">
                  <div className="simulated-face-contour"></div>
                </div>
              </div>
              <div className="slider-img heatmap" style={{ clipPath: `inset(0 0 0 ${compareOffset}%)` }}>
                <div className="fallback-slider-visual thermal-optics">
                  <div className="simulated-face-contour error-glowing"></div>
                  <div className="heatmap-patch region-1"></div>
                  <div className="heatmap-patch region-2"></div>
                </div>
              </div>
              <div className="slider-bar" style={{ left: `${compareOffset}%` }}>
                 <div className="slider-handle"><MousePointer2 size={14}/></div>
              </div>
              <div className="label-orig">Original Asset Frame</div>
              <div className="label-heat">TruthLens AI Anomaly Heatmap</div>
           </div>
        </div>
      </section>

      {/* Interactive Scanner Matrix Terminal Section */}
      <section className="scanner-section" id="scanner">
        <SectionTitle 
          subtitle="System Ingestion Unit" 
          title="Neural Manipulation Diagnostic Console" 
          description="Inject raw image arrays into our safe validation buffers. Watch real-time execution telemetry of algorithmic forensic processing passes."
        />
        
        <div className="scanner-layout">
          <div className="scanner-control">
            <div className="control-header">
              <Terminal size={20} className="terminal-header-icon" />
              <h3>Forensic Terminal Client v4.2</h3>
              <div className="window-dots">
                <span className="dot d1"></span><span className="dot d2"></span><span className="dot d3"></span>
              </div>
            </div>
            
            <div className="upload-container">
              {!uploadedImage ? (
                <div className="drop-area" onClick={() => fileInputRef.current.click()}>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" hidden />
                  <div className="upload-circle">
                    <Upload size={32} />
                  </div>
                  <h4>Initialize Secure Forensic Uplink</h4>
                  <p>Click or drag-and-drop target media array file to spin up pipeline verification hashes</p>
                  <div className="file-badges">
                    <span>JPEG LAYER</span><span>PNG STREAM</span><span>WEBP BINARY</span><span>RAW EXIF</span>
                  </div>
                </div>
              ) : (
                <div className="preview-active">
                  <img src={uploadedImage} alt="Forensic Analysis Target Subject Frame" />
                  <div className="preview-overlay">
                    <button className="btn-cancel" onClick={() => { setUploadedImage(null); setShowResults(false); setLogs([]); }}>Abort Session</button>
                    <button className="btn-analyze" onClick={startAnalysis} disabled={scanning}>
                      {scanning ? <RefreshCw size={18} className="spinning-sync-loader" /> : <Search size={18} />} 
                      {scanning ? "Processing Weights..." : "Execute Forensic Pass"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="terminal-logs-wrapper">
              <div className="terminal-logs">
                {logs.map((log, i) => (
                  <div key={i} className={`log-line ${log.includes('[SUCCESS]') ? 'log-success' : log.includes('[PROCESSING]') ? 'log-process' : log.includes('[METADATA]') ? 'log-meta' : ''}`}>
                    {log}
                  </div>
                ))}
                {logs.length === 0 && <div className="log-placeholder">Awaiting target asset ingestion sequence activation code vectors...</div>}
                <div ref={terminalEndRef} />
              </div>
            </div>
          </div>

          <div className="scanner-monitor">
             <div className="monitor-screen">
                <div className="scan-grid-lines"></div>
                
                {scanning ? (
                  <div className="active-scan-ui">
                    <div className="scanning-radar-glow"></div>
                    <Radar className="radar-icon-anim" size={54} />
                    <h3 className="scanning-step-title">{currentStep}</h3>
                    <div className="progress-metrics-row">
                      <span className="telemetry-label">MATRIX INTEGRATION:</span>
                      <span className="progress-value">{Math.round(progress)}% Complete</span>
                    </div>
                    <div className="loading-bar-outer">
                        <div className="loading-bar-inner" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="running-sub-logs">
                      <span>[LOG]: Active Thread Pool Allocation: CUDA_NODE_0{1}</span>
                      <span>[VECTORS]: Real-time floating calculation rate ~4.82 TFLOPS</span>
                    </div>
                  </div>
                ) : showResults ? (
                  <div className="results-dashboard">
                    <div className="res-header">
                      <ShieldAlert className="text-red animate-pulse-slow" size={24} />
                      <div>
                        <h3>Synthetic Anomalies Flagged</h3>
                        <p className="res-subtitle">Confidence Interval Verdict Overload Triggered</p>
                      </div>
                    </div>
                    
                    <div className="res-tabs">
                       <button className={activeTab === 'summary' ? 'active' : ''} onClick={() => setActiveTab('summary')}><FileText size={14}/> Operational Summary</button>
                       <button className={activeTab === 'technical' ? 'active' : ''} onClick={() => setActiveTab('technical')}><Server size={14}/> Deep Neural Weights Data</button>
                    </div>

                    <div className="tab-pane">
                      {activeTab === 'summary' ? (
                        <div className="summary-view">
                          <div className="score-flex-container">
                            <div className="risk-score-circle">
                               <svg viewBox="0 0 36 36" className="circular-chart critical-red">
                                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                  <path className="circle" strokeDasharray="87, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                               </svg>
                               <div className="percentage">87.42%</div>
                            </div>
                            <div className="score-verdict-text">
                              <h4>Verdict: High Risk Model Manipulation</h4>
                              <p>Structural elements point to algorithmic generation vectors matched closely with StyleGAN3 image generator footprints.</p>
                            </div>
                          </div>
                          
                          <div className="findings">
                             <div className="finding-pill danger">
                               <Smile size={14} className="pill-ico"/> 
                               <span><strong>Smile Reconstruction:</strong> Localized pixel boundary discontinuities detected along lip landmark mappings.</span>
                             </div>
                             <div className="finding-pill warning">
                               <Eye size={14} className="pill-ico"/> 
                               <span><strong>Asymmetry Identified:</strong> Geometric distance values between pupils deviate from standard facial camera projection profiles.</span>
                             </div>
                             <div className="finding-pill success">
                               <Sparkle size={14} className="pill-ico"/> 
                               <span><strong>EXIF Consistency Verified:</strong> Internal data headers contain uniform quantization tables matched with native device configurations.</span>
                             </div>
                          </div>
                        </div>
                      ) : (
                        <div className="technical-view">
                          <div className="tech-readout-meta">
                            <span>[HARDWARE INTERPOLATION INTEL LOGS]</span>
                            <span>COMPUTE TIER: HIGH_ACCURACY_INF</span>
                          </div>
                          <code className="code-block">
                            {`> NEURAL_DASHBOARD_SCAN_VERDICT: POSITIVE ALTERATION
> GAN_SIGNATURE_FOOTPRINT_MATCH: STYLEGAN_3_HD_v2 [CONFIDENCE 91%]
> FRAUDULENT_ELA_DENSITY_LEVEL: 0.9248 (CRITICAL OVERRIDE THRESHOLD)
> MESH_FACIAL_LANDMARK_SYNC_COEF: 0.124 (SPATIAL STRUCTURAL FAILED)
> BINARY_COMPRESSION_DEVIATION: 4.825e-3 DELTA RATE
> CRYPTO_LEDGER_HASH: SHA256 e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
> RECORD_TIMESTAMP: ${new Date().toISOString()}`}
                          </code>
                        </div>
                      )}
                    </div>
                    <button className="btn-download-report" onClick={() => alert("Generating Forensic Grade Cryptographic PDF Dossier...\nSHA-256 Checklist Embedded Successfully.")}>
                      <Download size={16} /> Export Cryptographic Forensic Report Dossier
                    </button>
                  </div>
                ) : (
                  <div className="monitor-idle">
                    <Fingerprint size={64} className="idle-glow animate-pulse-slow" />
                    <h3>System Live & Clear</h3>
                    <p>Awaiting ingestion protocol injection commands. Link a target image array profile payload in the controller module to begin verification passes.</p>
                    <div className="live-stat-ticker">
                      <span className="dot live-green"></span> Core Node Status: Listening for Streams
                    </div>
                  </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="pricing-section" id="pricing">
        <SectionTitle 
          subtitle="Access & Licensing Frameworks" 
          title="Forensic Verification Scales for Universal Needs" 
          description="Whether you are an independent fact-checker defending media pipelines or an enterprise safeguarding transactional databases, we maintain an access vector for your scale."
        />
        
        <div className="pricing-grid">
           {pricingPlans.map((plan, i) => (
             <div className={`pricing-card ${plan.highlighted ? 'featured' : ''}`} key={i}>
                {plan.highlighted && <div className="popular-tag"><Sparkles size={12} style={{marginRight: '4px'}}/> Most Scalable Verification Plan</div>}
                <div className="card-top-accent"></div>
                <h3>{plan.name}</h3>
                <p className="plan-brief-desc">{plan.desc}</p>
                <div className="price-housing">
                  <span className="price-currency">{plan.price === 'Custom' ? '' : '$'}</span>
                  <span className="price-value">{plan.price.replace('$', '')}</span>
                  <span className="price-period">/ {plan.period}</span>
                </div>
                
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <CheckCircle2 size={15} className="check-bullet-icon"/> 
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`plan-btn ${plan.highlighted ? 'btn-glow' : ''}`}>{plan.btn}</button>
             </div>
           ))}
        </div>
      </section>

      {/* Deep Technical Methodology Overview */}
      <section className="method-section">
        <div className="method-card">
           <div className="method-info">
              <div className="mini-tag"><Key size={12}/> Architecture Framework</div>
              <h2>Distributed Zero-Knowledge Neural Methodology</h2>
              <p>TruthLens AI functions via highly secure, isolated operational runtimes. Your source data structure stays private. Image metrics are translated instantly into volatile geometric float hashes within memory buffers, completely eliminating traditional centralized compliance leak footprints.</p>
              
              <div className="method-grid">
                 <div className="m-box">
                   <div className="m-box-icon-housing"><HardDrive size={22}/></div>
                   <h4>Isolated Buffer Load</h4>
                   <p>Data loads directly into local sandboxed system memory maps.</p>
                 </div>
                 <div className="m-box">
                   <div className="m-box-icon-housing"><Share2 size={22}/></div>
                   <h4>Distributed Weights</h4>
                   <p>Inference is spread across multi-tenant secure computing arrays.</p>
                 </div>
                 <div className="m-box">
                   <div className="m-box-icon-housing"><Settings size={22}/></div>
                   <h4>Adaptive Model Training</h4>
                   <p>Weights receive daily programmatic refinements based on new network forks.</p>
                 </div>
                 <div className="m-box">
                   <div className="m-box-icon-housing"><HelpCircle size={22}/></div>
                   <h4>Human-in-the-Loop Validation</h4>
                   <p>Enterprise plans feature secure channels for secondary verification loops.</p>
                 </div>
              </div>
           </div>
           
           <div className="method-stat-card">
              <div className="glowing-orb-background"></div>
              <BarChart3 size={48} className="stat-chart-glowing-icon" />
              <div className="stat-big-number">98.42%</div>
              <h3>Empirical Verification Accuracy Rate</h3>
              <p>Rigorously checked against foundational deepfake benchmark suites and hidden synthetic injection models.</p>
              <div className="stat-divider-line"></div>
              <div className="sub-stat-row">
                <span>LATENCY RATE: ~1.4s / MB</span>
                <span>MODEL SCALE: 1.2B Parameters</span>
              </div>
           </div>
        </div>
      </section>

      {/* Frequently Asked Knowledge Base Section */}
      <section className="faq-section" id="faq">
        <SectionTitle 
          subtitle="System Whitepaper FAQ" 
          title="Deep Science & Operational Constraints" 
          description="Unpack the fundamental mathematics, data privacy guidelines, and technical mechanics powering the TruthLens pipeline matrix."
        />
        
        <div className="faq-container-housing">
          {comprehensiveFaq.map((faq, i) => (
            <div 
              className={`faq-accordion-node ${activeFaq === i ? 'node-active' : ''}`} 
              key={i}
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            >
              <div className="faq-node-question-bar">
                <h4>{faq.q}</h4>
                <div className="accordion-indicator-icon">
                  <PlusIcon size={16} style={{ transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }} />
                </div>
              </div>
              <div className="faq-node-answer-panel" style={{ maxHeight: activeFaq === i ? '200px' : '0px', opacity: activeFaq === i ? 1 : 0 }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Forensic Pipeline Global Footer System */}
      <footer className="footer" id="contact">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo"><ShieldCheck className="logo-icon"/> TruthLens <span className="blue-text">AI</span></div>
            <p>Advancing multi-spectral digital forensic processing engineering for a modern landscape where seeing is no longer fundamentally equivalent to believing.</p>
            <div className="social-row">
               <div className="s-circle" aria-label="TruthLens Global Web Link Node"><Globe size={16}/></div>
               <div className="s-circle" aria-label="System Source Terminal Log Tree"><Terminal size={16}/></div>
               <div className="s-circle" aria-label="Distributed Security Protocol Sharing Channels"><Share2 size={16}/></div>
            </div>
          </div>
          
          <div className="footer-links-grid">
             <div className="link-col">
                <h4>Analytical Subsystems</h4>
                <a href="#scanner">Geometric Mesh Scanner</a>
                <a href="#hero">Neural API Ingestion Portal</a>
                <a href="#visualize">Hyper-Spectral Heatmaps</a>
                <a href="#features">EXIF Metadata Evaluators</a>
             </div>
             <div className="link-col">
                <h4>System Documentation</h4>
                <a href="#faq">Core Operational Whitepapers</a>
                <a href="#pricing">License Matrix Guides</a>
                <a href="#hero">Zero-Log Privacy Compliance Logs</a>
                <a href="#features">CUDA Speed Scaling Profiles</a>
             </div>
             <div className="link-col">
                <h4>Identity Signatures</h4>
                <p className="footer-contact-item"><UserCheck size={14} className="f-icon-inline"/> Institutional Verified Partners</p>
                <p className="footer-contact-item"><ShieldAlert size={14} className="f-icon-inline"/> SecOps Urgent Incident Response Team</p>
                <p className="footer-contact-item"><Server size={14} className="f-icon-inline"/> Host Location Cluster: Node_US_EAST</p>
             </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 TruthLens AI Forensic Platforms Inc. All Neural Layer Fingerprint Rights Reserved.</p>
          <div className="uptime-telemetry-badge">
            <div className="u-dot animate-glow-green"></div> 
            <span>Verified System Cluster Uptime: <strong>{systemUptime}</strong></span>
          </div>
        </div>
      </footer>

      {/* Global Foreground Modal Scan Overlay Interface */}
      {scanning && (
        <div className="global-neural-overlay">
           <div className="brain-container-box">
              <div className="brain-core-glowing">
                <Brain size={64} className="pulse-glowing-icon" />
              </div>
              <div className="sonic-wave sw1"></div>
              <div className="sonic-wave sw2"></div>
              <div className="sonic-wave sw3"></div>
           </div>
           <h2>{currentStep}</h2>
           <div className="phase-indicator-pill">
             <span>EXECUTING CORRELATION CORE PROCESS PHASE {Math.min(6, Math.ceil((progress / 100) * analysisSteps.length))} OF {analysisSteps.length}</span>
           </div>
           <div className="global-overlay-bar-outer">
             <div className="global-overlay-bar-inner" style={{ width: `${progress}%` }}></div>
           </div>
           <p className="global-overlay-warning-notice">Do not interrupt secure network uplink sockets during data matrix correlation routines.</p>
        </div>
      )}
    </div>
  );
}