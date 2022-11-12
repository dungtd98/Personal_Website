from django.shortcuts import render
from .serializers import SkillSerializer, ContactSerializer,ProjectSerializer
from .models import Skill, Contact, Project
from rest_framework.viewsets import ModelViewSet
# Create your views here.

class SkillViewset(ModelViewSet):
    serializer_class = SkillSerializer
    def get_queryset(self):
        return Skill.objects.all()

class ContactViewset(ModelViewSet):
    serializer_class = ContactSerializer
    def get_queryset(self):
        return Contact.objects.all()

class ProjectViewset(ModelViewSet):
    serializer_class = ProjectSerializer
    def get_queryset(self):
        return Project.objects.all()