from django.db import models
import uuid

# ==========================================================================
# SCAN RECORD MODEL
# This model acts as the permanent database ledger for every user scan.
# ==========================================================================

class ScanRecord(models.Model):
    # 1. PRIMARY IDENTITY
    # Using UUID makes the ID look more professional (e.g., 550e8400-e29b...)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # 2. FILE DATA
    # upload_to creates a dynamic folder structure by year/month/day
    image = models.ImageField(upload_to='scans/%Y/%m/%d/')
    file_name = models.CharField(max_length=255)
    file_size = models.CharField(max_length=50) # e.g., "4.2 MB"
    
    # 3. ANALYSIS RESULTS
    STATUS_CHOICES = [
        ('real', 'Secure / Valid'),
        ('fake', 'Threat / Deepfake'),
        ('modified', 'Altered / Warning'),
    ]
    status = models.CharField(
        max_length=10, 
        choices=STATUS_CHOICES, 
        default='real'
    )
    
    # Confidence score from the AI (0.0 to 100.0)
    confidence_score = models.FloatField(default=0.0)
    
    # Unique system hash for forensic tracking
    system_hash = models.CharField(max_length=100, blank=True, null=True)

    # 4. METADATA
    # auto_now_add automatically records the exact second of the scan
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # This ensures your "History Ledger" table shows the latest scans first
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.file_name} [{self.status}]"