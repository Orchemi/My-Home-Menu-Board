from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Menu
from .serializers import MenuSeriallizer

class ListMenu(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSeriallizer
    

class DetailMenu(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSeriallizer