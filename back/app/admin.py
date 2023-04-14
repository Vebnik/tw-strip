from django.contrib import admin

from app.models import Category, Posts


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fields = ('title', )


@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    fields = ('content', 'title', 'category', 'symbol_count', )
