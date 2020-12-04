from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class Tutorial(models.Model):
    title = models.CharField(max_length=100)
    video_url = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    transcript = models.TextField(blank=True, null=True)
    publish_date = models.DateTimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    thumbnail_image = models.ImageField(max_length=None,upload_to='tutorial/images', blank=True, null=True)
    permalink = models.CharField(max_length=200, blank=True, null=True)
    free = models.BooleanField(default=True)
    difficulty = models.CharField(max_length=100, blank=True, null=True)
    difficulties = ArrayField(
        models.CharField(max_length=50, blank=True),
        size=3,
    )
