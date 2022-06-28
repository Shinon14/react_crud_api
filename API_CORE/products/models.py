from tabnanny import verbose
from django.db import models
from django.forms import CharField
from simple_history.models import HistoricalRecords
from base.models import BaseModel

class MeasureUnit(BaseModel): #hereda del modelo principal definido en la app -> base
    description = models.CharField('Descripcion', max_length=50, blank= False, null=False, unique=True)
    historical = HistoricalRecords()
    
    @property
    def _history_user(self):
        return self.changed_by
    
    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value
        
    class Meta:
        verbose_name="Unidad de medida"
        verbose_name_plural="Unidades de medidas"
            
    def __str__(self):
        return self.description
        
class CategoryProduct(BaseModel): #categoria de los productos, heredan del modelo principal (BaseModel)
    description = models.CharField('Descripcion', max_length=50, unique=True, null=False, blank=False)
    historical = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by
    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value
    
    class Meta:
        verbose_name = 'Categoria de Producto'
        verbose_name_plural = 'Categorias de Productos'

    def __str__(self):
        return self.description


class Product(BaseModel):
    name = models.CharField('Nombre del farmaco',max_length=150, unique=True, blank=False, null=False)
    description = models.TextField('Descripcion del producto', blank=False, null=False)
    made_by = models.CharField('Creado por',max_length=50, blank=False)
    grammage = models.FloatField('Gramaje', blank=False, null=False)
    measure_unit = models.ForeignKey(MeasureUnit, verbose_name='Unidad de Medida', on_delete=models.CASCADE, null=True)
    category_product = models.ForeignKey(CategoryProduct, verbose_name="Categoria de producto", on_delete=models.CASCADE, null=True)
    historical = HistoricalRecords()
    
    @property
    def _history_user(self):
       return self.changed_by
    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value
    
    class Meta:
        
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        
    def __str__(self):
        return self.name