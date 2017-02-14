var chocolateBars = ["snickers","hundred grand",
"kitkat", "skittles"];

function addElementToBeginningOfArray(){
  var chocolate = ['foo']
  [1,...chocolate]
}

function destructivelyAddElementToBeginningOfArray(){
  var chocolate = ['foo'];
  chocolate.unshift(1)
}

function addElementToEndOfArray(){
var chocolate =['foo'];
[...chocolate,1]
}
function destructivelyAddElementToEndOfArray(){
var chocolate = ['foo']
chocolate.push(1)
}

function accessElementInArray(){
var accessElementInArray = [1,2,3];
accessElementInArray[2];
}

function removeElementFromBeginningOfArray(){
var remove = [1,2,3];
remove.slice(0);
}

function destructivelyRemoveElementFromBeginningOfArray() {
var destructive = [1,2,3]
destructive.unshift();
}

function destructivelyRemoveElementToEndOfArray(){
var destructive = [1,2,3];
destructive.pop();
}

function removeElementFromEndOfArray(){
var destructive = [1,2,3]
destructive.slice(0,destructive.length - 1);
}
