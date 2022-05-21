from django.http import HttpResponse
from .models import Article
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ArticleListSerializer, ArticleSingleSerializer


@api_view(['GET'])
def index(request):
    return Response({'response_text': 'HelloWorld'})


@api_view(['GET'])
def get_all_articles(request):
    articles = Article.objects.all()
    serializer = ArticleListSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_article_by_id(request, article_id):
    article = Article.objects.get(pk=article_id)

    # Not the most efficient way of doing it

    article.views = article.views + 1
    article.save()
    serializer = ArticleSingleSerializer(article, many=False)
    return Response(serializer.data)
