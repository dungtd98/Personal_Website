from django.db import models

# Create your models here.
class Skill(models.Model):
    name = models.CharField(max_length=255, verbose_name='skill name', blank=False, null=False)
    exp = models.CharField(max_length=255, verbose_name='skill experience', blank=False, null=False)
    decription = models.TextField()
    def __str__(self) -> str:
        return self.name