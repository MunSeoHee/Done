# Generated by Django 3.1.3 on 2020-11-13 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_auto_20201113_1718'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='order',
            field=models.IntegerField(auto_created=True, verbose_name='정렬 순서'),
        ),
    ]
