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
        print('##############POST 왔다#############')
        print('request', request)
        print('request.data', request.data)
        print('request.data_json', json.dumps(request.data))
        
        if request.data[0].is_valid():
            serializer = MenuSerializer(data=request.data)
            print('##############데이터다#############', serializer.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)