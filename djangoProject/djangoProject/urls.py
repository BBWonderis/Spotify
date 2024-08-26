
from django.contrib import admin

from django.urls import path, include
import spotify_copy_backend

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("spotify_copy_backend.urls"))
]
