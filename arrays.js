var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(Array1, elem1) {
  return [elem1, ...Array1];
}

function destructivelyAddElementToBeginningOfArray(Array2, elem2) {
  Array2.unshift(elem2)
  return Array2;
}

function addElementToEndOfArray(Array3, elem3) {
  return [...Array3, elem3];
}

function destructivelyAddElementToEndOfArray(Array4, elem4) {
  Array4.push(elem4)
  return Array4;
}

function accessElementInArray(Array5, index1) {
  return Array5[index1];
}

function destructivelyRemoveElementFromBeginningOfArray(Arr6) {
  Arr6.shift()
  return Arr6;
}

function removeElementFromBeginningOfArray(Arr7) {
  Arr7 = Arr7.slice(1)
  return Arr7;
}

function destructivelyRemoveElementFromEndOfArray(Arr8) {
  Arr8.pop()
  return Arr8;
}

function removeElementFromEndOfArray(Arr9) {
  return Arr9.slice(0, Arr9.length - 1);
  return Arr9;
}
