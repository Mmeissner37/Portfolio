from rest_framework import serializers
from .models import Car
from .models import MyModel

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class MyModelSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    creator_id = serializers.ReadOnlyField(source='creator_id')
    image_url = serializers.ImageField(required=False)

    class Meta: 
        model = MyModel
        fields = ['id', 'creator', 'creator_id', 'title', 'description', 'image_url']


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'make', 'model', 'year', 'user_id']
        depth = 1
