var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array1 = [1];
var element1 = "foo";
function addElementToBeginningOfArray(array1, element1) {

const newArray = [element1, ...array1];
return newArray;
}

var array2 = [1];
var element2 = "foo";

function destructivelyAddElementToBeginningOfArray(array2, element2) {
  array2.unshift(element2);
  return array2;
}

function addElementToEndOfArray(array3, element3) {
array3 = [1];
element3 = "foo";
const newArray = [...array3, element3];
return newArray;
  
  
}
var array4 = [1];
var element4 = "foo"
function destructivelyAddElementToEndOfArray(array4, element4) {
  
  array4.push(element4);
  return array4;

}

function accessElementInArray(array5, index) {
  
  return array5[index];
  
}
var arrayRemove = [1,2,3];
function destructivelyRemoveElementFromBeginningOfArray(arrayRemove) {
  arrayRemove.shift();
   return arrayRemove;
  
}
var array7 = [1,2,3];
function removeElementFromBeginningOfArray(array7) {
  
  const newArray7 = array7.slice(1);
  return newArray7;
  
}

var array8 = [1,2,3];
function destructivelyRemoveElementFromEndOfArray(array8) {
  
array8.pop();
return array8;

}

var array9 = [1,2,3];

function removeElementFromEndOfArray(array9) {
  
  var newArray9 = array9.slice(0, array9.length - 1);
  return newArray9;
  

}

