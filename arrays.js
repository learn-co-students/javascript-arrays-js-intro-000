var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (myArray,addition) {
return[addition,...myArray];
//return myArray
}

function destructivelyAddElementToBeginningOfArray (myArray,addition) {
myArray.unshift (addition)
return myArray
}

function addElementToEndOfArray (myArray,addition) {
return [...myArray,addition]
//return myArray
}

function destructivelyAddElementToEndOfArray (myArray,addition) {
myArray.push (addition);
return myArray
}

function accessElementInArray (myArray,position) {
return myArray[position]
}

function destructivelyRemoveElementFromBeginningOfArray (myArray) {
myArray.shift()
return myArray
}

function removeElementFromBeginningOfArray (myArray) {
return myArray.slice(1);
return myArray
}

function destructivelyRemoveElementFromEndOfArray (myArray) {
myArray.pop()
return myArray
}

function removeElementFromEndOfArray (myArray) {
return myArray.slice(0,myArray.length-1)
}
