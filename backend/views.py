from django.shortcuts import render
from .serializers import SkillSerializer
from .models import Skill
from rest_framework.viewsets import ModelViewSet
# Create your views here.

class SkillViewset(ModelViewSet):
    serializer_class = SkillSerializer
    def get_queryset(self):
        return Skill.objects.all()
