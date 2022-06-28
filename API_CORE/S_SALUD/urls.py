from django.contrib import admin
from django.urls import path, include,re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from core.views import Login, Logout,UserToken

schema_view = get_schema_view(
   openapi.Info(
      title="CESFAM API",
      default_version='v0.1',
      description="Documentación publica de API CESFAM",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="ig.navarroa@duocuc.cl"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('admin/', admin.site.urls),
    path('login/', Login.as_view(), name='login'),
    path('refresh-token/', UserToken.as_view(), name='refresh_token'),
    path('logout/', Logout.as_view(), name='logout'),
    path('usuario/', include('core.api.urls')),
    path('products/', include('products.api.routers')),
    
]
