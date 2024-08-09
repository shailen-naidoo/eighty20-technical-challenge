from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import CustomUser


class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = CustomUser
        fields = '__all__'


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = '__all__'


class CustomUserAdmin(UserAdmin):
    model = CustomUser

    list_display = (
        'username',
        'email',
        'first_name',
        'last_name',
        'favorite_pokemon',
    )

    search_fields = ('favorite_pokemon',)

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('favorite_pokemon',)}),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('favorite_pokemon',)}),
    )

    form = CustomUserChangeForm

    add_form = CustomUserCreationForm


admin.site.register(CustomUser, CustomUserAdmin)
