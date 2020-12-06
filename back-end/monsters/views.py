from rest_framework import generics
from .models import Monster
from .serializers import MonsterSerializer

class MonsterList(generics.ListCreateAPIView):
    queryset = Monster.objects.all()
    serializer_class = MonsterSerializer

class MonsterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Monster.objects.all()
    serializer_class = MonsterSerializer
