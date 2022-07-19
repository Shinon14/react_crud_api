from django.urls import path
from .views import CompanyView
from .views import VistaProducto

urlpatterns = [
    path('companies/', CompanyView.as_view(), name='companie_list'),
    path('companies/<int:id>', CompanyView.as_view(), name='companise_process'),
    path('productos/', VistaProducto.as_view(), name='lista_productos'),
    path('productos/<int:id>', VistaProducto.as_view(), name='producto_process'),

    # path('')

]

