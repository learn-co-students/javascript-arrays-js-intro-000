var chocolateBars = ["snickers" , "hundred grand" , "kitkat" , "skittles"];

var stupidArray = [1];

function addElementToBeginningOfArray(stupidArray) {
  return ["foo", ...stupidArray]
}

const secondArray = [1];
function destructivelyAddElementToBeginningOfArray (secondArray) {
  secondArray.unshift('foo')
    return secondArray
  }

  function addElementToEndOfArray(stupidArray) {
    return [...stupidArray, "foo"]
  }

  const thirdArray = [1];
  function destructivelyAddElementToEndOfArray (thirdArray) {
    thirdArray.push('foo')
      return thirdArray
    }

var fourthArray =[1,2,3];

function accessElementInArray (fourthArray) {
  return fourthArray[2];
}

function destructivelyRemoveElementFromBeginningOfArray(fourthArray) {
  fourthArray.shift(1)
    return fourthArray
}

var fifthArray = [1,2,3];

function removeElementFromBeginningOfArray (fifthArray) {
  return fifthArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (fifthArray) {
  fifthArray.pop()
    return fifthArray
}

var sixthArray = [1,2,3];

function removeElementFromEndOfArray (sixthArray) {
  return sixthArray.slice(0, sixthArray.length - 1)
}
