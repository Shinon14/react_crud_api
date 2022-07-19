from django.db import models

# Create your models here.

class Company(models.Model):
    name=models.CharField(max_length=50)
    website=models.URLField(max_length=100)
    foundation=models.PositiveIntegerField()

class Producto (models.Model):
    nombre=models.CharField(max_length=50)
    descripcion=models.CharField(max_length=50)
    precio=models.PositiveIntegerField()
    stock=models.PositiveIntegerField()

class Marca (models.Model):
    nombre=models.CharField(max_length=50)
    descripcion=models.TextField()

class tipoUnidad (models.Model):
    nombre=models.CharField(max_length=50)
    descripcion=models.TextField()

class usuario (models.Model):
    nombre=models.CharField(max_length=50)
    apellido=models.CharField(max_length=50)
    email=models.EmailField()
    password=models.CharField(max_length=50)
    direccion=models.CharField(max_length=50)
    telefono=models.CharField(max_length=50)