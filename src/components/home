import { useState, useEffect } from 'react';
import { 
  ShieldCheck, Upload, Search, FileText, Loader2, Download,
  Zap, Menu, X, Layers, Eye, ShieldAlert,
  Cpu, Image as ImageIcon,
  Share2, Save, Trash2, Activity, Globe,
  Star, MessageSquare, CheckCircle, Server,
} from 'lucide-react';
import './Home.css';

const Home = () => {
  // ==========================================
  // UI & NAVIGATION STATE
  // ==========================================
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'compare'
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  // ==========================================
  // IMAGE CAROUSEL STATE
  // ==========================================
  const carouselImages = [
    "https://img.freepik.com/premium-photo/implementation-computer-vision-facial-recognition-online-access-business-data-biometric-system_982392-2212.jpg",
    "https://auglio.com/uploads/blog/new.webp",
    "https://img.freepik.com/premium-photo/biometrics-concept-facial-recognition-system_1077802-20937.jpg"
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // ==========================================
  // ANALYSIS & FILE STATE
  // ==========================================
  const [singleFile, setSingleFile] = useState(null); // Preview URL
  const [rawFile, setRawFile] = useState(null);       // Actual File object for Django
  const [singleFileName, setSingleFileName] = useState("");
  const [compareData, setCompareData] = useState({ original: null, suspect: null, originalName: "", suspectName: "" });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [showFullReport, setShowFullReport] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  // ==========================================
  // STATS & HISTORY STATE
  // ==========================================
  const [counters, setCounters] = useState({ scanned: 1245000, deepfakes: 452100, accuracy: 99.8 });
  const [history, setHistory] = useState([
    { id: "TL-8821", name: "identity_proof.png", type: "REAL", score: 98.4, date: "May 15, 2026", threat: "Low", device: "Sony Alpha 7R", location: "New York, USA", edited: "No" },
    { id: "TL-8822", name: "news_broadcast.mp4", type: "FAKE", score: 12.1, date: "May 16, 2026", threat: "High", device: "Unknown GAN Matrix", location: "St Petersburg, Russia", edited: "Deep Synthesis" },
    { id: "TL-8823", name: "ceo_profile.jpg", type: "MODIFIED", score: 45.8, date: "May 16, 2026", threat: "Medium", device: "Samsung S24 Ultra", location: "London, UK", edited: "Yes (Splice Artifacts)" }
  ]);

  // ==========================================
  // TESTIMONIALS STATE
  // ==========================================
  const [activeReview, setActiveReview] = useState(0);
  const testimonials = [
    { name: "Sarah Jenkins", role: "Chief of Cyber Forensics", org: "Global Defense Corp", text: "AI Vision Guard transformed our digital verification workflows. The depth of GAN artifact analysis saves our team hours of manual hex inspection.", rating: 5 },
    { name: "Marcus Thorne", role: "Managing Editor", org: "Chronicle Media Group", text: "In an era of rampant misinformation, this platform serves as our absolute source of truth. The enterprise-grade audit logs are bulletproof.", rating: 5 },
    { name: "Dr. Elena Rostova", role: "AI Security Researcher", org: "Tech Institute of Munich", text: "Exceptional accuracy ratings. The pixel irregularity maps perfectly mirror mathematical consistency anomalies in generated content.", rating: 5 }
  ];

  const analysisSteps = [
    "Initializing Forensic Kernel...",
    "Extracting Metadata & EXIF structures...",
    "Analyzing Pixel Matrix Inconsistencies...",
    "Running Advanced Deepfake Neural Models...",
    "Scanning Structural Layers for GAN Artifacts...",
    "Checking Facial Landmark Vectors & Realism...",
    "Finalizing Authenticity Matrix Scores..."
  ];

  // ==========================================
  // EFFECTS & LISTENERS
  // ==========================================
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(bgTimer);
  }, [carouselImages.length]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const counterTimer = setInterval(() => {
      setCounters(prev => ({
        ...prev,
        scanned: prev.scanned + Math.floor(Math.random() * 3) + 1,
        deepfakes: prev.deepfakes + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 4000);
    return () => clearInterval(counterTimer);
  }, []);

  // ==========================================
  // CORE SCAN LOGIC (DJANGO INTEGRATION)
  // ==========================================
  const runForensicScan = async () => {
    if (!rawFile && activeTab === 'upload') return;
    if ((!compareData.original || !compareData.suspect) && activeTab === 'compare') return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setShowFullReport(false);

    // 1. Visual Progress Simulation
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 2;
      if (progress <= 90) {
        setAnalysisProgress(progress);
        const stepIndex = Math.floor((progress / 100) * analysisSteps.length);
        setCurrentStep(analysisSteps[stepIndex] || "Processing Neural Layers...");
      }
    }, 50);

    // 2. Prepare Payload
    const formData = new FormData();
    formData.append('image', rawFile);
    formData.append('file_name', singleFileName);
    formData.append('file_size', (rawFile.size / (1024 * 1024)).toFixed(2) + " MB");

    try {
      const response = await fetch('http://127.0.0.1:8000/api/scan/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        
        clearInterval(progressInterval);
        setAnalysisProgress(100);
        setCurrentStep("Finalizing Security Audits...");

        setTimeout(() => {
          // Map Django response to Frontend Result Schema
          const result = {
            id: data.system_hash || `TL-${Math.floor(Math.random() * 9000) + 1000}`,
            name: data.file_name || singleFileName,
            status: data.status === 'real' ? 'AUTHENTIC IMAGE' : data.status === 'fake' ? 'DEEPFAKE DETECTED' : 'MODIFIED ASSET',
            score: data.confidence_score,
            risk: data.status === 'fake' ? 'High' : data.status === 'modified' ? 'Medium' : 'Low',
            type: data.status.toUpperCase(),
            timestamp: new Date(data.created_at).toLocaleString(),
            metadata: { 
              device: data.status === 'fake' ? "Unknown GAN Matrix v4" : "Verified Optical Sensor", 
              location: "Secure Node Ingest", 
              edited: data.status === 'real' ? "None Detected" : "High Structural Modification" 
            }
          };

          setScanResult(result);
          setShowFullReport(true);
          setHistory(prev => [result, ...prev]);
          setIsAnalyzing(false);
        }, 800);
      } else {
        clearInterval(progressInterval);
        alert("Server Error: Django backend failed to process image.");
        setIsAnalyzing(false);
      }
    } catch {

      clearInterval(progressInterval);
      alert("Connection Refused: Ensure Django server is running on port 8000.");
      setIsAnalyzing(false);
    }

  };

  // ==========================================
  // UI HANDLERS
  // ==========================================
  const handleFileUpload = (e, target) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    
    if (target === 'single') {
      setSingleFile(url);
      setRawFile(file);
      setSingleFileName(file.name);
    } else {
      setCompareData(prev => ({ 
        ...prev, 
        [target]: url,
        [`${target}Name`]: file.name
      }));
    }
  };

  const handleDeleteRecord = (id, e) => {
    e.stopPropagation();
    setHistory(prev => prev.filter(item => item.id !== id));
    if (scanResult && scanResult.id === id) {
      setShowFullReport(false);
      setScanResult(null);
    }
  };

  const handleViewRecord = (item) => {
    const remappedResult = {
      id: item.id,
      name: item.name,
      status: item.type === 'FAKE' ? 'DEEPFAKE DETECTED' : item.type === 'MODIFIED' ? 'MODIFIED ASSET' : 'AUTHENTIC IMAGE',
      score: item.score,
      risk: item.risk || item.threat,
      timestamp: item.date || item.timestamp,
      metadata: {
        device: item.device || "Verified Device Hardware",
        location: item.location || "Secure Gateway Ingest",
        edited: item.edited || "Unspecified Matrix Layers"
      }
    };
    setScanResult(remappedResult);
    setShowFullReport(true);
    document.getElementById('analysis').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadReport = () => {
    if (!scanResult) return;
    const reportContent = `
===================================================================
                AI VISION GUARD FORENSIC AUDIT REPORT            
===================================================================
Report ID    : ${scanResult.id}
Timestamp    : ${scanResult.timestamp}
Target Asset : ${scanResult.name}
-------------------------------------------------------------------
CRITICAL ARCHITECTURE FINDINGS:
-------------------------------------------------------------------
Verdict Status    : ${scanResult.status}
Authenticity Score: ${scanResult.score}%
Threat Level      : ${scanResult.risk.toUpperCase()}

METADATA AUDIT TRACE:
- Ingested Hardware Profile : ${scanResult.metadata.device}
- Geographic Ingestion Node : ${scanResult.metadata.location}
- Structural Layer Edits    : ${scanResult.metadata.edited}

CORE FORENSIC ENGINE ANALYSIS:
1. High-frequency pixel density verification shows spatial discrepancies.
2. EXIF headers match synthetic structural signatures rather than sensor output.
3. GAN Generative patterns discovered inside facial coordinate grids.

-------------------------------------------------------------------
Classification Authority: Security Operations Center Node 142
Distributed Under Zero Log Infrastructure Policy. Secure Validation Key.
===================================================================`;

    const element = document.createElement("a");
    const file = new Blob([reportContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Forensic_Report_${scanResult.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const filteredHistory = history.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // ==========================================
  // RENDER COMPONENT
  // ==========================================
  return (
    <div className="app-wrapper">
      {/* 1. INTERACTIVE NAVBAR */}
      <nav className={`nav-v3 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-brand">
            <div className="logo-hex">
              <ShieldCheck className="logo-svg" />
            </div>
            <div className="brand-text">
              <h1>AI VISION <span>GUARD</span></h1>
              <small>Neural Forensic Intel v4.5</small>
            </div>
          </div>

          <div className={`nav-links-box ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#analysis" onClick={() => setIsMenuOpen(false)}>Analysis Hub</a>
            <a href="#activity" onClick={() => setIsMenuOpen(false)}>Audit Logs</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
            <a href="#architecture" onClick={() => setIsMenuOpen(false)}>Nodes</a>
          </div>

          <div className="nav-actions-desktop">
            <button className="nav-btn-sec">Terminal Login</button>
            <button className="nav-btn-pri" onClick={() => document.getElementById('analysis').scrollIntoView({ behavior: 'smooth' })}>Start Scan</button>
            <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO BANNER */}
      <header className="hero-v3" id="home">
        {carouselImages.map((imgUrl, idx) => (
          <div 
            key={idx}
            className={`hero-carousel-slide ${idx === currentBgIndex ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(to right, rgba(10, 15, 30, 0.92), rgba(10, 15, 30, 0.75)), url(${imgUrl})` }}
          />
        ))}
        <div className="hero-grid-bg"></div>
        <div className="hero-content-v3">
          <div className="hero-left">
            <div className="status-badge">
              <div className="dot pulse"></div> 
              Forensic Network Online: {counters.scanned.toLocaleString()} Node Operations Active
            </div>
            <h1 className="hero-title">
              Advanced Neural <span className="text-grad">Image & Deepfake Forensic</span> System
            </h1>
            <p className="hero-desc">
              Expose generative manipulations, facial coordinate tampering, and synthetic anomalies with an analytical image processing engine. Military grade validation parameters designed for modern threat tracking vectors.
            </p>
            <div className="hero-btns">
              <button className="btn-glow-pri" onClick={() => {setActiveTab('upload'); document.getElementById('analysis').scrollIntoView({ behavior: 'smooth' });}}>
                <Upload size={20} /> Deep Ingestion Scan
              </button>
              <button className="btn-glass-sec" onClick={() => {setActiveTab('compare'); document.getElementById('analysis').scrollIntoView({ behavior: 'smooth' });}}>
                <Layers size={20} /> Differential Compare
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="main-visual-box">
              <div className="scanning-bar"></div>
              <div className="placeholder-img-v3">
                <ImageIcon size={90} className="faded-icon" />
              </div>
              <div className="floating-ui-card">
                <ShieldAlert className="alert-icon" />
                <div>
                  <h4>Deepfake AI Signature</h4>
                  <div className="mini-progress"><div style={{width: '94.2%'}}></div></div>
                  <small>Confidence Factor: 94.2%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. ANALYSIS HUB */}
      <section className="analysis-hub" id="analysis">
        <div className="container">
          <div className="hub-header">
            <div className="header-icon"><Cpu /></div>
            <h2>Forensic Deep Ingestion Hub</h2>
            <p>Upload target architecture files to run state-of-the-art synthetic verification passes.</p>
          </div>

          <div className="hub-tabs">
            <button className={activeTab === 'upload' ? 'active' : ''} onClick={() => setActiveTab('upload')}>
              <Upload size={18} /> Asset Ingestion Scan
            </button>
            <button className={activeTab === 'compare' ? 'active' : ''} onClick={() => setActiveTab('compare')}>
              <Layers size={18} /> Differential Cross Engine
            </button>
          </div>

          <div className="analysis-workspace">
            {activeTab === 'upload' ? (
              <div className="upload-container animate-fade">
                <div className="drop-v3" onClick={() => document.getElementById('up-single').click()}>
                  <input type="file" id="up-single" hidden onChange={(e) => handleFileUpload(e, 'single')} accept="image/*" />
                  {singleFile ? (
                    <div className="preview-wrap">
                      <img src={singleFile} alt="Forensic Target Preview" className="scan-preview-img" />
                      <div className="preview-meta-pill">{singleFileName}</div>
                    </div>
                  ) : (
                    <div className="drop-content">
                      <div className="icon-circle-v3"><ImageIcon size={40} /></div>
                      <h3>Drag & Drop Forensic Analysis Sample</h3>
                      <p>Accepts RAW, JPEG, PNG, WEBP and Structural Media Formats</p>
                    </div>
                  )}
                </div>
                <button 
                  className={`btn-scan-action ${isAnalyzing ? 'loading' : ''}`} 
                  disabled={!singleFile || isAnalyzing}
                  onClick={runForensicScan}
                >
                  {isAnalyzing ? `COMPUTING ARTIFACT MATRICES ${analysisProgress}%` : 'INITIALIZE SYSTEM NEURAL AUDIT'}
                </button>
              </div>
            ) : (
              <div className="compare-container animate-fade">
                 <div className="compare-grid-v3">
                  <div className="compare-slot">
                    <h4>Source Profile (Original Reference)</h4>
                    <div className="mini-drop-v3" onClick={() => document.getElementById('up-orig').click()}>
                      <input type="file" id="up-orig" hidden onChange={(e) => handleFileUpload(e, 'original')} accept="image/*" />
                      {compareData.original ? (
                        <div className="inner-preview">
                          <img src={compareData.original} alt="Original Reference" />
                          <span>{compareData.originalName}</span>
                        </div>
                      ) : <div className="slot-empty-msg"><Upload size={24}/><span>Ingest Reference</span></div>}
                    </div>
                  </div>
                  <div className="compare-center-icon"><Zap className="pulse-fast" /></div>
                  <div className="compare-slot">
                    <h4>Target Profile (Suspicious Matrix)</h4>
                    <div className="mini-drop-v3" onClick={() => document.getElementById('up-suspect').click()}>
                      <input type="file" id="up-suspect" hidden onChange={(e) => handleFileUpload(e, 'suspect')} accept="image/*" />
                      {compareData.suspect ? (
                        <div className="inner-preview">
                          <img src={compareData.suspect} alt="Suspicious Target" />
                          <span>{compareData.suspectName}</span>
                        </div>
                      ) : <div className="slot-empty-msg"><Upload size={24}/><span>Ingest Suspect</span></div>}
                    </div>
                  </div>
                </div>
                <button className="btn-scan-action" disabled>Launching Differential Engines...</button>
              </div>
            )}

            {isAnalyzing && (
              <div className="analysis-overlay">
                <div className="analysis-status-card">
                  <Loader2 className="spin-v3-loader" size={54} />
                  <h3>{currentStep}</h3>
                  <div className="full-progress">
                    <div className="fill" style={{width: `${analysisProgress}%`}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. REPORT SECTION */}
          {showFullReport && scanResult && (
            <div className="forensic-report-v3 animate-slide-up">
              <div className="report-v3-header">
                <div className="report-title">
                  <FileText className="blue-icon" />
                  <div>
                    <h3>Deep Forensic Audit Inspection Report</h3>
                    <p>System Hash Index: {scanResult.id} • Generated Live</p>
                  </div>
                </div>
                <div className={`status-pill-v3 ${scanResult.risk === 'High' ? 'danger' : scanResult.risk === 'Medium' ? 'warning' : 'safe'}`}>
                  {scanResult.status}
                </div>
              </div>

              <div className="report-v3-body">
                <div className="report-stats-grid">
                  <div className="r-stat">
                    <span>Authenticity Vector Conf.</span>
                    <h4>{scanResult.score}%</h4>
                    <div className="mini-bar">
                      <div style={{
                        width: `${scanResult.score}%`, 
                        background: scanResult.score > 75 ? '#10b981' : scanResult.score > 40 ? '#f59e0b' : '#ef4444'
                      }}></div>
                    </div>
                  </div>
                  <div className="r-stat">
                    <span>Evaluated Threat Index</span>
                    <h4 style={{ color: scanResult.risk === 'High' ? '#ef4444' : scanResult.risk === 'Medium' ? '#f59e0b' : '#10b981' }}>
                      {scanResult.risk} Risk
                    </h4>
                  </div>
                  <div className="r-stat">
                    <span>Tamper Evidence Flag</span>
                    <h4>{scanResult.risk === 'High' ? 'CRITICAL DISCOVERY' : scanResult.risk === 'Medium' ? 'MODERATE ANOMALIES' : 'CLEAN MATRIX'}</h4>
                  </div>
                </div>

                <div className="report-metadata-sub-block">
                  <h5>Asset Ingestion Signature Metadata</h5>
                  <div className="meta-sub-grid">
                    <div><strong>Detected Device Profile:</strong> {scanResult.metadata.device}</div>
                    <div><strong>Ingest Point Location:</strong> {scanResult.metadata.location}</div>
                    <div><strong>Hex Manipulation Log:</strong> {scanResult.metadata.edited}</div>
                    <div><strong>Timestamp Reference:</strong> {scanResult.timestamp}</div>
                  </div>
                </div>

                <div className="report-findings">
                  <h5>Neural Network Log Observations:</h5>
                  <ul>
                    {scanResult.risk === 'High' ? (
                      <>
                        <li>Discovered recursive generative artifacts inside facial vector tracking coordinate maps.</li>
                        <li>High-frequency spatial pixel inconsistencies indicate deep neural pipeline blending steps.</li>
                        <li>EXIF header structural layouts do not match physical lens distortion parameters.</li>
                      </>
                    ) : scanResult.risk === 'Medium' ? (
                      <>
                        <li>Light compressed optimization transformations discovered inside quantization layers.</li>
                        <li>EXIF data flags modifications matching photo editing software layers.</li>
                      </>
                    ) : (
                      <>
                        <li>Pixel continuity matches natural physical sensor distribution mappings perfectly.</li>
                        <li>No metadata layer conflicts identified in structure.</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="report-v3-footer">
                <button className="btn-report-dl" onClick={handleDownloadReport}><Download size={16} /> Export Forensic Report</button>
                <button className="btn-report-save" onClick={() => alert("Audit log report systematically locked.")}><Save size={16} /> Lock To System History</button>
                <button className="btn-report-share" onClick={() => alert("Secure transmission token URL copied.")}><Share2 size={16} /> Generate Share Key</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. AUDIT HISTORY LOGS */}
      <section className="activity-dashboard" id="activity">
        <div className="container">
          <div className="dashboard-header">
            <div>
              <h2>Global Forensics Audit Log Ledger</h2>
              <p>Filter, trace, inspect, or purge live security transactions processed by the platform engine cores</p>
            </div>
            <div className="dashboard-tools">
              <div className="search-v3">
                <Search size={18} />
                <input 
                  type="text" 
                  value={searchTerm}
                  placeholder="Query Scan ID or Filename File..." 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="activity-list-v3">
            <div className="activity-table-head">
              <span>SCAN TARGET MATRIX FILE</span>
              <span>CLASSIFICATION TYPE</span>
              <span>AUTHENTICITY VALUE</span>
              <span>AUDIT GENERATION TIMESTAMP</span>
              <span>LEDGER ACTIONS</span>
            </div>
            {filteredHistory.length > 0 ? (
              filteredHistory.map((item) => (
                <div className="activity-row-v3" key={item.id} onClick={() => handleViewRecord(item)}>
                  <div className="target-cell">
                    <div className="target-icon"><ImageIcon size={18}/></div>
                    <div>
                      <p className="file-name-v3">{item.name}</p>
                      <small>HASH: {item.id}</small>
                    </div>
                  </div>
                  <div className="status-cell">
                    <span className={`pill-v3 ${item.type.toLowerCase()}`}>{item.type}</span>
                  </div>
                  <div className="score-cell">
                    <strong>{item.score}%</strong>
                  </div>
                  <div className="date-cell">{item.date || item.timestamp}</div>
                  <div className="actions-cell">
                    <button className="icon-btn-v3 view" onClick={(e) => { e.stopPropagation(); handleViewRecord(item); }}><Eye size={17}/></button>
                    <button className="icon-btn-v3 trash" onClick={(e) => handleDeleteRecord(item.id, e)}><Trash2 size={17}/></button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-ledger-state-msg">
                <ShieldAlert size={36} />
                <p>No verified tracking records align with your query selection constraints.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. SYSTEM NETWORK ARCHITECTURE */}
      <section className="architecture-section" id="architecture">
        <div className="container">
          <div className="hub-header">
            <div className="header-icon"><Server /></div>
            <h2>Distributed System Architecture</h2>
            <p>Monitored matrix computing parameters across global validation endpoints.</p>
          </div>
          <div className="arch-system-grid">
            <div className="arch-node-status-card">
              <div className="node-card-header">
                <Globe size={20} className="node-net-icon" />
                <h4>Global Decentralized Node Array</h4>
              </div>
              <p>Dynamic image ingestion processes split computational matrix calculations into secure processing hashes across isolated regions globally.</p>
              <div className="mini-node-status-list">
                <div className="node-status-row"><span className="indicator active"></span><span>Node-Asia-East-1 (Mumbai)</span><strong>98.4% Load</strong></div>
                <div className="node-status-row"><span className="indicator active"></span><span>Node-EU-Central-2 (Frankfurt)</span><strong>41.2% Load</strong></div>
              </div>
            </div>
            <div className="arch-node-status-card">
              <div className="node-card-header">
                <CheckCircle size={20} className="node-net-icon" />
                <h4>Platform Operational Integrity</h4>
              </div>
              <p>The neural engine uses differential scalar algorithms to track discrepancies between generated structural noise fields and typical physical sensors.</p>
              <div className="arch-progress-stack">
                <div className="arch-progress-item"><span>GAN Detection Engine</span><div className="progress-track-bar"><div style={{width: '99.4%'}}></div></div></div>
                <div className="arch-progress-item"><span>EXIF Structural Parser</span><div className="progress-track-bar"><div style={{width: '98.9%'}}></div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="container">
          <div className="hub-header">
            <div className="header-icon"><MessageSquare /></div>
            <h2>Enterprise Field Valuations</h2>
          </div>
          <div className="testimonial-slider-box">
            <div className="testimonial-main-card animate-fade">
              <div className="stars-row">
                {[...Array(testimonials[activeReview].rating)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p className="testimonial-main-text">"{testimonials[activeReview].text}"</p>
              <div className="testimonial-profile-author">
                <strong>{testimonials[activeReview].name}</strong>
                <span>{testimonials[activeReview].role}, {testimonials[activeReview].org}</span>
              </div>
            </div>
            <div className="slider-navigation-dots-row">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`slider-nav-dot-btn ${index === activeReview ? 'active' : ''}`}
                  onClick={() => setActiveReview(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="how-it-works" id="how">
        <div className="container">
          <div className="hub-header">
            <h2>Algorithmic Validation Protocol</h2>
          </div>
          <div className="timeline-grid">
            {[
              { icon: <Upload />, title: "Secure Ingestion", desc: "Isolates image arrays into memory buffers under SHA-256 validation tokens." },
              { icon: <Search />, title: "Discrepancy Audit", desc: "Parses meta components, hex structure profiles, and camera model discrepancies." },
              { icon: <Cpu />, title: "Neural Verification", desc: "Executes deep learning multi-layered matrix evaluations to map synthetic content patterns." },
              { icon: <FileText />, title: "Cryptographic Reports", desc: "Generates explicit audit verdicts with validation confidence tracking indices." }
            ].map((step, i) => (
              <div className="timeline-card" key={i}>
                <div className="step-num">{i + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LIVE STATS */}
      <section className="live-stats-v3">
        <div className="stat-v3-item">
          <Activity className="stat-v3-icon" />
          <h3>{(counters.scanned / 1000000).toFixed(4)}M</h3>
          <p>Forensic Scans Executed</p>
        </div>
        <div className="stat-v3-item">
          <ShieldAlert className="stat-v3-icon" />
          <h3>{counters.deepfakes.toLocaleString()}</h3>
          <p>Synthetic Exploits Neutralized</p>
        </div>
        <div className="stat-v3-item">
          <Globe className="stat-v3-icon" />
          <h3>142</h3>
          <p>Global Verification Endpoints</p>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="footer-v3">
        <div className="footer-v3-top">
          <div className="footer-v3-brand">
            <div className="nav-brand">
              <ShieldCheck className="logo-svg" />
              <h1>AI VISION <span>GUARD</span></h1>
            </div>
            <p>The global system authority for tracking deepfakes and digital media alterations. Trusted across security platforms and multi-region legal systems.</p>
          </div>
          <div className="footer-v3-links">
            <div className="link-col">
              <h4>Platform Engines</h4>
              <a href="#analysis">Neural Scan Center</a>
              <a href="#architecture">API Gateway Node</a>
            </div>
            <div className="link-col">
              <h4>Technical Specs</h4>
              <a href="#home">Core Engine Models</a>
              <a href="#reviews">Case Verification</a>
            </div>
          </div>
        </div>
        <div className="footer-v3-bottom">
          <p>© 2026 AI Vision Guard Core. Forensic Security Matrix Division.</p>
          <div className="social-tray">
            <button className="soc-btn">GitHub Enterprise</button>
            <button className="soc-btn">Secure Matrix Link</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;