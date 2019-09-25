var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, chocolate){
  return [chocolate, ...chocolateBars];
};

function destructivelyAddElementToBeginningOfArray (chocolateBars, chocolate){
  chocolateBars.unshift (chocolate);
  return chocolateBars;
};

function addElementToEndOfArray(chocolateBars, chocolate){
  return [...chocolateBars, chocolate];
}

function destructivelyAddElementToEndOfArray (chocolateBars, chocolate){
  chocolateBars.push(chocolate);
  return chocolateBars;
};

function accessElementInArray (chocolateBars, index){
  return chocolateBars [index];
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars, chocolate){
  chocolateBars.shift (chocolate);
  return chocolateBars;
};

function removeElementFromBeginningOfArray (chocolateBars, chocolate){
  return chocolateBars.slice(1);
};

function destructivelyRemoveElementFromEndOfArray (chocolateBars, chocolate){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray (chocolateBars, chocolate){
  return chocolateBars.slice (0, chocolateBars.length - 1);
};
