var chocolateBars=["snickers", "hundred grand", "kitkat", "and skittles"];

function addElementToBeginningOfArray(chocolateBars, foo){
return ["foo", ...chocolateBars]
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
 chocolateBars.unshift(foo)
 return chocolateBars
}

function addElementToEndOfArray(chocolateBars, foo){
  return [...chocolateBars, "foo"]
}
function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars = chocolateBars.push("foo")
  return chocolateBars
}
function accessElementInArray(chocolateBars, foo){
  console.log(chocolateBars[1]);
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars = chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
chocolateBars = chocolateBars.pop()
return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
   return chocolateBars
}
