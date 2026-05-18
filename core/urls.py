"""
==========================================================================
CORE URL CONFIGURATION - TRUTHLENS AI FORENSIC SUITE v6.5
==========================================================================
The primary routing hub that manages traffic between the React Frontend,
the Neural Ingestion API, and the physical Forensic Media Vault.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
import logging

# Initialize logger to track URL routing issues
logger = logging.getLogger("core_router")

# Professional UI Customization for the Django Admin Dashboard
admin.site.site_header = "TruthLens AI: Forensic Admin Portal"
admin.site.site_title = "Neural Audit Suite"
admin.site.index_title = "Global Forensic Scan Management"

urlpatterns = [
    # ----------------------------------------------------------------------
    # 1. ADMINISTRATIVE CONTROL CENTER
    # ----------------------------------------------------------------------
    # Management interface for viewing the ScanRecord database.
    # Access: http://127.0.0.1:8000/admin/
    path('admin/', admin.site.urls),
    
    # ----------------------------------------------------------------------
    # 2. NEURAL API ENDPOINTS (The Ingestion Engine)
    # ----------------------------------------------------------------------
    # Routes all 'api/' traffic to the api/urls.py file.
    # This separates the project core from the forensic logic.
    # Access: http://127.0.0.1:8000/api/scan/
    path('api/', include('api.urls')),
    
    # ----------------------------------------------------------------------
    # 3. FUTURE SCALABILITY
    # ----------------------------------------------------------------------
    # Placeholder for authentication or real-time websocket monitoring.
]

# ==========================================================================
# MEDIA & STATIC ASSET ROUTING (The "Bridge")
# ==========================================================================
# In development (DEBUG=True), Django must explicitly map the 'media/' folder
# to a URL so the React Frontend and the OpenCV engine can access images.
# ==========================================================================

if settings.DEBUG:
    # Serving Forensic Media (The images you upload for scanning)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
    # Serving Static Assets (Admin icons, CSS, system scripts)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    
    # Debug message to console on server start
    print(f"\n[SYSTEM] Forensic Media Bridge Established: {settings.MEDIA_ROOT}")
    print(f"[SYSTEM] Routing established for: http://127.0.0.1:8000/api/\n")

# ==========================================================================
# END OF CORE URL CONFIGURATION
# ==========================================================================