from .models import (Skill)
from rest_framework.serializers import ModelSerializer

class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'