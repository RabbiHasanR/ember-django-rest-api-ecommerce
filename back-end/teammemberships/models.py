from django.db import models
from users.models import User
from monsters.models import Monster

# Create your models here.
class Teammembership(models.Model):
    monster = models.ForeignKey(Monster, related_name='teammembership_monster', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='teammembership_user', on_delete=models.CASCADE)
