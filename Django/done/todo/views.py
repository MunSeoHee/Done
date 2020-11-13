from rest_framework import viewsets
from rest_framework import permissions

from .serializers import BoardSerializer
from .models import Todo


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = BoardSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    print(permission_classes)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)