from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializers import BoardSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Todo
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import authentication_classes
import json
from django.contrib.auth.models import User

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Users(request, format=None):
    print(request.user)
    print(request.auth)
    content = {
        'user':str(request.user),  # `django.contrib.auth.User` instance.
        'auth': str(request.auth),  # None
    }
    return Response(content)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Todos(request, format=None):
    user = User.objects.get(username=request.user)
    todos = Todo.objects.filter(user = user.id)
    print(todos)
    content = {"data":[]}
    
    for i in todos:
        temp= {
            'user' : str(i.user),
            'contents':i.contents,
            'memo':i.memo,
            'done_date':i.done_date,
            'order':i.order,
            'done':i.done,
        }
        content['data'].append(temp)
        
    print(content)
    
    return Response(content)



class BoardViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = BoardSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def Memo(request,id):
    if request.method == "POST":
        todo = Todo.objects.get(id=id)
        todo.memo = request.data.get('memo')
        print(todo.memo)
        response = {
        'todo_id' : todo.id,
        'todo_memo' : todo.memo,
        'todo_contents':todo.contents
    }
    return Response(response, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def delete(request,id):
    if request.method == "POST":
        todo = Todo.objects.get(id=id)
        todo.delete
    return Response({'message': 'succese'}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def done(request, id):
    todo = Todo.objects.get(id=id)
    todo.done = True
    todo.save()
    response = {
        'todo_id' : todo.id,
        'todo_done' : todo.done,
        'todo_contents':todo.contents
    }
    return Response(response, status=status.HTTP_200_OK)