var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]
function addElementToBeginningOfArray(ArrayParm,ItemValue) {
  return([ItemValue,...ArrayParm])
}

function destructivelyAddElementToBeginningOfArray(ArrayParm,ItemValue) {
  ArrayParm.unshift(ItemValue);
  return(ArrayParm);
  )
}

function addElementToEndOfArray(ArrayParm,ItemValue){
return([...ArrayParm,ItemValue])}

function destructivelyAddElementToEndOfArray(ArrayParm,ItemValue){
  ArrayParm.push(ItemValue);
  return(ArrayParm);
}

function accessElementInArray(ArrayParm,ArrayIndex) {
return(ArrayParm[ArrayIndex]);
}

function destructivelyRemoveElementFromBeginningOfArray(ArrayParm){
  ArrayParm.shift(ArrayParm);
  return(ArrayParm);
}

function removeElementFromBeginningOfArray(ArrayParm){
  return(ArrayParm.slice(1));
}

function removeElementFromEndOfArray(ArrayParm){
  return(ArrayParm.slice(0,ArrayParm.length-1));
}