from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import Customer, SalesPerson, SalesRecord, AutomobileVO
from django.http import JsonResponse
import json
# Create your views here.

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone",
        "id"
    ]

class SalesPersonEncoder(ModelEncoder):
    model=SalesPerson
    properties=[
        "name",
        "number",
        "id"
    ]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin", 
        "sold"
    ]

class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "saleperson",
        "price",
        "customer",
        "automobile",
        "id"
    ]
    encoders = {
        "saleperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVOEncoder()
    }
#list customers / create Customer
    #get/post
@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method=="GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer":customer},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        print(content)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Customer cannot be created"},
                status=400,
            )
            
#Create Salesperson
@require_http_methods(["GET","POST"])
def api_salesperson(request):
    if request.method=="GET":
        saleperson = SalesPerson.objects.all()
        return JsonResponse(
            {"saleperson": saleperson},
            encoder=SalesPersonEncoder
        )
    else:
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

#list salesperson sales history
@require_http_methods(["GET", "POST"])
def api_list_sales_record(request, salesperson_vo_id=None):
    if request.method=="GET":
        if salesperson_vo_id is not None:
            salesrecord = SalesRecord.objects.filter(saleperson=salesperson_vo_id)
        else:
            salesrecord = SalesRecord.objects.all()
        return JsonResponse(
            {"salesrecord": salesrecord},
            encoder = SalesRecordEncoder
        )
    
    elif request.method=="POST": #POST create sales record
        content = json.loads(request.body)
        print(content)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            if automobile.sold == True:
                return JsonResponse({
                    "message": "Sorry this car is already sold"
                }, status = 400,)
            else:
                content["automobile"] = automobile
                saleperson = SalesPerson.objects.get(id=content["saleperson"])
                content["saleperson"] = saleperson
                customer = Customer.objects.get(id=content["customer"])
                content["customer"] = customer
                print(content)
                salerecord = SalesRecord.objects.create(**content)
                automobile.sold = True
                automobile.save()

                return JsonResponse(
                    salerecord,
                    encoder=SalesRecordEncoder,
                    safe=False,
                )

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invaid automobile id"},
                status=400.
            
            )
    # else:
    #     try:
    #         salesrecord = SalesRecord.objects.get(id=salesperson_vo_id)
    #         print(salesrecord)
    #         salesrecord.delete()
    #         return JsonResponse(
    #             SalesRecord,
    #             encoder = SalesRecordEncoder,
    #             safe=False,
    #         )
    #     except SalesRecord.DoesNotExist:
    #         return JsonResponse({"message": "No Sales Record"})
