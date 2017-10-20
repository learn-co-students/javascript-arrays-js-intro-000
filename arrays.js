var ingredient1 = 'bread';
var ingredient1 = 'mild cheese';
var ingredient1 = 'sharp cheese';
var ingredient1 = 'butter';
var ingredient1 = 'tomato';
var ingredient1 = 'garlic';

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(rawry,element)
{
  var newRawry = [element, ...rawry];
  return newRawry
}

function destructivelyAddElementToBeginningOfArray(rawry,element){
  rawry.unshift(element)
  return rawry
}

function destructivelyAddElementToEndOfArray(rawry,element)
{
  rawry.push(element);
  return rawry
}

function addElementToEndOfArray(rawry,element)
{
  var newRawry = [...rawry, element];
  return newRawry
}


function accessElementInArray(rawry,index){

  return rawry[index]
}


function destructivelyRemoveElementFromBeginningOfArray(rawry)
{
   rawry.shift()
   return rawry
}

function removeElementFromBeginningOfArray(rawry){
  newRawry = rawry.slice(1)
  return newRawry
}

function destructivelyRemoveElementFromEndOfArray(rawry){
  rawry.pop()
  return rawry
}

function removeElementFromEndOfArray(rawry){
  var n = rawry.length;
  newRawry = rawry.slice(0, n-1)
  return newRawry
}
