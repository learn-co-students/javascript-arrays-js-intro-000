var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(chocolateBars, foo){
  return ["foo", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift("foo")
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, foo){
  return [...chocolateBars, "foo"]
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars.push("foo")
  return chocolateBars
}

function accessElementInArray(){
  var myArray = [1,2,3,4]
  return (myArray[2])
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(){
  var myArray = [1,2,3]
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(moreArray){
  moreArray.pop()
  return moreArray
}

function removeElementFromEndOfArray(array){
  var iceCreams = [1,2,3]
  return iceCreams.slice(0, iceCreams.length - 1)
}
