from rest_framework import serializers
from .models import Menu
from django.core.files import File
import base64

class MenuListSerializer(serializers.ModelSerializer):
    # image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Menu
        fields = '__all__'
        
    # def get_image_url(self, menu):
    #     request = self.context.get('request')
    #     image_url = menu.image.url
    #     return request.build_absolute_uri(image_url)
        

class MenuSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Menu
        fields = ('title', 'id', 'image', 'image_url',)
        # fields = '__all__'
        
    def get_image_url(self, menu):
        request = self.context.get('request')
        image_url = menu.image.url
        return request.build_absolute_uri(image_url)