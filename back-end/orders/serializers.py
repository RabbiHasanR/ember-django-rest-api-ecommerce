from rest_framework import serializers

from .models import Order, Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('color', 'count', 'image', 'name', 'price')

class OrderSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    class Meta: 
        model = Order
        fields = ('id', 'name', 'email', 'address', 'total_price', 'created_at', 'items')
    
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        print('items data:', items_data)
        order = Order.objects.create(**validated_data)
        print('Order:', order)
        for item_data in items_data:
            Item.objects.create(order=order, **item_data)
        return order