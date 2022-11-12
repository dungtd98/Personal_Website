from django.db import models

# Create your models here.
class Skill(models.Model):
    name = models.CharField(max_length=255, verbose_name='skill name', blank=False, null=False)
    exp = models.CharField(max_length=255, verbose_name='skill experience', blank=False, null=False)
    img = models.ImageField(upload_to='skill_logos/',blank=True)
    knowledge = models.TextField()
    def __str__(self) -> str:
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(max_length=255, blank=False, null=False)
    phone = models.CharField(max_length=255, blank=False, null=False)
    def __str__(self) -> str:
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    img = models.ImageField(upload_to='project_img/', blank=True)
    brief = models.TextField()
    git_link = models.TextField()
    def __str__(self) -> str:
        return self.name