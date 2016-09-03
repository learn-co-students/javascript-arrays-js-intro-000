var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function (arr, el) {
  return [el, ...arr]
}

var destructivelyAddElementToBeginningOfArray = (arr, el) =>{
   arr.unshift(el);
   return arr;
}

var addElementToEndOfArray = (arr,el) =>{
  return [...arr, el];
}

var destructivelyAddElementToEndOfArray = (arr, el) => {
  arr.push(el);
  return arr;
}

var accessElementInArray = (arr, index) =>{
  return arr[index];
}

var removeElementFromEndOfArray = (arr) =>{
  arr.pop()
  return arr;
}

var removeElementFromBeginningOfArray = (arr) =>{
  arr.shift();
  return arr;
}
