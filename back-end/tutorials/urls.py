from django.urls import path
from .views import TutorialList, TutorialDetail

urlpatterns = [
    path('<int:pk>/', TutorialDetail.as_view()),
    path('', TutorialList.as_view()),
]