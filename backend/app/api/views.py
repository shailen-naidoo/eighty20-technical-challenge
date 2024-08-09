from rest_framework import status
from django.contrib.auth import login
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework import serializers
from django.contrib.auth import authenticate


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(
            username=data['username'],
            password=data['password']
        )

        if user is None:
            raise serializers.ValidationError('Invalid credentials')

        return {'user': user}



class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data['user']

            login(request, user)

            user_data = {
                'id': user.id,
                'username': user.username,
                'favorite_pokemon': user.favorite_pokemon,
            }

            return Response(
                {'user': user_data},
                status=status.HTTP_200_OK
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
