var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
var newChocolateBars = new Array()

function addElementToBeginningOfArray(arrayCandy,stringCandy) {
  newChocolateBars = [stringCandy,...arrayCandy]
  return newChocolateBars
}

newChocolateBars = addElementToBeginningOfArray(chocolateBars,'kinderbar')

function destructivelyAddElementToBeginningOfArray(arrayCandy,stringCandy) {
  arrayCandy.unshift(stringCandy)
  return arrayCandy
}

chocolateBars = destructivelyAddElementToBeginningOfArray(chocolateBars,'almond joy')
//

function addElementToEndOfArray(arrayCandy,stringCandy) {
  newChocolateBars = [...arrayCandy,stringCandy]
  return newChocolateBars
}

newChocolateBars = addElementToEndOfArray(chocolateBars,'kinderbar')

function destructivelyAddElementToEndOfArray(arrayCandy,stringCandy) {
  arrayCandy.push(stringCandy)
  return arrayCandy
}

chocolateBars = destructivelyAddElementToEndOfArray(chocolateBars,'almond joy')
//

function accessElementInArray(arrayCandy,indexCandy) {
  return arrayCandy[indexCandy]
}

var indexChocolateBars = accessElementInArray(chocolateBars,3)
//
//
function removeElementFromBeginningOfArray(arrayCandy) {
  newChocolateBars = arrayCandy.slice(1)
  return newChocolateBars
}

newChocolateBars = removeElementFromBeginningOfArray(chocolateBars)
//
function destructivelyRemoveElementFromBeginningOfArray(arrayCandy) {
  arrayCandy.shift(arrayCandy)
  return arrayCandy
}

chocolateBars = destructivelyRemoveElementFromBeginningOfArray(chocolateBars)
//

function removeElementFromEndOfArray(arrayCandy) {
  newChocolateBars = arrayCandy.slice(0,arrayCandy.length - 1)
  return newChocolateBars
}

newChocolateBars = removeElementFromEndOfArray(chocolateBars)
//
function destructivelyRemoveElementFromEndOfArray(arrayCandy) {
  arrayCandy.pop(arrayCandy)
  return arrayCandy
}

chocolateBars = destructivelyRemoveElementFromEndOfArray(chocolateBars)
//

//function accessElementInArray(arrayCandy,indexCandy) {
  //return arrayCandy[indexCandy]
//}

//var indexChocolateBars = accessElementInArray(chocolateBars,3)
//
