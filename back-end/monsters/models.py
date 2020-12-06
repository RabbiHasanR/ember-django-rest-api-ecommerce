from django.db import models

# Create your models here.
class Monster(models.Model):
    name = models.CharField(max_length=100)
    level = models.IntegerField()
    image_url = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
