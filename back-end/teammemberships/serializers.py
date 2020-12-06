from rest_framework import serializers
from .models import Teammembership

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teammembership
        fields = ('id', 'monster', 'user')