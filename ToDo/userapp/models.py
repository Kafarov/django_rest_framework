import email
from tabnanny import verbose
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True)

    
    class Meta:
        verbose_name = 'Зарегестрированные пользователи'
        verbose_name_plural = 'Зарегестрированные пользователи'