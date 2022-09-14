import requests
import django
import os
import sys
import time
import json

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()


# Import models from service_rest, here.
# from service_rest.models import Something
from service_rest.models import CarVO



def get_car():
    url = "http://inventory-api:8000/api/automobiles/"
    response = requests.get(url)
    content = json.loads(response.content)
    for automobile in content["autos"]:
        CarVO.objects.update_or_create(
            import_href=automobile["href"],
            defaults={
                "vin": automobile["vin"]
            }
        )


def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_car()
            print("ITS WORKING")
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
