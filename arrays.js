var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var arrays = []
     arrays = [element, [array], ...arrays]
      return arrays
}
