from rest_framework import serializers
from .models import Todo


class BoardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ['user', 'id', 'contents', 'memo', 'done_date', 'order','done']