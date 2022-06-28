"""Serializadores que dependan del modelo llamado products"""
from rest_framework import serializers
from products.models import Product


class ProductSerializer(serializers.ModelSerializer):


    class Meta:
        model = Product
        exclude = ('state','created_date', 'modified_date', 'deleted_date' )  #de aca toman los ejemplos de swagger

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'description': instance.description,
            'made_by': instance.made_by,
            'grammage': instance.grammage,
            'measure_unit': instance.measure_unit.description if  instance. measure_unit is not None else '',  #validacion
            'category_product': instance.category_product.description if instance.category_product is not None else ''#validacion
        }
