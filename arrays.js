var chocolateBars = new Array('snickers','hundred grand', 'kitkat', 'skittles')
var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(modthis,addthis) {
  var newarray=[addthis,...modthis]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(modthis,addthis) {
    modthis.unshift(addthis)
    return modthis
  //can also code as:
  //modthis=[addthis,...modthis]
}

function addElementToEndOfArray(modthis,addthis) {
    var newarray = [...modthis,addthis]
    return newarray
}

function destructivelyAddElementToEndOfArray(modthis,addthis) {
  modthis.push(addthis)
  return modthis
}

function accessElementInArray(accessthis,index) {
return accessthis[index]
}

function destructivelyRemoveElementFromBeginningOfArray (modthis) {
  modthis.shift()
  return modthis
}

function removeElementFromBeginningOfArray(modthis) {
  var newarray = modthis.slice(1)
  return newarray
}

function destructivelyRemoveElementFromEndOfArray(modthis) {
  modthis.pop()
  return modthis
}

function removeElementFromEndOfArray(modthis) {
  var newarray = modthis.slice(0, modthis.length - 1)
  return newarray
}
