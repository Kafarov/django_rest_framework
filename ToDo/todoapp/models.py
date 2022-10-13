from unicodedata import name
from django.db import models
from userapp.models import User

# Create your models here.

class Project(models.Model):
    
    
    name = models.CharField(
        max_length=150,
        unique=True,
    )
    body = models.TextField(
        blank=True,
        null=True,
        )
    git_link = models.URLField()
    
    users = models.ManyToManyField(User)


class ToDo(models.Model):
    
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    created_user = models.OneToOneField(User, on_delete=models.CASCADE)
    body = models.TextField(
        blank=True,
        null=True,
        )
    created = models.DateTimeField(
        auto_now_add=True, verbose_name="Created", editable=False
    )
    updated = models.DateTimeField(
        auto_now=True, verbose_name="Edited", editable=False
    )
    status = models.BooleanField(default=True)