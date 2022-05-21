from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('getallarticles', views.get_all_articles),
    path('getarticle/<int:article_id>', views.get_article_by_id),
    path('deletearticle/<int:article_id>', views.delete_article_by_id),
    path('addarticle', views.add_article)
]