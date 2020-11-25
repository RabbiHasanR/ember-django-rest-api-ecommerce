from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Price(models.Model):
    product = models.OneToOneField(
        Product,
        related_name='price',
        on_delete=models.CASCADE,
        primary_key=True,
    )
    original = models.DecimalField(max_digits=10, decimal_places=2)
    current = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.product.name
    
class Feature(models.Model):
    product = models.ForeignKey(Product, related_name='features', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Color(models.Model):
    product = models.ForeignKey(Product, related_name='colors', on_delete=models.CASCADE)
    color = models.CharField(max_length=100)
    image = models.ImageField(max_length=None,upload_to='products')

    def __str__(self):
        return self.color

    

