/**
 * Author:    Julia Bozzo
 *
 * Created:   04.4.2021
 *
 * Public domain
 */

 // states object
 var Vehicle
   make: "Subaru";
   model: "Crosstrek";
   year: 2016;
   color: "white";
   extras: "roof rack";
   name: "subie";
   info: function info() {
     return color + year + make + model + " with " +
     extras + " called " + name;
 };
var.vehicles = [];

var newVehicle = new Vehicle("Subaru", "Crosstrek", 2016, "white", "roof rack", "subie"));

vehicles.push(newVehicle);

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("p");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}
