from django.contrib import admin
from django.urls import path
from api.v1.auth.login.views import LoginView
from api.v1.auth.logout.views import LogoutView
from api.v1.auth.is_authenticated.views import IsAuthenticatedView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/login/', LoginView.as_view(), name='login'),
    path('api/v1/auth/logout/', LogoutView.as_view(), name='logout'),
    path('api/v1/auth/is-authenticated/', IsAuthenticatedView.as_view(), name='is_authenticated')
]
