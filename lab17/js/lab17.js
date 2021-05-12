/**
 * Author:    Julia Bozzo
 *
 * Created:   04.11.2021
 *
 * Public domain
 */

 // add event handler for red button
$("button.challenge-button").click(function(){
  // remove possible existing class
  $("#new").removeClass("result-button");
  // now toggle red class
  $("#new").toggleClass("challenge-button")
});
// add event handler for green button
$("button.result-button").click(function(){
  // remove possible existing class
  $("#new").removeClass("challenge-button");
  // now toggle red class
  $("#new").toggleClass("result-button");
});
