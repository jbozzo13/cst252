/**
 * Author:    Julia Bozzo
 * Created:   02.23.2021
 *
 * Public domain
 */

 // sortUserName - this function takes user's input & sorts the letters of
 // their name
function sortUserName()
var userName = window.prompt("what is your name?");
console.log("userName =", nameArray);
//split string to array
var nameArray = userName.split('');
console.log ("nameArray =", nameArray);
// sort the array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);
// join array back to a string
var nameSorted = nameArraySort,join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
}
// JS code borrowed from Wes bc we Did Not Understand
// output
document.writeln("Your name: ", sortUserName(), "<br>");
