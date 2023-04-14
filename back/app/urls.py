from django.urls import path

from app.views import PostsListCreateApiView, CategoryListApiView


urlpatterns = [
    path('posts/', PostsListCreateApiView.as_view()),
    path('category/', CategoryListApiView.as_view()),
]
