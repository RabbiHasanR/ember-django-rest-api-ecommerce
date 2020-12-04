from rest_framework import generics
from .models import Tutorial
from .serializers import TutorialSerializer

class TutorialList(generics.ListCreateAPIView):
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer

class TutorialDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer
