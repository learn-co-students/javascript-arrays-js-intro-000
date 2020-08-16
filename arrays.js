
// var evenNumbers = new Array();
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
console.log(chocolateBars)

function addElementToBeginningOfArray(arr,s){

  arr = [s, ...arr];
  return arr;
}
addElementToBeginningOfArray();
 function destructivelyAddElementToBeginningOfArray(ar, b){
   
  ar.unshift(b)

   return ar;
 }
 destructivelyAddElementToBeginningOfArray();
 
 function addElementToEndOfArray(arr, a){
   arr = [...arr, a]
   return arr;
 }
 addElementToEndOfArray();
 function destructivelyAddElementToEndOfArray(array, b){
   array.push(b);
   return array;
 }
 destructivelyAddElementToEndOfArray();
 function accessElementInArray(array, index){
   return array[index];
   
 }
 function destructivelyRemoveElementFromBeginningOfArray(arr){
   arr.shift(0);
   return arr;
 }
 
 function removeElementFromBeginningOfArray(array){
   array=  array.slice(1);
   return array;
 }
 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop();
   return array;
 }
 function removeElementFromEndOfArray(array){
   array = array.slice(0, array.length - 1)
   return array;
   
 }