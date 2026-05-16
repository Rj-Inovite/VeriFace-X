from django.urls import path
from .views import DeepForensicScanner

urlpatterns = [
    # Endpoint for the "Drop" zone in React
    # Matches: http://127.0.0.1:8000/api/scan/
    path('scan/', DeepForensicScanner.as_view(), name='scan-upload'),
    
    # Endpoint for the "Activity Ledger" table in React
    # Matches: http://127.0.0.1:8000/api/history/
    path('history/', DeepForensicScanner.as_view(), name='scan-history'),
]