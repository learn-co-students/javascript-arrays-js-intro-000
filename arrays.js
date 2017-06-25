var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 //Use push to add an element 
 function addElementToEndOfArray(array[], element) {
   var newArray[] = array.push(element);
   return newArray;
 }

 function destructivelyAddElementToEndOfArray(array[], element) {
   array.push(element);
   return array;
   
   
 }