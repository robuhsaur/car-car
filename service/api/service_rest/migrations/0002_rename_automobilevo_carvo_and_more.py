# Generated by Django 4.0.3 on 2022-09-12 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='AutomobileVO',
            new_name='CarVO',
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
