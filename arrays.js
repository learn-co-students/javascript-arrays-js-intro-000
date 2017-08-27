var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
	arr = array.slice(0)
	arr.unshift(element)
	return arr
}

function destructivelyAddElementToBeginningOfArray(array, element){
	array.unshift(element)
	return array
}

function addElementToEndOfArray(array, element) {
	arr = array.slice(0)
	arr.push(element)
	return arr
}

function destructivelyAddElementToEndOfArray(array, element){
	array.push(element)
	return array
}

function accessElementInArray(array, index){
	return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
	array.shift()
	return array
}

function removeElementFromBeginningOfArray(array){
	arr = array.slice(0)
	arr.shift()
	return arr
}

function destructivelyRemoveElementFromEndOfArray(array){
	array.pop()
	return array
}

function removeElementFromEndOfArray(array){
	arr = array.slice(0)
	arr.pop()
	return arr
}