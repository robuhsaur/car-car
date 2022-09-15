from django.db import models

# Create your models here.


class CarVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=100, null=True, blank=True)


class Technician(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    employee_number = models.SmallIntegerField(null=True, blank=True)


class Appointment(models.Model):
    vin = models.CharField(max_length=17, null=True, blank=True)
    customer = models.CharField(max_length=100)
    date_time = models.DateTimeField(null=True, blank=True)
    reason = models.CharField(max_length=200)
    vip_status = models.BooleanField(default=False, null=True, blank=True)
    technician = models.ForeignKey(
        Technician, related_name="appointments", on_delete=models.CASCADE, null=True, blank=True)
