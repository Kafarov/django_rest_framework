from django.shortcuts import render
from .serialisers import UserModelSerializer
from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins

from .models import User

# Create your views here.


class UserCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
