from django.urls import path
from .views import MonsterList, MonsterDetail

urlpatterns = [
    path('<int:pk>/', MonsterDetail.as_view()),
    path('', MonsterList.as_view()),
]