# from django.shortcuts import get_list_or_404, get_object_or_404
# from django.http import HttpResponse, JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import Account
# from .serializers import AccountSerializer
# from rest_framework.parsers import JSONParser

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