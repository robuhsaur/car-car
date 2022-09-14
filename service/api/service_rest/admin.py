from django.contrib import admin

from .models import CarVO, Technician, Appointment


@admin.register(CarVO)
class CarVO(admin.ModelAdmin):
    pass


@admin.register(Technician)
class Technician(admin.ModelAdmin):
    pass


@admin.register(Appointment)
class Appointment(admin.ModelAdmin):
    pass
