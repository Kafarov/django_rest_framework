from django.shortcuts import render
from .serialisers import UserModelSerializer
from rest_framework.viewsets import ModelViewSet
from .models import User
# Create your views here.


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
