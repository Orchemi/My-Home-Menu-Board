from django.urls import path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'menus', views.MenuIndexView, basename='menus')

app_name = 'menus'
urlpatterns = [
    path('', views.menu_index),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
