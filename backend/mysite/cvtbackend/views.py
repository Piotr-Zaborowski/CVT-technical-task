from django.http import HttpResponse
from .models import Article
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ArticleListSerializer


@api_view(['GET'])
def index(request):
    return Response({'response_text' : 'HelloWorld'})


@api_view(['GET'])
def get_all_articles(request):
    articles = Article.objects.all()
    serializer = ArticleListSerializer(articles, many=True)
    return Response(serializer.data)


def article_by_id(request, article_id):
    article = Article.objects.get(pk=article_id)
    print(len(Article))
    return HttpResponse(f"{article.title};;;{article.content};;;{article.views}")

