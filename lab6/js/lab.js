/**
 * Author:    Julia Bozzo
 * Created:   02.17.2021
 *
 * Public domain
 **/

 // Define Variables

myTransport = ["car", "bike", "walking", "bus"];

myMainRide = {
 make = "subaru";
 model = "crosstrek";
 color = "white";
 year = 2016;
 age: function() {
    return 2021 - age;
  }
}

// output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
