var chocolateBars =["snickers","hundred grand","kitkat","skittle"]

function addElementToBeginningOfArray(myArray,addMe){
return  [addMe,...myArray]
  //return myArray
}

function destructivelyAddElementToBeginningOfArray(myArray,addMe){
//  myArray = [addMe,...myArray]
  myArray.unshift(addMe)
  return myArray
}

function addElementToEndOfArray(myArray,addMe){
  return [...myArray,addMe]
  //return myArray

}
function destructivelyAddElementToEndOfArray(myArray,addMe){
  myArray.push(addMe)
  return myArray
}

function accessElementInArray(myArray,index){
  return myArray[index]
}
function destructivelyRemoveElementFromBeginningOfArray(myArray){
 myArray.shift()
 return myArray
}
function removeElementFromBeginningOfArray(myArray){
  //myArray.slice(0,1)
  var length = myArray.length
  return myArray.slice(1,length)
}
function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop()
  return myArray
}


function removeElementFromEndOfArray(myArray){
  var length = myArray.length
return myArray.slice(0,length-1)

}
