# Generated by Django 4.0.3 on 2022-09-15 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_carvo_import_href'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='status',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]