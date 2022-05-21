from django.db import models


# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=500)
    content = models.CharField(max_length=10000)
    views = models.BigIntegerField()
