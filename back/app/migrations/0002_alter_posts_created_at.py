# Generated by Django 4.2 on 2023-04-13 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='created_at',
            field=models.DateTimeField(auto_created=True, auto_now_add=True, verbose_name='Created at'),
        ),
    ]