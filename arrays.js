var  chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


var addElementToBeginningOfArray = function(array, element){

  FirstArray = [element, ...array]
  return FirstArray

}

var destructivelyAddElementToBeginningOfArray = function(array, element){

  array.unshift(element)
  return array

}

var addElementToEndOfArray = function(array, element) {
  SecondArray = [...array, element]
  return SecondArray
}

var destructivelyAddElementToEndOfArray = function (array, element) {

  array.push(element)
  return array

}

var accessElementInArray = function (array, index){

return array[index];

 }

 var destructivelyRemoveElementFromBeginningOfArray = function (array){
   array.shift()
   return array
 }


 var removeElementFromBeginningOfArray = function (array){

   ThirdArray = array.slice(1)
   return ThirdArray
 }


 var destructivelyRemoveElementFromEndOfArray = function (array){

   array.pop()
   return array
 }

 var removeElementFromEndOfArray = function (array){

   FourthArray = array.slice(0,array.length-1)
   return FourthArray
 }
