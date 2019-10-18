function chocolateBars (){
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
return chocolateBars;
};

function addElementToBeginningOfArray (a, b) {
  return [b, ...a]
}
// var addElementToBeginningOfArray = ["Apple", "Banana"]
// ["Oranges", ...addElementToBeginningOfArray]

function destructivelyAddElementToBeginningOfArray (a, b) {
  a.unshift(b)
  return a
}
//var destructivelyAddElementFromBeginningOfArray = ["Apple", "Banana"]
//destructivelyAddElementFromBeginningOfArray.unshift("Oranges")


function addElementToEndOfArray (a, b){
  return [...a, b]
}



function destructivelyAddElementToEndOfArray (a, b) {
  a.push(b)
  return a
}

function accessElementInArray (a, b) {
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray (a, b) {
  a.shift(b)
  return a
}

function removeElementFromBeginningOfArray (a, b) {
  a = a.slice(1)
  return a
}


function destructivelyRemoveElementFromEndOfArray (a, b) {
  a.pop()
  return a
}

function removeElementFromEndOfArray (a, b) {
  return a.slice(0, a.length -1)
}
