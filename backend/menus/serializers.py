from dataclasses import fields
from rest_framework import serializers
from .models import Menu

class MenuSeriallizer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = Menu
