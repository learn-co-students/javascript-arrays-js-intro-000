var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(list, elementToAdd) {
  return [elementToAdd, ...list];
}

function destructivelyAddElementToBeginningOfArray(list, elementToAdd) {
  list.unshift(elementToAdd);
  return list;
}

function addElementToEndOfArray(list, elementToAdd) {
  return [...list, elementToAdd];
}

function destructivelyAddElementToEndOfArray(list, elementToAdd) {
  list.push(elementToAdd);
  return list;
}

function accessElementInArray(list, index) {
  return list[index];
}

function destructivelyRemoveElementFromBeginningOfArray(list) {
  return list.shift();
}

function removeElementFromBeginningOfArray(list) {
  return list.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(list) {
  return list.pop();
}

function removeElementFromEndOfArray(list) {
  return list.slice(0, list.length - 1);
}
