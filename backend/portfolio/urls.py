from django.urls import path, include
from portfolio import views 

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.get_comments),
    path('contact/', views.post_comments),
]