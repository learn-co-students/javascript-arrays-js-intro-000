var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
  var el = element
  var ar = array
  return [el, ...ar]

}

function destructivelyAddElementToBeginningOfArray(array, element){
  var ar = array
  var el = element
  ar.unshift(el)
  return ar
}

function addElementToEndOfArray(array, element){
  var ar = array
  var el = element
  var arr = [...ar,el]
    return arr
}

function destructivelyAddElementToEndOfArray(array, element){
  var ar = array
  var el = element
  ar.push(el)
  return ar
}

function accessElementInArray(array, index){
  var ar = array
  var i = index
  var el = ar[i]
  return el
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var arr = array
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(array){
  var arr = array.slice(1)
  return arr
}

function destructivelyRemoveElementFromEndOfArray(array){
  var arr = array
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(array){
  var arr = array
  var arrs = arr.slice(0, arr.length - 1)
  return arrs
}
