from rest_framework import generics

from .models import Product, Price, Feature, Color
from .serializers import ProductSerializer, PriceSerializer, FeatureSerializer, ColorSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class PriceList(generics.ListCreateAPIView):
    queryset = Price.objects.all()
    serializer_class = PriceSerializer

# class PriceDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Price.objects.all()
#     serializer_class = PriceSerializer

# class FeatureDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Feature.objects.all()
#     serializer_class = FeatureSerializer

class FeatureList(generics.ListCreateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

# class ColorDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Color.objects.all()
#     serializer_class = ColorSerializer

class ColorList(generics.ListCreateAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
