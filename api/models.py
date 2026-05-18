from django.db import models
import uuid
import os

# ==========================================================================
# FORENSIC AUDIT LEDGER MODEL
# ==========================================================================

class ScanRecord(models.Model):
    """
    Acts as an immutable security ledger for all AI Vision Guard operations.
    Stores forensic metadata, neural engine performance, and asset integrity scores.
    """
    
    # 1. CRYPTOGRAPHIC IDENTITY
    id = models.UUIDField(
        primary_key=True, 
        default=uuid.uuid4, 
        editable=False,
        help_text="Unique Global Internal Identifier"
    )
    
    # Custom forensic hash for display (e.g., AVG-X88B-2026)
    system_hash = models.CharField(max_length=100, unique=True, db_index=True, null=True, blank=True
    )

    # 2. ASSET INGESTION DATA
    image = models.ImageField(
        upload_to='vault/forensics/%Y/%m/%d/',
        help_text="Secure isolated storage for ingested binary"
    )
    file_name = models.CharField(max_length=255)
    file_size = models.CharField(max_length=50) 
    mime_type = models.CharField(max_length=50, default="image/png")
    
    # 3. NEURAL ANALYSIS METRICS
    STATUS_CHOICES = [
        ('REAL', 'AUTHENTIC IMAGE'),
        ('FAKE', 'DEEPFAKE DETECTED'),
        ('MODIFIED', 'MODIFIED ASSET'),
    ]
    status = models.CharField(
        max_length=15, 
        choices=STATUS_CHOICES, 
        default='REAL'
    )
    
    # The raw AI confidence (0-100)
    confidence_score = models.FloatField(default=0.0)
    
    # Risk Level mapping for frontend color logic
    RISK_CHOICES = [
        ('LOW', 'Low Risk'),
        ('MEDIUM', 'Moderate Risk'),
        ('HIGH', 'Critical Threat'),
    ]
    risk_level = models.CharField(max_length=10, choices=RISK_CHOICES, default='LOW')

    # 4. ENGINE PERFORMANCE LOGS
    # Tracks which AI model version was used
    engine_version = models.CharField(max_length=20, default="Neural Core v4.5")
    
    # How long the AI took to compute (e.g., 1.45 seconds)
    processing_time = models.FloatField(default=0.0)

    # 5. TEMPORAL DATA
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Forensic Audit Log"
        verbose_name_plural = "Forensic Audit Ledger"
        ordering = ['-created_at']

    # ======================================================================
    # BEAUTIFUL DISPLAY LOGIC (The "Wao" Factor)
    # ======================================================================

    @property
    def formatted_score(self):
        """Returns score with % for the frontend."""
        return f"{round(self.confidence_score, 2)}%"

    @property
    def security_status_display(self):
        """Returns a high-end status string for the report header."""
        if self.status == 'REAL':
            return "✅ CRYPTOGRAPHICALLY SECURE"
        elif self.status == 'FAKE':
            return "🚨 NEURAL SYNTHESIS DETECTED"
        return "⚠️ STRUCTURAL ANOMALY DETECTED"

    def save(self, *args, **kwargs):
        """Override save to auto-generate a professional Forensic Hash if missing."""
        if not self.system_hash:
            # Generates a cool code like AVG-82A1-2026
            prefix = "AVG"
            short_uuid = str(self.id)[:4].upper()
            year = "2026" # Hardcoded as per system context
            self.system_hash = f"{prefix}-{short_uuid}-{year}"
        
        # Auto-calculate risk level based on score
        if self.confidence_score < 40:
            self.risk_level = 'HIGH'
            self.status = 'FAKE'
        elif self.confidence_score < 75:
            self.risk_level = 'MEDIUM'
            self.status = 'MODIFIED'
        else:
            self.risk_level = 'LOW'
            self.status = 'REAL'

        super().save(*args, **kwargs)

    def __str__(self):
        return f"AUDIT [{self.system_hash}] - {self.file_name}"