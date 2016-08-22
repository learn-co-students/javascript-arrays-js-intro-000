var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  newArray = [`${element}`,...array]
  return(newArray)
}

function addElementToEndOfArray(array, element){
  newArrayEnd = [...array,`${element}`]
  return(newArrayEnd)
}

//doesn't pass array-test.js
function destructivelyAddElementToBeginningOfArray(array, element){
  //console.log(array);
  array = [`${element}`, ...array];
  //console.log(array);
  return(array)

}

/*
//passes arrays-test.js
function destructivelyAddElementToBeginningOfArray(array, element){
  //console.log(array);
  array.unshift(`${element}`);
  //console.log(array);
  return(array)

}
*/
function destructivelyAddElementToEndOfArray(array, element){
  array.push(`${element}`)
  return(array)
}

function accessElementInArray(array, index) {
  var valueInArray = array[`${index}`];
  return(valueInArray)
}

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return(array)

}

function removeElementFromEndOfArray(array) {
  array.pop();
  return(array)


}
