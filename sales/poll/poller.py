import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO

# Import models from sales_rest, here.
# from sales_rest.models import Something
def get_autos():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    print(content)
    for automobile in content["autos"]:
        AutomobileVO.objects.update_or_create(
            vin = automobile["vin"],
            defaults = {
                "sold": automobile["sold"],
            }
        )

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            
            get_autos()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

