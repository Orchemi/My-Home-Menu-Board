from django.shortcuts import get_list_or_404, get_object_or_404, render, redirect
from django.http import HttpResponse, JsonResponse
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
    if request.method == 'GET':
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
    
    elif request.method=='POST':
        print('########################')
        data = request.data
        print(data)
        
        menu = {}
        menu['title'] = data['title']
        menu['description'] = data['description']
        menu['score'] = data['score']
        menu['category1'] = data['category1']
        menu['category2'] = data['category2']
        menu['file'] = data['file']
        print(data['file'])
        serializer = MenuSerializer(data=menu)
        if serializer.is_valid():
            serializer.save()
        return Response(data)


@api_view(['GET'])
def random_menu(request):
    menus = get_list_or_404(Menu)
    random_menu = sample(menus, 1)[0]
    serializer = MenuSerializer(random_menu)
    return Response(serializer.data)
    
    
    
class MenuIndexView(viewsets.ModelViewSet):
    serializer_class = MenuSerializer()
    queryset = Menu.objects.order_by('-pk')
    
    
    
@api_view(['GET', 'DELETE'])
def menu_detail(request, menu_id):
    menu = get_object_or_404(Menu, pk=menu_id)
    if request.method == 'GET':
        serializer = MenuSerializer(menu)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        menu.delete()
        data = {
            'message': '삭제되었습니다.'
        }
        return JsonResponse(data)