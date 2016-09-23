var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arrInput, newElement){
  var arrOutput = [newElement, ...arrInput];
  return arrOutput;
};

function destructivelyAddElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array;
};

function addElementToEndOfArray(arrInput, newElement){
  var arrOutput = [...arrInput, newElement];
  return arrOutput;
};

function destructivelyAddElementToEndOfArray(array, newElement){
  array.push(newElement);
  return array;
}

function accessElementInArray(array, index){
  if (array && array.length && array.length > index) return array[index];
  return null;
}

function removeElementFromBeginningOfArray(arrInput){
  var arrOutput = arrInput.slice(1);
  return arrOutput;
}

function removeElementFromEndOfArray(arrInput){
  var arrOutput = arrInput.slice(0, arrInput.length - 1);
  return arrOutput;
}
