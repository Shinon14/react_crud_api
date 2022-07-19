from django import views
from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from .models import Company
from .models import Producto
from django.contrib.auth import get_user_model
import json




# Create your views here.
class CompanyView(View):
    # 
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs) :
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            companies=list(Company.objects.filter(id=id).values())
            if (len(companies)>0):
                company = companies[0]
                datos = {'message': "success", 'company': company}
            else:
                datos={'message':"company not found"}
            return JsonResponse(datos)

        else:
            companies= list(Company.objects.values())
            if len(companies)>0:
                datos={'message': "Success", 'companies': companies}
            else:
                datos={'message':"companies not found"}
            return JsonResponse(datos) 
    
    
    # 
    def post(self, request):
        # print(request.body)
        jd=json.loads(request.body)
        # print(jd)
        Company.objects.create(name=jd['name'],website=jd['website'],foundation=jd['foundation'])
        datos={'message': "Success"}
        return JsonResponse(datos)

    # 
    def put(self, request, id):
        jd=json.loads(request.body)
        companies=list(Company.objects.filter(id=id).values())
        if (len(companies)>0):
            company=Company.objects.get(id=id)
            company.name=jd['name']
            company.website=jd['website']
            company.foundation=jd['foundation']
            company.save()
            datos={'message': "Success"}
        else:    
            datos={'message':"company not found"}
        return JsonResponse(datos)
    # 
    def delete(self, request, id):
        companies = list(Company.objects.filter(id=id).values())
        if (len(companies)>0):
            Company.objects.filter(id=id).delete()
            datos={'message': "Success"}
        else:    
            datos={'message':"company not found"}
        return JsonResponse(datos)

# vista de la tabla productos
class VistaProducto(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs) :
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            productos=list(Producto.objects.filter(id=id).values())
            if (len(productos)>0):
                producto = productos[0]
                datos = {'message': "success", 'producto': producto}
            else:
                datos={'message':"producto no encontrado"}
            return JsonResponse(datos)

        else:
            productos= list(Producto.objects.values())
            if len(productos)>0:
                datos={'message': "Success", 'productos': productos}
            else:
                datos={'message':"productos no encontrados"}
            return JsonResponse(datos) 
    
    
    # 
    def post(self, request):
        # print(request.body)
        jd=json.loads(request.body)
        # print(jd)
        Producto.objects.create(nombre=jd['nombre'],descripcion=jd['descripcion'],precio=jd['precio'],stock=jd['stock'])
        datos={'message': "Success"}
        return JsonResponse(datos)

    # 
    def put(self, request, id):
        jd=json.loads(request.body)
        productos=list(Producto.objects.filter(id=id).values())
        if (len(productos)>0):
            producto=Producto.objects.get(id=id)
            producto.nombre=jd['nombre']
            producto.descripcion=jd['descripcion']
            producto.precio=jd['precio']
            producto.stock=jd['stock']
            producto.save()
            datos={'message': "Success"}
        else:    
            datos={'message':"producto no encontrado"}
        return JsonResponse(datos)
    # 
    def delete(self, request, id):
        productos = list(Producto.objects.filter(id=id).values())
        if (len(productos)>0):
            Producto.objects.filter(id=id).delete()
            datos={'message': "Success"}
        else:    
            datos={'message':"producto not found"}
        return JsonResponse(datos)


