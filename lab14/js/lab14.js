/**
 * Author:    Julia Bozzo
 *
 * Created:   03.23.2021
 *
 * Public domain
 */

 // states function
 function Vehicle(make, model, year, color, extras, name) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.color = color;
   this.extras = extras;
   this.name = name;
   this.info = function();
     return this.color + " " + this.year + " " + this.make + " " + this.model + " with " +
     this.extras + " called " + this.name;
 }
}
var.vehicles = [];

var newVehicle = new Vehicle("Subaru", "Crosstrek", 2016, "white", "roof rack", "subie"));

vehicles.push(newVehicle);

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("p");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}
