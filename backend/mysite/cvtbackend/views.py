from django.shortcuts import render
from django.http import HttpResponse
from .models import Article


def index(request):
    return HttpResponse("Hello, world!")


def article_by_id(request, article_id):
    article = Article.objects.get(pk=article_id)
    print(len(Article))
    return HttpResponse(f"{article.title};;;{article.content};;;{article.views}")