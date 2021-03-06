# Generated by Django 3.2.7 on 2022-05-02 14:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('menus', '0002_menu_score'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='category1',
            field=models.CharField(default='육류', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='menu',
            name='category2',
            field=models.CharField(default='한식', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='menu',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='menu',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
        migrations.AddField(
            model_name='menu',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
