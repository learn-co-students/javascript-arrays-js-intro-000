var chocolateBars = ['snickers',
'hundred grand',
'kitkat',
'skittles']

var addElementToBeginningOfArray = (theArray, theElement) => {
  return [theElement,...theArray];
}

var destructivelyAddElementToBeginningOfArray = (theArray, theElement) =>{
  theArray.unshift(theElement);
  return theArray
}

var addElementToEndOfArray = (theArray, theElement) => {
  return [...theArray,theElement]
}

var destructivelyAddElementToEndOfArray = (theArray, theElement) => {
  theArray.push(theElement);
  return theArray
}

var accessElementInArray = (theArray, index) => {
  return theArray[index]
}

var destructivelyRemoveElementFromBeginningOfArray = (theArray) => {
  theArray.shift();
  return theArray
}

var removeElementFromBeginningOfArray = (theArray) => {
  return theArray.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = (theArray) => {
  theArray.pop();
  return theArray
}

var removeElementFromEndOfArray = (theArray) => {
  newArray = theArray.slice(0, theArray.length - 1);
  return newArray
}
