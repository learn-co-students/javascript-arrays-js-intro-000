chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray = (array, element) => array = [element, ...array];

destructivelyAddElementToBeginningOfArray = (array, element) => {array.unshift(element); return array;};

addElementToEndOfArray = (array, element) => array = [...array, element];

destructivelyAddElementToEndOfArray = (array, element) => {array.push(element); return array;};

accessElementInArray = (array, index) => array[index];

destructivelyRemoveElementFromBeginningOfArray = (array, element) => {array.shift(element); return array;};

removeElementFromBeginningOfArray = (array, element) => array = array.slice(1);

destructivelyRemoveElementFromEndOfArray = (array, element) => {array.pop(element); return array;};

removeElementFromEndOfArray = (array, element) => array = array.slice(0,array.length-1);
