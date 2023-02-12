# CarCar

Team:

* Steve - Sales
* Robbie - Service
  

## Starting the project
 - Fork and clone the gitlab repo into our machines locally
 - We decided to work in the main branch only, being careful with our pushes.

## Design
CarCar is broken up into three domains:

* Inventory
* Services
* Sales

<!-- ADD JPG HERE  -->


## Service microservice

  - Contains 3 models, technician, appointment, and a automobile (has a history and VIN, comes from inventory)
  - Technicians contain a name and employee number attribute.
  - Appointments have a VIN number, customer name, date and time of appointment, reason, a complete/incomplete boolean field, a VIP boolean field (dependent on where the car was purchased), and foreign key relationship with a Technician.
  - Users have the option to create, update, delete, and view specific appointments along with a list of all scheulded appointments.
  - CarVO (value object) contains the vehincle VIN number, data is retrieved from the Automobile model in the Inventory microservice via a polling function.
  - Retrieved VIN is used to determine the VIP status

## Sales microservice

Explain your models and integration with the inventory
microservice, here.


 
  - Contains 3 models, technician, appointment, and a automobile (has a history and VIN, comes from inventory)
