from django.urls import path
from .views import (ProductDetail, ProductList, PriceList,
                    FeatureList,ColorList)

urlpatterns = [
    path('products/<int:pk>/', ProductDetail.as_view()),
    path('products/', ProductList.as_view()),
    path('prices/', PriceList.as_view()),
    path('features/', FeatureList.as_view()),
    path('colors/', ColorList.as_view()),
]