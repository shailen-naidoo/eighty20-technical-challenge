from rest_framework import status
from django.contrib.auth import logout
from rest_framework.response import Response
from rest_framework.views import APIView


class IsAuthenticatedView(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            user_data = {
                'username': request.user.username,
                'favorite_pokemon': request.user.favorite_pokemon
            }

            return Response(
                {'is_authenticated': request.user.is_authenticated, 'user': user_data},
                status=status.HTTP_200_OK
            )

        else:
            return Response(
                {'is_authenticated': request.user.is_authenticated, 'user': None},
                status=status.HTTP_401_UNAUTHORIZED
            )
