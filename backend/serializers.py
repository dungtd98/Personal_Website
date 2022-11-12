from .models import (Skill, Contact, Project)
from rest_framework.serializers import ModelSerializer

class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'