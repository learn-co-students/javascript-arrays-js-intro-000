function addElementToBeginningOfArray (array, element) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    answer.push(array[i]);
  };
  answer.unshift(element);
  return answer;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

function addElementToEndOfArray (array, element) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    answer.push(array[i]);
  };
  answer.push(element);
  return answer;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
};

function accessElementInArray(array, index) {
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.slice(1);
}

function removeElementFromBeginningOfArray(array) {
  var answer = [];
  
}
