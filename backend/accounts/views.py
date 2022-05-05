from django.shortcuts import get_list_or_404, get_object_or_404, render, redirect
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Account
from .serializers import AccountSerializer
from rest_framework.parsers import JSONParser
from django.views.decorators.http import require_http_methods, require_POST
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomUserCreationForm

@require_http_methods(['GET', 'POST'])
def login(request):
    if request.user.is_authenticated:
        pass
    
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            auth_login(request, form.get_user())
            return render(request, 'accounts/login_success.html')
    
    else:
        form = AuthenticationForm()
    context = {
        'form': form,
    }
    return render(request, 'accounts/login.html', context)
        
        
@require_POST
def logout(request):
    if request.user.is_authenticated:
        auth_logout(request)
    return render(request, 'accounts/logout_success.html')


@require_http_methods(['GET', 'POST'])
def signup(request):
    if request.user.is_authenticated:
        pass
    
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            auth_login(request, user)
            return render(request, 'accounts/signup_success.html')
        
    else:
        form = CustomUserCreationForm()
    
    context = {
        'form': form,
    }
    return render(request, 'accounts/signup.html', context)

# @csrf_exempt
# def account_list(request):
#     # if request.method == 'GET':
#     #     query_set = Account.objects.all()
#     #     serializer = AccountSerializer(query_set, many=True)
#     #     return JsonResponse(serializer.data, safe=False)

#     if request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = AccountSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)


# @csrf_exempt
# def account(request, account_pk):
#     account = get_object_or_404(Account, pk=account_pk)

#     if request.method == 'GET':
#         serializer = AccountSerializer(account)
#         return JsonResponse(serializer.data, safe=False)

#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = AccountSerializer(account, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)

#     elif request.method == 'DELETE':
#         account.delete()
#         return HttpResponse(status=204)


# @csrf_exempt
# def login(request):
#     if request.method == 'POST':
#         data = JSONParser().parse(request)
#         search_email = data['email']
#         obj = Account.objects.get(email=search_email)

#         if data['password'] == obj.password:
#             return HttpResponse(status=200)
#         else:
#             return HttpResponse(status=400)