from django.urls import path
from . import views

app_name = 'menus'
urlpatterns = [
    path('', views.ListMenu.as_view()),
    path('<int:pk>/',views.DetailMenu.as_view()),
]
