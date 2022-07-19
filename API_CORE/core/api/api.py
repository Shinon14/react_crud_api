from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import User
from core.api.serializers import UserSerializer, UserListSerializer

@api_view(['GET','POST'])
def user_api_view(request):
    #list
    if request.method == 'GET':
        #queryset
        users = User.objects.all().values('id', 'username', 'email', 'password') #se optimiza la consulta trayendo solo las columnas necesarias 
        users_serializer = UserListSerializer(users, many=True)
        return Response(users_serializer.data, status = status.HTTP_200_OK)

    #create
    elif request.method == 'POST':
        users_serializer = UserSerializer(data = request.data)

        #validation
        if users_serializer.is_valid():
            users_serializer.save()
            return Response({'message':'Usuario creado correctamente'}, status=status.HTTP_201_CREATED)
        
        return Response(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE']) #Trabajamos con una instancia en especifico
def user_detail_api_view(request,pk=None):
    #consulta queryset
    user = User.objects.filter(id = pk).first()
    if user: # nos permite eliminar la instancia en cada metodo, se optimizo el codigo. Validacion
        if request.method == 'GET':
            user = User.objects.filter(id = pk).first()
            user_serializer = UserSerializer(user)
            return Response(user_serializer.data, status = status.HTTP_200_OK)
            
        elif request.method == 'PUT': #actualizar
            user_serializer = UserSerializer(user, data = request.data) #se pasa la instancia del user, con la información nueva
            if user_serializer.is_valid():
                user_serializer.save()
                return Response(user_serializer.data, status = status.HTTP_200_OK)
            return Response(user_serializer.erros, status = status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE': #Delete
                user.delete()
                return Response({'message': 'Usuario eliminado correctamente!'})

    return Response({'message': 'No se ha encontrado ningun usuario'}, status = status.HTTP_400_BAD_REQUEST)
