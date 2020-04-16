var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(arrayName,newElement){
newArray = [newElement, ...arrayName]
return newArray
}

function destructivelyAddElementToBeginningOfArray(arrayName, newElement){
arrayName.unshift(newElement)
return arrayName
}

function addElementToEndOfArray(arrayName,newElement){
newArray = [...arrayName, newElement]
return newArray
}

function destructivelyAddElementToEndOfArray(arrayName, newElement){
  arrayName.push(newElement)
  return arrayName
}
function accessElementInArray(arrayName,index){
  return arrayName[index]
}
function destructivelyRemoveElementFromBeginningOfArray(newArray){
newArray.shift()
return newArray
}

function removeElementFromBeginningOfArray(newArray){
  return newArray.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(newArray){
newArray.pop()
return newArray
}
function removeElementFromEndOfArray(arrayName){
  newArray = arrayName.slice(0, arrayName.length-1)
  return newArray
}
