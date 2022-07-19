from sre_parse import State
from rest_framework import viewsets
from rest_framework.response import Response
from base.api import GeneralListAPIView
from products.api.serializers.general_serializers import MeasureUnitSerializer, CategoryProductSerializer
from products.models import MeasureUnit


class MeasureUnitViewSet(viewsets.GenericViewSet):
    model = MeasureUnit
    serializer_class = MeasureUnitSerializer

    def get_queryset(self):
        return self.get_serializer().Meta.model.objects.filter(state = True)

    def list(self, request):
        data = self.get_queryset()
        data = self.get_serializer(data, many=True)
        return Response(data.data)


class CategoryProductViewSet(viewsets.ViewSet):
    serializer_class = CategoryProductSerializer


     