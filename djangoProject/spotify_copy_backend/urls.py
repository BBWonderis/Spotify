from django.urls import path
from . import views

urlpatterns = [
    path('sign-up', views.create_user, name='sign-up'),
    path('user-functions/<int:id>', views.user_functions, name='user-functions'),
    path('sign-in', views.sign_in, name='sign-in'),
]