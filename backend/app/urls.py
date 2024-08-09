from django.contrib import admin
from django.urls import path
from rest_framework import status
from django.contrib.auth import logout
from rest_framework.response import Response
from rest_framework.views import APIView
from api.v1.auth.login.views import LoginView


class LogoutView(APIView):
    def get(self, request):
        logout(request)
        return Response(
            {'message': 'You have been logged out successfully'},
            status=status.HTTP_200_OK
        )


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/login/', LoginView.as_view(), name='login'),
    path('api/v1/auth/logout/', LogoutView.as_view(), name='logout')
]
