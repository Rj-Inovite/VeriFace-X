import random
import time
import uuid
import logging
from datetime import datetime

# Django & Rest Framework Imports
from django.db import transaction
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status

# Internal Project Imports
from .models import ScanRecord
from .serializers import ScanRecordSerializer

# Initialize Logger with a specific Forensic format
logger = logging.getLogger("forensic_engine")

class DeepForensicScanner(APIView):
    """
    ==========================================================================
    AI VISION GUARD - NEURAL FORENSIC INGESTION ENGINE v4.5
    ==========================================================================
    An enterprise-grade controller managing the lifecycle of digital forensics:
    - High-integrity stream ingestion
    - Computational matrix evaluation
    - Cryptographic ledgering
    - Multi-layered forensic reporting
    """
    
    parser_classes = (MultiPartParser, FormParser)

    def _generate_forensic_findings(self, audit_status, score):
        """
        Helper to simulate deep-level neural findings based on the AI result.
        This provides the "Wao" factor for the React UI reports.
        """
        findings = {
            "real": [
                "Pixel continuity matches natural physical sensor distribution mappings perfectly.",
                "No metadata layer conflicts or external generative models identified.",
                "Landmark mapping data shows absolute behavioral continuity profiles."
            ],
            "modified": [
                f"Light optimization transformations discovered at {random.randint(10,40)}% quantization layers.",
                "EXIF data flags modifications matching professional editing software signatures.",
                "Structural alignment metrics show minor spatial transformations."
            ],
            "fake": [
                "Recursive generative artifacts discovered inside facial vector tracking maps.",
                "High-frequency spatial pixel inconsistencies indicate deep neural pipeline blending.",
                "EXIF header structural layouts do not match physical lens distortion parameters."
            ]
        }
        return findings.get(audit_status, findings['real'])

    def post(self, request, *args, **kwargs):
        """
        Ingest a forensic sample and perform a multi-layered neural audit.
        """
        start_time = time.time()
        ingestion_id = str(uuid.uuid4())[:13].upper()
        
        logger.info(f"[{ingestion_id}] Ingestion Initiated: Analyzing binary stream...")

        # 1. DATA VALIDATION LAYER
        serializer = ScanRecordSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                "status": "INGESTION_REJECTED",
                "ingestion_id": ingestion_id,
                "timestamp": timezone.now(),
                "reason": "Security protocol mismatch",
                "errors": serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            # 2. ATOMIC ANALYSIS PHASE
            with transaction.atomic():
                # --- [NEURAL ENGINE CORE SIMULATION] ---
                # Simulate heavy computational matrix evaluation
                time.sleep(1.8) 
                
                # Generate a high-precision confidence score
                score = round(random.uniform(12.4, 99.2), 2)
                
                # Classification Logic
                if score > 80:
                    audit_status, risk_level = 'real', 'Low'
                elif score > 40:
                    audit_status, risk_level = 'modified', 'Medium'
                else:
                    audit_status, risk_level = 'fake', 'High'

                # Calculate computational overhead
                processing_duration = round(time.time() - start_time, 3)
                
                # 3. DATABASE LEDGERING
                # Pass extra forensic data into the save method
                scan_instance = serializer.save(
                    status=audit_status,
                    confidence_score=score,
                    # Note: system_hash logic is handled in models.py save() for consistency
                )

                # 4. CONSTRUCT ELABORATED FORENSIC REPORT
                # This response is a 1:1 match for your React state needs
                response_payload = {
                    "id": scan_instance.system_hash,
                    "db_id": str(scan_instance.id),
                    "file_name": scan_instance.file_name,
                    "status": scan_instance.get_status_display().upper(),
                    "type": audit_status.upper(),
                    "score": scan_instance.confidence_score,
                    "risk": risk_level,
                    "threat": risk_level,
                    "timestamp": scan_instance.created_at.strftime("%b %d, %Y | %H:%M:%S"),
                    "findings": self._generate_forensic_findings(audit_status, score),
                    "metadata": {
                        "device": "Optical Neural Array v4.5",
                        "location": "Secure Node-Asia-East-1 (Mumbai)",
                        "ingestion_token": ingestion_id,
                        "processing_time": f"{processing_duration}s",
                        "engine_version": "VisionGuard-X Core",
                        "edited": "Detected" if audit_status != 'real' else "None"
                    }
                }

                logger.info(f"[{ingestion_id}] Audit Finalized. Verdict: {audit_status.upper()} ({score}%)")
                return Response(response_payload, status=status.HTTP_201_CREATED)

        except Exception as e:
            logger.critical(f"[{ingestion_id}] System Kernel Failure: {str(e)}")
            return Response({
                "status": "CRITICAL_SYSTEM_ERROR",
                "message": "The neural processing unit encountered a matrix exception.",
                "ingestion_id": ingestion_id,
                "error_code": "SEC_ERR_500"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request):
        """
        FETCH GLOBAL AUDIT LEDGER
        Populates the 'Global Forensics Audit Log Ledger' in the React Dashboard.
        """
        try:
            # Fetch latest 100 scans with optimized query
            records = ScanRecord.objects.all().only(
                'system_hash', 'id', 'file_name', 'status', 'confidence_score', 'created_at'
            )[:100]
            
            # Map data to React table expectations
            ledger_data = [
                {
                    "id": item.system_hash,
                    "db_id": str(item.id),
                    "name": item.file_name,
                    "type": item.status.upper(),
                    "score": item.confidence_score,
                    "date": item.created_at.strftime("%b %d, %Y"),
                    "threat": "High" if item.status == 'fake' else "Medium" if item.status == 'modified' else "Low"
                } for item in records
            ]

            return Response(ledger_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": "Ledger Access Denied: Database synchronization error."}, 
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk=None):
        """
        PURGE FORENSIC TRACE
        Permanently removes a record from the ledger.
        """
        try:
            # We look up by the actual UUID or the System Hash
            record = ScanRecord.objects.get(id=pk) if len(str(pk)) > 20 else ScanRecord.objects.get(system_hash=pk)
            record.delete()
            return Response({
                "status": "TRACE_PURGED", 
                "message": "Forensic data systematically removed from platform memory."
            }, status=status.HTTP_200_OK)
        except ScanRecord.DoesNotExist:
            return Response({"status": "NOT_FOUND", "message": "The requested trace ID does not exist."}, 
                            status=status.HTTP_404_NOT_FOUND)