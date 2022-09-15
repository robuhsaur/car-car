from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=50)

class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=100)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=25, unique=True)
    sold = models.BooleanField(default=False)

class SalesRecord(models.Model):
    # salesperson, automobile, price, customer
    saleperson = models.ForeignKey(SalesPerson, related_name="saleperson", on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, related_name="customers", on_delete=models.CASCADE)
    automobile = models.ForeignKey(AutomobileVO, related_name="automobiles", on_delete=models.CASCADE)
    price = models.CharField(max_length=100)

