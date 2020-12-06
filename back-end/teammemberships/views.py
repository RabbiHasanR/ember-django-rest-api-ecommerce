from rest_framework import generics
from .models import Teammembership
from .serializers import TeamSerializer

class TeamList(generics.ListCreateAPIView):
    queryset = Teammembership.objects.all()
    serializer_class = TeamSerializer

class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teammembership.objects.all()
    serializer_class = TeamSerializer
