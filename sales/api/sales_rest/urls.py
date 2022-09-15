from django.urls import path

from .views import api_list_customer, api_salesperson, api_list_sales_record
urlpatterns = [
    path("customers/", api_list_customer, name="list_customers"),
    path("customers/new/", api_list_customer, name="create_customers"),
    path("salesperson/", api_salesperson, name="list_salesperson"),
    path("salesperson/new/", api_salesperson, name="create_salesperson"),
    path("salesrecord/",api_list_sales_record, name="list_all_sales"),
    path("salesrecord/new/", api_list_sales_record, name="create_salesrecord"),
    path("salesrecord/<int:salesperson_vo_id>/", api_list_sales_record, name="list_salesperson_salesrecord"),
    
]

