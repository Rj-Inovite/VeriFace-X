"""
==========================================================================
API URL CONFIGURATION - TRUTHLENS FORENSIC ENGINE
==========================================================================
Maintains the internal routing for the Neural Ingestion Engine.
Connects the React "Drop Zone" and "History Ledger" to the Forensic Core.
"""

from django.urls import path
from .views import DeepForensicScanner

# Professional Namespace (Optional but recommended for modularity)
app_name = 'forensic_api'

urlpatterns = [
    # ----------------------------------------------------------------------
    # 1. NEURAL INGESTION ENDPOINT (POST)
    # ----------------------------------------------------------------------
    # Used by React to upload images for forensic auditing.
    # URL: http://127.0.0.1:8000/api/scan/
    path('scan/', DeepForensicScanner.as_view(), name='scan-upload'),
    
    # ----------------------------------------------------------------------
    # 2. GLOBAL AUDIT LEDGER ENDPOINT (GET)
    # ----------------------------------------------------------------------
    # Used by React to populate the 'Forensic History' table.
    # URL: http://127.0.0.1:8000/api/history/
    path('history/', DeepForensicScanner.as_view(), name='scan-history'),

    # ----------------------------------------------------------------------
    # 3. TRACE PURGE ENDPOINT (DELETE)
    # ----------------------------------------------------------------------
    # Used by React to delete a specific record from the ledger.
    # URL: http://127.0.0.1:8000/api/delete/<system_hash>/
    path('delete/<str:pk>/', DeepForensicScanner.as_view(), name='scan-delete'),
]

# ==========================================================================
# END OF API ROUTING
# ==========================================================================