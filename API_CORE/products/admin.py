from django.contrib import admin
from products.models import *

# Register your models here.
class MeasureUnitAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')
class CategoryProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')
    
admin.site.register(MeasureUnit, MeasureUnitAdmin)
admin.site.register(CategoryProduct, CategoryProductAdmin)
admin.site.register(Product)
