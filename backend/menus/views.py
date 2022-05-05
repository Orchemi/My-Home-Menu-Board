from django.shortcuts import get_list_or_404, get_object_or_404, render, redirect
# from rest_framework import generics
from rest_framework.response import Response
from .models import Menu
from .serializers import MenuSerializer, MenuListSerializer
from rest_framework.decorators import api_view
from rest_framework import status, viewsets
import json
from random import random, sample
from django.views.decorators.csrf import ensure_csrf_cookie
    
    
@api_view(['GET', 'POST'])
@ensure_csrf_cookie
def menu_index(request):
    menus = get_list_or_404(Menu)
    if request.method=='GET':
        serializer = MenuListSerializer(menus, many=True)
        return Response(serializer.data)
    
    elif request.method=='POST':
        print('#########################')
        print(request.data)
        print('#########################')
        # serializer = MenuSerializer(data=request.data)
        # if serializer.is_valid(raise_exception=True):
        #     serializer.save()
        #     print('serializer.data', serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['GET'])
def random_menu(request):
    menus = get_list_or_404(Menu)
    random_menu = sample(menus, 1)[0]
    serializer = MenuSerializer(random_menu)
    return Response(serializer.data)
    
    
    
class MenuIndexView(viewsets.ModelViewSet):
    serializer_class = MenuSerializer()
    queryset = Menu.objects.order_by('-pk')
    
    
    
@api_view(['GET'])
def menu_detail(request, menu_id):
    menu = get_object_or_404(Menu, pk=menu_id)
    serializer = MenuSerializer(menu)
    return Response(serializer.data)