from django.db import models

# Create your models here.
class Menu(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    score = models.IntegerField()
    image = models.ImageField(blank=True, null=True, upload_to='images')
    category1 = models.CharField(max_length=20)
    category2 = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
        
    def __str__(self):
        return self.title