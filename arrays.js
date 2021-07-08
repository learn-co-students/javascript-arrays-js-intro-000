var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
addElementToBeginningOfArray(chocolateBars, "dove");
destructivelyAddElementToBeginningOfArray(chocolateBars, "hersheys");
addElementToEndOfArray(chocolateBars, "crunch");
destructivelyAddElementToEndOfArray(chocolateBars, "butterfingers");
accessElementInArray(chocolateBars, 2);
destructivelyRemoveElementFromBeginningOfArray(chocolateBars);
removeElementFromBeginningOfArray(chocolateBars);
removeElementFromEndOfArray(chocolateBars);
removeElementFromEndOfArray(chocolateBars);


function addElementToBeginningOfArray(candyArray, newCandy){
  var newArray = candyArray;
  newArray = [newCandy, ...newArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(candyArray, newCandy){
  var newArray = candyArray;
  newArray.unshift(newCandy);
  return newArray;
}

function addElementToEndOfArray(candyArray, newCandy){
  var newArray = candyArray;
  newArray = [...newArray, newCandy];
  return newArray;
}

function destructivelyAddElementToEndOfArray(candyArray, newCandy){
  var newArray = candyArray;
  newArray.push(newCandy);
  return newArray;
}

function accessElementInArray(candyArray, candyIndex){
  var newArray = candyArray;
  return newArray[candyIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(candyArray){
  var newArray = candyArray;
  newArray.shift();
  return newArray;
}

function removeElementFromBeginningOfArray(candyArray){
  var newArray = candyArray;
  newArray = newArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(candyArray){
  var newArray = candyArray;
  newArray.pop();
  return newArray;
}

function removeElementFromEndOfArray(candyArray){
  var newArray = candyArray;
  newArray = newArray.slice(0, newArray.length - 1);
  return newArray;
}
