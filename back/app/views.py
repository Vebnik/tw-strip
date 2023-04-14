from rest_framework import generics, permissions
from datetime import datetime
from os import listdir, mkdir
from json import dumps

from app.models import Posts, Category
from app.serializers import PostsSerializers, CategorySerializers


class PostsListCreateApiView(generics.ListCreateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Posts.objects.all()
    serializer_class = PostsSerializers

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code == 201:
            if 'dist' not in listdir():
                mkdir('dist')

            with open(f'dist/{datetime.today()}.json', 'w') as file:
                file.write(dumps(response.data, indent=2))

        return response


class CategoryListApiView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Category.objects.all()
    serializer_class = CategorySerializers

