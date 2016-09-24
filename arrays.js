var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array,element) {
  array === [];
  array.unshift(element);
  return array;
  }

  function addElementToBeginningOfArray(array,element) {
    array === [];
    array = [element,...array];
     return array;
    }

  function destructivelyAddElementToBeginningOfArray(array, element){
    array === [];
    array.unshift(element);
    return array;
  }

  function destructivelyAddElementToBeginningOfArray(array, element){
    array === [];
    array.unshift(element);
    return array;
  }

  function addElementToEndOfArray(array,element){
    array= [...array,element];
    return array;
  }

  function addElementToEndOfArray(array,element){
     array= [...array,element];
     return array;
  }

  function destructivelyAddElementToEndOfArray(array,element) {
    array.push(element);
    return array;
  }
  function destructivelyAddElementToEndOfArray(array,element) {
    array.push(element);
    return array;
  }

  function accessElementInArray(a,b) {
    a === [];
    return a[b];
  }

function removeElementFromBeginningOfArray(a) {
  a === [];
  a.shift();
  return a
}
function removeElementFromEndOfArray(a){
  a === [];
  a = a.slice(0,a.length-1);
  return a;

}
