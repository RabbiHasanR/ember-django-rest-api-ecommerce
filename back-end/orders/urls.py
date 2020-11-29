from django.urls import path
from .views import (ItemList, ItemDetail, OrderList,
                    OrderDetail)

urlpatterns = [
    path('<int:pk>/', OrderDetail.as_view()),
    path('', OrderList.as_view()),
    path('items/', ItemList.as_view()),
    path('items/<int:pk>/', ItemDetail.as_view()),
]