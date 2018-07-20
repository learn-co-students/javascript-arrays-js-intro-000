var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
addElementToBeginningOfArray(chocolateBars, 'Oh Henry!');

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array;
}
destructivelyAddElementToBeginningOfArray(chocolateBars, 'Mars');

function addElementToEndOfArray(array, element){
return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
};
destructivelyAddElementToEndOfArray(chocolateBars, 'crunchie');

function accessElementInArray(array, index) {
  return array[index];
}
accessElementInArray(chocolateBars, 2);

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array){
    return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1)

}
