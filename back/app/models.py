from django.db import models
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    title = models.CharField(_('title'), max_length=50)

    class Meta:
        verbose_name = 'Category'

    def __str__(self) -> str:
        return f'{self.title}'


class Posts(models.Model):
    created_at = models.DateTimeField(_('Created at'), auto_created=True, auto_now_add=True)
    content = models.TextField(_('Content'))
    title = models.CharField(_('Title'), max_length=50)
    category = models.ForeignKey(to='app.Category', on_delete=models.CASCADE)
    symbol_count = models.IntegerField(_('Symbol count'), default=0)

    class Meta:
        verbose_name = 'Posts'

    def __str__(self) -> str:
        return f'{self.title}'
