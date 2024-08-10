from rest_framework import status
from django.contrib.auth import logout
from rest_framework.response import Response
from rest_framework.views import APIView


class LogoutView(APIView):
    def get(self, request):
        logout(request)

        return Response(
            {'message': 'You have been logged out successfully'},
            status=status.HTTP_200_OK
        )
