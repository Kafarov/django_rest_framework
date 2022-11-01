from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import Response
from django_filters import rest_framework as filters
from .filters import ProjectFilter
from rest_framework.pagination import LimitOffsetPagination


from .models import Project, ToDo
from .serialisers import ProjectModelSerializer, ToDoModelSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 3


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filter_backrnds = (filters.DjangoFilterBackend)
    filterset_class = ProjectFilter
    pagination_class = ProjectLimitOffsetPagination


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ['project']
    pagination_class = TodoLimitOffsetPagination
    
    def destroy(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if not pk:
            return Response({"error": "Метод DELETE не сработал"})
        
        try:
            instance = self.get_object()
        except:
            return Response({'error': 'Объект не найден'})
        
        instance.status = False
        
        instance.save()
        
        serializer = ToDoModelSerializer(instance)
             
        return Response(serializer.data)
 