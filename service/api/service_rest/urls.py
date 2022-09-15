from django.urls import path
from .views import api_appointment, api_update_appointment, api_list_tehcnicians, api_technician


urlpatterns = [
    path("appointments/", api_appointment, name="api_appointments"),
    path("technicians/", api_list_tehcnicians, name="api_list_tehcnicians"),
    path("appointments/<int:pk>/", api_update_appointment, name="api_appointment"),
    path("technicians/<int:pk>/", api_technician, name="api_technician"),


]
