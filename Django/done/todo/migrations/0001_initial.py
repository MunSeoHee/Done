# Generated by Django 3.1.3 on 2020-11-13 08:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=100, verbose_name='색깔')),
                ('label', models.CharField(max_length=100, verbose_name='카테고리 명')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contents', models.CharField(max_length=200, verbose_name='할 일')),
                ('memo', models.TextField(null=True, verbose_name='메모')),
                ('done_date', models.DateField(auto_now_add=True, verbose_name='완료 날짜')),
                ('order', models.IntegerField(verbose_name='정렬 순서')),
                ('done', models.BooleanField(default=False, verbose_name='완료 여부')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TodoCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='todo.category')),
                ('todo_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='todo.todo')),
            ],
        ),
    ]
