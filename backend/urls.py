from django.urls import path
from rest_framework import routers
from .views import SkillViewset
routes = routers.SimpleRouter()
routes.register(r'skills', SkillViewset,basename='skill')
urlpatterns = [
    
]
urlpatterns+=routes.urls