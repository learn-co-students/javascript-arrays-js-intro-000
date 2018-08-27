var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, name) {
chocolateBars = ["foo", ...chocolateBars]
return chocolateBars
}
function destructivelyAddElementToBeginningOfArray (chocolateBars, name) {
  chocolateBars.unshift("foo")
return chocolateBars
}

function addElementToEndOfArray (chocolateBars, name){
  chocolateBars = [...chocolateBars,"foo"]
  return chocolateBars
}
function destructivelyAddElementToEndOfArray (chocolateBars,name){
  chocolateBars.push("foo");
  return chocolateBars
}

var array = [1,2,3]
function accessElementInArray (array,index){
  return array [2]
}
var array = [1,2,3];
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array
}
var array = [1,2,3];
function removeElementFromBeginningOfArray (array){
  array = array.slice(1)
  return array
}
var array =[1,2,3];
function destructivelyRemoveElementFromEndOfArray (array){
  array.pop();
  return array
}

var array =[1,2,3];
function removeElementFromEndOfArray (array) {
  array=array.slice(0, array.length-1)
  return array
}
