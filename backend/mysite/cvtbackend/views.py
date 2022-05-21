from rest_framework import status
from .models import Article
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ArticleListSerializer, ArticleSingleSerializer, ArticleAddSerializer


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


@api_view(['DELETE'])
def delete_article_by_id(request, article_id):
    article = Article.objects.get(pk=article_id)
    article.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def add_article(request):
    serializer = ArticleAddSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)