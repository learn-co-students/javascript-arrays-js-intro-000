var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

var addElementToBeginningOfArray = (array,element) => {
  return [element, ...array];
};

/*element addition methods */
var destructivelyAddElementToBeginningOfArray = (array,element) => {
   array.unshift(element);
   return array;
};

var addElementToEndOfArray = (array,element) => {
  return [...array, element];
};

var destructivelyAddElementToEndOfArray = (array,element) => {
  array.push(element);
  return array;
};

/*array access methods*/
var accessElementInArray = (array,index) => {
  return array[index];
}

/* Element removal methods */

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift();
  return array;
}

var removeElementFromBeginningOfArray = (array) => {
  return array.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = (array) => {
  array.pop();
  return array;
}

var removeElementFromEndOfArray = (array) => {
  return array.slice(0, array.length - 1);
}
