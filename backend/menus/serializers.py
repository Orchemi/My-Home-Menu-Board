from rest_framework import serializers
from .models import Menu

class MenuListSerializer(serializers.ModelSerializer):
    class Meta:
        # fields = ('score',)
        exclude = ('description',)
        model = Menu
        

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Menu
