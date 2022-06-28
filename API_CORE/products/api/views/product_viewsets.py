from rest_framework import status
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response
from base.api import GeneralListAPIView
from products.api.serializers.product_serializers import ProductSerializer
from core.authentication_mixins import Authentication




class ProductViewSet(Authentication,viewsets.ModelViewSet):
    serializer_class = ProductSerializer
  
    def get_queryset(self, pk= None):
        if pk is None:
            return self.get_serializer().Meta.model.objects.filter(state=True)
        return self.get_serializer().Meta.model.objects.filter(id = pk, state = True).first()
    
    def list(self, request):
        ProductSerializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(ProductSerializer.data, status= status.HTTP_200_OK)
        
        
    def create(self, request):
            serializer = self.serializer_class(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response ({'message': 'Producto creado satisfactoriamente'}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def update(self, request, pk=None):
            if self.get_queryset(pk):
                product_serializer = self.serializer_class(self.get_queryset(pk), data = request.data)
            if product_serializer.is_valid():
                product_serializer.save()
                return Response(product_serializer.data, status= status.HTTP_200_OK)
            return Response(product_serializer.errors, status= status.HTTP_400_BAD_REQUEST)
                         
    def destroy(self, request, pk=None):
            product = self.get_queryset().filter(id=pk).first()
            if product: #si existio
                product.state = False
                product.save()
                return Response({'message': 'Producto eliminado satisfactoriamente'},status= status.HTTP_200_OK)
            return Response({'error': 'No existe un producto con los datos'}, status=status.HTTP_400_BAD_REQUEST)


"""Update realiza dos procesos, la obtencion de un obj y la update de dicho obj"""
#Patch y PUT dos metodos UPDATE
#Patch obtiene info de la instance
#PUT Enviar info para actualizar
#UpdateApiView drf