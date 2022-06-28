from email.mime import base
from rest_framework.routers import DefaultRouter
from products.api.views.product_viewsets import ProductViewSet
from products.api.views.general_views import MeasureUnitViewSet, CategoryProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='products')
urlpatterns = router.urls
router.register(r'measure-unit', MeasureUnitViewSet, basename='measure_unit')
urlpatterns = router.urls
router.register(r'category-products', CategoryProductViewSet, basename='category_products')
urlpatterns = router.urls