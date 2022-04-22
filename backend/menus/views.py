from django.shortcuts import get_list_or_404, get_object_or_404, render, redirect
# from rest_framework import generics
from rest_framework.response import Response
from .models import Menu
from .serializers import MenuSerializer, MenuListSerializer
from rest_framework.decorators import api_view
from rest_framework import status
import json
    
    
@api_view(['GET', 'POST'])
def menu_index(request):
    menus = get_list_or_404(Menu)
    if request.method=='GET':
        serializer = MenuListSerializer(menus, many=True)
        return Response(serializer.data)
    
    elif request.method=='POST':
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print('serializer.data', serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)