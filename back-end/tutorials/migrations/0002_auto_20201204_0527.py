# Generated by Django 3.1.3 on 2020-12-04 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tutorial',
            name='publish_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
