//basic array
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// Add Element to Beginning of Arrays
function addElementToBeginningOfArray(array, element){
  array = [element, ...array];
  return array;
}


addElementToBeginningOfArray(chocolateBars,'foo');

//ADD TO BEGINNING - DESTRUCTIVE
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

destructivelyAddElementToBeginningOfArray(chocolateBars,'foo');

//ADD TO END
function addElementToEndOfArray(array, element){
  array = [...array, element];
  return array;
}

//ADD TO END - DESTRUCTIVE
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

//ACCESS
function accessElementInArray(array, index){
  return array[index];
}


//REMOVE FROM BEGINNING - DESTRUCTIVE
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}


//REMOVE FROM BEGINNING
function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}

//REMOVE FROM END - DESTRUCTIVE
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}


//REMOVE FROM END
function removeElementFromEndOfArray(array){
  array = array.slice(0,-1);
  return array;
}
