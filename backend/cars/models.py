from django.db import models
from authentication.models import User

# Create your models here.
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class MyModel(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='listings')
    title = models.CharField(max_length=80, blank=False, null=False)
    description= models.TextField()
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)

class Car(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    make = models.CharField(max_length=30)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
