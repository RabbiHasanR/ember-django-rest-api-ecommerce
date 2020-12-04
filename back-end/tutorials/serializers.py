from rest_framework import serializers
from .models import Tutorial

class TutorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutorial
        fields = ('id', 'title', 'video_url', 'description', 'transcript', 'publish_date',
                    'created_at', 'updated_at', 'thumbnail_image', 'permalink', 'free', 'difficulty', 'difficulties')