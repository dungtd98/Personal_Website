from django.urls import path
from rest_framework import routers
from .views import SkillViewset, ContactViewset, ProjectViewset
routes = routers.SimpleRouter()
routes.register(r'skills', SkillViewset, basename='skill')
routes.register(r'contacts', ContactViewset, basename='contact')
routes.register(r'projects', ProjectViewset, basename='project')

urlpatterns = [
    
]
urlpatterns+=routes.urls