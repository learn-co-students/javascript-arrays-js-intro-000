var chocolateBars = [
  `snickers`, `hundred grand`, `kitkat`, `skittles`
]



function  addElementToBeginningOfArray(startingArray,addElement) {
  chocolateBars = [startingArray, ...addElement];

  return chocolateBars;
}
addElementToBeginningOfArray(chocolateBars,'foo');

function destructivelyAddElementToBeginningOfArray(startingArray,addElement){
  chocolateBars = startingArray.unshift(addElement);
  return chocolateBars;
}
destructivelyAddElementToBeginningOfArray(chocolateBars,'foo');
