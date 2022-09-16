# CarCar

Team:

* Steve - Sales
* Robbie - Service
  

## Starting the project
 - Fork and clone the gitlab repo into our machines locally
 - We decided to work in the main branch only, being careful with our pushes.

## Design

## Service microservice

  - Contains 3 models, technician, appointment, and a automobile (has a history and VIN, comes from inventory)
  - Technicians contain a name and employee number attribute.
  - Appointments have a VIN number, customer name, date and time of appointment, reason, a complete/incomplete boolean field, a VIP boolean field (dependent on where the car was purchased), and foreign key relationship with a Technician.
  - Users have the option to create, update, delete, and view specific appointments along with a list of all scheulded appointments.
  - Automobiles' VIN numbers are value objects 


## Sales microservice

Explain your models and integration with the inventory
microservice, here.


 
  - Contains 3 models, technician, appointment, and a automobile (has a history and VIN, comes from inventory)
