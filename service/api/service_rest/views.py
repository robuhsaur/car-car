from django.shortcuts import render
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from .models import Appointment, CarVO, Technician
from django.http import JsonResponse
import json

class CarVOEncoder(ModelEncoder):
    model = CarVO
    properties = [
        "name",
        "import_href",
    ]




class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer",
        "date_time",
        "reason",
        "vip_status",
        "technician",
        "status",
    ]
    encoders = {
        "technician": TechnicianEncoder()
    }

    def get_extra_data(self, o):
        return {
            "name": o.technician.name
        }



@require_http_methods(["GET", "POST"])
def api_appointment(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()

        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder
        )

    elif request.method == "POST":  # LE POST
        content = json.loads(request.body)
        try:

            technician_id = content["technician"]
            tehcnician = Technician.objects.get(id=technician_id)
            content["technician"] = tehcnician

            try:
                car = CarVO.objects.get(vin=content["vin"])
                if car:
                    content["vip_status"] = True
            except CarVO.DoesNotExist:
                content["vip_status"] = False

        except Technician.DoesNotExist:
            response = JsonResponse(
                {"message": "NAHHH"},
                status=400,
            )
            return response
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )



@require_http_methods(["PUT", "DELETE"])
def api_update_appointment(request, pk):
    if request.method == "PUT":
        try:
            content = json.loads(request.body)
            Appointment.objects.filter(id=pk).update(**content)
            appointment = Appointment.objects.get(id=pk)

            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    
    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_list_tehcnicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        print("FUCK YA LIFE", technicians)
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder
        )

    else:  # POST TECHNICIAN
        try:
            content = json.loads(request.body)
        except:
            response = JsonResponse(
                {"message": "You're dumb af, couldn't make the technician"}
            )
            response.status_code = 400
            return response
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_technician(request, pk):
    if request.method == "DELETE":
        try:
            technicians = Technician.objects.get(id=pk)
            technicians.delete()
            return JsonResponse(
                technicians,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
