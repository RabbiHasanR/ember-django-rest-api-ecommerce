from django.contrib import admin

from .models import Product, Price, Feature, Color

# Register your models here.
admin.site.register(Product)
admin.site.register(Price)
admin.site.register(Feature)
admin.site.register(Color)
