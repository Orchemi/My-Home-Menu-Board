from django.urls import path, include
from . import views

app_name='accounts'
urlpatterns = [
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('signup/', views.signup, name='signup'),
    # path('accounts', views.account_list),
    # path('accounts/<int:account_pk>', views.account),
    # path('auth', include('rest_framework.urls', namespace='rest_framework'))
]