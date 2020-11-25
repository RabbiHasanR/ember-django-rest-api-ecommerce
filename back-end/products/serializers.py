from rest_framework import serializers

from .models import Product, Price, Feature, Color

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ('product', 'original', 'current')

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ('id', 'product', 'name')

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ('id','product', 'color', 'image')

class ProductSerializer(serializers.ModelSerializer):
    price = PriceSerializer(many=False)
    features = FeatureSerializer(many=True)
    colors = ColorSerializer(many=True)
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'features', 'colors')
    
