var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];




var addElementToBeginningOfArray = (myArray, myElement) => {
  newArray = [myElement, ...myArray]
  return newArray
}


var destructivelyAddElementToBeginningOfArray = (myArray, myElement) => {
  myArray.unshift(myElement)
  return myArray
}


var addElementToEndOfArray = (myArray, myElement) => {
  newArray = [...myArray, myElement]
  return newArray
}


var destructivelyAddElementToEndOfArray = (myArray, myElement) => {
  myArray.push(myElement)
  return myArray
}


var accessElementInArray = (myArray, i) => {
  return myArray[i]
}


var destructivelyRemoveElementFromBeginningOfArray = (myArray) => {
  myArray.shift()
  return myArray
}

var removeElementFromBeginningOfArray = (myArray) => {
  newArray = myArray.slice(1)
  return newArray
}


var destructivelyRemoveElementFromEndOfArray = (myArray) => {
  myArray.pop()
  return myArray
}


var removeElementFromEndOfArray = (myArray) => {
  newArray = myArray.slice(0, myArray.length - 1)
  return newArray
}
