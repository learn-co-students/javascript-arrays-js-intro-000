var chocolateBars = ['snickers', 'hundred grand', 'kitKat', 'skittles']

 function addElementToBeginningOfArray(array1, element1) {
   return [element1, ...array1]
 }

 function destructivelyAddElementToBeginningOfArray(array1, element1) {
   array1.unshift(element1)
   return array1
 }

 function addElementToEndOfArray(array1, element1) {
   return [...array1, element1]
 }

 function destructivelyAddElementToEndOfArray(array1, element1) {
   array1.push(element1)
   return array1
 }

 function accessElementInArray(array, index) {
   return array[index]
 }

 function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift()
   return array
 }

 function removeElementFromBeginningOfArray(array) {
   array2 = array.slice(1)
   return array2
 }

 function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop
   return array
 }

 function removeElementFromEndOfArray(array) {
   array2 = array.slice(0, array.length - 1)
   return array2
 }
