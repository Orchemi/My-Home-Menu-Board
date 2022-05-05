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
def menu_index(request):
    order = request.query_params['order']
    ascDesc = int(request.query_params['ascDesc'])
    
    if ascDesc:
        if order[0] == '-':
            order = order[1:]
        else:
            order = '-' + order
    
    menus = Menu.objects.order_by(order)
    if request.method=='GET':
        serializer = MenuListSerializer(menus, many=True)
        return Response(serializer.data)


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