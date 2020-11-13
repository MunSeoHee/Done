from django.db import models
from django.contrib.auth.models import User

class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    contents = models.CharField('할 일', max_length=200)
    memo = models.TextField('메모', null=True)
    done_date = models.DateField('완료 날짜', auto_now_add=True)
    order = models.IntegerField('정렬 순서')
    done = models.BooleanField('완료 여부', default=False)

class Category(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    color = models.CharField('색깔', max_length=100)
    label = models.CharField('카테고리 명', max_length=100)

class TodoCategory(models.Model):
    todo_id = models.ForeignKey(Todo, on_delete=models.CASCADE, null=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
