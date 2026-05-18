from rest_framework import serializers
from .models import ScanRecord
import os

class ScanRecordSerializer(serializers.ModelSerializer):
    """
    ==========================================================================
    NEURAL DATA TRANSFORMER (SERIALIZER)
    ==========================================================================
    Handles the bridge between the binary forensic data and the React UI.
    Includes advanced validation and virtual field mapping.
    """
    
    # 1. READ-ONLY ARCHITECTURAL FIELDS
    # These are calculated by the backend 'Engine', not sent by the user.
    status_label = serializers.CharField(source='get_status_display', read_only=True)
    risk_color = serializers.SerializerMethodField()
    formatted_date = serializers.DateTimeField(
        source='created_at', 
        format="%b %d, %Y | %H:%M", 
        read_only=True
    )
    
    # Ensure these are read_only so a user can't "fudge" their own score via API
    status = serializers.CharField(read_only=True)
    confidence_score = serializers.FloatField(read_only=True)
    system_hash = serializers.CharField(read_only=True)

    class Meta:
        model = ScanRecord
        fields = [
            'id', 'system_hash', 'image', 'file_name', 'file_size', 
            'status', 'status_label', 'confidence_score', 'risk_level', 
            'risk_color', 'engine_version', 'processing_time', 
            'formatted_date', 'created_at'
        ]

    # 2. ADVANCED VIRTUAL MAPPING
    def get_risk_color(self, obj):
        """
        Maps risk levels to specific Hex codes for the React UI.
        This allows the backend to control the 'Vibe' of the frontend.
        """
        mapping = {
            'LOW': '#00F0FF',      # Electric Blue (Authentic)
            'MEDIUM': '#FFAB00',   # Amber (Warning)
            'HIGH': '#FF003C',     # Crimson (Threat)
        }
        return mapping.get(obj.risk_level, '#FFFFFF')

    # 3. SECURITY & INTEGRITY VALIDATION
    def validate_image(self, value):
        """
        Multi-stage security check for the ingested binary stream.
        """
        # A. Size Constraint (Preventing Buffer Overflows)
        limit_mb = 10
        if value.size > limit_mb * 1024 * 1024:
            raise serializers.ValidationError(
                f"Ingestion Error: Forensic asset exceeds {limit_mb}MB threshold."
            )

        # B. Extension Validation (Security Sandbox)
        ext = os.path.splitext(value.name)[1].lower()
        valid_extensions = ['.jpg', '.jpeg', '.png', '.webp']
        if not ext in valid_extensions:
            raise serializers.ValidationError(
                "Unsupported Binary: Only JPG, PNG, and WEBP assets are accepted."
            )

        return value

    def validate(self, data):
        """
        Object-level validation to ensure metadata consistency.
        """
        if not data.get('file_name'):
            # Fallback if the frontend forgot to send a name
            data['file_name'] = "UNNAMED_FORENSIC_ASSET"
        
        return data

    # 4. REPRESENTATION REFINEMENT
    def to_representation(self, instance):
        """
        Final pass to 'Clean up' the JSON before it hits the network.
        We can use this to make the status look more professional.
        """
        representation = super().to_representation(instance)
        
        # Force Uppercase for that "Military Grade" look
        representation['file_name'] = representation['file_name'].upper()
        
        return representation