var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arraytomod, element) {
   return [element, ...arraytomod]
}

function destructivelyAddElementToBeginningOfArray(arraytomod, element) {
   array = new Array();
   array = arraytomod;
   array.unshift(element);
   return array;
 }

 function addElementToEndOfArray(arraytomod, element) {
   return [...arraytomod, element]
 }

 function destructivelyAddElementToEndOfArray(arraytomod, element){
   array = new Array();
   array = arraytomod;
   array.push(element);
   return array;
 }

 function accessElementInArray(arraytomod, index){
   array = new Array();
   array = arraytomod;
   var item = array[index];
   return item;
 }

 function removeElementFromBeginningOfArray(arraytomod) {
   array = new Array();
   array = arraytomod;
   array.shift();
   return array;
 }

 function removeElementFromEndOfArray(arraytomod) {
   array = new Array();
   array = arraytomod;
   array.pop();
   return array;
 }