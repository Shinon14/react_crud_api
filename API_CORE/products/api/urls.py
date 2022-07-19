from django.urls import path
from products.api.views.general_views import MeasureUnitListAPIView, CategoryProductListAPIView
from products.api.views.product_viewsets import  ProductListCreateAPIView, ProductRetrieveUpdateDestroyAPIView


urlpatterns = [
    path('measure_unit/', MeasureUnitListAPIView.as_view(), name='measure_unit' ),


]
