from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('getallarticles', views.get_all_articles, name='getAll'),
    path('getarticle/<int:article_id>', views.get_article_by_id, name='getSingle'),
    path('deletearticle/<int:article_id>', views.delete_article_by_id, name='delete'),
    path('addarticle', views.add_article, name='addArt'),
    path('editarticle/<int:article_id>', views.edit_article, name='editArt')
]