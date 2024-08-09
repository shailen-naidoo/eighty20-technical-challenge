from django.contrib import admin
from django.urls import path
from api.v1.auth.login.views import LoginView
from api.v1.auth.logout.views import LogoutView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/login/', LoginView.as_view(), name='login'),
    path('api/v1/auth/logout/', LogoutView.as_view(), name='logout')
]
