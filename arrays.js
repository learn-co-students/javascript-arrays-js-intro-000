var addElementToBeginningOfArray = (array, element) => {
  var newArr = [...element]
  return newArr;
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  return array.unshift(element);
}
