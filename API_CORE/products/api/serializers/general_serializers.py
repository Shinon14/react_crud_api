from products.models import MeasureUnit, CategoryProduct
from rest_framework import serializers


class MeasureUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeasureUnit
        exclude = ('state','created_date', 'modified_date', 'deleted_date' )

class CategoryProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryProduct
        exclude = ('state','created_date', 'modified_date', 'deleted_date' )
  