from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('getallarticles', views.get_all_articles),
    path('article/<int:article_id>', views.article_by_id, name='article_by_id')
]