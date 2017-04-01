
var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"];

  //The string to be added
var addString = "m&m";
var index = 3;


function addElementToBeginningOfArray(chocolateBars, addString){
  var newArray = [addString, ...chocolateBars];

  
  return newArray;
  
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addString){
  //unshift will change the original array
  chocolateBars.unshift(addString);

  return chocolateBars;
  
}

function addElementToEndOfArray(chocolateBars, addString){

  var newArray = [...chocolateBars,addString];

  
  return newArray;
  
}

function destructivelyAddElementToEndOfArray(chocolateBars, addString) {

  //unshift will change the original array
  chocolateBars.push(addString);
  
  return chocolateBars;

  
}

function accessElementInArray(chocolateBars, index){

  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  //destructive removal of 1st element
  chocolateBars.shift();

  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  //non destructive removal from beginning
  //in non destructive, we have to save the results
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars;
  
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  //destructive removal of last element
  chocolateBars.pop();

  return chocolateBars;
    
}

function removeElementFromEndOfArray(chocolateBars){

  //find the length of the array
//  var len = chocolateBars.length;
  //in non destructive we save the results
  chocolateBars = chocolateBars.slice(0, chocolateBars.length -1);

  return chocolateBars; 
  
}