from rest_framework import serializers
import logging
from app.models import Posts, Category


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', )


class PostsSerializers(serializers.ModelSerializer):
    symbol_count = serializers.SerializerMethodField()

    class Meta:
        model = Posts
        fields = ('id', 'created_at', 'title', 'content', 'category', 'symbol_count', )

    def get_symbol_count(self, instance: Posts) -> int:
        try:
            return len(instance.content)
        except Exception as ex:
            logging.critical(ex)
            return 0
