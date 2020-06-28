var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arrayInput,elementInput){
  var arrayInternal = [elementInput, ...arrayInput];
  return arrayInternal;
}

function destructivelyAddElementToBeginningOfArray(arrayInput,elementInput){
  arrayInput.unshift(elementInput);
  // spent an hour trying to find the problem.
  // problem was these function names are too damn long and confusing.
  return arrayInput;
}

function addElementToEndOfArray(arrayInput,elementInput){
  var arrayInternal = [...arrayInput, elementInput];
  return arrayInternal;
}

function destructivelyAddElementToEndOfArray(arrayInput,elementInput){
  arrayInput.push(elementInput);
  return arrayInput;
}

function accessElementInArray(arrayInput,index){
  return arrayInput[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayInput){
  arrayInput.shift();
  return arrayInput;
}

function removeElementFromBeginningOfArray(arrayInput){
  return arrayInput.slice(1);
    // slice(#): how many to remove from front, starts at 1
    // slice(-#): how many to retrieve from back
    // slice(#,#): retrieve from first to second number
}

function destructivelyRemoveElementFromEndOfArray(arrayInput){
  arrayInput.pop();
  return arrayInput;
}

function removeElementFromEndOfArray(arrayInput){
  return arrayInput.slice(0, arrayInput.length - 1);
}
