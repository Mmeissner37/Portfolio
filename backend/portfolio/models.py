from django.db import models

# Create your models here.

class Portfolio(models.Model):
    name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    message = models.CharField(max_length=255)

