"""
CORE URL CONFIGURATION - NEURAL FORENSIC SUITE
==============================================
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/stable/topics/http/urls/

This file serves as the primary router, directing traffic between the 
Forensic Admin Dashboard and the Neural Ingestion API.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# Professional UI Customization for the Django Admin
admin.site.site_header = "AI Vision Guard: Admin Portal"
admin.site.site_title = "Forensic Audit Suite"
admin.site.index_title = "Global Scan Management"

urlpatterns = [
    # 1. THE ADMINISTRATIVE CONTROL CENTER
    # Access this at http://127.0.0.1:8000/admin/
    path('admin/', admin.site.urls),
    
    # 2. NEURAL API ENDPOINTS
    # Route all 'api/' prefixed requests to your 'api' app's internal urls.py.
    # This maintains a clean separation between the 'Core' and the 'Engine'.
    # URL: http://127.0.0.1:8000/api/
    path('api/', include('api.urls')),
    
    # (Future expansion: You can add authentication or separate analytics routes here)
]

# ==========================================================================
# MEDIA & STATIC ASSET ROUTING
# ==========================================================================
# In a development environment (DEBUG=True), Django needs to be told 
# explicitly how to serve files from the 'media/' folder. 
# Without this, your React frontend won't be able to display the 
# uploaded forensic samples.
# ==========================================================================

if settings.DEBUG:
    # Serving Media Files (User Uploads)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
    # Serving Static Files (CSS, JS, Admin Icons)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)