# Generated by Django 3.2.8 on 2022-10-22 10:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userapp', '0002_alter_user_options'),
        ('todoapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='created_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userapp.user'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todoapp.project'),
        ),
    ]
