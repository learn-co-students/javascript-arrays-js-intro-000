var chocolateBars = ["snickers", "mms", "peanut cups"]

function addElementToBeginningOfArray(chocolateBars_array, newBar){   //return the new Bar but keep the old bars in a seperate list as well
  return [newBar, ...chocolateBars_array]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars_array, newBar){  //return a new array that is permenant blend of everything
  chocolateBars_array.unshift(newBar)
  return chocolateBars_array
}

function addElementToEndOfArray(climbingRoutes_array, newRoute){
  return [...climbingRoutes_array, newRoute]
}

function destructivelyAddElementToEndOfArray(climbingRoutes_array, newRoute){
   climbingRoutes_array.push(newRoute)
   return climbingRoutes_array
}

function accessElementInArray(gear_array, index){
  return gear_array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}


function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)

}
