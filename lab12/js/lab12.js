/**
 * Author:    Julia Bozzo
 * Created:   03.14.2021
 *
 * Public domain
 */

 // states function
 function FizzBuzzBoom (maxNums, factorObj){
 // iterate numbers
   for (var num=0; num<maxNums; num++){
 // reset output string
     var outputStr = "";
 // iterate factors
     for (var factor in factorObj){
 // check numbers
       if (num % factor == 0) {
         outputStr += factorObj[factor];
     }
   }
 // put words in output
   if (outputStr){
     outputStr = " - " + outputStr + "!";
   }
 }
 function reportError(str){
   outputEl.innerHTML = "<div class='error'>" + str + "</div>";
 }

 document.getElementById("submit").addEventlistener("click", function)
 var max = document.getElementById("max").value;
 console.log("max: ", max);
  if (! max){
    reportError ("You must provide a maximum");
  }
}
