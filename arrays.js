var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var destructivelyAddElementToBeginningOfArray = (ar,el) => {
  ar.unshift(el)
  return ar
}

var addElementToBeginningOfArray = (ar,el) => {
  return [el, ...ar]
}

var destructivelyAddElementToEndOfArray = (arr, el) =>  {
  arr.push(el)
  return arr
}

var addElementToEndOfArray = (arr, el) => {
  return[...arr, el]
}

var accessElementInArray = (arr, el) => {
  return arr[el]
}

var removeElementFromBeginningOfArray = (arr,el) =>{
  arr.shift(el)
  return arr
}

var removeElementFromEndOfArray  = arr => {
  return arr.slice(0, arr.length - 1)
}
