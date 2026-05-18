import { useState } from 'react';
import { ShieldAlert, Download, Cpu, HardDrive, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

const Report = () => {
  const [sampleReport] = useState({
    hashId: "TL-9942-X",
    timestamp: new Date().toLocaleString(),
    filename: "source_intercept_manifest.png",
    verdict: "DEEPFAKE GENERATED ARTIFACTS FOUND",
    confidence: 97.4,
    riskLevel: "High Risk",
    metrics: {
      pixelInconsistency: "Critical Failure (GAN Pattern Detected)",
      metadataIntegrity: "Stripped/Modified EXIF Layer Data",
      biometricStructure: "94.1% Geometric Landmark Shift",
    }
  });

  return (
    <div style={styles.container} id="report">
      <div style={styles.card}>

        {/* Header Block */}
        <div style={styles.header}>
          <div style={styles.titleGroup}>
            <FileText style={styles.headerIcon} />
            <div>
              <h2 style={styles.title}>Neural Forensic Ledger Report</h2>
              <p style={styles.subtitle}>
                Audit Reference: <span style={styles.codeText}>{sampleReport.hashId}</span>
              </p>
            </div>
          </div>
          <div style={styles.badgeDanger}>{sampleReport.riskLevel}</div>
        </div>

        {/* Verdict Callout Banner */}
        <div style={styles.verdictSection}>
          <ShieldAlert style={styles.alertIcon} />
          <div>
            <h4 style={styles.verdictTitle}>{sampleReport.verdict}</h4>
            <p style={styles.verdictSubtitle}>
              System Analysis Integrity Assurance: {sampleReport.confidence}% match threshold
            </p>
          </div>
        </div>

        {/* Data Architecture Grid */}
        <div style={styles.grid}>
          <div style={styles.gridItem}>
            <div style={styles.itemHeader}>
              <Cpu style={styles.metricIcon} />
              <span>Pixel Map Discrepancies</span>
            </div>
            <p style={styles.metricValue}>{sampleReport.metrics.pixelInconsistency}</p>
          </div>
          <div style={styles.gridItem}>
            <div style={styles.itemHeader}>
              <HardDrive style={styles.metricIcon} />
              <span>EXIF Verification Structure</span>
            </div>
            <p style={styles.metricValue}>{sampleReport.metrics.metadataIntegrity}</p>
          </div>
        </div>

        {/* Extended Findings Details */}
        <div style={styles.findingsBox}>
          <h4 style={styles.findingsTitle}>Algorithmic Observation Matrix Logs</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <AlertTriangle style={styles.listIconDanger} />
              Generative Adversarial Network architecture parameters identified within primary image channels.
            </li>
            <li style={styles.listItem}>
              <CheckCircle2 style={styles.listIconSafe} />
              Spatial consistency validation passes complete across multi-node checkpoints.
            </li>
          </ul>
        </div>

        {/* Footer Action Bar */}
        <div style={styles.footer}>
          <p style={styles.timestampText}>Logged: {sampleReport.timestamp}</p>
          <button
            style={styles.downloadBtn}
            onClick={() => alert("Downloading encrypted audit transcript...")}
          >
            <Download size={16} /> Export Forensic Log
          </button>
        </div>

      </div>
    </div>
  );
};

/* Component Embedded Clean Dark Theme Styles */
const styles = {
  container: {
    background: '#0a0c10',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 20px 40px 20px',
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    background: '#11141a',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '850px',
    padding: '2.5rem',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '1.5rem',
    marginBottom: '2rem',
  },
  titleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  headerIcon: {
    color: '#00f0ff',
    width: '32px',
    height: '32px',
  },
  title: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: 0,
  },
  subtitle: {
    color: '#718096',
    fontSize: '0.875rem',
    margin: '4px 0 0 0',
  },
  codeText: {
    color: '#00f0ff',
    fontFamily: 'monospace',
  },
  badgeDanger: {
    background: 'rgba(239, 68, 68, 0.1)',
    color: '#ef4444',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  verdictSection: {
    background: 'rgba(239, 68, 68, 0.03)',
    borderLeft: '4px solid #ef4444',
    padding: '1.25rem',
    borderRadius: '0 8px 8px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    marginBottom: '2rem',
  },
  alertIcon: {
    color: '#ef4444',
    width: '28px',
    height: '28px',
    flexShrink: 0,
  },
  verdictTitle: {
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: '600',
    margin: 0,
  },
  verdictSubtitle: {
    color: '#a0aec0',
    fontSize: '0.85rem',
    margin: '4px 0 0 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  gridItem: {
    background: '#0e1117',
    border: '1px solid rgba(255, 255, 255, 0.03)',
    borderRadius: '8px',
    padding: '1.25rem',
  },
  itemHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#718096',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  metricIcon: {
    color: '#00f0ff',
    width: '16px',
    height: '16px',
  },
  metricValue: {
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: '500',
    margin: 0,
  },
  findingsBox: {
    background: '#0e1117',
    border: '1px solid rgba(255, 255, 255, 0.03)',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '2rem',
  },
  findingsTitle: {
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '600',
    margin: '0 0 1rem 0',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    color: '#a0aec0',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  },
  listIconDanger: {
    color: '#ef4444',
    width: '16px',
    height: '16px',
    marginTop: '3px',
    flexShrink: 0,
  },
  listIconSafe: {
    color: '#10b981',
    width: '16px',
    height: '16px',
    marginTop: '3px',
    flexShrink: 0,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '1.5rem',
  },
  timestampText: {
    color: '#4a5568',
    fontSize: '0.8rem',
    margin: 0,
    fontFamily: 'monospace',
  },
  downloadBtn: {
    background: 'transparent',
    color: '#00f0ff',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    padding: '0.5rem 1.2rem',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease',
  },
};

export default Report;

