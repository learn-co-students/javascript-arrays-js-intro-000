var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(a, e){
  return [e, ... a]
}
function destructivelyAddElementToBeginningOfArray(a, e){
    return a.unshift(e)
}
function addElementToEndOfArray(a, e){
  return [... a, e]
}
function destructivelyAddElementToEndOfArray(a, e){
  return a.push(e)
}
function accessElementInArray(a, i){
  return a[i];
}
function destructivelyRemoveElementFromBeginningOfArray(a){
  return a.shift()
}
