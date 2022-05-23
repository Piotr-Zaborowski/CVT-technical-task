from django.test import SimpleTestCase
from django.urls import resolve, reverse

from backend.mysite.cvtbackend.views import get_all_articles


class TestUrls(SimpleTestCase):

    def test_getall_is_resolved(self):
        url = reverse('getAll')
        self.assertEqual(resolve(url).func, get_all_articles)
