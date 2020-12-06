from django.urls import path
from .views import TeamList, TeamDetail

urlpatterns = [
    path('<int:pk>/', TeamDetail.as_view()),
    path('', TeamList.as_view()),
]