from django.contrib import admin

from .models import Customer, SalesPerson

@admin.register(SalesPerson)
class SalesPerson(admin.ModelAdmin):
    pass


@admin.register(Customer)
class Customer(admin.ModelAdmin):
    pass