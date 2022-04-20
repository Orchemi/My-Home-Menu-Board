from django.urls import path
from . import views

app_name = 'menus'
urlpatterns = [
    path('', views.menu_index),
    # path('<int:pk>/',views.DetailMenu.as_view()),
]
